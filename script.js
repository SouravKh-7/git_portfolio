(() => {
  "use strict";

  // EDITABLE PORTFOLIO DATA
  // Update these arrays when a project, workstream, milestone, note, or capability changes.
  const projects = [
    {
      id: "ai-assisted-data-reliability-platform",
      title: "AI-Assisted Data Reliability Platform",
      status: "Reference Implementation",
      statusClass: "reference",
      category: "Data Platforms & Reliability",
      problem: "Successful runs can still hide stale, incomplete, invalid, or unreconciled data.",
      description: "A production-style local reference system for trustworthy processing and guarded incident response.",
      tags: ["Python", "Data Quality", "Observability", "FastAPI"],
      nextMilestone: "Strengthen reproducibility, metadata, and operational evidence.",
      repo: "https://github.com/SouravKh-7/ai-data-reliability-platform",
      why: "Reports, decisions, and AI tools are only as dependable as their source data. This project makes failures visible before higher-level automation is trusted.",
      limitation: "Local reference implementation; not a deployed production system.",
      filters: ["flagship", "active", "ai-ready"],
      audiences: ["recruiter", "engineer", "ai-reader"]
    },
    {
      id: "data-pipeline-optimization-framework",
      title: "Data Pipeline Optimization Framework",
      status: "Active Development",
      statusClass: "active",
      category: "Performance & Reliability",
      problem: "Data pipelines become slow and expensive when volume grows, joins are inefficient, partitions are poorly designed, or transformations are not measured.",
      description: "A measured before-and-after case study for improving an inefficient data pipeline without losing trust.",
      tags: ["Parquet", "Partitioning", "Benchmarking", "Validation"],
      nextMilestone: "Publish measured benchmarks with correctness validation.",
      repo: "https://github.com/SouravKh-7/data-pipeline-optimization-framework",
      why: "Performance claims are useful only when the same data, workload, and quality expectations can be compared fairly.",
      limitation: "No improvement is claimed until reproducible measurements are published.",
      filters: ["active", "research"],
      audiences: ["recruiter", "engineer", "researcher"]
    },
    {
      id: "industrial-service-intelligence-platform",
      title: "Industrial Service Intelligence Platform",
      status: "Active Development",
      statusClass: "active",
      category: "Industrial Data Product",
      problem: "Service, customer, asset, spare-part, and ticket data are scattered across systems, hiding delays, repeated failures, SLA risk, and customer impact.",
      description: "An after-sales data platform for trusted service KPIs and evidence-led decision support.",
      tags: ["Data Modeling", "Service KPIs", "Industrial Data", "Decision Support"],
      nextMilestone: "Complete and document the MVP, then add root-cause support.",
      repo: "https://github.com/SouravKh-7/industrial-service-intelligence-platform",
      why: "Reliable operational models can shorten the path from scattered service records to decisions that improve visibility and coordination.",
      limitation: "The MVP remains in development; planned capabilities are not presented as complete.",
      filters: ["active", "industrial", "ai-ready"],
      audiences: ["recruiter", "engineer", "business-reader", "ai-reader"]
    },
    {
      id: "health-aware-robotic-fleet-optimization-system",
      title: "Health-Aware Robotic Fleet Optimization System",
      status: "Design / Blueprint",
      statusClass: "research",
      category: "Research & Optimization",
      problem: "Fleet tasks should not be assigned by availability alone; health, battery, distance, workload, priority, and risk also affect the decision.",
      description: "Research into scheduling, routing, simulation, and fleet-level optimization under operational constraints.",
      tags: ["Scheduling", "Simulation", "Optimization", "Fleet Health"],
      nextMilestone: "Build a simulator and deterministic optimization baseline.",
      repo: "https://github.com/SouravKh-7/Health-Aware-Robotic-Fleet-Optimization-System",
      why: "Planning becomes more realistic when asset condition and operational constraints are part of the model—not afterthoughts.",
      limitation: "Implementation evidence is limited; this is not presented as a completed industrial AI system.",
      filters: ["research", "industrial"],
      audiences: ["engineer", "researcher", "business-reader"]
    },
    {
      id: "retail-sales-and-inventory-intelligence-platform",
      title: "Retail Sales and Inventory Intelligence Platform",
      status: "Parked",
      statusClass: "parked",
      category: "Business Data Product",
      problem: "Retail teams need trusted sales and inventory data to identify stockouts, overstock, slow-moving items, and product or store risk.",
      description: "A paused domain-transfer project applying reliable data patterns to retail operations.",
      tags: ["Retail Data", "Inventory", "Data Quality", "Analytics"],
      nextMilestone: "Resume after the three core portfolio projects have stronger evidence.",
      repo: "https://github.com/SouravKh-7/Retail-Sales-and-Inventory-Intelligence-Platform",
      why: "The domain is a useful test of whether reusable data engineering patterns can transfer to a different operating context.",
      limitation: "Intentionally paused; forecasting, APIs, dashboards, and recommendations are not presented as complete.",
      filters: ["business", "parked"],
      audiences: ["business-reader"]
    },
    {
      id: "manufacturing-root-cause-analysis-assistant",
      title: "Manufacturing Root-Cause Analysis Assistant",
      status: "Evolving",
      statusClass: "evolving",
      category: "Industrial Decision Support",
      problem: "Manufacturing defects, downtime, delays, and quality failures are difficult to investigate when machine, shift, process, and inspection data are scattered.",
      description: "An earlier retrieval and decision-support concept now being consolidated into the industrial platform.",
      tags: ["Evidence Retrieval", "RAG", "Manufacturing", "Human Review"],
      nextMilestone: "Define the root-cause module inside the service intelligence platform.",
      repo: "https://github.com/SouravKh-7/Manufacturing-Root-Cause-Analysis-Assistant",
      why: "Evidence preparation can help engineers investigate faster while leaving the technical conclusion and action with accountable people.",
      limitation: "No longer independently prioritized; its ideas are being incorporated into another project.",
      filters: ["industrial", "ai-ready", "parked"],
      audiences: ["business-reader", "ai-reader", "engineer"]
    },
    {
      id: "health-aware-autonomous-drone-system",
      title: "Health-Aware Autonomous Drone System",
      status: "Archived / Evolved",
      statusClass: "archived",
      category: "Research History",
      problem: "Route planning can account for component condition and mission risk, not navigation alone.",
      description: "An earlier health-aware routing concept that evolved into broader robotic-fleet research.",
      tags: ["Routing", "Asset Health", "Risk", "Research"],
      nextMilestone: "Retain as research history; continue through fleet optimization work.",
      repo: "https://github.com/SouravKh-7/Health-Aware-Autonomous-Drone-System",
      why: "The project records how a narrow routing idea developed into a broader systems research question.",
      limitation: "Historical concept; no current autonomous-system claim.",
      filters: ["research", "parked"],
      audiences: ["researcher"]
    },
    {
      id: "ai-data-product-strategy-notes",
      title: "AI/Data Product Strategy Notes",
      status: "Planned",
      statusClass: "planned",
      category: "Product Strategy",
      problem: "Useful products must connect user value, evidence quality, risk, and delivery choices.",
      description: "Concise notes translating system architecture into product choices, controls, metrics, and adoption paths.",
      tags: ["Product Strategy", "AI Systems", "Metrics", "Risk"],
      nextMilestone: "Publish the first evidence-to-decision product brief.",
      repo: "",
      why: "Strong engineering becomes a product only when its users, value, controls, and measurable outcomes are clear.",
      limitation: "Planned; no published note library is claimed yet.",
      filters: ["business", "ai-ready"],
      audiences: ["business-reader", "ai-reader"]
    },
    {
      id: "industrial-operations-business-cases",
      title: "Industrial Operations Business Cases",
      status: "Building",
      statusClass: "active",
      category: "Industrial Business Systems",
      problem: "Technical work needs a clear line to service friction, risk, downtime, or decision latency.",
      description: "A case-study track connecting industrial designs to stakeholders, KPIs, value hypotheses, and adoption constraints.",
      tags: ["Operations", "KPIs", "Value Mapping", "Adoption"],
      nextMilestone: "Document a service-operations case around the industrial MVP.",
      repo: "",
      why: "Industrial systems succeed when technical architecture connects to an observable operational and business outcome.",
      limitation: "Examples will be labeled as cases, not deployed outcomes.",
      filters: ["business", "industrial", "active"],
      audiences: ["business-reader", "recruiter"]
    },
    {
      id: "pm-case-study-library",
      title: "PM Case Study Library",
      status: "Planned",
      statusClass: "planned",
      category: "Product Management",
      problem: "Complex technical systems must be framed through users, trade-offs, priorities, metrics, and roadmaps.",
      description: "Structured product cases drawn from the portfolio’s data, reliability, AI, and industrial themes.",
      tags: ["Discovery", "Prioritization", "Roadmaps", "Metrics"],
      nextMilestone: "Create the first complete case with problem framing and success measures.",
      repo: "",
      why: "Clear product reasoning helps engineers, domain experts, and business stakeholders make better shared decisions.",
      limitation: "Planned; no completed case-study library is claimed.",
      filters: ["business"],
      audiences: ["business-reader", "recruiter"]
    }
  ];

  const projectJournal = {
    "ai-assisted-data-reliability-platform": {
      progress: 45,
      progressLabel: "MVP in progress",
      systemFlow: ["Source files / API", "Ingestion", "Schema validation", "Data quality checks", "Reconciliation", "Evidence table", "Incident summary", "AI-assisted explanation", "Human review", "Approved action"],
      milestones: [
        { name: "Problem framing", status: "Done" }, { name: "Architecture design", status: "Done" },
        { name: "MVP / prototype", status: "In progress" }, { name: "Testing and evidence", status: "In progress" },
        { name: "Documentation and demo", status: "Next" }, { name: "Agentic AI / future extension", status: "Pending" }
      ],
      evidence: ["Local ingestion, validation, quarantine, and reconciliation flows", "API, tests, Docker, CI/CD, and operational notes", "Guarded incident-response workflow with human approval"],
      improving: ["More reproducible sample runs", "Stronger operational metadata and observability", "Clearer screenshots and a complete demo walkthrough"]
    },
    "data-pipeline-optimization-framework": {
      progress: 35,
      progressLabel: "Benchmark baseline in progress",
      systemFlow: ["Dataset / workload", "Baseline pipeline", "Performance measurement", "Optimization experiment", "Comparison report", "Recommendation"],
      milestones: [
        { name: "Problem framing", status: "Done" }, { name: "Architecture design", status: "Done" },
        { name: "MVP / prototype", status: "In progress" }, { name: "Testing and evidence", status: "Next" },
        { name: "Documentation and demo", status: "Next" }, { name: "Agentic AI / future extension", status: "Pending" }
      ],
      evidence: ["Optimization case-study direction is defined", "Incremental loading, Parquet, partitioning, and measurement scope", "Correctness checks are part of the planned comparison"],
      improving: ["Publish the reproducible baseline", "Add before-and-after measurements", "Document hardware, workload, and data assumptions"]
    },
    "industrial-service-intelligence-platform": {
      progress: 30,
      progressLabel: "MVP foundation in progress",
      systemFlow: ["Service data", "Customer / asset records", "Cleaning and joining", "Service metrics", "Operational dashboard", "Business insight"],
      milestones: [
        { name: "Problem framing", status: "Done" }, { name: "Architecture design", status: "In progress" },
        { name: "MVP / prototype", status: "In progress" }, { name: "Testing and evidence", status: "Next" },
        { name: "Documentation and demo", status: "Pending" }, { name: "Agentic AI / future extension", status: "Pending" }
      ],
      evidence: ["Industrial service problem and data domains are defined", "MVP scope separates built, in-progress, and planned work", "Service KPI and decision-support direction is documented"],
      improving: ["Complete the core data model", "Add stronger data-quality evidence", "Publish an end-to-end service workflow demo"]
    },
    "health-aware-robotic-fleet-optimization-system": {
      progress: 25,
      progressLabel: "Research blueprint",
      systemFlow: ["Robot / fleet state", "Health signal", "Task queue", "Scheduling logic", "Optimization result", "Fleet decision"],
      milestones: [
        { name: "Problem framing", status: "Done" }, { name: "Architecture design", status: "In progress" },
        { name: "MVP / prototype", status: "Next" }, { name: "Testing and evidence", status: "Pending" },
        { name: "Documentation and demo", status: "Next" }, { name: "Agentic AI / future extension", status: "Pending" }
      ],
      evidence: ["Requirements cover telemetry, health, task queues, and constraints", "Architecture direction for scheduling and simulation", "Research questions connect asset condition with fleet decisions"],
      improving: ["Build a small deterministic simulator", "Define comparison metrics and constraints", "Publish a reproducible optimization baseline"]
    },
    "retail-sales-and-inventory-intelligence-platform": {
      progress: 15,
      progressLabel: "Parked after problem framing",
      systemFlow: ["Sales and inventory data", "Data cleaning", "Product / store model", "Inventory metrics", "Sales dashboard", "Business decision"],
      milestones: [
        { name: "Problem framing", status: "Done" }, { name: "Architecture design", status: "Parked" },
        { name: "MVP / prototype", status: "Parked" }, { name: "Testing and evidence", status: "Parked" },
        { name: "Documentation and demo", status: "Next" }, { name: "Agentic AI / future extension", status: "Parked" }
      ],
      evidence: ["Retail domain-transfer problem is defined", "Core sales, product, store, and stock entities are identified", "Scope is intentionally labeled as paused"],
      improving: ["Resume only after core portfolio projects mature", "Create a smaller first dataset and metric set", "Avoid claiming planned forecasting or recommendation features"]
    },
    "manufacturing-root-cause-analysis-assistant": {
      progress: 25,
      progressLabel: "Evolving into industrial platform",
      systemFlow: ["Manufacturing event", "Defect / delay data", "Process context", "Root-cause clues", "Explanation note", "Human review"],
      milestones: [
        { name: "Problem framing", status: "Done" }, { name: "Architecture design", status: "Evolving" },
        { name: "MVP / prototype", status: "Evolving" }, { name: "Testing and evidence", status: "Next" },
        { name: "Documentation and demo", status: "Next" }, { name: "Agentic AI / future extension", status: "Evolving" }
      ],
      evidence: ["Earlier retrieval and decision-support concept is retained", "Evidence-first human-review boundary is clear", "Consolidation path into the service intelligence platform is defined"],
      improving: ["Define the smaller root-cause module", "Add traceable source references", "Show how an engineer reviews and rejects a weak explanation"]
    },
    "health-aware-autonomous-drone-system": {
      progress: 20,
      progressLabel: "Archived research direction",
      systemFlow: ["Drone telemetry", "Battery / health signal", "Mission constraints", "Route / task decision", "Risk check", "Human-controlled action"],
      milestones: [
        { name: "Problem framing", status: "Done" }, { name: "Architecture design", status: "Done" },
        { name: "MVP / prototype", status: "Parked" }, { name: "Testing and evidence", status: "Parked" },
        { name: "Documentation and demo", status: "Evolving" }, { name: "Agentic AI / future extension", status: "Evolving" }
      ],
      evidence: ["Historical health-aware routing idea is documented", "Mission risk and component condition are part of the concept", "The evolution into broader fleet research is explicit"],
      improving: ["Keep as research history rather than an active claim", "Connect lessons to the fleet optimization project", "Clarify which ideas were conceptual only"]
    },
    "ai-data-product-strategy-notes": {
      progress: 15,
      progressLabel: "First note planned",
      systemFlow: ["User problem", "Product question", "Data needed", "System idea", "Business value", "Case study note"],
      milestones: [
        { name: "Problem framing", status: "In progress" }, { name: "Architecture design", status: "Next" },
        { name: "MVP / prototype", status: "Pending" }, { name: "Testing and evidence", status: "Pending" },
        { name: "Documentation and demo", status: "Next" }, { name: "Agentic AI / future extension", status: "Pending" }
      ],
      evidence: ["Product strategy themes are defined", "Notes will connect user value, evidence, controls, and delivery", "First evidence-to-decision brief is scoped"],
      improving: ["Publish the first complete note", "Use one project as a concrete example", "Add measures, risks, and adoption assumptions"]
    },
    "industrial-operations-business-cases": {
      progress: 20,
      progressLabel: "First case in progress",
      systemFlow: ["Operational problem", "Process data", "Cost / delay factor", "Improvement idea", "ROI logic", "Decision note"],
      milestones: [
        { name: "Problem framing", status: "Done" }, { name: "Architecture design", status: "In progress" },
        { name: "MVP / prototype", status: "Next" }, { name: "Testing and evidence", status: "Pending" },
        { name: "Documentation and demo", status: "Next" }, { name: "Agentic AI / future extension", status: "Pending" }
      ],
      evidence: ["Operational value themes and stakeholders are identified", "Service friction, risk, downtime, and decision latency are candidate measures", "The first case will connect to the industrial MVP"],
      improving: ["Choose one narrow service-operations case", "Document assumptions instead of inventing outcomes", "Add a simple value and adoption model"]
    },
    "pm-case-study-library": {
      progress: 10,
      progressLabel: "Library planned",
      systemFlow: ["Case prompt", "Assumptions", "User problem", "Product solution", "Metrics", "Recommendation"],
      milestones: [
        { name: "Problem framing", status: "In progress" }, { name: "Architecture design", status: "Pending" },
        { name: "MVP / prototype", status: "Pending" }, { name: "Testing and evidence", status: "Pending" },
        { name: "Documentation and demo", status: "Next" }, { name: "Agentic AI / future extension", status: "Pending" }
      ],
      evidence: ["Case-study structure and portfolio themes are identified", "User, trade-off, priority, roadmap, and metric questions are scoped", "No completed library is claimed"],
      improving: ["Create the first end-to-end case", "Use explicit assumptions and success measures", "Add feedback and revision notes after publication"]
    }
  };

  const projectStories = {
    "ai-assisted-data-reliability-platform": {
      dataSources: ["Sample CSV / JSON files", "API extracts", "Mock operational tables", "Pipeline audit logs"],
      technicalIdeas: ["Schema validation", "Freshness and null checks", "Duplicate checks", "Source-target reconciliation", "Data contracts", "Audit evidence"],
      design: "Batch ingestion preserves raw inputs, then validation rules route good records to a trusted layer and failed records to quarantine. Evidence tables, metadata, and audit logs support an incident summary before any AI-assisted explanation is reviewed by a person.",
      demoPlan: "Run locally with intentional data issues in CSV files, Python/Pandas or PySpark transformations, DuckDB, SQLite, or local PostgreSQL, and a Streamlit or FastAPI interface. The first version needs no paid cloud service.",
      challengesFaced: ["Designing realistic quality rules", "Grounding explanations in traceable evidence", "Keeping production-style design separate from production claims"],
      futureChallenges: ["Broader automated tests and realistic datasets", "Incident history, lineage, and observability", "A stronger human approval workflow"]
    },
    "data-pipeline-optimization-framework": {
      dataSources: ["Synthetic workload data", "CSV and Parquet files", "Local runtime metrics", "Spark execution logs"],
      technicalIdeas: ["PySpark local mode", "Partitioning", "Caching", "Join strategy", "File formats", "Benchmarking"],
      design: "A baseline and an optimized pipeline process the same reproducible workload. Correctness checks run before runtime, partition, and resource measures are compared, so a faster result is not accepted if it changes the data.",
      demoPlan: "Generate synthetic data locally, run both pipelines in PySpark local mode, store benchmark results in CSV or DuckDB, and publish a notebook or simple comparison report with the assumptions and machine profile.",
      challengesFaced: ["Creating meaningful test data", "Measuring performance consistently", "Explaining optimization without overclaiming"],
      futureChallenges: ["Larger and more varied workloads", "Spark UI evidence and deeper observability", "Parquet versus CSV trade-off studies"]
    },
    "industrial-service-intelligence-platform": {
      dataSources: ["Mock service records", "Customer and asset tables", "Tickets and SLA events", "Parts and warranty records"],
      technicalIdeas: ["Dimensional modeling", "Fact and dimension tables", "Joins", "SLA metrics", "Data quality rules", "Operational dashboards"],
      design: "Raw service domains are standardized and joined around customer, asset, ticket, time, parts, and warranty keys. Trusted fact and dimension tables feed service metrics and a decision-support view with visible quality checks.",
      demoPlan: "Build a small local pipeline with Python and SQL, store modeled tables in DuckDB or PostgreSQL, and show service delays, SLA performance, and customer impact in Streamlit using synthetic records.",
      challengesFaced: ["Designing realistic business metrics", "Resolving relationships across fragmented records", "Connecting technical fields to business meaning"],
      futureChallenges: ["Time-series and anomaly analysis", "Region and asset comparisons", "Stronger business-case evidence"]
    },
    "health-aware-robotic-fleet-optimization-system": {
      dataSources: ["Synthetic fleet state", "Battery and health scores", "Task distance and priority", "Capacity and location constraints"],
      technicalIdeas: ["Constraint-based scheduling", "Health-aware assignment", "Simulation", "Optimization", "Baseline comparison", "Operational research"],
      design: "A reproducible simulation combines fleet state, asset health, and the task queue. Deterministic scheduling provides a baseline before health-aware constraints and optimization logic are compared using clear operational measures.",
      demoPlan: "Create synthetic robot and task data in Python, run a local scheduling simulation in a Jupyter Notebook, and compare availability-only assignment with a health-aware policy using simple charts.",
      challengesFaced: ["Balancing explainability with realism", "Choosing useful constraints", "Defining a fair baseline"],
      futureChallenges: ["Dynamic scheduling and changing fleet state", "Richer simulation visuals", "Sensitivity analysis across constraints"]
    },
    "retail-sales-and-inventory-intelligence-platform": {
      dataSources: ["Public or mock retail CSV files", "Product and store records", "Daily sales", "Inventory movements"],
      technicalIdeas: ["Star schema", "SQL analytics", "Stockout detection", "Inventory metrics", "Data quality", "Dashboarding"],
      design: "Sales and stock records are cleaned and modeled by product, store, and date. A trusted star schema supports inventory risk, sell-through, and stockout measures rather than a disconnected collection of dashboard charts.",
      demoPlan: "Use a public or synthetic retail dataset, Python and SQL transformations, DuckDB for local analytics, and Streamlit for a focused sales and inventory view. Document the workflow in the repository README.",
      challengesFaced: ["Choosing useful business measures", "Separating signal from generic dashboard work", "Keeping product, store, and time grains consistent"],
      futureChallenges: ["Demand forecasting", "Inventory alerts", "A stronger value and decision case"]
    },
    "manufacturing-root-cause-analysis-assistant": {
      dataSources: ["Mock manufacturing events", "Machine and shift records", "Defect and delay codes", "Process-step context"],
      technicalIdeas: ["Defect tracking", "Process lineage", "Root-cause categories", "Quality checks", "Evidence retrieval", "Human review"],
      design: "Event, defect, delay, and process context are standardized into a traceable incident view. Rules and retrieved evidence create root-cause clues; the output is an explanation note for human review, not an automated certainty claim.",
      demoPlan: "Use local CSV or JSON manufacturing events, analyze them with Python and SQL, and create a small notebook or Streamlit workflow that links every explanation back to its supporting records.",
      challengesFaced: ["Creating credible manufacturing data", "Representing uncertainty honestly", "Keeping explanations tied to sources"],
      futureChallenges: ["Time-series and sensor-like signals", "Richer process lineage", "Evaluation of explanation quality"]
    },
    "health-aware-autonomous-drone-system": {
      dataSources: ["Synthetic drone telemetry", "Battery and component health", "Mission priorities", "Route and risk constraints"],
      technicalIdeas: ["Health-aware routing", "Constraint modeling", "Risk scoring", "Simulation", "Baseline comparison", "Human control"],
      design: "A local simulation joins telemetry and mission context, evaluates asset health and risk constraints, and compares a simple route baseline with a health-aware decision while preserving a human-controlled action boundary.",
      demoPlan: "Use synthetic telemetry in CSV, a Python notebook for route simulation, and local plots for risk and battery comparisons. Keep this as documented research history rather than a deployed autonomy claim.",
      challengesFaced: ["Modeling risk without real flight data", "Keeping scope small and explainable", "Separating research questions from capabilities"],
      futureChallenges: ["Dynamic mission conditions", "Better simulation fidelity", "Validation with representative data"]
    },
    "ai-data-product-strategy-notes": {
      dataSources: ["Public research", "Project evidence", "User and stakeholder assumptions", "Example metrics"],
      technicalIdeas: ["Problem framing", "User value", "AI risk", "Product metrics", "Data requirements", "Decision workflows"],
      design: "Each note starts with a user decision, maps the evidence and data needed, and defines controls, measures, trade-offs, and a delivery path. Technical architecture is connected to adoption rather than treated as the product itself.",
      demoPlan: "Publish Markdown case studies in GitHub README files using public research and clearly labeled assumptions. Include the problem, users, evidence, proposed system, metrics, risks, and next step.",
      challengesFaced: ["Connecting system design to user value", "Writing concise and testable assumptions", "Defining useful success measures"],
      futureChallenges: ["Stronger examples and market research", "Feedback from representative readers", "Financial and adoption assumptions"]
    },
    "industrial-operations-business-cases": {
      dataSources: ["Process and service data", "Operational KPI examples", "Cost and delay assumptions", "Stakeholder workflows"],
      technicalIdeas: ["ROI framing", "Operational metrics", "Guesstimates", "Value mapping", "Risk analysis", "Decision notes"],
      design: "Each case follows an operational problem through the data needed, current friction, technical proposal, measurable effect, adoption constraints, and recommendation. Assumptions remain visible and separate from observed evidence.",
      demoPlan: "Use Markdown and a small notebook or spreadsheet-style dataset to explain one narrow service-operations case. Calculate transparent value ranges locally and publish the assumptions with the case.",
      challengesFaced: ["Avoiding invented business outcomes", "Finding a narrow testable case", "Linking architecture to measurable value"],
      futureChallenges: ["Better market and cost evidence", "Sensitivity analysis", "Validation with domain feedback"]
    },
    "pm-case-study-library": {
      dataSources: ["Case prompts", "Public research", "User assumptions", "Example feedback and metrics"],
      technicalIdeas: ["Personas", "Product requirements", "Prioritization", "Roadmaps", "Metrics", "Risk and trade-offs"],
      design: "A repeatable case structure moves from user problem and assumptions to solution choices, data needs, success metrics, risks, prioritization, and recommendation. Revision notes show how evidence changes the decision.",
      demoPlan: "Create self-contained Markdown cases in GitHub README files. Use free public references and simple local calculations, then document assumptions, users, proposed solution, measures, risks, and next steps.",
      challengesFaced: ["Writing clear business logic", "Keeping cases specific", "Connecting product choices to data systems"],
      futureChallenges: ["More representative examples", "Feedback and revision history", "Stronger market and financial reasoning"]
    }
  };

  const projectExtensions = {
    "ai-assisted-data-reliability-platform": {
      agenticAiIdea: "A reliability assistant can summarize failed checks, explain evidence-backed root-cause possibilities, suggest SQL or PySpark validation rules, and draft incident notes. It must never change production data or approve a fix or rerun without human review.",
      sellingPoint: "Demonstrates data reliability, quality engineering, observability, incident handling, and responsible AI-assisted workflow design."
    },
    "data-pipeline-optimization-framework": {
      agenticAiIdea: "A pipeline review assistant can summarize runtime metrics, compare baseline and optimized runs, identify expensive joins, and draft tuning options. Any generated code change remains a reviewed suggestion.",
      sellingPoint: "Demonstrates performance thinking, benchmarking discipline, Spark optimization awareness, correctness checks, and troubleshooting."
    },
    "industrial-service-intelligence-platform": {
      agenticAiIdea: "A service intelligence assistant can summarize SLA and failure patterns, draft evidence-based root-cause hypotheses, and support natural-language questions over trusted marts. It cannot invent causes or initiate operational action.",
      sellingPoint: "Connects data engineering with service operations, dimensional modeling, analytical metrics, and business decision support."
    },
    "health-aware-robotic-fleet-optimization-system": {
      agenticAiIdea: "An operations assistant can explain why an asset was assigned or skipped, summarize fleet risk, suggest schedule changes, and answer what-changed questions. It supports operators and does not control assets autonomously.",
      sellingPoint: "Shows systems thinking, telemetry modeling, constraint-based optimization, simulation, and industrial decision-support direction."
    },
    "retail-sales-and-inventory-intelligence-platform": {
      agenticAiIdea: "A retail analyst assistant can summarize inventory risk, explain stockout signals, highlight products needing attention, and answer questions over trusted tables. Inventory actions still require business approval.",
      sellingPoint: "Shows SQL analytics, dimensional modeling, dashboard serving, retail data understanding, and business-facing data product thinking."
    },
    "manufacturing-root-cause-analysis-assistant": {
      agenticAiIdea: "A root-cause assistant can summarize defect patterns, compare machines or shifts, propose hypotheses, and suggest added checks. It must not claim a final cause without traceable evidence and engineer validation.",
      sellingPoint: "Connects manufacturing context, data modeling, quality controls, root-cause reasoning, and evidence-led operational analysis."
    },
    "health-aware-autonomous-drone-system": {
      agenticAiIdea: "A research assistant can explain route-risk trade-offs, summarize telemetry changes, and draft simulation notes. It remains outside the control loop and cannot execute a mission decision.",
      sellingPoint: "Documents the evolution of a health-aware routing question into broader fleet, risk, and optimization research."
    },
    "ai-data-product-strategy-notes": {
      agenticAiIdea: "A case assistant can draft problem framing, compare options, propose metrics, and summarize risks using the note's explicit evidence and assumptions. Final product judgment remains human-owned.",
      sellingPoint: "Shows how technical architecture, trustworthy data, users, controls, adoption, and measurable product outcomes connect."
    },
    "industrial-operations-business-cases": {
      agenticAiIdea: "A business-case assistant can organize assumptions, generate metric candidates, compare scenarios, and draft trade-off summaries. It cannot present estimated value as observed evidence.",
      sellingPoint: "Demonstrates the ability to connect data platforms with operating friction, measurable value, adoption constraints, and risk."
    },
    "pm-case-study-library": {
      agenticAiIdea: "A case-study assistant can create a first draft, suggest metrics, compare priorities, and prepare interview-style notes. It supports structured thinking but does not replace final judgment or validation.",
      sellingPoint: "Shows product framing, prioritization, metrics, roadmap reasoning, and communication across technical and business audiences."
    }
  };

  projects.forEach((project) => {
    Object.assign(project, projectJournal[project.id], projectStories[project.id], projectExtensions[project.id]);
    project.problemSolved = project.problem;
    project.businessValue = project.why;
    project.technicalConcepts = project.technicalIdeas;
    project.maturity = project.milestones;
  });

  const topProgressItems = [
    { title: "AI Data Reliability Platform", progress: 45 },
    { title: "Pipeline Optimization", progress: 35 },
    { title: "Industrial Service Intelligence", progress: 30 },
    { title: "Fleet Optimization Research", progress: 25 },
    { title: "Business Case Studies", progress: 20 }
  ];

  const progressItems = [
    { title: "AI-Assisted Data Reliability Platform", progress: 45, status: "MVP in progress", description: "Architecture is defined; sample ingestion, validation, evidence, and testing are being strengthened before the demo." },
    { title: "Data Pipeline Optimization Framework", progress: 35, status: "Benchmark build", description: "Problem and architecture are framed; the reproducible baseline, measurements, and comparison report are next." },
    { title: "Industrial Service Intelligence Platform", progress: 30, status: "MVP foundation", description: "Service domains and metrics are scoped; the data model, quality evidence, and end-to-end demo are moving forward." },
    { title: "Health-Aware Robotic Fleet Optimization", progress: 25, status: "Research blueprint", description: "The constraint model and flow are outlined; a deterministic simulator and comparison metrics come next." },
    { title: "Manufacturing Root-Cause Assistant", progress: 25, status: "Evolving concept", description: "The evidence-first concept is defined and is being consolidated into a smaller industrial root-cause module." },
    { title: "Retail Sales & Inventory Intelligence", progress: 15, status: "Parked after framing", description: "The domain, core entities, and demo approach are documented; implementation is intentionally paused." },
    { title: "Product & Business Case Studies", progress: 20, status: "First cases planned", description: "Reusable case structures are defined; the next evidence is a complete, assumption-led published case." }
  ];

  const timelineItems = [
    { phase: "Problem and Architecture", status: "Completed", when: "Defined", description: "Core projects now state the operational problem, data sources, system flow, scope boundary, and intended decision.", progress: 100 },
    { phase: "Local Data and Pipelines", status: "In Progress", when: "Now", description: "Build reproducible sample datasets, transformations, quality checks, evidence tables, and measurable baselines.", progress: 45 },
    { phase: "Testing and Demo Evidence", status: "Next", when: "Next", description: "Add test results, logs, screenshots, benchmark comparisons, and free/local demonstration walkthroughs.", progress: 20 },
    { phase: "Documentation and Case Studies", status: "Later", when: "Later", description: "Publish project READMEs and product or business cases that connect system evidence to decisions and trade-offs.", progress: 10 }
  ];

  const researchNotes = [
    { label: "Architecture Notes", title: "Boundaries, flows, and evidence", description: "How systems connect without pretending every project is already integrated.", state: "Growing note" },
    { label: "Product Thinking", title: "From system capability to user value", description: "Questions about users, controls, adoption, trade-offs, and meaningful measures.", state: "Developing note" },
    { label: "Business Case Studies", title: "Connecting architecture to operating outcomes", description: "Translating systems into stakeholders, frictions, measures, risks, and choices.", state: "Developing series" },
    { label: "Operational Improvement Ideas", title: "Measured progress over broad claims", description: "A practical journal centered on evidence, documentation, and reliable delivery.", state: "Active note" },
    { label: "Research Questions", title: "What changes when asset health becomes a constraint?", description: "Exploring scheduling, routing, simulation, and the limits of simplified models.", state: "Researching" },
    { label: "Optimization Notes", title: "Baselines before optimization", description: "Why correctness and reproducibility belong beside runtime improvements.", state: "Developing note" }
  ];

  const capabilities = [
    { title: "Data Engineering", description: "Ingestion, transformation, modeling, batch workflows, APIs, and trusted data products." },
    { title: "Data Reliability and Platform Engineering", description: "Contracts, testing, reconciliation, observability, incident evidence, and reproducibility." },
    { title: "AI Data Systems", description: "Evidence retrieval, structured context, bounded assistance, and human approval workflows." },
    { title: "Industrial and Operational Intelligence", description: "Service data, operational KPIs, maintenance context, and decision-support systems." },
    { title: "Optimization and Systems Thinking", description: "Constraints, scheduling, routing, simulation, trade-offs, and measurable baselines." },
    { title: "Product and Business Case Thinking", description: "Problem framing, users, adoption, metrics, risks, priorities, and operating value." }
  ];

  const projectGrid = document.querySelector("[data-project-grid]");
  const topProgress = document.querySelector("[data-top-progress]");
  const progressList = document.querySelector("[data-progress-list]");
  const timelineList = document.querySelector("[data-timeline-list]");
  const researchNotesGrid = document.querySelector("[data-research-notes]");
  const capabilitiesGrid = document.querySelector("[data-capabilities]");

  const statusSlug = (status) => status.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const renderProjects = () => {
    if (!projectGrid) return;
    projectGrid.innerHTML = projects.map((project) => {
      const repoControl = project.repo
        ? `<a href="${project.repo}">View Repo ↗</a>`
        : `<button class="is-placeholder" type="button" disabled>View Repo</button>`;

      return `
        <article class="project-card" id="${project.id}" data-project-card data-filters="${project.filters.join(" ")}" data-audiences="${project.audiences.join(" ")}">
          <div class="project-meta"><span class="status status-${project.statusClass}">${project.status}</span><span>${project.category}</span></div>
          <h3>${project.title}</h3>
          <p class="project-problem"><strong>Problem</strong> ${project.problem}</p>
          <p class="project-description">${project.description}</p>
          <ul class="tag-list">${project.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
          <div class="project-progress-block">
            <div><span>Project maturity</span><strong>${project.progress}% · ${project.progressLabel}</strong></div>
            <div class="project-progress-track" role="progressbar" aria-label="${project.title} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${project.progress}"><span style="--project-progress: ${project.progress}%"></span></div>
          </div>
          <div class="system-preview" aria-label="Architecture preview for ${project.title}">
            ${project.systemFlow.slice(0, 3).map((step, index) => `${index ? '<i aria-hidden="true">→</i>' : ""}<span>${step}</span>`).join("")}
            <i aria-hidden="true">…</i><span>${project.systemFlow.at(-1)}</span>
          </div>
          <p class="milestone"><span>Next milestone</span> ${project.nextMilestone}</p>
          <div class="project-actions">
            ${repoControl}
            <button class="project-toggle" type="button" aria-expanded="false" aria-controls="detail-${project.id}" data-open-label="Read Details" data-close-label="Close Details">Read Details</button>
            <button class="project-toggle" type="button" aria-expanded="false" aria-controls="flow-${project.id}" data-open-label="View Architecture" data-close-label="Close Architecture">View Architecture</button>
            <button class="project-toggle" type="button" aria-expanded="false" aria-controls="demo-${project.id}" data-open-label="Demo Plan" data-close-label="Close Demo Plan">Demo Plan</button>
          </div>
          <div class="project-flow-panel" id="flow-${project.id}" hidden>
            <div class="project-panel-heading"><span>Architecture / system flow</span><h4>How the system works</h4></div>
            <div class="full-system-flow">${project.systemFlow.map((step, index) => `${index ? '<i aria-hidden="true">→</i>' : ""}<span>${step}</span>`).join("")}</div>
          </div>
          <div class="project-demo-panel" id="demo-${project.id}" hidden>
            <div class="project-panel-heading"><span>Free / local demonstration</span><h4>Demo plan</h4></div>
            <p>${project.demoPlan}</p>
          </div>
          <div class="project-detail" id="detail-${project.id}" hidden>
            <div class="project-panel-heading"><span>Project problem</span><h4>What this project is trying to solve</h4></div>
            <p class="problem-copy">${project.problemSolved}</p>
            <h5 class="detail-subheading">Why it matters</h5>
            <p class="why-copy">${project.businessValue}</p>
            <div class="project-story-grid">
              <section class="project-story-block"><h5>Data sources</h5><ul class="story-chip-list">${project.dataSources.map((item) => `<li>${item}</li>`).join("")}</ul></section>
              <section class="project-story-block"><h5>Technical concepts</h5><ul class="story-chip-list">${project.technicalConcepts.map((item) => `<li>${item}</li>`).join("")}</ul></section>
              <section class="project-story-block story-block-wide"><h5>Data engineering design</h5><p>${project.design}</p></section>
              <section class="project-story-block story-block-wide demo-plan-block"><h5>Demo plan · free / local resources</h5><p>${project.demoPlan}</p></section>
            </div>
            <div class="evidence-grid challenge-pair">
              <div><h5>Challenges faced</h5><ul>${project.challengesFaced.map((item) => `<li>${item}</li>`).join("")}</ul></div>
              <div><h5>Future challenges</h5><ul>${project.futureChallenges.map((item) => `<li>${item}</li>`).join("")}</ul></div>
            </div>
            <div class="evidence-grid">
              <div><h5>Evidence so far</h5><ul>${project.evidence.map((item) => `<li>${item}</li>`).join("")}</ul></div>
              <div><h5>Still improving</h5><ul>${project.improving.map((item) => `<li>${item}</li>`).join("")}</ul></div>
            </div>
            <div class="project-value-grid">
              <section><h5>Future Agentic AI extension</h5><p>${project.agenticAiIdea}</p></section>
              <section><h5>Business / hiring value</h5><p>${project.sellingPoint}</p></section>
            </div>
            <div class="project-timeline-wrap">
              <h5>Project maturity</h5>
              <ol class="project-timeline">${project.maturity.map((item, index) => `<li class="milestone-${statusSlug(item.status)}"><span>Phase ${index + 1}</span><b>${item.name}</b><small>${item.status}</small></li>`).join("")}</ol>
            </div>
            <p class="project-next-step"><strong>Next step:</strong> ${project.nextMilestone}</p>
            <p class="limitation"><strong>Limitation:</strong> ${project.limitation}</p>
          </div>
        </article>`;
    }).join("");
  };

  const renderTopProgress = () => {
    if (!topProgress) return;
    topProgress.innerHTML = topProgressItems.map((item) => `
      <article class="build-strip-item">
        <div><span>${item.title}</span><strong>${item.progress}%</strong></div>
        <div class="build-strip-track" role="progressbar" aria-label="${item.title}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${item.progress}"><span style="--strip-progress: ${item.progress}%"></span></div>
      </article>`).join("");
  };

  const renderProgress = () => {
    if (!progressList) return;
    progressList.innerHTML = progressItems.map((item) => `
      <article class="progress-item">
        <div class="progress-copy"><div><h4>${item.title}</h4><span>${item.status}</span></div><strong>${item.progress}%</strong></div>
        <div class="progress-track" role="progressbar" aria-label="${item.title}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${item.progress}"><span style="--progress: ${item.progress}%"></span></div>
        <p>${item.description}</p>
      </article>`).join("");
  };

  const renderTimeline = () => {
    if (!timelineList) return;
    timelineList.innerHTML = timelineItems.map((item) => `
      <li class="timeline-item timeline-${item.status.toLowerCase().replaceAll(" ", "-")}">
        <div class="timeline-marker"><span>${item.when}</span></div>
        <div class="timeline-copy"><div><h4>${item.phase}</h4><span>${item.status}</span></div><p>${item.description}</p><small>${item.progress}% maturity estimate for this project phase</small></div>
      </li>`).join("");
  };

  const renderResearchNotes = () => {
    if (!researchNotesGrid) return;
    researchNotesGrid.innerHTML = researchNotes.map((note) => `
      <article class="note-card"><span>${note.label}</span><h3>${note.title}</h3><p>${note.description}</p><strong>${note.state}</strong></article>`).join("");
  };

  const renderCapabilities = () => {
    if (!capabilitiesGrid) return;
    capabilitiesGrid.innerHTML = capabilities.map((capability) => `
      <article><h3>${capability.title}</h3><p>${capability.description}</p></article>`).join("");
  };

  renderProjects();
  renderTopProgress();
  renderProgress();
  renderTimeline();
  renderResearchNotes();
  renderCapabilities();

  const header = document.querySelector("[data-header]");
  const backToTop = document.querySelector("[data-back-to-top]");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const projectCards = [...document.querySelectorAll("[data-project-card]")];
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const pathButtons = [...document.querySelectorAll("[data-path-filter]")];
  const projectToggles = [...document.querySelectorAll(".project-toggle")];
  const clearFilter = document.querySelector("[data-clear-filter]");
  const emptyReset = document.querySelector("[data-reset-empty]");
  const emptyState = document.querySelector("[data-empty-state]");
  const countOutput = document.querySelector("[data-project-count]");
  const filterFeedback = document.querySelector("[data-filter-feedback]");

  const filterLabels = {
    all: "Showing the complete project ecosystem.",
    flagship: "Showing the flagship reference implementation.",
    active: "Showing projects with active implementation work.",
    industrial: "Showing industrial and operational systems.",
    "ai-ready": "Showing AI-ready and carefully bounded assistance workflows.",
    research: "Showing research, simulation, and optimization work.",
    business: "Showing product and business case work.",
    parked: "Showing parked, evolving, and archived work.",
    recruiter: "Recruiter path: flagship evidence and work currently moving forward.",
    engineer: "Engineer path: technical systems, reliability, and implementation.",
    researcher: "Researcher path: optimization, architecture, and experiments.",
    "business-reader": "Business path: industrial systems, operating value, and case studies.",
    "ai-reader": "AI systems path: evidence-led, human-controlled workflows."
  };

  const setFilter = (filter) => {
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const categories = (card.dataset.filters || "").split(" ");
      const audiences = (card.dataset.audiences || "").split(" ");
      const isVisible = filter === "all" || categories.includes(filter) || audiences.includes(filter);
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (countOutput) countOutput.textContent = String(visibleCount);
    if (filterFeedback) filterFeedback.textContent = filterLabels[filter] || `Showing ${visibleCount} matching projects.`;
    if (emptyState) emptyState.hidden = visibleCount > 0;
    if (clearFilter) {
      clearFilter.hidden = filter === "all";
      clearFilter.textContent = filterButtons.some((button) => button.dataset.filter === filter) ? "Clear filter" : "Clear guided path";
    }
  };

  filterButtons.forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));
  pathButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.pathFilter);
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  clearFilter?.addEventListener("click", () => setFilter("all"));
  emptyReset?.addEventListener("click", () => setFilter("all"));

  projectToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      if (!panel) return;
      const willOpen = panel.hidden;
      panel.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
      button.textContent = willOpen ? button.dataset.closeLabel : button.dataset.openLabel;
    });
  });

  const closeNavigation = () => {
    navLinks?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("is-open") ?? false;
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
  document.addEventListener("click", (event) => {
    if (navLinks?.classList.contains("is-open") && !event.target.closest(".nav-shell")) closeNavigation();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  const updateScrollState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
    backToTop?.classList.toggle("is-visible", window.scrollY > 700);
  };
  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const navigationLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const navigationTargets = navigationLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const activeEntry = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!activeEntry) return;
      navigationLinks.forEach((link) => link.classList.toggle("is-current", link.getAttribute("href") === `#${activeEntry.target.id}`));
    }, { rootMargin: "-24% 0px -64% 0px", threshold: [0.01, 0.15, 0.35] });
    navigationTargets.forEach((section) => sectionObserver.observe(section));
  }

  const yearOutput = document.querySelector("[data-current-year]");
  if (yearOutput) yearOutput.textContent = String(new Date().getFullYear());
  setFilter("all");
})();
