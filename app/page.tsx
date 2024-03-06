'use client'
//import Image from "next/image";
import { resume, Tenure, Project, Buzzword, allBuzzwordNames } from './data'
import _, { filter } from 'lodash'
import { useState } from "react"


function Filter({ filters, setFilters }: { filters: string[], setFilters: (t: string[]) => void }) {

  const [filterText, setFilterText] = useState('')
  const [suggestions, setSuggestions] = useState([] as string[])
  const [focused, setFocused] = useState(false)

  return (
    <div className="top-5 right-10 fixed flex-col max-w-96">
      <input
        type="text"
        placeholder="Filter by buzzwords"
        className=" text-black w-full"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value)
          setSuggestions(getSuggestions(e.target.value))
        }}
        onFocus={() => setFocused(true)}
      />

      <div className="flex flex-row flex-wrap">
        {filters.map(filter => (
          <div key={filter} className='bg-red-300 text-white rounded-lg ps-2 m-0.5'>
            {filter}
            <button onClick={() => setFilters(filters.filter(f => f !== filter))} className="font-medium text-red-500 text-xs mx-1 px-1 rounded-full bg-white font-sans">
              X
            </button>
          </div>
        ))}
      </div>

      {suggestions.length > 0 && filterText.length > 0 && focused && (
        <div className="fixed top-14 right-10 bg-white border border-gray-300 rounded shadow-lg p-2">
          {suggestions.map(suggestion => (
            <div
              key={suggestion}
              className="hover:bg-gray-100 p-1 text-red-500"
              onClickCapture={() => {
                setFilters([...filters, suggestion])
                setFilterText('')
                setFocused(false)
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  )

  function getSuggestions(filterText: string) {
    return allBuzzwordNames.filter(suggestion =>
      suggestion.toLowerCase().startsWith(filterText.toLowerCase()) && !filters.includes(suggestion)
    )
  }
}





function Buzzwords({ buzzwords, filters }: { buzzwords: Buzzword[], filters: string[] }) {

  function matches(buzzword: Buzzword, filters: string[]) {

    function nameMatches(name: string, filters: string[]) {
      for(const filter of filters) {
        if (name.toLowerCase() === filter.toLowerCase()) {
          return true
        }
      }
      return false
    }

    if (!buzzword || !filters || !filters.length) {
      return false
    }

    if (nameMatches(buzzword.name, filters)) {
      return true
    } else {
      for (const b of buzzword.related) {
        const match = matches(b, filters)
        if (match) {
          return true
        }
      }
    }

  }

  return <div className="flex flex-row flex-wrap  ">
    {buzzwords.map((b, i) => <div key={b.name} className={"basis-1/8 flex-initial p-2 m-0.5 rounded " + (matches(b, filters) ? " bg-red-300" : " bg-slate-500")} >{b.name}</div>)}
  </div>
}

function ProjectDisplay({ project, filters }: { project: Project, filters: string[] }) {
  return <div key={project.name}>
    <div><span>{project.name}</span></div>
    <Buzzwords buzzwords={project.buzzwords} filters={filters} />
  </div>
}

function Tenure({ tenure, showDates = true, filters }: { tenure: Tenure, showDates?: boolean, filters: string[] }) {
  if (tenure.projects && tenure.projects.length) {
    return tenure.projects.map((p) => <ProjectDisplay project={p} filters={filters} key={p.name} />) //TODO: investigate if key prop is used correctly?
  }
  return (<div key={tenure.title + tenure.startDate + tenure.endDate}>
    <div>{showDates && <span>{tenure.startDate} - {tenure.endDate} </span>}{tenure.title}{tenure.team && <span> - {tenure.team.name}</span>}</div>
    {tenure.buzzwords && <Buzzwords buzzwords={tenure.buzzwords} filters={filters} />}
  </div>)
}

interface OrgStent {
  orgName: string
  tenures: Tenure[]
}


function OrgStentDisplay({ orgStent, filters }: { orgStent: OrgStent, filters: string[] }) {

  const from = _.minBy(orgStent.tenures, 'startDate')
  const to = _.maxBy(orgStent.tenures, 'endDate')

  return <div className="py-2" key={orgStent.orgName + from + to}>
    <h3 className="text-xl">{orgStent.orgName}</h3>
    <h2>{from && from.startDate} - {to && to.endDate}</h2>

    <ExperienceList tenures={orgStent.tenures} showDates={false} filters={filters} />
  </div>

}

function ExperienceListByOrg({ tenures, filters }: { tenures: Tenure[], filters: string[] }) {
  const tenuresSorted = _.orderBy(tenures, ['startDate'], ['desc'])

  let currentOrgName = null
  const orgs = []
  for (const tenure of tenuresSorted) {
    const endOrgs = tenure.organizations.filter(o => o.purpose !== 'Staffing Company')
    if (endOrgs.length === 1) {
      if (currentOrgName !== endOrgs[0].name) {
        currentOrgName = endOrgs[0].name
        orgs.push({ orgName: currentOrgName, tenures: [tenure] })
      } else {
        orgs[orgs.length - 1].tenures.push(tenure)
      }

    } else {
      console.error("not exactly one end org for tenure. how do we display that?")
    }

  }


  return orgs.map((o) => <OrgStentDisplay orgStent={o} filters={filters} key={o.orgName} />)  //TODO: investigate if key prop is used correctly? orgNames could be duplicated so maybe need to add more details or random fixed ID
}


function ExperienceList({ tenures, showDates = true, filters }: { tenures: Tenure[], showDates?: boolean, filters: string[] }) {
  const tenuresSorted = _.orderBy(tenures, ['startDate'], ['desc'])

  return <div>{tenuresSorted.map((t) => <Tenure tenure={t} showDates={showDates} filters={filters} key={t.title + t.startDate + t.endDate} />)}</div> //TODO investigate if key prop is used correctly. might need to remove it from divs
}


function Education() {
  return (<>
    <h2 className="text-2xl pb-3">Education</h2>
    1999-2003 University of Missouri - Rolla
    <ul className="list-disc list-inside">
      <li>Bachelor of Science, Computer Science</li>
      <li>Bachelor of Science, Applied Mathematics</li>
      <li>Graduated summa cum laude</li>
    </ul>
  </>)
}


function FilterableResume() {
  const [filters, setFilters] = useState([] as string[]) //TODO: use a set instead of an array
  
  return <div>
    <Filter filters={filters} setFilters={setFilters} />
    <div>
      <h2 className="text-2xl pb-3">Experience</h2>
      <ExperienceListByOrg tenures={resume.tenures} filters={filters} />
    </div>
    <div>
      <Education />
    </div>

  </div>
}
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="space-y-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        {process.env.NODE_ENV !== 'production' && <span className="text-red-500">{process.env.NODE_ENV}</span>}
        <FilterableResume />

      </div>

    </main>
  );
}
