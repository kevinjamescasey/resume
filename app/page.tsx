'use client'
//import Image from "next/image";
import { resume, Tenure, Project, Buzzword } from './data'
import _, { filter } from 'lodash'
import { useState } from "react"

function Filter({ filterText, setFilterText }) {
  return <input type="text" placeholder="highlight by buzzwords like 'web API'" className="top-5 right-10 fixed text-black" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
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

  return <div className="flex flex-row divide-x-2 divide-white">
    {buzzwords.map((b, i) => <div key={b.name} className={"basis-1/8 flex-initial p-2 " + (matches(b, filterText) ? " bg-red-300" : " bg-slate-500") + (i === 0 ? " rounded-s" : "") + (i === buzzwords.length - 1 ? " rounded-e" : "")} >{b.name}</div>)}
  </div>
}

function ProjectDisplay({ project, filterText }: { project: Project }) {
  return <div key={project.name}>
    <div><span>{project.name}</span></div>
    <Buzzwords buzzwords={project.buzzwords} filterText={filterText}/>
  </div>
}

function Tenure({ tenure, showDates = true, filterText }: { tenure: Tenure, showDates?: boolean }) {
  if (tenure.projects && tenure.projects.length) {
    return tenure.projects.map((p) => <ProjectDisplay project={p} filterText={filterText}/>)
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


function OrgStentDisplay({ orgStent, filterText }: { orgStent: OrgStent }) {

  const from = _.minBy(orgStent.tenures, 'startDate')
  const to = _.maxBy(orgStent.tenures, 'endDate')

  return <div className="py-2" key={orgStent.orgName + from + to}>
    <h3 className="text-xl">{orgStent.orgName}</h3>
    <h2>{from && from.startDate} - {to && to.endDate}</h2>

    <ExperienceList tenures={orgStent.tenures} showDates={false} filterText={filterText} />
  </div>

}

function ExperienceListByOrg({ tenures, filterText }: { tenures: Tenure[] }) {
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


  return orgs.map((o) => <OrgStentDisplay orgStent={o} filterText={filterText} />)
}


function ExperienceList({ tenures, showDates = true, filterText }: { tenures: Tenure[], showDates?: boolean }) {
  const tenuresSorted = _.orderBy(tenures, ['startDate'], ['desc'])

  return <div>{tenuresSorted.map((t) => <Tenure tenure={t} showDates={showDates} filterText={filterText} />)}</div>
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
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p> */}
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
