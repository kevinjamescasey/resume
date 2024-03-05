
const att = { name: "SBC/AT&T", purpose: "Telecommunications Company" }
const fed = { name: "Federal Reserve Bank of St. Louis", purpose: "Central Bank" }
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

const data = bz("Data")
const integration = bz("integration")
const http = bz("HTTP")
const api = bz("Application Programmer's Interface (API)", [bz("API"),integration])
const microservice = bz("microservice")
const service = bz("Service", [api, http, microservice])
const soa = bz("Service Oriented Archtecture (SOA)", [bz("SOA"),  service])
const oo = bz("Object Oriented")
const programmingLanguage = bz("Programming Language", [bz("programming"), api])
const cobol = bz("COBOL", [programmingLanguage])
const pl1 = bz("PL/I", [programmingLanguage])
const mainframe = bz("Mainframe")
const ibmAsm = bz("IBM ASM", [bz("assembly language"), mainframe, programmingLanguage])
const jcl =  bz("JCL", [mainframe])
const jvm = bz("Java Virtual Machine (JVM)", [bz("JVM")])
const java = bz("Java", [oo, programmingLanguage, jvm])
const web = bz("Web", [http, bz("HTML")])
const server = bz("Server", [bz("back end"), api])
const pattern = bz("pattern")
const javascript = bz("JavaScript", [programmingLanguage])
const j2ee = bz("J2EE", [java])
const ejb = bz("EJB", [java, j2ee])
const jsp = bz("JSP", [web, java, server])
const json = bz("JSON", [javascript])
const xml = bz("XML")
const ajax = bz("AJAX", [javascript, xml])
const database = bz("Database", [server, data])
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
const etl = bz("Extract Transform Load (ETL)", [bz("ETL"), database, sql])
const datastage = bz("IBM DataStage", [etl])
const aix = bz("IBM AIX", [unix])
const oracleDb = bz("Oracle DB", [relational])
const plSql = bz("PL/SQL", [sql, oracleDb])

const ui = bz("User Interface (UI)", [bz("UI"), bz("front end")])
const gui = bz("Graphical User Interface (GUI)", [bz("GUI"), ui])
const swing = bz("Swing", [java, gui])
const spring = bz("Spring Framework", [bz("Spring"), java, server])
const was = bz("IBM Websphere Applicaiton Server", [j2ee, ejb, web])
const bpel = bz("Business Process Execution Language (BPEL)")
const wps = bz("IBM Websphere Process Server", [j2ee, bpel])

const webService = bz("Web Service", [web, api, service])
const soap = bz("Simple Object Access Protocol (SOAP)", [web, webService, xml])
const jms = bz("JMS", [j2ee])
const rhino = bz("Rhino", [javascript, jvm])
const springDataJpa = bz("Spring Data JPA", [spring, orm, j2ee])
const jquery = bz("JQuery", [javascript, web, gui])
const jsf = bz("Java Server Faces (JSF)", [gui, web])
const css = bz("Cascading Style Sheets (CSS)", [bz("CSS"),web, gui])
const twitterBootstrap = bz("Twitter Bootstrap", [css])
const thymeLeaf = bz("Thymeleaf", [web, gui])
const springWebMvc = bz("Spring Web MVC", [spring, web, mvc, server])
const springWebflow = bz("Spring Webflow", [spring, web, gui])
const cicd = bz("Continuous Integration/Continuous Deployment", [bz("CI/CD")])

const knockoutJs = bz("Knockout", [javascript, web, gui])
const requireJs = bz("RequireJS", [javascript])
const jackson = bz("Jackson", [java, json])
const security = bz("Security")
const authn  = bz("Authentication", [security, bz("authn"), bz("identity")])
const authz  = bz("Authorization", [security, bz("authz")])
const apacheShiro = bz("Apache Shiro", [java, authn])
const googleCharts = bz("Google Charts", [javascript, web, gui])
const apacheCamel = bz("Apache Camel", [java])
const python = bz("Python", [programmingLanguage])
const weblogic = bz("IBM WebLogic", [bz("WebLogic"), j2ee])
const react = bz("React", [web, gui])
const redux = bz("Redux", [react])
const nodeJs = bz("NodeJs", [server, web, javascript])
const noSql = bz("NoSql", [database])
const mongoDb = bz("MongoDb", [database, noSql])
const fp = bz("Functional Programming")
const clojure = bz("Clojure", [programmingLanguage, jvm, fp])
const liberator = bz("Liberator", [web, clojure])
const streaming = bz("Streaming", [data])
const middleWare = bz("Middleware")
const kafka = bz("Kafka", [streaming, data, integration, middleWare])
const scala = bz("Scala", [programmingLanguage, jvm, fp, oo])
const playFramework = bz("Play Frameowrk", [scala, web])
const postgreSql = bz("PostgreSQL", [relational])
const paas = bz("Platform as a Service", [bz("PaaS")])
const containers = bz("containers")
const cloudFoundry = bz("Cloud Foundry", [paas, containers])
const cloud = bz("cloud")
const aws = bz("AWS", [cloud])
const iac = bz("Infrastructure as Code", [bz("IaC")])
const cloudFormation = bz("Cloud Formation", [aws, iac])
const jenkins = bz("Jenkins", [cicd])
const teamCity = bz("Team City", [cicd])
const debian = bz("Debian", [linux])
const windows = bz("Windows", [os])
const macOs = bz("MacOs", [os])
const vpc = bz("VPC", [aws]) 
const transitGateway = bz("Transit Gateway", [aws]) 
const stno = bz("Serverless Transit Network Orchestrator", [aws, vpc, transitGateway]) 
const ec2 = bz("EC2", [aws]) 
const git = bz("Git")
const githubEnterprise = bz("GitHub Enterprise", [git])
const dome9 = bz("Dome9", [cloud, security]) 
const saml = bz("SAML", [authn]) 
const azureAd = bz("AzureAd", [authn]) 
const bosh = bz("BOSH",  [cloudFoundry]) 
const certs = bz("SSL Certificate", [security]) 
const slack = bz("Slack") 
const lambda = bz("AWS Lambda", [aws, bz("Lambda")]) 
const sqs = bz("AWS SQS", [aws, bz("SQS"), middleWare]) 
const serviceCatalog = bz("AWS Service Catalog", [aws]) 
const ecs = bz("AWS ECS", [bz("ECS"), aws, containers]) 
const fargate = bz("Fargate", [aws, ecs, containers]) 
const dynamoDb = bz("DynamoDB", [aws, noSql, database]) 
const cloudWatch = bz("AWS CloudWatch", [aws]) 
const cloudTrail = bz("AWS CloudTrail", [aws]) 
const awsOrgs = bz("AWS Organizations", [aws]) 
const awsIam = bz("AWS IAM", [aws, authn, authz]) 
const awsAlb = bz("AWS ALB", [aws, middleWare, integration])
const observability = bz("Observability")
const splunk = bz("Splunk", [observability])
const hashicorpVault = bz("HashiCorp Vault", [security])
const redshift= bz("AWS Redshift", [aws, database, relational])
const fivetran= bz("Fivetran", [data, integration, middleWare])
const dbt= bz("DBT", [relational])
const beansstalk= bz("AWS Beanstalk", [aws, ec2])
const cdk= bz("Cloud Development Kit (CDK)", [bz("CDK"), aws, iac])
const circleCi= bz("CircleCI", [cicd])
const heroku= bz("Heroku", [paas, cloud])
const graphQl= bz("GraphQL", [api, service])
const appSync= bz("AWS AppSync", [aws, web, api, graphQl, integration])
const meteor= bz("Meteor", [web, javascript])
const typescript= bz("TypeScript", [javascript])
const mobile = bz("Mobile")
const reactNative= bz("React Native", [gui, mobile])
const timesream= bz("Timestream", [aws, database,noSql])
const newRelic= bz("New Relic", [observability])
const docker= bz("Docker", [containers])
const ansible = bz("Ansible")
const testing = bz("testing", [bz("test")])
const junit = bz("JUnit", [testing])
const jest = bz("Jest", [testing])
const mocha = bz("Mocha", [testing])

//TODO: some terms need better results: API, REST, distributed, design, architecture


const mts = { name: "MTS", organization: fed, buzzwords: [springDataJpa, java, junit] }
const brs = { name: "BRS", organization: fed, buzzwords: [hibernate, struts, jquery, thymeLeaf, twitterBootstrap, springWebMvc, springWebflow, springDataJpa,java, junit] }
const btm = { name: "BTM", organization: fed, buzzwords: [jsf, spring, hibernate, weblogic, python,java, junit] }
const cars = { name: "CARS", organization: fed, buzzwords: [j2ee, weblogic, python, java, junit] }


const tenures: Tenure[] = [
    {
        startDate: "2003/07",
        endDate: "2005/12",
        title: "Software Engineer",
        role: "programmer",
        organizations: [att],
        team: sam,
        buzzwords: [cobol, pl1, ibmAsm, jcl, mainframe]
    },
    {
        startDate: "2006/01",
        endDate: "2007/01",
        title: "Software Engineer",
        role: "programmer",
        organizations: [att],
        team: vsss,
        buzzwords: [java, jsp, struts, mvc, javascript, hibernate, hql, ajax, ejb, was, jquery, css, junit]
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
        buzzwords: [java, db2, datastage, aix, plSql, swing, junit]
    },
    {
        startDate: "2009/01",
        endDate: "2010/01",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [att],
        team: sdp,
        buzzwords: [wps, soap, jms, java, bpel, xml, j2ee, ejb, oracleDb, bz("Cruise Control", [cicd]), junit]
    },
    {
        startDate: "2010/01",
        endDate: "2010/09",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [att],
        team: forceAnalyst,
        buzzwords: [swing, java, spring, junit]
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
        buzzwords: [knockoutJs, requireJs, jquery, twitterBootstrap, javascript, jsp, springWebMvc, jackson, apacheShiro, googleCharts, springDataJpa, hibernate, apacheCamel, webService, oracleDb]
    },

    {
        startDate: "2015/05",
        endDate: "2017/07",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [bayer, signature],
        team: prodDev,
        buzzwords: [react, redux, nodeJs, mongoDb, clojure, liberator, scala, playFramework, postgreSql, cloudFoundry, cloudFormation, jenkins, teamCity, debian, windows, macOs, kafka, jest, mocha]
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
        team: cloudOps,
        buzzwords: [vpc, transitGateway, stno, ec2, githubEnterprise, dome9, saml, azureAd, bosh, cloudFoundry, certs, slack, lambda, sqs, python, serviceCatalog, ecs, fargate, dynamoDb, cloudWatch, cloudTrail, awsOrgs, awsIam, splunk, hashicorpVault, awsAlb, nodeJs, javascript], 

    },

    {
        startDate: "2021/10",
        endDate: "2023/01",
        title: "Senior Software Engineer",
        role: "programmer",
        organizations: [veho],
        buzzwords: [redshift, fivetran, dbt, beansstalk, ecs, cdk, circleCi, heroku, lambda, dynamoDb, appSync, graphQl, mongoDb, meteor, typescript, reactNative, timesream, cloudWatch, newRelic, docker, ansible, ec2, awsIam, jest ]
    },


]

export interface Buzzword {
    name: string
    related: Buzzword[]
}

function bz(name: string, related: Buzzword[] = []) {
    return { name, related }
}

export interface Project {
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