
const att = { name: "SBC/AT&T", purpose: "Telecommunications Company" }
const fed = { name: "Federal Resreve Bank of St. Louis", purpose: "Central Bank" }
const adaptive = { name: "Adaptive Solutions Group", purpose: "Staffing Company" }
const suddenlink = { name: "Suddenlink", purpose: "Telecommunications Company" }
const ferguson = { name: "Ferguson", purpose: "Staffing Company" }
const bayer = { name: "Monsanto/Bayer", purpose: "Life Sciences Company" }
const signature = { name: "Signature Consulting", purpose: "Staffing Company" }
const veho = { name: "Veho", purpose: "Shipping Company" }

const organizations = [
    att, fed, adaptive
]

const sam = { name: "Service and Account Management", organization: att }
const vsss = { name: "Video Switch Scheduling Software", organization: att }
const robotask = { name: "Robotask", organization: att }
const cim = { name: "Customer Information Management", organization: att }
const sdp = { name: "Service Delivery Platform", organization: att }
const forceAnalyst = { name: "Force Analyst GUI", organization: att }
const isaac = { name: "ISAAC", organization: att }
const prodDev = { name: "Product Development", organization: bayer }
const cloudOps = { name: "Cloud Engineering", organization: bayer }

const teams = [sam, vsss, robotask, cim, sdp, forceAnalyst, isaac, prodDev, cloudOps]

const oo = bz("Object Oriented")
const programmingLanguage = bz("Programming Language")
const jvm = bz("Java Virtual Machine (JVM)")
const java = bz("Java", [oo, programmingLanguage, jvm])
const web = bz("Web", [bz("HTTP"), bz("HTML")])
const server = bz("Server", [bz("back end")])
const pattern = bz("pattern")
const javascript = bz("JavaScript", [programmingLanguage])
const j2ee =  bz("J2EE", [java])
const ejb = bz("EJB", [java, j2ee])
const jsp = bz("JSP", [web, java, server])
const json = bz("JSON", [javascript])
const xml = bz("XML")
const ajax = bz("AJAX", [javascript, xml])
const database = bz("Database", [server])
const sql = bz("SQL")
const relational = bz("Relational", [database, sql])
const orm = bz("ORM", [relational, oo, server])
const mvc = bz("MVC", [pattern])
const struts = bz("Struts", [web, server, java, mvc])
const hibernate = bz("Hibernate", [orm])
const hql = bz("HQL", [hibernate])
const c = bz("C", [programmingLanguage])
const informix = bz("Informix", [relational])
const os = bz("Operating System (OS)")
const unix = bz("Unix", [os])
const linux = bz("Linux", [os])
const scripting = bz("Scripting", [programmingLanguage])
const ksh = bz("Ksh", [scripting, unix, linux])
const hpUx = bz("HP-UX", [unix])
const db2 = bz("DB2", [relational])
const etl = bz("Extract Transform Load (ETL)", [database, sql])
const datastage = bz("IBM DataStage",  [etl])
const aix = bz("IBM AIX", [unix])
const oracleDb = bz("Oracle DB", [relational])
const plSql = bz("PL/SQL", [sql, oracleDb])
const ui = bz("User Interface (UI)", [bz("front end")])
const gui = bz("Graphical User Interface (GUI)", [ui])
const swing = bz("Swing", [java, gui])
const spring = bz("Spring Framework", [java, server])
const was  = bz("IBM Websphere Applicaiton Server", [j2ee, ejb, web])
const bpel = bz("Business Process Execution Language (BPEL)")
const wps = bz("IBM Websphere Process Server", [j2ee, bpel])
const api = bz("Application Programmer's Interface (API)")
const webService = bz("Web Service", [web, api])
const soap = bz("Simple Object Access Protocol (SOAP)", [web, webService])
const jms = bz("JMS", [j2ee])
const rhino = bz("Rhino", [javascript, jvm])
const springDataJpa = bz("Spring Data JPA", [spring, orm, j2ee ])
const jquery = bz("JQuery", [javascript, web, gui])
const jsf = bz("Java Server Faces (JSF)", [gui, web])
const css = bz("Cascading Style Sheets (CSS)", [web, gui])
const twitterBootstrap = bz("Twitter Bootstrap", [css])
const thymeLeaf = bz("Thymeleaf",  [web, gui])
const springWebMvc = bz("Spring Web MVC", [spring, web, mvc, server])
const springWebflow = bz("Spring Webflow", [spring, web, gui])

const mts = { name: "MTS", organization: fed, buzzwords: [springDataJpa] }
const brs = { name: "BRS", organization: fed, buzzwords: [hibernate, struts, jquery, thymeLeaf, twitterBootstrap, springWebMvc,  springWebflow, springDataJpa ] }
const btm = { name: "BTM", organization: fed, buzzwords: [jsf, spring, hibernate] }
const cars = { name: "CARS", organization: fed, buzzwords: [j2ee] }


const tenures: Tenure[] = [
    {
        startDate: "2003/07",
        endDate: "2005/12",
        title: "Software Engineer",
        role: "programmer",
        organizations: [att],
        team: sam,
        buzzwords: [bz("COBOL"), bz("PL/I"), bz("IBM ASM", [bz("assembly language")]), bz("JCL"), bz("Mainframe")]
    },
    {
        startDate: "2006/01",
        endDate: "2007/01",
        title: "Software Engineer",
        role: "programmer",
        organizations: [att],
        team: vsss,
        buzzwords: [java, jsp, struts, mvc, javascript, hibernate, hql, ajax, ejb, was, jquery, css]
    },
    {
        startDate: "2007/01",
        endDate: "2008/01",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [att],
        team: robotask,
        buzzwords: [c, informix, ksh, hpUx]
    },
    {
        startDate: "2008/01",
        endDate: "2009/01",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [att],
        team: cim,
        buzzwords: [java, db2, datastage, aix, plSql, swing]
    },
    {
        startDate: "2009/01",
        endDate: "2010/01",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [att],
        team: sdp,
        buzzwords: [wps, soap, jms, java, bpel, xml, j2ee, ejb, oracleDb]
    },
    {
        startDate: "2010/01",
        endDate: "2010/09",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [att],
        team: forceAnalyst,
        buzzwords: [swing, java, spring ]
    },
    {
        startDate: "2010/09",
        endDate: "2012/07",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [att],
        team: isaac,
        buzzwords: [gui, javascript, jsp, rhino, ksh, plSql, bz("Motive Model and Overlay Builder"), bz("Motive Workflow Builder"), bz("Motive Workflow Engine")]
    },

    {
        startDate: "2012/07",
        endDate: "2006/07",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [fed, adaptive],
        projects: [mts, brs, btm, cars]
    },
    {
        startDate: "2014/09",
        endDate: "2015/05",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [suddenlink, ferguson],
    },

    {
        startDate: "2015/05",
        endDate: "2017/07",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [bayer, signature],
        team: prodDev
    },
    {
        startDate: "2017/07",
        endDate: "2018/05",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [bayer],
        team: prodDev
    },
    {
        startDate: "2018/05",
        endDate: "2021/10",
        title: "Senior AWS Cloud Engineer",
        role: "programmer",
        organizations: [bayer],
        team: cloudOps
    },

    {
        startDate: "2021/10",
        endDate: "2023/01",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [veho],
    },


]

export interface Buzzword{
    name: string
    related: Buzzword[]
}

function bz(name: string, related: Buzzword[] = [] ) {
    return {name, related}
}

export interface Project{
    name: string
    buzzwords: Buzzword[]
}

export interface Tenure {
    startDate: string
    endDate: string
    title: string
    role: string
    organizations: any[]
    team?: { name: string }
    projects?: Project[]
    buzzwords?: Buzzword[]
}

export const resume = { organizations, tenures, teams }