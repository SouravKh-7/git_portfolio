(() => {
  "use strict";

  const sharedAgenticIntro = "The first version remains deterministic and data-engineering focused. The pipeline, validation, data model, and reports should work without AI. Agentic AI is a controlled assistant layer on top of trusted data and evidence.";

  const studies = {
    "ai-data-reliability": {
      title: "AI-Assisted Data Reliability Platform",
      subtitle: "A reference implementation for detecting data quality issues, logging evidence, and supporting human-reviewed incident explanation.",
      status: "Reference Implementation",
      focus: ["Data Reliability", "Data Quality", "Observability", "Incident Evidence", "AI-Ready Workflow"],
      tools: ["Python", "Pandas / PyArrow", "Parquet / DuckDB", "FastAPI / Pydantic", "Pytest / Docker Compose"],
      problem: [
        "Data pipelines can finish successfully but still produce bad data. A job may run without failure while its output contains stale files, missing values, duplicate records, schema drift, failed business rules, or source-to-target mismatches.",
        "This project explores how a data engineering workflow can detect these issues earlier, record evidence, and support human review before bad data reaches dashboards, downstream tables, reports, or AI workflows."
      ],
      why: "I am building this project because data reliability is one of the most important parts of production data engineering. Through it, I want to practice validation rules, reconciliation, audit logging, metadata capture, incident evidence, and human-controlled AI assistance.",
      flow: ["Source files / API", "Ingestion", "Schema validation", "Data quality checks", "Source-to-target reconciliation", "Evidence table", "Incident summary", "AI-assisted explanation", "Human review", "Approved action"],
      dataFlow: "Raw CSV and API-style JSON enter a batch ingestion layer with run metadata. Schema, null, duplicate, freshness, and business-rule checks separate trusted records from rejected or quarantined records. Source and target measures are reconciled, and every failed check writes evidence that can be traced to the run. The incident summary is generated from that deterministic evidence before it reaches an optional explanation layer and human review.",
      decisions: [
        ["Local-first architecture", "Keeps the demonstration reproducible without a paid cloud account."],
        ["Parquet plus DuckDB", "Preserves typed local layers and provides SQL analytics without a database server."],
        ["Atomic JSON metadata", "Keeps single-process local runs transparent while isolating the store for a future transactional replacement."],
        ["Evidence-derived incidents", "Makes every impact statement traceable to failed rules, reconciliations, and affected records."],
        ["Deterministic checks first", "AI receives validated incident context rather than inspecting uncontrolled raw data."],
        ["Approval before remediation", "No fix, rerun, or data change happens without accountable human review."]
      ],
      demoPlan: "Run the deterministic local scenarios for baseline, missing payments, and schema drift. Inspect raw, validated, quarantine, and curated Parquet outputs; review quality and reconciliation metadata; then use the FastAPI health, incident, agent-run, approval, and documentation endpoints. The same response logic is used by the CLI, API, and optional Airflow workflow.",
      maturity: [["Problem framing", "Demonstrated"], ["Architecture design", "Demonstrated"], ["Local implementation", "Demonstrated"], ["Validation and quarantine", "Demonstrated"], ["Evidence and incidents", "Demonstrated"], ["Tests and reproducibility", "Demonstrated"], ["Container configuration", "Available"], ["Production operations", "Next"]],
      challenges: ["Designing realistic data quality rules", "Keeping validation logic simple but meaningful", "Avoiding unsupported production claims", "Grounding every AI explanation in evidence", "Showing the workflow without paid cloud tools"],
      futureChallenges: ["Production lineage and telemetry", "Concurrent transactional metadata", "Authentication and role-based access", "Runtime container verification", "Secrets and environment management", "Recovery and larger-scale scenarios"],
      agenticHelp: ["Summarize failed checks", "Suggest validation rules", "Draft incident notes", "Explain possible root causes", "Help write documentation"],
      agenticLimits: ["Modify production data", "Approve fixes automatically", "Rerun pipelines without review", "Invent root causes without evidence", "Change pipeline logic without approval"],
      businessValue: "This project demonstrates data reliability, observability, source-to-target reconciliation, incident handling, audit evidence, and responsible AI-assisted workflow thinking.",
      evidence: [["Architecture documentation", "Available", "Source-to-review flow and technology trade-offs are documented."], ["Deterministic scenarios", "Available", "Baseline, missing-payment, and schema-drift paths are verified."], ["Quality and quarantine", "Available", "Contracts and invalid-record preservation are implemented."], ["Reconciliation output", "Available", "Counts and payment totals persist PASS, WARN, or FAIL evidence."], ["FastAPI interface", "Available", "Health, incidents, agent runs, approvals, and docs returned HTTP 200 locally."], ["Automated tests", "Available", "23 tests pass with 85% coverage across 585 statements."], ["CI and lint", "Available", "Ruff, tests, coverage, and Compose configuration checks pass."], ["Docker runtime", "Planned", "Container configuration exists; local runtime was not verified."]],
      thinkingMap: {
        centralIdea: "Data Reliability",
        problem: ["Successful execution can still publish untrustworthy data."],
        data: ["Files", "API-style payloads", "Operational records", "Metadata", "Pipeline-run information"],
        risks: ["Stale sources", "Missing values", "Duplicate records", "Schema drift", "Broken business rules", "Source-to-target mismatch"],
        architecture: ["Source", "Ingestion", "Validation", "Quarantine", "Reconciliation", "Evidence", "Review"],
        engineering: ["Python", "Pandas / PyArrow", "Parquet", "DuckDB / PostgreSQL", "FastAPI", "Pytest", "Docker", "CI/CD", "Metadata logging"],
        evidence: ["Validation results", "Rejected records", "Reconciliation status", "Run metadata", "Incident summary", "Approval record"],
        decision: ["Should this dataset be published?", "Does the run require investigation?", "Is a controlled remediation safe to approve?"],
        futureResearch: ["Distributed quality checks", "Operational lineage", "Policy-controlled remediation", "Drift-aware validation", "Agent evaluation over trusted evidence"]
      },
      existsToday: {
        implemented: ["Local batch ingestion", "Schema and quality validation", "Quarantine preservation", "Source-to-target reconciliation", "Evidence-backed incidents", "FastAPI review endpoints", "Automated tests and CI"],
        improving: ["Operational metadata durability", "Lineage and observability", "Failure-recovery evidence", "Runtime container verification"],
        future: ["Authentication and RBAC", "Distributed execution", "Policy engine", "Governed agentic assistance", "Production telemetry"]
      },
      scaleRisks: ["Single-process metadata storage needs a transactional backend for concurrent writers.", "Local Parquet and DuckDB layouts need partitioning, retention, compaction, and ownership rules.", "Quality checks need distributed execution and resource controls as data volume and rule count grow.", "Lineage, metrics, traces, alert routing, and recovery records must become operational services.", "Authentication, role-based access, secrets, and approval policies must protect every consequential action."],
      researchQuestions: ["How can quality evidence remain traceable across distributed processing stages?", "Which reconciliation controls reveal partial success without creating excessive alert noise?", "How should validation rules adapt to drift while preserving a stable trust boundary?", "What context is sufficient for an agent to explain an incident without accessing uncontrolled raw data?", "Which policy and approval controls are required before a recommendation can become a controlled action?"],
      agenticFlow: ["Trusted Evidence", "Context Builder", "Agent", "Recommendation", "Policy Validation", "Human Approval", "Controlled Action"],
      roadmap: [["Problem Framing", "Done"], ["Deterministic Reference Path", "Done"], ["Evidence and Incident API", "Done"], ["Operational Metadata", "Improving"], ["Distributed Reliability Research", "Next"], ["Governed Agentic Extension", "Future"]],
      repo: "https://github.com/SouravKh-7/ai-data-reliability-platform"
    },
    "pipeline-optimization": {
      title: "Data Pipeline Optimization Framework",
      subtitle: "A local benchmarking project for comparing baseline and optimized data pipelines using measurable runtime and correctness checks.",
      status: "Active Development",
      focus: ["PySpark", "Performance Tuning", "Benchmarking", "Pipeline Reliability", "Correctness Validation"],
      tools: ["Python", "PySpark local mode", "CSV / Parquet", "DuckDB", "Markdown reports"],
      problem: ["Data pipelines can become slow, expensive, or difficult to debug when data volume grows, joins become inefficient, partitions are poorly designed, or transformations are not measured.", "This project explores how a data engineer can compare a baseline pipeline with optimized versions using runtime metrics and output correctness checks."],
      why: "I am building it to practice performance investigation with measurable baselines instead of isolated tuning tips. A faster pipeline is only an improvement when it processes the same workload and preserves the expected output.",
      flow: ["Dataset", "Baseline pipeline", "Runtime measurement", "Optimization experiment", "Correctness validation", "Comparison report", "Recommendation"],
      dataFlow: "A generated workload is written in controlled CSV and Parquet layouts. The same transformation and join logic runs through a baseline and one optimization experiment at a time. Runtime, partition, and output metrics are recorded, then the result sets are reconciled before a recommendation is written.",
      decisions: [["One change per experiment", "Makes runtime differences easier to explain."], ["Correctness before speed", "Rejects optimizations that change row counts, keys, or measures."], ["Local PySpark", "Keeps the benchmark runnable on a normal laptop."], ["CSV and Parquet", "Shows file-format trade-offs with the same logical data."], ["Recorded machine profile", "Keeps performance claims within a reproducible context."], ["Markdown comparison report", "Makes assumptions and trade-offs visible beside the numbers."]],
      demoPlan: "Use local PySpark, generated CSV and Parquet datasets, Python scripts, and Markdown or CSV metric reports. Run a baseline, then compare partitioning, caching or persist, broadcast joins, file format, and transformation reuse while validating output correctness.",
      maturity: [["Problem framing", "Done"], ["Architecture design", "Done"], ["Synthetic data plan", "In progress"], ["Baseline pipeline", "In progress"], ["Optimization experiments", "Next"], ["Comparison report", "Next"], ["Documentation", "In progress"], ["Agentic AI extension", "Future"]],
      challenges: ["Creating meaningful synthetic data", "Measuring performance honestly", "Explaining optimization trade-offs", "Avoiding unsupported performance claims", "Keeping the demo runnable on a normal laptop"],
      futureChallenges: ["Spark UI evidence", "Larger workloads", "More join strategies", "Shuffle and memory analysis", "Partition-size tuning", "CI checks for correctness"],
      agenticHelp: ["Summarize runtime metrics", "Compare baseline and optimized runs", "Identify expensive joins", "Suggest tuning experiments", "Draft a performance report"],
      agenticLimits: ["Rewrite pipeline code automatically", "Accept a faster but incorrect output", "Hide hardware assumptions", "Apply tuning without review", "Present local results as production scale"],
      businessValue: "This project shows performance thinking, benchmarking discipline, Spark optimization awareness, correctness validation, and data engineering troubleshooting.",
      evidence: [["Architecture diagram", "Available", "Benchmark sequence is documented."], ["Synthetic dataset", "In progress", "Workload shape and skew are being defined."], ["Baseline pipeline", "In progress", "Reference transformation path."], ["Runtime metrics", "Planned", "Comparable results after baseline stabilization."], ["Spark UI captures", "Planned", "Execution evidence for later experiments."], ["Correctness tests", "In progress", "Row, key, and measure comparisons."], ["Comparison report", "Planned", "Before-and-after findings."], ["README documentation", "Available", "Repository implementation notes."]],
      repo: "https://github.com/SouravKh-7/data-pipeline-optimization-framework"
    },
    "industrial-service-intelligence": {
      title: "Industrial Service Intelligence Platform",
      subtitle: "A data product concept for turning fragmented service, customer, asset, and ticket data into operational metrics and business insight.",
      status: "Active Development",
      focus: ["Industrial Data", "Service Analytics", "Dimensional Modeling", "Operational Dashboard", "Business Insight"],
      tools: ["Python", "SQL", "DuckDB / local PostgreSQL", "Streamlit", "Mock service datasets"],
      problem: ["Service, customer, asset, spare-part, and ticket data are often scattered across systems. This makes it difficult to understand delays, repeat failures, SLA risk, and customer impact.", "The project builds a data product that converts fragmented service records into trusted operational metrics and business insight."],
      why: "I am building it to connect data modeling and pipeline design with a real operating question. The goal is not only a dashboard; it is a traceable path from service records to metrics that an operations team can understand and challenge.",
      flow: ["Service records", "Customer / asset data", "Cleaning and joining", "Fact and dimension model", "Service KPIs", "Dashboard", "Business insight"],
      dataFlow: "Synthetic service tickets, customer, asset, dealer, region, parts, and warranty records are standardized and checked at their source grain. Conformed keys connect fact service events to customer, asset, region, and date dimensions. Trusted marts calculate SLA breaches, repeat visits, resolution time, and failure trends for the dashboard layer.",
      decisions: [["Explicit event grain", "Prevents ticket, visit, and part rows from being mixed."], ["Fact and dimension model", "Supports reusable service metrics across assets and regions."], ["Trusted metric definitions", "Keeps SLA and repeat-failure logic consistent."], ["Pipeline before dashboard", "Shows ingestion, quality, and modeling rather than only charts."], ["Local SQL storage", "Makes the model inspectable in DuckDB or PostgreSQL."], ["Synthetic data labels", "Keeps business examples honest and reproducible."]],
      demoPlan: "Use synthetic service records, customer data, asset data, and ticket data. Build the local pipeline with Python and SQL, store facts and dimensions in DuckDB or PostgreSQL, and serve SLA breach, repeat visit, average resolution time, region issue count, and asset failure trends through Streamlit.",
      maturity: [["Problem framing", "Done"], ["Architecture design", "Done"], ["Mock data model", "In progress"], ["SQL metrics", "Next"], ["Dashboard prototype", "Next"], ["Business case notes", "Next"], ["Documentation", "In progress"], ["Agentic AI extension", "Future"]],
      challenges: ["Designing realistic operational metrics", "Building meaningful mock service data", "Connecting technical tables to business meaning", "Avoiding dashboard-only work without pipeline logic"],
      futureChallenges: ["Root-cause analysis", "Anomaly detection", "Time-series trends", "Customer impact scoring", "Region and dealer comparison", "Service-record quality controls"],
      agenticHelp: ["Summarize issues by region or asset", "Explain SLA breach patterns", "Generate evidence-based hypotheses", "Support questions over trusted marts", "Draft action notes"],
      agenticLimits: ["Invent causes without evidence", "Bypass trusted tables", "Change SLA definitions", "Trigger service actions", "Approve a business decision"],
      businessValue: "This project connects data engineering with business operations, service analytics, dimensional modeling, and evidence-led decision support.",
      evidence: [["Architecture diagram", "Available", "Service-source to insight flow."], ["Mock data model", "In progress", "Facts, dimensions, grains, and keys."], ["Sample service data", "In progress", "Synthetic records with explicit assumptions."], ["SQL metrics", "Planned", "SLA and repeat-failure measures."], ["Dashboard mockup", "Planned", "Operational view after trusted marts."], ["Quality checks", "Planned", "Key, date, and status rules."], ["Business case notes", "Planned", "Metric-to-decision explanation."], ["README documentation", "Available", "Repository scope and setup."]],
      repo: "https://github.com/SouravKh-7/industrial-service-intelligence-platform"
    },
    "robotic-fleet-optimization": {
      title: "Health-Aware Robotic Fleet Optimization System",
      subtitle: "A simulation project exploring how fleet telemetry, health signals, task queues, and constraints can support better robotic or autonomous asset assignment.",
      status: "Design / Blueprint",
      focus: ["Telemetry Data", "Optimization", "Scheduling", "Simulation", "Industrial AI", "Operational Research"],
      tools: ["Python", "Pandas", "Synthetic fleet data", "Streamlit", "Simple optimization logic"],
      problem: ["Robots, drones, or autonomous assets should not be assigned tasks only because they are available. Battery level, health score, task distance, workload, priority, and risk should also influence assignment.", "This project explores how operational data, telemetry, and optimization logic can support safer and more explainable fleet decisions."],
      why: "I am building this research project to connect telemetry data engineering with transparent scheduling decisions. The first goal is a small, deterministic baseline that makes every constraint and trade-off visible.",
      flow: ["Fleet telemetry", "Health score", "Task queue", "Constraint checks", "Scheduling logic", "Optimization result", "Human-approved fleet decision"],
      dataFlow: "Synthetic telemetry updates the fleet-state table with battery, health, workload, availability, and location. A task queue supplies distance, priority, capacity, and time constraints. Deterministic rules filter invalid assignments before the scheduler compares feasible options and writes a decision report for review.",
      decisions: [["Synthetic telemetry first", "Makes the model reproducible before any hardware integration."], ["Deterministic baseline", "Provides a fair comparison for later optimization."], ["Explicit constraints", "Keeps battery, health, workload, and risk visible."], ["Decision report", "Explains why an asset was assigned or rejected."], ["Local simulation", "Supports repeatable experiments on a laptop."], ["Human-approved output", "Keeps the project outside an autonomous control loop."]],
      demoPlan: "Use Python, Pandas, synthetic fleet and task data, simple optimization logic, and Streamlit for simulation. Compare availability-only task assignment with a health-aware method and show the effect on risk, workload balance, and task completion.",
      maturity: [["Problem framing", "Done"], ["Architecture design", "In progress"], ["Synthetic telemetry model", "Next"], ["Scheduling logic", "Next"], ["Simulation demo", "Pending"], ["Testing", "Pending"], ["Documentation", "Pending"], ["Agentic AI extension", "Future"]],
      challenges: ["Keeping the model simple but realistic", "Defining useful constraints", "Explaining optimization decisions clearly", "Avoiding overclaiming robotics capability"],
      futureChallenges: ["Dynamic scheduling", "Route conflicts", "Charging-station logic", "Simulation visualization", "Cost and risk trade-offs", "Stronger optimization algorithms"],
      agenticHelp: ["Explain an assignment or rejection", "Summarize fleet risk", "Suggest schedule changes", "Generate operator notes", "Answer what-changed questions"],
      agenticLimits: ["Control robots autonomously", "Bypass safety constraints", "Change schedules without approval", "Hide model uncertainty", "Present simulation as field validation"],
      businessValue: "This project shows systems thinking, optimization, telemetry data modeling, simulation, explainable decisions, and industrial AI direction.",
      evidence: [["Architecture diagram", "Available", "Telemetry-to-decision flow."], ["Constraint catalog", "In progress", "Health, battery, task, and risk rules."], ["Synthetic fleet data", "Planned", "Reproducible state and task records."], ["Baseline scheduler", "Planned", "Availability-only comparison."], ["Optimization result", "Planned", "Health-aware assignment output."], ["Simulation visuals", "Planned", "Streamlit experiment view."], ["Test scenarios", "Planned", "Constraint and edge-case checks."], ["Research notes", "Available", "Problem and architecture direction."]],
      repo: "https://github.com/SouravKh-7/Health-Aware-Robotic-Fleet-Optimization-System"
    },
    "retail-inventory-intelligence": {
      title: "Retail Sales and Inventory Intelligence Platform",
      subtitle: "A data modeling and analytics project for turning sales and inventory data into stockout risk, demand, and business decision metrics.",
      status: "Parked / Evolved",
      focus: ["Retail Analytics", "SQL", "Dimensional Modeling", "Inventory Metrics", "Dashboarding"],
      tools: ["Python", "SQL", "DuckDB / SQLite", "Streamlit", "Public or mock retail CSV data"],
      problem: ["Retail teams need to know what is selling, what is understocked, what is overstocked, and where inventory decisions are creating business risk.", "This project shows how sales and inventory data can be modeled into useful and reusable business metrics."],
      why: "I am keeping this project as a domain-transfer case. It tests whether the same ingestion, quality, dimensional modeling, and serving patterns used in industrial projects remain useful in a retail setting.",
      flow: ["Sales and inventory data", "Cleaning", "Product / store / date model", "Inventory metrics", "Stockout risk", "Dashboard", "Business decision"],
      dataFlow: "Transaction and inventory snapshot files are standardized at product, store, and date grain. Product, store, and date dimensions provide conformed reporting keys. Sales facts and inventory snapshots feed stockout, slow-moving inventory, sell-through, and store-product performance measures.",
      decisions: [["Separate sales and snapshot facts", "Preserves the different grains of transactions and inventory state."], ["Star schema", "Supports reusable SQL metrics across stores and products."], ["Public or synthetic data", "Keeps the demo free and clearly scoped."], ["Metric definitions first", "Prevents a generic dashboard-only result."], ["Local analytical database", "Makes SQL logic easy to inspect."], ["Parked status", "Keeps maturity honest while core projects take priority."]],
      demoPlan: "Use public or mock retail CSV data, Python, SQL, DuckDB or SQLite, and Streamlit. Build sales trend, inventory level, stockout risk, slow-moving item, and store-product performance metrics over a documented star schema.",
      maturity: [["Problem framing", "Done"], ["Data model idea", "Done"], ["Dataset selection", "Pending"], ["Pipeline implementation", "Pending"], ["SQL metrics", "Pending"], ["Dashboard demo", "Pending"], ["Documentation", "Pending"], ["Agentic AI extension", "Future"]],
      challenges: ["Choosing useful business metrics", "Designing clean dimensional tables", "Avoiding a generic dashboard-only presentation", "Connecting the model to real decisions"],
      futureChallenges: ["Demand forecasting", "Reorder recommendations", "Seasonality", "Anomaly detection", "Inventory optimization", "ROI and business-case logic"],
      agenticHelp: ["Summarize inventory risk", "Explain stockout signals", "Highlight products needing attention", "Draft business summaries", "Answer questions over trusted data"],
      agenticLimits: ["Change inventory automatically", "Override business rules", "Invent demand drivers", "Act without approval", "Query unvalidated source files"],
      businessValue: "This project shows SQL analytics, dimensional modeling, dashboard serving, retail data understanding, and business-facing data product thinking.",
      evidence: [["Architecture diagram", "Available", "Sales and inventory serving flow."], ["Data model", "Available", "Product, store, date, sales, and snapshot grains."], ["Dataset", "Planned", "Public or clearly labeled synthetic data."], ["SQL metrics", "Planned", "Stockout and movement logic."], ["Dashboard mockup", "Planned", "Focused decision view."], ["Quality rules", "Planned", "Keys, quantities, dates, and grains."], ["Business case", "Planned", "Metric-to-action examples."], ["README documentation", "Available", "Repository concept and scope."]],
      repo: "https://github.com/SouravKh-7/Retail-Sales-and-Inventory-Intelligence-Platform"
    },
    "manufacturing-root-cause": {
      title: "Manufacturing Root-Cause Analysis Assistant",
      subtitle: "A manufacturing data project for organizing defects, downtime, process, shift, and machine data into evidence-based root-cause investigation support.",
      status: "Evolving",
      focus: ["Manufacturing Data", "Root-Cause Analysis", "Data Modeling", "Quality Checks", "AI-Assisted Investigation"],
      tools: ["Python", "SQL", "Streamlit", "Synthetic manufacturing event data"],
      problem: ["Manufacturing defects, downtime, delays, and quality failures are difficult to analyze when process, machine, shift, operator, and inspection data are scattered.", "This project explores how manufacturing event data can be organized and used to support a traceable root-cause investigation."],
      why: "I am building it to combine manufacturing context with data modeling and evidence-led analysis. The goal is to help an engineer inspect patterns and supporting records, not to claim that a generated explanation is the final cause.",
      flow: ["Manufacturing event", "Machine / shift / process context", "Defect and delay data", "Quality checks", "Root-cause clues", "Evidence summary", "Human review"],
      dataFlow: "Manufacturing events are joined to machine, shift, process-step, operator, defect, delay, and inspection context at explicit grains. Quality rules check keys, timestamps, codes, and event order. Aggregations expose patterns by machine, shift, process, and time period, while the evidence summary links every clue back to source records.",
      decisions: [["Event-centered model", "Keeps defect, delay, and inspection context traceable."], ["Evidence before explanation", "Prevents a summary from hiding the supporting records."], ["Human validation", "Treats root-cause output as a hypothesis, not certainty."], ["Synthetic process data", "Allows repeatable scenarios without exposing operational records."], ["Local SQL analysis", "Makes filters and aggregations inspectable."], ["Evolving scope", "Positions the work as a module within broader industrial intelligence."]],
      demoPlan: "Use synthetic manufacturing events, Python, SQL, and Streamlit. Filter defects by machine, shift, process step, and time period, then show quality results, comparative patterns, evidence records, and a cautious root-cause summary for engineer review.",
      maturity: [["Problem framing", "Done"], ["Architecture design", "In progress"], ["Synthetic data design", "Next"], ["Analysis workflow", "Pending"], ["Quality checks", "Pending"], ["Demo interface", "Pending"], ["Documentation", "Pending"], ["Agentic AI extension", "Future"]],
      challenges: ["Creating realistic manufacturing data", "Avoiding false certainty", "Connecting process knowledge to the data model", "Keeping the investigation understandable"],
      futureChallenges: ["Sensor-like time-series data", "Maintenance logs", "Process lineage", "Statistical analysis", "Explanation evaluation", "Domain-expert feedback"],
      agenticHelp: ["Summarize defect patterns", "Compare shifts or machines", "Generate possible hypotheses", "Suggest additional checks", "Draft investigation notes"],
      agenticLimits: ["Claim a final root cause", "Hide missing evidence", "Trigger a maintenance action", "Change process data", "Replace engineer validation"],
      businessValue: "This project connects manufacturing experience, data modeling, data quality, root-cause thinking, and responsible AI-assisted operational analysis.",
      evidence: [["Architecture diagram", "Available", "Event-to-review flow."], ["Synthetic data design", "In progress", "Machine, shift, process, defect, and inspection context."], ["Data flow", "Available", "Grain and evidence boundaries documented."], ["Quality output", "Planned", "Key, time, and category checks."], ["Analysis workflow", "Planned", "Pattern comparison and evidence drill-down."], ["Demo interface", "Planned", "Streamlit investigation view."], ["Test cases", "Planned", "Known defect and delay scenarios."], ["README documentation", "Available", "Repository concept and evolution."]],
      repo: "https://github.com/SouravKh-7/Manufacturing-Root-Cause-Analysis-Assistant"
    },
    "business-case-studies": {
      title: "Product and Business Case Studies",
      subtitle: "A case-study track for connecting data engineering projects with user problems, business value, ROI, metrics, and decision-making.",
      status: "Planned / Building",
      focus: ["Product Thinking", "Business Metrics", "ROI", "Data Product Strategy", "PM Case Studies"],
      tools: ["Markdown", "GitHub Pages", "Architecture diagrams", "Simple spreadsheets when needed"],
      problem: ["Technical projects are stronger when they are connected to users, business value, cost, risk, metrics, and decision-making.", "This track shows product and business thinking around data systems without presenting assumptions as observed outcomes."],
      why: "I am building this track to explain why a data system should exist, who uses it, what evidence it needs, how value could be measured, and which adoption or risk constraints affect the recommendation.",
      flow: ["Business problem", "User group", "Assumptions", "Data needed", "Product idea", "Metrics", "Recommendation"],
      dataFlow: "Each case starts with a user and decision rather than a tool. Public evidence and clearly labeled assumptions define the data needed. The proposed data product is mapped to users, workflow changes, success metrics, risks, cost or ROI ranges, and a recommendation with an explicit next validation step.",
      decisions: [["Assumptions stay visible", "Separates estimates from observed evidence."], ["One user decision per case", "Keeps the case focused and testable."], ["Data requirements are explicit", "Connects product framing back to engineering work."], ["Metrics before features", "Clarifies how usefulness would be measured."], ["Ranges instead of false precision", "Keeps ROI and guesstimates honest."], ["Markdown-first publication", "Makes the cases accessible without a build system."]],
      demoPlan: "Use Markdown case studies, simple HTML/CSS diagrams, transparent spreadsheet-style calculations when needed, and GitHub Pages documentation. Each case includes the problem, user group, assumptions, data needed, proposed solution, metrics, ROI or impact logic, risks, and next step.",
      maturity: [["Case format", "In progress"], ["Problem examples", "In progress"], ["Data product strategy notes", "Next"], ["ROI / guesstimate examples", "Next"], ["Published case studies", "Pending"], ["Feedback and revision", "Pending"], ["Documentation", "In progress"], ["Agentic AI extension", "Future"]],
      challenges: ["Writing clear business logic", "Connecting technical systems to user value", "Avoiding invented outcomes", "Choosing useful metrics", "Keeping assumptions explicit"],
      futureChallenges: ["Stronger market evidence", "Financial assumptions", "Sensitivity analysis", "Representative feedback", "More varied case domains", "Revision history"],
      agenticHelp: ["Draft problem framing", "Compare options", "Create metric ideas", "Summarize trade-offs", "Prepare interview-style notes"],
      agenticLimits: ["Replace final judgment", "Invent market evidence", "Hide assumptions", "Approve a recommendation", "Present generated estimates as facts"],
      businessValue: "This track shows the ability to connect data engineering with product management, business impact, structured metrics, trade-offs, and clear communication.",
      evidence: [["Case template", "Available", "Reusable problem-to-recommendation structure."], ["Problem examples", "In progress", "Industrial and data-platform directions."], ["Architecture diagrams", "In progress", "Data needed and decision workflows."], ["Metric catalog", "Planned", "Outcome, quality, adoption, and risk measures."], ["ROI examples", "Planned", "Transparent ranges and assumptions."], ["Published cases", "Planned", "First complete case is next."], ["Feedback notes", "Planned", "Revision evidence after publication."], ["README documentation", "In progress", "Case structure and navigation."]],
      repo: ""
    }
  };

  const order = Object.keys(studies);
  const projectId = document.body.dataset.projectId;
  const project = studies[projectId];
  const root = document.querySelector("[data-case-study]");

  if (!project || !root) return;

  const statusClass = project.status.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const currentIndex = order.indexOf(projectId);
  const previous = studies[order[(currentIndex - 1 + order.length) % order.length]];
  const previousId = order[(currentIndex - 1 + order.length) % order.length];
  const next = studies[order[(currentIndex + 1) % order.length]];
  const nextId = order[(currentIndex + 1) % order.length];
  const repoLink = project.repo
    ? `<a class="button button-primary" href="${project.repo}">View GitHub Repo <span aria-hidden="true">↗</span></a>`
    : `<span class="case-link-placeholder">GitHub case-study repository planned</span>`;

  const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const thinkingMap = project.thinkingMap || {
    centralIdea: project.focus[0],
    problem: project.problem.slice(0, 1),
    data: ["Domain records", "Operational metadata", "Generated or public inputs"],
    risks: project.challenges.slice(0, 5),
    architecture: project.flow,
    engineering: project.tools,
    evidence: project.evidence.slice(0, 6).map(([name]) => name),
    decision: [project.businessValue],
    futureResearch: project.futureChallenges.slice(0, 5)
  };
  const existsToday = project.existsToday || {
    implemented: project.evidence.filter(([, status]) => ["Available", "Demonstrated", "Done"].includes(status)).map(([name]) => name),
    improving: project.evidence.filter(([, status]) => ["In progress", "Available"].includes(status)).slice(0, 5).map(([name]) => name),
    future: project.futureChallenges.slice(0, 5)
  };
  const scaleRisks = project.scaleRisks || project.futureChallenges;
  const researchQuestions = project.researchQuestions || project.futureChallenges.map((item) => `How should ${item.charAt(0).toLowerCase()}${item.slice(1)} be designed and evaluated?`).slice(0, 5);
  const agenticFlow = project.agenticFlow || ["Trusted Evidence", "Context Builder", "Agent", "Recommendation", "Policy Validation", "Human Approval", "Controlled Action"];
  const roadmap = project.roadmap || project.maturity;
  const mapBranch = (title, items, className) => `<article class="thinking-branch thinking-${className}"><h3>${title}</h3>${list(items)}</article>`;

  root.innerHTML = `
    <a class="skip-link" href="#case-main">Skip to case study</a>
    <header class="case-header">
      <nav class="case-nav" aria-label="Project case study navigation">
        <a class="case-brand" href="../index.html"><span aria-hidden="true">SK</span><b>Sourav Khandai — Data Engineering Portfolio</b></a>
        <div><a href="../index.html">Home</a><a href="../index.html#projects">Project Gallery</a><a href="../system-design.html">System Design</a><a href="#evidence">Evidence</a></div>
      </nav>
    </header>

    <main id="case-main">
      <section class="project-hero">
        <div class="case-shell project-hero-grid">
          <div>
            <p class="case-kicker">Data engineering case study · ${String(currentIndex + 1).padStart(2, "0")}</p>
            <span class="case-status status-${statusClass}">${project.status}</span>
            <h1>${project.title}</h1>
            <p class="project-hero-subtitle">${project.subtitle}</p>
            <div class="project-link-row">${repoLink}<a class="button button-secondary" href="#architecture">View Architecture</a><a class="button button-secondary" href="#evidence">View Evidence</a><a class="button button-secondary" href="../index.html">Back to Portfolio</a></div>
          </div>
          <aside class="project-spec" aria-label="Project technical focus">
            <div><span>Focus</span><ul>${project.focus.map((item) => `<li>${item}</li>`).join("")}</ul></div>
            <div><span>Free / local tools</span><ul>${project.tools.map((item) => `<li>${item}</li>`).join("")}</ul></div>
            <p>This page explains the project problem, architecture, decisions, evidence, and maturity. Setup and implementation commands remain in the repository README.</p>
          </aside>
        </div>
      </section>

      <section class="case-study-section thinking-map-section" id="thinking-map">
        <div class="case-shell">
          <div class="case-section-heading"><p>Thinking map</p><h2>How I Am Thinking About This System</h2></div>
          <p class="thinking-map-intro">This map explains why the system is structured this way. The architecture section below explains how data moves through it.</p>
          <div class="thinking-map" aria-label="Project thinking map for ${project.title}">
            <div class="thinking-map-center"><span>Central idea</span><strong>${thinkingMap.centralIdea}</strong></div>
            <div class="thinking-map-branches">
              ${mapBranch("Problem", thinkingMap.problem, "problem")}
              ${mapBranch("Data", thinkingMap.data, "data")}
              ${mapBranch("Risks", thinkingMap.risks, "risks")}
              ${mapBranch("Architecture", thinkingMap.architecture, "architecture")}
              ${mapBranch("Engineering", thinkingMap.engineering, "engineering")}
              ${mapBranch("Evidence", thinkingMap.evidence, "evidence")}
              ${mapBranch("Decision", thinkingMap.decision, "decision")}
              ${mapBranch("Future Research", thinkingMap.futureResearch, "research")}
            </div>
          </div>
        </div>
      </section>

      <section class="case-study-section case-shell case-overview" id="problem">
        <div class="case-section-heading"><p>01 · Problem</p><h2>Problem being solved</h2></div>
        <div class="case-prose">${project.problem.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
        <article class="why-panel"><span>Why I am building it</span><p>${project.why}</p></article>
      </section>

      <section class="case-study-section architecture-section" id="architecture">
        <div class="case-shell">
          <div class="case-section-heading"><p>02 · Architecture</p><h2>System Architecture</h2></div>
          <div class="architecture-flow" aria-label="${project.title} architecture flow">${project.flow.map((step, index) => `${index ? '<i aria-hidden="true">→</i>' : ""}<div class="flow-step"><span>${String(index + 1).padStart(2, "0")}</span><b>${step}</b></div>`).join("")}</div>
          <div class="data-flow-explanation"><span>Data flow explanation</span><p>${project.dataFlow}</p></div>
        </div>
      </section>

      <section class="case-study-section case-shell" id="design-decisions">
        <div class="case-section-heading"><p>03 · Design</p><h2>Engineering Decisions</h2></div>
        <div class="design-decision-grid">${project.decisions.map(([title, description], index) => `<article class="design-decision-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${description}</p></article>`).join("")}</div>
      </section>

      <section class="case-study-section exists-section" id="current-state">
        <div class="case-shell">
          <div class="case-section-heading"><p>04 · Evidence boundary</p><h2>What Exists Today</h2></div>
          <div class="exists-grid">
            <article><span>Implemented</span>${list(existsToday.implemented.length ? existsToday.implemented : ["No implemented artifact is claimed yet."])}</article>
            <article><span>Improving</span>${list(existsToday.improving.length ? existsToday.improving : ["Evidence and implementation depth are being strengthened."])}</article>
            <article><span>Future</span>${list(existsToday.future)}</article>
          </div>
        </div>
      </section>

      <section class="case-study-section demo-plan-section" id="demo-plan">
        <div class="case-shell demo-plan-grid">
          <div class="case-section-heading"><p>05 · Reproducible demonstration</p><h2>Demo plan using free and local resources</h2></div>
          <div><p>${project.demoPlan}</p><ul class="tool-list">${project.tools.map((item) => `<li>${item}</li>`).join("")}</ul></div>
        </div>
      </section>

      <section class="case-study-section case-shell" id="maturity">
        <div class="case-section-heading"><p>06 · Roadmap</p><h2>Project maturity record</h2></div>
        <p class="maturity-note">Each labeled state is supported by the evidence section below; this is not a percentage or a production-readiness claim.</p>
        <div class="maturity-list">${roadmap.map(([name, status], index) => `<article><span>${String(index + 1).padStart(2, "0")} · ${name}</span><b class="maturity-${status.toLowerCase().replaceAll(" ", "-")}">${status}</b></article>`).join("")}</div>
      </section>

      <section class="case-study-section challenge-section" id="challenges">
        <div class="case-shell">
          <div class="case-section-heading"><p>07 · Engineering reality</p><h2>Challenges faced and future challenges</h2></div>
          <div class="challenge-columns">
            <article><h3>Challenges faced</h3>${list(project.challenges)}</article>
            <article><h3>Future challenges</h3>${list(project.futureChallenges)}</article>
          </div>
        </div>
      </section>

      <section class="case-study-section case-shell" id="larger-scale">
        <div class="case-section-heading"><p>08 · Scale</p><h2>What Breaks at Larger Scale?</h2></div>
        <p class="scale-intro">The local design is useful for demonstrating the trust boundary. These are the first constraints I would revisit before calling it a production platform.</p>
        <ol class="scale-risk-list">${scaleRisks.map((risk, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${risk}</p></li>`).join("")}</ol>
      </section>

      <section class="case-study-section research-questions-section" id="research-questions">
        <div class="case-shell">
          <div class="case-section-heading"><p>09 · Research</p><h2>Research Questions</h2></div>
          <ol class="research-question-list">${researchQuestions.map((question, index) => `<li><span>RQ${String(index + 1).padStart(2, "0")}</span><p>${question}</p></li>`).join("")}</ol>
        </div>
      </section>

      <section class="case-study-section case-shell" id="agentic-ai">
        <div class="case-section-heading"><p>10 · Controlled extension</p><h2>Future Agentic AI Extension</h2></div>
        <div class="agentic-ai-panel"><p>${sharedAgenticIntro}</p><ol class="agentic-flow" aria-label="Governed agentic AI workflow">${agenticFlow.map((step) => `<li>${step}</li>`).join("")}</ol><div><article><h3>Allowed assistance</h3>${list(project.agenticHelp)}</article><article><h3>Prohibited actions</h3>${list(project.agenticLimits)}</article></div></div>
      </section>

      <section class="case-study-section value-section" id="value">
        <div class="case-shell value-grid"><div class="case-section-heading"><p>11 · Project value</p><h2>Business and hiring value</h2></div><blockquote>${project.businessValue}</blockquote></div>
      </section>

      <section class="case-study-section case-shell" id="evidence">
        <div class="case-section-heading"><p>12 · Evidence</p><h2>Evidence and Demo Assets</h2></div>
        <p class="evidence-intro">Evidence is labeled honestly. Planned items are not presented as complete.</p>
        <div class="evidence-grid case-evidence-grid">${project.evidence.map(([name, status, description]) => `<article><span class="evidence-status evidence-${status.toLowerCase().replaceAll(" ", "-")}">${status}</span><h3>${name}</h3><p>${description}</p></article>`).join("")}</div>
      </section>

      <section class="case-study-section case-links-section" id="links">
        <div class="case-shell">
          <div class="case-section-heading"><p>13 · Continue</p><h2>Project links</h2></div>
          <div class="project-link-row"><a class="button button-primary" href="../index.html#projects">Back to Project Gallery</a><a class="button button-secondary" href="../index.html">Portfolio Home</a>${repoLink}</div>
          <nav class="case-pagination" aria-label="Other project case studies"><a href="${previousId}.html"><span>Previous case</span><b>${previous.title}</b></a><a href="${nextId}.html"><span>Next case</span><b>${next.title}</b></a></nav>
        </div>
      </section>
    </main>

    <footer class="case-footer"><div class="case-shell"><p>Sourav Khandai — Data Engineering Portfolio</p><a href="../index.html#projects">Return to project map</a></div></footer>
    <button class="back-to-top" type="button" data-case-back-to-top aria-label="Back to top">↑</button>
  `;

  const backToTop = document.querySelector("[data-case-back-to-top]");
  const updateBackToTop = () => backToTop?.classList.toggle("is-visible", window.scrollY > 700);
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  updateBackToTop();
})();
