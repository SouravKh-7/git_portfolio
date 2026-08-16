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
    "supply-chain-digital-twin": {
      title: "Supply Chain Digital Twin Research Lab",
      subtitle: "A simulation-led data platform for evaluating inventory, backlog, disruption, allocation, and recovery scenarios before operational decisions are made.",
      status: "Research Blueprint",
      focus: ["Supply Chain Data", "Digital Twins", "Simulation", "Operations Research", "Scenario Evaluation"],
      tools: ["Python", "Pandas", "SimPy", "DuckDB", "Synthetic scenario data"],
      problem: ["Supply-chain decisions are difficult to test safely when demand, inventory, lead time, capacity, and disruption interact across many locations and time periods.", "This project defines a reproducible digital-twin research environment for comparing operational policies against the same controlled scenarios."],
      why: "I am designing it to connect reliable data engineering with simulation and operations research. The first objective is not a predictive claim; it is a transparent scenario model with explicit assumptions, baselines, and measurable outcomes.",
      flow: ["Source and scenario data", "Validated supply-chain state", "Scenario builder", "Simulation engine", "Policy comparison", "Operational metrics", "Reviewed recommendation"],
      dataFlow: "Product, facility, inventory, order, shipment, supplier, capacity, and disruption records are validated at explicit grains. A scenario builder creates controlled changes to demand, lead time, or capacity. The simulation records state transitions, decisions, backlog, service level, inventory, cost components, and recovery time for comparison.",
      decisions: [["Deterministic baseline", "Provides a reproducible comparison before optimization."], ["Event-based simulation", "Makes time, queues, capacity, and disruption explicit."], ["Scenario versioning", "Keeps assumptions and policy changes traceable."], ["Separate state and decisions", "Allows the effect of a policy to be audited."], ["Synthetic data first", "Supports safe experimentation without operational data."], ["Human-reviewed recommendations", "Keeps simulation outside direct supply-chain control."]],
      demoPlan: "Generate a small multi-echelon supply-chain dataset, validate the starting state, replay baseline demand, introduce controlled disruptions, compare replenishment or allocation policies, and publish service-level, backlog, inventory, recovery-time, and scenario-runtime evidence.",
      maturity: [["Problem framing", "Done"], ["Architecture", "In progress"], ["Data model", "Next"], ["Baseline simulation", "Planned"], ["Policy experiments", "Planned"], ["Parallel scenarios", "Future"]],
      challenges: ["Keeping assumptions visible", "Designing realistic event timing", "Separating model error from policy performance", "Avoiding unsupported business claims"],
      futureChallenges: ["Parallel scenario execution", "Calibration against public data", "Uncertainty analysis", "Optimization integration", "Scenario cost accounting"],
      agenticHelp: ["Summarize scenario differences", "Retrieve supporting runs", "Draft a structured recommendation", "Identify missing evidence"],
      agenticLimits: ["Change operational inventory", "Approve an allocation", "Hide model assumptions", "Present simulation as field evidence"],
      businessValue: "A measurable scenario environment could improve disruption preparedness and policy comparison while preserving explicit assumptions and human decision authority.",
      evidence: [["Problem statement", "Available", "Operating question and boundaries are documented."], ["Architecture", "In progress", "State, simulation, and decision layers are being defined."], ["Dataset", "Planned", "Synthetic multi-echelon records."], ["Baseline simulation", "Planned", "Reference policy and repeatable scenarios."], ["Experiment report", "Planned", "Policy and disruption comparisons."]],
      repo: ""
    },
    "database-performance-lab": {
      title: "Database Performance and Workload Lab",
      subtitle: "A reproducible research lab for studying indexing, query plans, partitioning, concurrency, storage overhead, and workload stability.",
      status: "Research Blueprint",
      focus: ["Database Systems", "Query Plans", "Indexing", "Workload Management", "Benchmarking"],
      tools: ["PostgreSQL", "DuckDB", "Python", "SQL", "Generated workloads"],
      problem: ["Query performance claims are difficult to trust when data shape, workload mix, cache state, concurrency, and correctness are not controlled.", "This project defines a benchmark lab that records comparable query plans, latency distributions, throughput, storage overhead, and write cost."],
      why: "I am designing it to study database behavior as an engineering system rather than a collection of isolated tuning tips. Every result should preserve the workload, machine profile, plan, configuration, and correctness evidence.",
      flow: ["Versioned dataset", "Workload generator", "Baseline database", "Candidate index / plan", "Concurrent execution", "Metrics and plan evidence", "Recommendation"],
      dataFlow: "Generated tables preserve row count, key distribution, selectivity, skew, and update patterns. Each benchmark run records the workload, warm-up policy, concurrency, query plan, latency distribution, throughput, storage size, write overhead, and correctness check.",
      decisions: [["Versioned workloads", "Makes comparisons repeatable."], ["Latency distributions", "Avoids hiding tail behavior behind an average."], ["Plan evidence", "Connects a result to optimizer behavior."], ["Read and write cost", "Makes index trade-offs visible."], ["Cold and warm runs", "Separates cache effects."], ["One change per experiment", "Improves causal interpretation."]],
      demoPlan: "Generate controlled relational datasets, run a documented workload against baseline and candidate configurations, capture EXPLAIN plans, p50 and p95 latency, throughput, storage overhead, write overhead, and correctness, then publish a limitations-aware comparison.",
      maturity: [["Problem framing", "Done"], ["Architecture", "In progress"], ["Workload model", "Next"], ["Baseline", "Planned"], ["Index experiments", "Planned"], ["Concurrency tests", "Future"]],
      challenges: ["Controlling cache state", "Separating plan and hardware effects", "Creating representative skew", "Avoiding production-scale claims"],
      futureChallenges: ["Concurrent workloads", "Partition pruning", "Plan regression detection", "Workload isolation", "Cost-per-query modeling"],
      agenticHelp: ["Summarize query-plan differences", "Retrieve comparable benchmark runs", "Draft experiment notes", "Flag unsupported conclusions"],
      agenticLimits: ["Apply indexes to production", "Change database configuration", "Ignore write overhead", "Present local latency as production evidence"],
      businessValue: "A controlled database lab can support query-response and infrastructure decisions using reproducible plan, latency, throughput, and storage evidence.",
      evidence: [["Problem statement", "Available", "Benchmark boundaries are documented."], ["Architecture", "In progress", "Dataset, workload, and evidence model are defined."], ["Workload generator", "Planned", "Controlled reads and writes."], ["Query-plan captures", "Planned", "Comparable EXPLAIN evidence."], ["Benchmark report", "Planned", "Latency, throughput, and overhead results."]],
      repo: ""
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

  /* Enterprise case-study renderer. All editable architecture, chart, maturity,
     business, and research content remains centralized in this JavaScript file. */
  {
    const order = Object.keys(studies);
    const projectId = document.body.dataset.projectId;
    const project = studies[projectId];
    const root = document.querySelector("[data-case-study]");
    if (!project || !root) return;

    const statusClass = project.status.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const currentIndex = order.indexOf(projectId);
    const previousId = order[(currentIndex - 1 + order.length) % order.length];
    const nextId = order[(currentIndex + 1) % order.length];
    const list = (items, className = "") => `<ul${className ? ` class="${className}"` : ""}>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    const flow = (items, label) => `<ol class="enterprise-flow" aria-label="${label}">${items.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><strong>${item}</strong></li>`).join("")}</ol>`;
    const repoLink = project.repo ? `<a class="button button-primary" href="${project.repo}">View GitHub Repo <span aria-hidden="true">↗</span></a>` : `<span class="case-link-placeholder">Repository planned</span>`;

    const defaultProfile = {
      centralIdea: project.focus[0],
      data: ["Domain records", "Reference or synthetic inputs", "Operational metadata", "Run and evidence records"],
      enterpriseConcerns: ["Ownership", "Schema evolution", "Horizontal scale", "Security", "Cost", "Recovery"],
      engineeringProfile: [4, 4, 4, 3, 2, 2, 4, 2],
      dataModel: ["Preserve the source grain and arrival metadata.", "Separate raw, validated, and decision-ready records.", "Use stable business keys and explicit event time.", "Record quality, lineage, and run metadata beside the output."],
      localArchitecture: project.flow,
      enterpriseArchitecture: ["Operational systems / APIs / files", "Batch, CDC, or event ingestion", "Object storage / lakehouse", "Distributed processing", "Quality + metadata + lineage", "Gold data products", "Warehouse / API / decision workflow"],
      failureModes: [["Source unavailable", "Retry with bounded backoff; preserve the last trusted state and open an incident."], ["Schema drift", "Fail the contract or quarantine affected records until an approved compatible change exists."], ["Duplicate delivery", "Use source keys, hashes, and idempotent writes to prevent repeated publication."], ["Late-arriving data", "Process by event time, reopen affected partitions, and reconcile corrected outputs."], ["Downstream unavailable", "Checkpoint completed work, avoid partial publication, and resume from the durable boundary."], ["Reconciliation mismatch", "Block or warn according to severity and attach source-to-target evidence to the incident."]],
      quality: ["Completeness", "Accuracy", "Validity", "Uniqueness", "Consistency", "Freshness", "Referential integrity"],
      security: ["Authentication for people and service identities", "RBAC with least-privilege access", "Encryption in transit and at rest", "Secret management outside source control", "Network isolation for data services", "Audit trails for reads, approvals, and controlled actions", "Sensitive-data discovery and masking where required"],
      observability: {
        pipeline: ["rows processed / rejected", "throughput", "latency", "freshness", "failed rules"],
        infrastructure: ["CPU", "memory", "disk", "worker utilization", "network / shuffle"],
        business: ["decision delay", "SLA risk", "operational backlog", "asset or service impact"],
        evidence: ["structured logs", "metrics", "traces", "run metadata", "incident history", "lineage"]
      },
      serviceObjectives: ["Pipeline freshness objective", "Incident detection latency", "Recovery target (RTO)", "Acceptable replay point (RPO)", "Serving-layer response target"],
      delivery: ["Pull-request review", "Unit, integration, and data-quality tests", "Schema compatibility checks", "Environment-specific configuration", "Deployment checks and release notes", "Rollback or forward-fix procedure", "GitHub Actions and Docker where implemented", "Infrastructure as code as a future production direction"],
      cost: ["Scheduled versus always-on compute", "Storage growth and retention", "Partition size and file compaction", "Network transfer and streaming cost", "Query efficiency and workload isolation", "Scaling thresholds tied to volume and latency"],
      business: {
        problemCost: "Unreliable or delayed operational data creates manual investigation, decision delay, rework, and loss of trust.",
        intervention: "The system establishes explicit ingestion, modeling, quality, evidence, and serving boundaries.",
        effect: "Operators receive a traceable data product and can distinguish trusted output from incomplete or failed processing.",
        metrics: ["decision latency", "failure detection latency", "manual investigation time", "repeat failure rate", "data-product freshness"],
        benefit: "Potential benefit: reduced failure and delay cost, lower manual effort, and better decision quality, subject to experiment evidence."
      },
      experiment: {
        hypothesis: "A controlled engineering intervention can improve an operational metric without weakening correctness.",
        variables: ["dataset volume", "failure mix", "worker count", "partition strategy", "run configuration"],
        baseline: ["Baseline", 82],
        candidate: ["Candidate", 54],
        lineLabels: ["1x", "2x", "4x", "8x", "16x"],
        lineValues: [18, 31, 49, 61, 66],
        unit: "relative workload units",
        illustrative: true
      }
    };

    const profileOverrides = {
      "ai-data-reliability": {
        engineeringProfile: [5, 4, 5, 4, 2, 1, 4, 3],
        dataModel: ["Bronze-style raw source records retain run ID, file hash, arrival time, and source identity.", "Silver-style validated and quarantined records preserve rule results and rejection reasons.", "Gold-style customer, order, and payment products expose stable analytical grains.", "Quality results, reconciliation summaries, incidents, approvals, and agent runs form the operational metadata model."],
        enterpriseArchitecture: ["ERP / CRM / payment APIs / event sources", "CDC + batch + replayable event ingestion", "Object storage / lakehouse bronze", "Spark or Flink validation and transforms", "Contracts + quarantine + metadata + lineage", "Reconciled gold data products", "Warehouse / APIs / BI", "Observability + RBAC + governed remediation"],
        business: {problemCost: "Bad data can reach reports and downstream workflows even when the pipeline reports success, creating rework and slow incident triage.", intervention: "Contracts, quarantine, reconciliation, run metadata, incident evidence, and approval-gated actions create a publication trust boundary.", effect: "Data owners can block failed datasets, locate the failed rule, compare source and target, and review a controlled response.", metrics: ["failed datasets blocked", "incident detection latency", "investigation time", "reconciliation mismatch rate", "repeat incident rate"], benefit: "Expected operational impact: fewer unreliable outputs reaching consumers and shorter evidence-gathering time during an incident."},
        experiment: {hypothesis: "Evidence-backed incident context can reduce investigation time while preserving deterministic decisions.", variables: ["dataset size", "rule count", "failure type", "worker count", "agent assistance on/off"], baseline: ["Manual evidence assembly", 84], candidate: ["Structured evidence workflow", 46], lineLabels: ["10K", "100K", "1M", "5M", "10M"], lineValues: [8, 15, 29, 53, 78], unit: "illustrative minutes / runtime index", illustrative: true}
      },
      "pipeline-optimization": {
        engineeringProfile: [5, 3, 4, 3, 5, 4, 3, 1],
        dataModel: ["A benchmark-run fact records workload, machine profile, configuration, runtime, shuffle, and output checks.", "Input data preserves controlled size, skew, key distribution, and file format.", "Experiment dimensions identify one engineering change per candidate run.", "Correctness reconciliation is a gate before any speed result is accepted."],
        enterpriseArchitecture: ["Lake / warehouse workload", "Versioned benchmark dataset", "Spark cluster with isolated queues", "Baseline and candidate jobs", "Shuffle / stage / executor telemetry", "Correctness reconciliation", "Performance and cost report"],
        business: {problemCost: "Long or unstable processing windows consume compute and place downstream SLAs at risk.", intervention: "Comparable baselines isolate one change at a time and reject performance improvements that alter output correctness.", effect: "Platform teams can choose partitioning, join, caching, and format changes using reproducible evidence.", metrics: ["runtime", "compute utilization", "shuffle volume", "throughput", "cost per run"], benefit: "Potential benefit: shorter batch windows and lower resource consumption at an explicitly measured scaling threshold."},
        experiment: {hypothesis: "Partition and join strategy can reduce runtime without changing the reconciled output.", variables: ["rows", "key skew", "partitions", "join strategy", "file format"], baseline: ["Baseline runtime", 96], candidate: ["Candidate runtime", 58], lineLabels: ["1 worker", "2", "4", "8", "16"], lineValues: [100, 61, 38, 29, 27], unit: "illustrative runtime index", illustrative: true}
      },
      "industrial-service-intelligence": {
        engineeringProfile: [4, 5, 4, 3, 2, 2, 5, 2],
        dataModel: ["Fact service event uses one documented ticket or visit grain.", "Customer, asset, dealer, region, warranty, part, and date dimensions provide conformed context.", "SCD handling preserves changing asset, dealer, and customer attributes where history matters.", "Metric definitions and source lineage remain attached to SLA, repeat-visit, and downtime measures."],
        enterpriseArchitecture: ["CRM / ERP / dealer / warranty / IoT systems", "CDC + API + scheduled batch ingestion", "Lakehouse bronze and silver layers", "Conformed service model", "Quality + ownership + lineage", "Gold service KPIs", "Warehouse / API / operations workspace"],
        business: {problemCost: "Fragmented service records delay issue detection, obscure SLA risk, and make repeat failures difficult to compare across assets and regions.", intervention: "A conformed service model standardizes event grain, asset context, metric definitions, and quality evidence.", effect: "Service teams can investigate delays, repeat visits, downtime, and dealer or region patterns using the same trusted measures.", metrics: ["first-time-fix rate", "SLA breach rate", "downtime", "resolution time", "repeat failure rate"], benefit: "Measurable hypothesis: consistent service evidence can shorten investigation and improve asset-availability decisions."}
      },
      "robotic-fleet-optimization": {
        engineeringProfile: [3, 4, 3, 3, 4, 5, 4, 2],
        dataModel: ["Fleet-state snapshots retain battery, health, location, workload, and event time.", "Task facts retain priority, location, duration, capacity, and service deadline.", "Constraint results explain why an assignment is feasible or rejected.", "Scenario and decision records preserve objective value, trade-offs, and reviewer approval."],
        enterpriseArchitecture: ["Robot / vehicle telemetry and task systems", "Streaming ingestion with event-time handling", "Time-series store + lakehouse", "Stateful stream processing", "Constraint and optimization service", "Simulation / scenario store", "Operator decision API with safety controls"],
        business: {problemCost: "Availability-only assignment can create late tasks, risky allocation, charging conflict, and uneven fleet utilization.", intervention: "Health, energy, location, workload, priority, and safety constraints are evaluated before optimization.", effect: "Operators can compare feasible schedules and understand why an asset was assigned or rejected.", metrics: ["task completion", "lateness", "energy use", "fleet utilization", "breakdown-risk assignment", "charging delay"], benefit: "Potential benefit: more resilient schedules and fewer risky assignments, subject to simulation and field validation."}
      },
      "retail-inventory-intelligence": {
        engineeringProfile: [4, 5, 4, 3, 2, 2, 5, 2],
        business: {problemCost: "Stale or inconsistent inventory state can drive poor replenishment decisions, stockouts, excess inventory, and manual reconciliation.", intervention: "Validated sales and inventory facts, conformed product/store dimensions, freshness controls, and reconciled stock movement create a trusted state.", effect: "Planners can identify stockout risk and inspect the transactions behind the reported inventory position.", metrics: ["stockout rate", "inventory freshness", "reconciliation variance", "backlog", "inventory holding risk"], benefit: "Expected operational impact: better replenishment decisions and potentially lower stockout or excess-inventory risk."}
      },
      "manufacturing-root-cause": {
        engineeringProfile: [4, 5, 4, 4, 2, 2, 5, 3],
        business: {problemCost: "Scattered machine, shift, process, inspection, and maintenance evidence slows investigations and encourages unsupported cause claims.", intervention: "An event-centered model links each pattern or hypothesis back to quality-checked source evidence.", effect: "Engineers can compare machines, shifts, and process steps while retaining human responsibility for the final root-cause decision.", metrics: ["investigation time", "evidence completeness", "repeat defect rate", "downtime", "hypothesis validation rate"], benefit: "Potential benefit: faster, more traceable investigations without allowing an assistant to assert a final cause."}
      },
      "supply-chain-digital-twin": {
        engineeringProfile: [4, 5, 4, 4, 3, 5, 5, 2],
        dataModel: ["Inventory-state facts record product, node, quantity, event time, and scenario.", "Order, shipment, capacity, supplier, and disruption events preserve causal timing.", "Policy decisions remain separate from observed state transitions.", "Scenario-run facts capture service level, backlog, inventory, recovery time, runtime, and assumptions."],
        enterpriseArchitecture: ["ERP / WMS / TMS / supplier events", "CDC + APIs + streaming events", "Lakehouse and operational state store", "Scenario builder", "Distributed simulation workers", "Optimization and policy comparison", "Planner workspace with governed recommendations"],
        business: {problemCost: "Disruption, delayed supply, and poor allocation can create stockouts, backlog, excess inventory, and slow scenario evaluation.", intervention: "A validated operational state and repeatable digital-twin model compare policies under the same demand, capacity, lead-time, and disruption assumptions.", effect: "Planners can inspect service level, backlog, inventory, recovery time, and scenario runtime before choosing an operational response.", metrics: ["service level", "backlog", "inventory cost", "stockout rate", "recovery time", "scenario runtime"], benefit: "Measurable hypothesis: faster, evidence-led scenario evaluation can improve disruption preparedness and inventory-allocation decisions."}
      },
      "database-performance-lab": {
        engineeringProfile: [4, 4, 3, 5, 4, 3, 3, 1],
        dataModel: ["Dataset versions preserve row count, selectivity, skew, and update pattern.", "Workload-run facts capture concurrency, cache state, parameters, and machine profile.", "Plan evidence stores operators, estimates, actual rows, buffers, and timing.", "Result facts record p50, p95, throughput, storage, write overhead, correctness, and limitations."],
        enterpriseArchitecture: ["Representative production schema snapshot", "Versioned benchmark dataset", "Isolated database environments", "Controlled concurrent workload", "Plan and infrastructure telemetry", "Regression comparison", "Reviewed tuning recommendation"],
        business: {problemCost: "Slow or unstable queries consume infrastructure, delay users, and create unpredictable workload contention.", intervention: "Controlled datasets and workloads compare indexes, query plans, partitioning, and configuration while recording read and write trade-offs.", effect: "Database and platform teams can evaluate a change using latency distributions, throughput, plan evidence, and storage overhead.", metrics: ["p50 latency", "p95 latency", "throughput", "storage overhead", "write overhead", "total workload runtime"], benefit: "Potential benefit: improved response and workload stability with less infrastructure waste, subject to reproducible benchmark evidence."}
      },
      "business-case-studies": {
        engineeringProfile: [2, 3, 2, 2, 1, 1, 5, 2],
        business: {problemCost: "Architecture decisions are difficult to evaluate when user friction, risk, adoption, and measurement are left implicit.", intervention: "Each case maps one user decision to assumptions, required data, technical controls, metrics, and a validation step.", effect: "Technical and business readers can challenge the same evidence and trade-offs before committing to delivery.", metrics: ["decision cycle time", "adoption", "data readiness", "risk reduction", "validation result"], benefit: "Potential benefit: better prioritization and fewer architecture choices based on untested business assumptions."}
      }
    };

    const profile = { ...defaultProfile, ...(profileOverrides[projectId] || {}) };
    const thinkingMap = project.thinkingMap || {
      centralIdea: profile.centralIdea,
      problem: project.problem.slice(0, 1),
      data: profile.data,
      risks: project.challenges.slice(0, 5),
      architecture: project.flow,
      engineering: project.tools,
      evidence: project.evidence.slice(0, 6).map(([name]) => name),
      decision: [profile.business.effect],
      futureResearch: project.futureChallenges.slice(0, 5)
    };
    const existsToday = project.existsToday || {
      implemented: project.evidence.filter(([, status]) => ["Available", "Demonstrated", "Done"].includes(status)).map(([name]) => name),
      improving: project.evidence.filter(([, status]) => ["In progress", "Available"].includes(status)).slice(0, 5).map(([name]) => name),
      future: project.futureChallenges.slice(0, 5)
    };
    const scaleRisks = project.scaleRisks || ["Data volume, skew, shuffle, and small files can make local processing inefficient.", "Concurrent runs require transactional metadata, workload isolation, and durable checkpoints.", "Schema evolution and late data can invalidate downstream partitions and historical metrics.", "Authentication, secrets, tenant boundaries, retention, and disaster recovery become operating requirements.", "Metrics and lineage cardinality can create observability and storage cost that must be governed."];
    const researchQuestions = project.researchQuestions || project.futureChallenges.map((item) => `How should ${item.charAt(0).toLowerCase()}${item.slice(1)} be designed and evaluated?`).slice(0, 5);
    const agenticFlow = ["Trusted Data / Evidence", "Context Builder", "Agent", "Structured Recommendation", "Policy Engine", "Human Approval", "Controlled Tool", "Audit Record"];
    const emphasisLabels = ["Pipeline Design", "Data Modeling", "Data Quality", "Observability", "Distributed Processing", "Optimization", "Business Workflow", "Agentic AI"];
    const emphasisData = emphasisLabels.map((label, index) => [label, profile.engineeringProfile[index]]);
    const maturityLabels = ["Problem Definition", "Architecture", "Dataset", "Pipeline", "Quality", "Testing", "Observability", "Demo", "Documentation", "Distributed Version", "Research Experiment", "Agentic AI Extension", "Enterprise Design"];
    const maturityPattern = project.status.toLowerCase().includes("reference") ? ["Done", "Done", "Done", "Done", "Done", "Done", "In Progress", "Done", "Done", "Next", "Planned", "Future", "Planned"] : project.status.toLowerCase().includes("active") ? ["Done", "Done", "In Progress", "In Progress", "Next", "In Progress", "Next", "Next", "In Progress", "Planned", "Planned", "Future", "Planned"] : ["Done", "In Progress", "Next", "Planned", "Planned", "Planned", "Next", "Planned", "In Progress", "Future", "Planned", "Future", "Planned"];
    const maturityData = maturityLabels.map((label, index) => [label, maturityPattern[index]]);

    function renderRadarChart(data, id, title) {
      const width = 680, height = 610, cx = 340, cy = 292, radius = 188, count = data.length;
      const point = (index, value, r = radius) => { const angle = Math.PI * 2 * index / count - Math.PI / 2; const scaled = r * value / 5; return [cx + Math.cos(angle) * scaled, cy + Math.sin(angle) * scaled]; };
      const polygon = (value) => data.map((_, index) => point(index, value).join(",")).join(" ");
      const rings = [1, 2, 3, 4, 5].map((value) => `<polygon class="case-radar-ring" points="${polygon(value)}"></polygon>`).join("");
      const axes = data.map((_, index) => { const [x, y] = point(index, 5); return `<line class="case-radar-axis" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"></line>`; }).join("");
      const values = data.map(([, value], index) => point(index, value).join(",")).join(" ");
      const labels = data.map(([label, value], index) => { const [x, y] = point(index, 5, radius + 50); const anchor = x < cx - 20 ? "end" : x > cx + 20 ? "start" : "middle"; return `<text class="case-radar-label" x="${x}" y="${y}" text-anchor="${anchor}">${label} · ${value}</text>`; }).join("");
      return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${title}</title><desc id="${id}-desc">Editable project-design emphasis values from zero to five. They are not personal expertise ratings.</desc>${rings}${axes}<polygon class="case-radar-data" points="${values}"></polygon>${labels}</svg>`;
    }

    function renderBarChart(experiment, id) {
      const entries = [experiment.baseline, experiment.candidate];
      const max = Math.max(...entries.map(([, value]) => value)) * 1.15;
      return `<svg viewBox="0 0 620 300" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">Illustrative baseline and candidate comparison</title><desc id="${id}-desc">Placeholder values for a future controlled experiment. These are not measured results.</desc>${entries.map(([label, value], index) => { const width = 420 * value / max; const y = 78 + index * 105; return `<text class="chart-label" x="28" y="${y - 15}">${label}</text><rect class="chart-bar chart-bar-${index}" x="28" y="${y}" width="${width}" height="36"></rect><text class="chart-value" x="${42 + width}" y="${y + 25}">${value}</text>`; }).join("")}</svg>`;
    }

    function renderLineChart(experiment, id) {
      const values = experiment.lineValues;
      const max = Math.max(...values) * 1.15;
      const points = values.map((value, index) => [55 + index * (500 / Math.max(values.length - 1, 1)), 230 - (value / max * 170)]);
      return `<svg viewBox="0 0 620 300" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">Illustrative scaling relationship</title><desc id="${id}-desc">Placeholder line values for experiment planning; replace them with measured evidence after execution.</desc><line class="chart-axis" x1="55" y1="230" x2="570" y2="230"></line><line class="chart-axis" x1="55" y1="45" x2="55" y2="230"></line><polyline class="chart-line" points="${points.map((point) => point.join(",")).join(" ")}"></polyline>${points.map(([x, y], index) => `<circle class="chart-point" cx="${x}" cy="${y}" r="5"></circle><text class="chart-tick" x="${x}" y="255" text-anchor="middle">${experiment.lineLabels[index]}</text>`).join("")}</svg>`;
    }

    function renderMaturityChart(stages) {
      return `<div class="enterprise-maturity-chart">${stages.map(([label, status], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${label}</strong><b class="maturity-${status.toLowerCase().replaceAll(" ", "-")}">${status}</b></article>`).join("")}</div>`;
    }

    const mapBranch = (title, items, className) => `<article class="thinking-branch thinking-${className}"><h3>${title}</h3>${list(items)}</article>`;
    const architectureDecisions = project.decisions.slice(0, 5).map(([title, why], index) => ({
      title,
      context: `Decision ${String(index + 1).padStart(2, "0")} addresses a constraint in the current reference design.`,
      decision: title,
      alternatives: index % 2 ? "A managed service or more operationally complex distributed component." : "A simpler file, manual, or tightly coupled implementation.",
      why,
      tradeoff: "The choice favors reproducibility and inspectability now; enterprise scale may require more operational complexity.",
      reconsider: "Reconsider when volume, concurrency, latency, recovery, governance, or team ownership changes."
    }));
    const agentSafety = [["Missing evidence", "Return insufficient evidence; do not recommend action."], ["Contradictory evidence", "Surface the conflict and require human review."], ["Prompt injection in data", "Treat operational content as untrusted data; ignore embedded instructions."], ["Unauthorized request", "Deny the tool call through identity and policy checks."], ["Destructive action", "Require an allow-listed tool, elevated approval, and an audit record—or prohibit it."], ["Duplicate execution", "Use idempotency keys and return the prior result."], ["Stale data", "Block or qualify the recommendation using freshness policy."], ["Invalid structured output", "Reject against the schema and retry within a bounded budget."], ["Model unavailable / budget exceeded", "Fall back to the deterministic workflow without blocking core operation."]];

    root.innerHTML = `
      <a class="skip-link" href="#case-main">Skip to case study</a>
      <header class="case-header"><nav class="case-nav" aria-label="Project case study navigation"><a class="case-brand" href="../index.html"><span aria-hidden="true">SK</span><b>Sourav Khandai — Data Engineering Portfolio</b></a><div><a href="../index.html">Home</a><a href="../index.html#projects">Projects</a><a href="#architecture">Architecture</a><a href="#evidence">Evidence</a><a href="#research-questions">Research</a></div></nav></header>
      <main id="case-main">
        <section class="project-hero enterprise-project-hero"><div class="case-shell"><p class="case-kicker">Data engineering case study · ${String(currentIndex + 1).padStart(2, "0")}</p><span class="case-status status-${statusClass}">${project.status}</span><h1>${project.title}</h1><p class="project-hero-subtitle">${project.subtitle}</p><p class="project-hero-boundary">Current evidence and local implementation are separated from production architecture direction throughout this case study.</p><div class="project-link-row">${repoLink}<a class="button button-secondary" href="#thinking-map">Thinking Map</a><a class="button button-secondary" href="#architecture">Architecture</a><a class="button button-secondary" href="#evidence">Evidence</a></div></div></section>

        <section class="case-study-section thinking-map-section" id="thinking-map"><div class="case-shell"><div class="case-section-heading"><p>01 · Thinking map</p><h2>How I Am Thinking About This System</h2></div><p class="thinking-map-intro">The map explains why the system exists and which constraints shape it. Architecture explains how it works; the roadmap explains what exists next.</p><div class="thinking-map"><div class="thinking-map-center"><span>Project</span><strong>${thinkingMap.centralIdea}</strong></div><div class="thinking-map-branches">${mapBranch("Problem", thinkingMap.problem, "problem")}${mapBranch("Data", thinkingMap.data || profile.data, "data")}${mapBranch("Failure Modes", thinkingMap.risks, "risks")}${mapBranch("Architecture", thinkingMap.architecture, "architecture")}${mapBranch("Engineering", thinkingMap.engineering, "engineering")}${mapBranch("Evidence", thinkingMap.evidence, "evidence")}${mapBranch("Business Decision", thinkingMap.decision, "decision")}${mapBranch("Enterprise Concerns", profile.enterpriseConcerns, "enterprise")}${mapBranch("Future Research", thinkingMap.futureResearch, "research")}</div></div></div></section>

        <section class="case-study-section case-shell" id="engineering-emphasis"><div class="case-section-heading"><p>02 · Quantitative profile</p><h2>Project Engineering Emphasis</h2></div><div class="chart-intro"><p>These editable 0–5 values describe the design emphasis of this project. They are not personal expertise ratings or measured outcomes.</p><span class="chart-state chart-state-illustrative">ILLUSTRATIVE</span></div><figure class="project-radar-chart">${renderRadarChart(emphasisData, "project-emphasis", `${project.title} engineering emphasis`)}<figcaption>Illustrative design emphasis · edit in <code>case-study.js</code>.</figcaption></figure></section>

        <section class="case-study-section case-shell case-overview" id="problem"><div class="case-section-heading"><p>03 · Problem and context</p><h2>Problem and Business Context</h2></div><div class="case-prose">${project.problem.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div><article class="why-panel"><span>Why this project</span><p>${project.why}</p></article></section>

        <section class="case-study-section architecture-section" id="architecture"><div class="case-shell"><div class="case-section-heading"><p>04 · Technical system</p><h2>System Architecture</h2></div><div class="architecture-views"><article><span class="architecture-state">LOCAL / REFERENCE ARCHITECTURE</span>${flow(profile.localArchitecture, `${project.title} local architecture`)}</article><article><span class="architecture-state">ENTERPRISE EVOLUTION · NOT IMPLEMENTED</span>${flow(profile.enterpriseArchitecture, `${project.title} enterprise architecture direction`)}</article></div></div></section>

        <section class="case-study-section case-shell" id="data-model"><div class="case-section-heading"><p>05 · Data model</p><h2>Data Model / Data Flow</h2></div><div class="data-model-grid"><div><p>${project.dataFlow}</p></div><ol>${profile.dataModel.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${item}</p></li>`).join("")}</ol></div></section>

        <section class="case-study-section adr-section" id="architecture-decisions"><div class="case-shell"><div class="case-section-heading"><p>06 · Lightweight ADR practice</p><h2>Architecture Decisions</h2></div><div class="adr-list">${architectureDecisions.map((adr, index) => `<article><header><span>ADR-${String(index + 1).padStart(3, "0")}</span><h3>${adr.title}</h3></header><dl><div><dt>Context</dt><dd>${adr.context}</dd></div><div><dt>Decision</dt><dd>${adr.decision}</dd></div><div><dt>Alternatives</dt><dd>${adr.alternatives}</dd></div><div><dt>Why chosen</dt><dd>${adr.why}</dd></div><div><dt>Trade-off</dt><dd>${adr.tradeoff}</dd></div><div><dt>Reconsider when</dt><dd>${adr.reconsider}</dd></div></dl></article>`).join("")}</div></div></section>

        <section class="case-study-section case-shell" id="quality"><div class="case-section-heading"><p>07 · Trust boundary</p><h2>Data Quality and Reliability</h2></div><div class="enterprise-copy-grid"><article><h3>Data contracts and controls</h3><p>Source contracts define grain, required fields, types, allowed values, arrival expectations, and compatibility rules. Technical checks protect schema and integrity; business-rule checks protect domain meaning. Source-to-target reconciliation determines whether publication is safe.</p>${list(profile.quality, "quality-dimensions")}</article><article><h3>Failure Modes</h3><div class="failure-response-list">${profile.failureModes.map(([failure, response]) => `<div><strong>${failure}</strong><p>${response}</p></div>`).join("")}</div></article></div></section>

        <section class="case-study-section security-section" id="security"><div class="case-shell"><div class="case-section-heading"><p>08 · Production requirement</p><h2>Security and Access Model</h2></div><p class="production-caveat">A production deployment would require the controls below. Their presence here is an architecture direction, not a compliance claim.</p>${list(profile.security, "security-control-grid")}</div></section>

        <section class="case-study-section case-shell" id="observability"><div class="case-section-heading"><p>09 · Operating signals</p><h2>Operational Observability</h2></div><div class="observability-grid"><article><h3>Pipeline metrics</h3>${list(profile.observability.pipeline)}</article><article><h3>Infrastructure metrics</h3>${list(profile.observability.infrastructure)}</article><article><h3>Business metrics</h3>${list(profile.observability.business)}</article><article><h3>Operational evidence</h3>${list(profile.observability.evidence)}</article></div>${flow(["Data Event", "Pipeline Metric", "Alert", "Incident", "Evidence", "Owner", "Resolution"], "Operational observability sequence")}</section>

        <section class="case-study-section exists-section" id="current-state"><div class="case-shell"><div class="case-section-heading"><p>10 · Evidence boundary</p><h2>What Exists Today</h2></div><div class="exists-grid"><article><span>Implemented</span>${list(existsToday.implemented.length ? existsToday.implemented : ["No implemented artifact is claimed yet."])}</article><article><span>Improving</span>${list(existsToday.improving.length ? existsToday.improving : ["Evidence depth is being strengthened."])}</article><article><span>Future</span>${list(existsToday.future)}</article></div></div></section>

        <section class="case-study-section enterprise-direction-section" id="enterprise-direction"><div class="case-shell"><div class="case-section-heading"><p>11 · Production architecture direction</p><h2>How This Would Evolve in an Enterprise</h2></div><p class="enterprise-direction-lead">The current reference implementation proves the idea locally. Enterprise evolution changes the source integrations, state management, scale boundaries, ownership model, security controls, recovery objectives, and cost profile.</p><div class="enterprise-dimension-grid"><article><h3>Data sources &amp; ingestion</h3><p>ERP, CRM, MES, IoT, databases, SaaS APIs, queues, and object storage may require batch, CDC, streaming, incremental ingestion, replay, idempotency, retries, and dead-letter handling.</p></article><article><h3>Storage &amp; processing</h3><p>Object storage, lakehouse, warehouse, metadata database, or time-series storage should match access patterns. Spark or Flink may add partitioning, checkpointing, backpressure, shuffle controls, and horizontal scale.</p></article><article><h3>Orchestration &amp; recovery</h3><p>Airflow, Databricks Workflows, or cloud schedulers would manage dependencies, retries, reruns, SLAs, state recovery, and explicit rollback or forward-fix procedures.</p></article><article><h3>Ownership &amp; governance</h3><p>Named data owners, contracts, lineage, retention, sensitive-data handling, approval policy, and audit evidence make the platform operable across teams.</p></article></div><div class="enterprise-operating-grid"><article><h3>Service Objectives</h3><p>Illustrative design targets—not achieved results.</p>${list(profile.serviceObjectives)}</article><article><h3>Delivery and Change Management</h3>${list(profile.delivery)}</article><article><h3>Cost and Resource Considerations</h3>${list(profile.cost)}</article></div></div></section>

        <section class="case-study-section experiment-section" id="experiment-plan"><div class="case-shell"><div class="case-section-heading"><p>12 · Quantitative evaluation</p><h2>Experiment Plan and Evidence</h2></div><div class="experiment-plan-grid"><article><span>Hypothesis</span><p>${profile.experiment.hypothesis}</p></article><article><span>Independent variables</span>${list(profile.experiment.variables)}</article><article><span>Acceptance boundary</span><p>Compare like-for-like workloads, preserve correctness checks, record hardware and configuration, and reject improvements that weaken data quality.</p></article></div><div class="chart-intro"><span class="chart-state chart-state-illustrative">ILLUSTRATIVE DEMO</span><p>${profile.experiment.illustrative ? "Illustrative values — replace after experiment." : "Measured result backed by experiment evidence."}</p></div><div class="experiment-chart-grid"><figure>${renderBarChart(profile.experiment, "experiment-bars")}<figcaption>Baseline versus candidate · ${profile.experiment.unit}</figcaption></figure><figure>${renderLineChart(profile.experiment, "experiment-line")}<figcaption>Scaling relationship · ${profile.experiment.unit}</figcaption></figure></div><div class="case-section-heading evidence-subheading"><p>Evidence inventory</p><h3>Charts and inspectable assets</h3></div><div class="evidence-grid case-evidence-grid" id="evidence">${project.evidence.map(([name, status, description]) => `<article><span class="evidence-status evidence-${status.toLowerCase().replaceAll(" ", "-")}">${status}</span><h3>${name}</h3><p>${description}</p></article>`).join("")}</div></div></section>

        <section class="case-study-section case-shell" id="larger-scale"><div class="case-section-heading"><p>13 · Scale boundary</p><h2>What Breaks at Scale?</h2></div><p class="scale-intro">The reference design is not presented as production-ready. These concerns identify where the architecture must change.</p><ol class="scale-risk-list">${scaleRisks.map((risk, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${risk}</p></li>`).join("")}</ol></section>

        <section class="case-study-section research-questions-section" id="research-questions"><div class="case-shell"><div class="case-section-heading"><p>14 · Research</p><h2>Research Questions</h2></div><p class="research-bridge">Each question should become a hypothesis, baseline, controlled variable set, and quantitative evaluation—not a technology claim.</p><ol class="research-question-list">${researchQuestions.map((question, index) => `<li><span>RQ${String(index + 1).padStart(2, "0")}</span><p>${question}</p></li>`).join("")}</ol></div></section>

        <section class="case-study-section case-shell" id="agentic-ai"><div class="case-section-heading"><p>15 · Governed extension</p><h2>Future Agentic AI</h2></div><blockquote class="agent-principle">Deterministic systems establish facts. Agents interpret evidence and recommend actions.</blockquote><div class="agentic-ai-panel"><ol class="agentic-flow" aria-label="Governed enterprise agent workflow">${agenticFlow.map((step) => `<li>${step}</li>`).join("")}</ol><div class="agent-plane-grid"><article><h3>Data Plane</h3>${list(["ingestion", "transformations", "quality", "models", "deterministic actions"])}</article><article><h3>Agent Plane</h3>${list(["reasoning", "retrieval", "planning", "recommendations", "tools"])}</article><article><h3>Governance Plane</h3>${list(["allow-list / deny-list", "permissions", "risk classification", "approval", "execution budget"])}</article><article><h3>Observability Plane</h3>${list(["prompt and model version", "evidence", "tool call", "decision / approval", "latency / cost"])}</article></div></div><div class="case-section-heading safety-heading"><p>Safety evaluation</p><h3>Expected agent behavior under failure</h3></div><div class="agent-safety-grid">${agentSafety.map(([test, expected]) => `<article><h4>${test}</h4><p>${expected}</p></article>`).join("")}</div></section>

        <section class="case-study-section roadmap-section" id="roadmap"><div class="case-shell"><div class="case-section-heading"><p>16 · Execution / research roadmap</p><h2>Project Maturity</h2></div><p class="maturity-note">Project maturity describes implementation and evidence, not production readiness.</p>${renderMaturityChart(maturityData)}</div></section>

        <section class="case-study-section value-section" id="value"><div class="case-shell"><div class="case-section-heading"><p>17 · Operating outcome</p><h2>Business / Operational Value</h2></div><div class="business-value-grid"><article><span>Problem Cost</span><p>${profile.business.problemCost}</p></article><article><span>Technical Intervention</span><p>${profile.business.intervention}</p></article><article><span>Operational Effect</span><p>${profile.business.effect}</p></article><article><span>Metric</span>${list(profile.business.metrics)}</article><article><span>Business Benefit</span><p>${profile.business.benefit}</p></article></div><div class="business-impact-model"><strong>Business Benefit</strong><span>=</span><p>Reduced Failure Cost + Reduced Delay Cost + Reduced Manual Investigation + Improved Asset Utilization + Improved Decision Quality − Compute Cost − Storage Cost − Operational Complexity</p></div></div></section>

        <section class="case-study-section limitations-section" id="limitations"><div class="case-shell"><div class="case-section-heading"><p>18 · Boundaries</p><h2>Limitations</h2></div><div class="challenge-columns"><article><h3>Current limitations</h3>${list(project.challenges)}</article><article><h3>Next evidence required</h3>${list(project.futureChallenges)}</article></div></div></section>

        <section class="case-study-section case-links-section" id="links"><div class="case-shell"><div class="case-section-heading"><p>19 · Continue</p><h2>Project links</h2></div><div class="project-link-row"><a class="button button-primary" href="../index.html#projects">Back to Project Gallery</a><a class="button button-secondary" href="../index.html">Portfolio Home</a>${repoLink}</div><nav class="case-pagination" aria-label="Other project case studies"><a href="${previousId}.html"><span>Previous case</span><b>${studies[previousId].title}</b></a><a href="${nextId}.html"><span>Next case</span><b>${studies[nextId].title}</b></a></nav></div></section>
      </main>
      <footer class="case-footer"><div class="case-shell"><p>Sourav Khandai — Data Engineering Portfolio</p><a href="../index.html#projects">Return to project map</a></div></footer>
      <button class="back-to-top" type="button" data-enterprise-back-to-top aria-label="Back to top">↑</button>
    `;

    const backToTop = document.querySelector("[data-enterprise-back-to-top]");
    const updateBackToTop = () => backToTop?.classList.toggle("is-visible", window.scrollY > 700);
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    updateBackToTop();
    return;
  }

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
