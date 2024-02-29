'use client'
//import Image from "next/image";
import { resume, Tenure, Project, Buzzword } from './data'
import _, { filter } from 'lodash'
import { useState } from "react"

function Filter({ filterText, setFilterText }: { filterText:string, setFilterText: (t:string)=>void }) {
  return <input type="text" placeholder="web OR cloud OR..." className="top-5 right-10 fixed text-black" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
}

function Buzzwords({ buzzwords, filterText }: { buzzwords: Buzzword[], filterText: string }) {


  function matches(buzzword: Buzzword, filterText: string) {

    function nameMatches(name: string, filterText: string){
      return filterText && name && filterText.toLowerCase().includes(name.toLowerCase())
    }

    if(buzzword && filterText){

      if(nameMatches(buzzword.name, filterText)){
        return true
      } else{
        for(const b of buzzword.related){
          const match = matches(b, filterText)
          if(match){
            return true
          }
        }
      }
    }
  }

  return <div className="flex flex-row flex-wrap  ">
    {buzzwords.map((b, i) => <div key={b.name} className={"basis-1/8 flex-initial p-2 m-0.5 rounded " + (matches(b, filterText) ? " bg-red-300" : " bg-slate-500")} >{b.name}</div>)}
  </div>
}

function ProjectDisplay({ project, filterText }: { project: Project,filterText:string }) {
  return <div key={project.name}>
    <div><span>{project.name}</span></div>
    <Buzzwords buzzwords={project.buzzwords} filterText={filterText}/>
  </div>
}

function Tenure({ tenure, showDates = true, filterText }: { tenure: Tenure, showDates?: boolean,filterText:string }) {
  if (tenure.projects && tenure.projects.length) {
    return tenure.projects.map((p) => <ProjectDisplay project={p} filterText={filterText} key={p.name}/>) //TODO: investigate if key prop is used correctly?
  }
  return (<div key={tenure.title + tenure.startDate + tenure.endDate}>
    <div>{showDates && <span>{tenure.startDate} - {tenure.endDate} </span>}{tenure.title}{tenure.team && <span> - {tenure.team.name}</span>}</div>
    {tenure.buzzwords && <Buzzwords buzzwords={tenure.buzzwords} filterText={filterText} />}
  </div>)
}

interface OrgStent {
  orgName: string
  tenures: Tenure[]
}


function OrgStentDisplay({ orgStent, filterText }: { orgStent: OrgStent,filterText:string }) {

  const from = _.minBy(orgStent.tenures, 'startDate')
  const to = _.maxBy(orgStent.tenures, 'endDate')

  return <div className="py-2" key={orgStent.orgName + from + to}>
    <h3 className="text-xl">{orgStent.orgName}</h3>
    <h2>{from && from.startDate} - {to && to.endDate}</h2>

    <ExperienceList tenures={orgStent.tenures} showDates={false} filterText={filterText} />
  </div>

}

function ExperienceListByOrg({ tenures, filterText }: { tenures: Tenure[], filterText:string }) {
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


  return orgs.map((o) => <OrgStentDisplay orgStent={o} filterText={filterText} key={o.orgName}/>)  //TODO: investigate if key prop is used correctly? orgNames could be duplicated so maybe need to add more details or random fixed ID
}


function ExperienceList({ tenures, showDates = true, filterText }: { tenures: Tenure[], showDates?: boolean, filterText:string }) {
  const tenuresSorted = _.orderBy(tenures, ['startDate'], ['desc'])

  return <div>{tenuresSorted.map((t) => <Tenure tenure={t} showDates={showDates} filterText={filterText} key={t.title + t.startDate + t.endDate}/>)}</div> //TODO investigate if key prop is used correctly. might need to remove it from divs
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
  const [filterText, setFilterText] = useState('')
  return <div>
    <Filter filterText={filterText} setFilterText={setFilterText} />
    <div>
      <h2 className="text-2xl pb-3">Experience</h2>
      <ExperienceListByOrg tenures={resume.tenures} filterText={filterText} />
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
