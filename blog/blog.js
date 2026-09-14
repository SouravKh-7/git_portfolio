(() => {
  "use strict";

  const posts = [
    {
      slug: "what-should-a-company-ai-remember",
      title: "What Should a Company’s AI Remember?",
      subtitle: "From chat history to governed organizational memory",
      question: "How can an organization learn from its work without turning every conversation into permanent model memory?",
      project: "Enterprise Context & Organizational Memory Lab",
      projectLink: "../projects/enterprise-context-memory.html",
      evidence: "Future research · synthetic case study",
      theme: "Enterprise Context",
      time: "10 min",
      featured: true,
      summary: "A practical explanation of context, retrieval, user memory, organizational learning, permission, and the data platform required to keep them separate.",
      full: true,
      sections: [
        ["A company is not one document collection", [
          "Enterprise knowledge lives in many forms. Policies are documents. Sales orders are structured records. Machine condition is a changing stream. A project decision may live in a meeting transcript. A useful troubleshooting lesson may exist only in the experience of two engineers. These sources have different owners, freshness, sensitivity, and authority. Treating them as equal chunks in one vector database loses those differences.",
          "The problem is better described as context engineering than as “training a company LLM.” The model supplies general language and reasoning capability. The surrounding platform decides what organizational information is relevant, permitted, current, and trustworthy enough to use."
        ]],
        ["Context, memory, and learning are different", [
          "If an employee asks for the current warranty escalation rule, the AI should retrieve the approved policy. It does not need to learn that rule into model weights. A project mentioned during one conversation can remain session context. An explicit preference for architecture diagrams may become user-controlled memory. None of these requires retraining the model.",
          "Organizational learning is different. A useful diagnostic procedure discovered during repeated investigations should move through a pipeline: candidate lesson, supporting and contradictory evidence, review, ownership, approval, versioning, access policy, and expiry. The reusable object is validated knowledge—not the raw conversation."
        ]],
        ["Case study: a factory question that begins as conversation", [
          "Consider a synthetic factory scenario where Line 3 loses productivity after maintenance. An operator asks why output is down. Because the question is company-specific and time-sensitive, the system needs current MES data, telemetry, maintenance records, quality results, incidents, shift context, and procedures. A general list of possible causes is not enough.",
          "During retrieval, the system finds a previous engineering conversation: a similar machine once showed rising vibration after its lubrication interval was extended. That statement is useful, but it remains a hypothesis. The AI attaches it to the investigation with provenance instead of promoting it into company truth.",
          "Historical incidents partly support the pattern, and a reliability engineer approves a narrower diagnostic rule. The reviewed lesson receives machine-family scope, an owner, evidence, access policy, validity period, and supersession history. Future investigations may retrieve it; contradictory evidence can later revise or expire it."
        ]],
        ["Why this is a data-engineering problem", [
          "The model is only one component. The system needs identity, access policy, source metadata, event timestamps, lineage, live-state reconstruction, retrieval, conflict handling, retention, evaluation data, audit trails, and cost attribution. It must distinguish current telemetry from historical context and relevant evidence from authorized evidence.",
          "Enterprise context is a data product with quality, ownership, freshness, provenance, and consumers. Organizational memory is another data product with a lifecycle—not an unlimited accumulation of text."
        ]],
        ["Should company AI learn employee behavior?", [
          "There is a useful version of personalization and a dangerous one. Remembering a role, approved projects, preferred language, or explanation depth can reduce friction when the employee can inspect and control it. Silently inferring attitude, loyalty, performance, health, personality, or likelihood to leave is a different category of system.",
          "The design direction is to keep private assistance memory separate from shared organizational memory. Learn how to help a worker perform a task; do not turn ordinary work conversations into a hidden surveillance dataset."
        ]],
        ["Measure the workflow, not only the tokens", [
          "A realistic enterprise task may use an LLM, retrieval index, knowledge graph, database query, tool API, memory store, observability platform, and data pipeline. Cost should be measured at the workflow level: cost per assist, investigation, approved action, or case resolved.",
          "That makes optimization meaningful. A small model can handle simple policy-location questions; a stronger model may be justified for a complex incident. Retrieval can be cached, and context can be reduced instead of sending the company’s entire history with every prompt."
        ]],
        ["The future project", [
          "The Enterprise Context & Organizational Memory Lab will test this architecture in a small synthetic industrial setting. It will classify general versus company questions, enforce authorization before retrieval, assemble current operational context, extract candidate lessons from synthetic interactions, require review before memory is written, and measure whether the memory improves later investigations.",
          "The longer research direction connects approved knowledge to root-cause investigation, digital-twin experiments, maintenance recommendations, and bounded physical-operation decisions while keeping deterministic safety and accountable human authority outside the LLM."
        ]]
      ],
      sources: [
        ["Microsoft Azure Architecture Center — AI overview and context engineering", "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-overview"],
        ["Microsoft Research — From raw interaction to reusable knowledge", "https://www.microsoft.com/en-us/research/blog/from-raw-interaction-to-reusable-knowledge-rethinking-memory-for-ai-agents/"],
        ["Microsoft Research — GroupMemBench", "https://arxiv.org/abs/2605.14498"],
        ["Enterprise retrieval and tool-use security research", "https://arxiv.org/abs/2605.05287"],
        ["Microsoft Research — Risks in AI-mediated enterprise knowledge access", "https://www.microsoft.com/en-us/research/publication/a-framework-for-exploring-the-consequences-of-ai-mediated-enterprise-knowledge-access-and-identifying-risks-to-workers/"],
        ["FinOps Foundation — Unit economics", "https://www.finops.org/framework/capabilities/unit-economics/"],
        ["IBM — Context engineering for trusted agentic AI", "https://www.ibm.com/think/insights/context-engineering-foundation-trusted-ai"]
      ]
    },
    {
      slug: "pipeline-succeeded-data-wrong",
      title: "The Pipeline Succeeded. Why Was the Data Still Wrong?",
      question: "What should happen when compute succeeds but the data product is unsafe?",
      project: "AI-Assisted Data Reliability Platform",
      projectLink: "../projects/ai-data-reliability.html",
      evidence: "Implemented local reference path",
      theme: "Data Reliability",
      time: "8 min",
      summary: "A payment pipeline can finish every task and still publish an incomplete day. The operational problem is not job execution alone; it is deciding whether the output is safe for finance, reporting, and downstream automation.",
      hiddenFailure: "A green scheduler state proves that code completed. It does not prove completeness, freshness, schema compatibility, uniqueness, or source-to-target reconciliation.",
      industry: "This gap is already visible in production practice. Amazon built Deequ so teams could express data assumptions as executable constraints at large scale, while Google treats datasets and models as artifacts that need continuous analysis and validation. Both point to the same lesson: data checks belong inside the delivery path, not in a manual audit after publication.",
      researchSignal: "The research moves beyond fixed assertions toward learned expectations, anomaly detection, and artifact-level monitoring. But statistical checks do not replace business reconciliation. A payment total can be statistically normal and still be wrong for a specific source, date, or ledger boundary.",
      scenario: "A payment job returns success while one source is missing or structurally changed. The publication gate must respond to the evidence, not only the scheduler status.",
      engineering: "Preserve source identity and run metadata, validate contracts, quarantine invalid records, reconcile source and target, derive incidents from deterministic evidence, and require approval for consequential action.",
      blueprint: "Build a shadow publication gate before making it authoritative. Replay clean batches and known failures, measure false alarms and missed incidents, and record exactly which rule blocked a release. Promote it only after the team trusts both the decision and the evidence behind it.",
      next: "Add a duplicate-payment-batch scenario and strengthen operational metadata without weakening idempotency or reset safety.",
      sources: [
        ["Amazon Science — Deequ: data quality validation for ML pipelines", "https://www.amazon.science/publications/deequ-data-quality-validation-for-machine-learning-pipelines"],
        ["Google Research — Validating data and models in continuous ML pipelines", "https://research.google/pubs/validating-data-and-models-in-continuous-ml-pipelines/"]
      ]
    },
    {
      slug: "faster-is-not-better",
      title: "Faster Is Not Better If the Data Changes",
      question: "Can a performance improvement be accepted before correctness is reconciled?",
      project: "Data Pipeline Optimization Framework",
      projectLink: "../projects/pipeline-optimization.html",
      evidence: "Active development · results not measured",
      theme: "Performance",
      time: "8 min",
      summary: "Performance work is often reported as one attractive number. In real platforms, the harder question is whether the same data, semantics, workload, and service level produced that number.",
      hiddenFailure: "A lower runtime can conceal changed results, warm-cache bias, different hardware, skew, or an unrecorded workload change.",
      industry: "Databricks' Photon work shows how much engineering sits behind a production speedup: vectorized execution, compatibility with existing Spark APIs, fallback paths, and testing across raw and curated data. Industry has learned that a fast path only matters when it keeps the expected semantics and survives real workload diversity.",
      researchSignal: "Recent work on materialization and file layout also treats optimization as workload-dependent. Small files, clustering, reuse, and changing query patterns shift the result. The useful unit of evidence is therefore a versioned experiment, not a universal claim that one format or join strategy is faster.",
      scenario: "Compare CSV and Parquet, partition strategy, broadcast joins, or caching while reconciling row counts, keys, and measures before accepting a speedup.",
      engineering: "Version the dataset, machine profile, configuration, transformation, and metrics. Change one variable, retain Spark evidence, and reject candidates that fail output reconciliation.",
      blueprint: "Create a correctness-locked experiment ledger. Every candidate run must point to the same input snapshot, pass row/key/measure reconciliation, and report p50, p95, cost, shuffle, and spill. A result is accepted only when it improves the target without moving a protected metric outside its guardrail.",
      next: "Publish the first baseline and comparison report with runtime, correctness, configuration, and machine context.",
      sources: [
        ["Databricks — Photon: a fast query engine for lakehouse systems", "https://www.databricks.com/de/wp-content/uploads/2022/07/Photon-A-Fast-Query-Engine-for-Lakehouse-Systems.pdf"],
        ["Google Research — On optimal materialization in data lakes", "https://research.google/pubs/on-optimal-materialization-in-data-lakes/"]
      ]
    },
    {
      slug: "service-tickets-trusted-data-product",
      title: "From Service Tickets to a Trusted Industrial Data Product",
      question: "How do fragmented service records become a decision-ready product?",
      project: "Industrial Service Intelligence Platform",
      projectLink: "../projects/industrial-service-intelligence.html",
      evidence: "Active development · synthetic data",
      theme: "Industrial Intelligence",
      time: "8 min",
      summary: "Service organizations often have the evidence they need, but it is split across tickets, assets, work orders, parts, alarms, warranty records, and technician notes. The first problem is not prediction. It is reconstructing a trustworthy history of what happened to one asset.",
      hiddenFailure: "A polished dashboard can mix tickets, visits, work orders, and parts at incompatible grains and still look plausible.",
      industry: "Predictive-maintenance work has already used event logs, sensor history, and maintenance records to anticipate failure. IBM's case studies show both the opportunity and the practical dependency on feature design, failure tolerance, and usable maintenance history. A model cannot repair missing asset identity or inconsistent service events.",
      researchSignal: "The promising direction is to combine condition signals with the operational record: not only 'will this fail?' but 'what has already been tried, on which configuration, with what outcome?' That makes the output useful to a service engineer and creates better labels for future models.",
      scenario: "Investigate repeat visits for one machine family across ticket, asset, warranty, dealer, part, and maintenance records.",
      engineering: "Define source grain, conformed business keys, quality rules, metric ownership, and lineage before serving SLA risk, repeat visits, and customer impact.",
      blueprint: "Generate an evidence packet for one incoming ticket: asset timeline, repeated symptoms, last repairs, unresolved contradictions, and the closest historical cases. Let the system recommend the next check, but require each recommendation to cite the exact records behind it.",
      next: "Complete the synthetic model, trusted service metrics, and one evidence-backed investigation path.",
      sources: [
        ["IBM Research — Predictive maintenance based on event-log analysis", "https://research.ibm.com/publications/predictive-maintenance-based-on-event-log-analysis-a-case-study"],
        ["IBM Research — AI Model Factory for Industry 4.0 applications", "https://research.ibm.com/publications/ai-model-factory-scaling-ai-for-industry-40-applications"]
      ]
    },
    {
      slug: "nearest-robot-not-best",
      title: "Why the Nearest Robot Is Not Always the Best Robot",
      question: "What changes when asset health becomes a scheduling constraint?",
      project: "Health-Aware Robotic Fleet Optimization",
      projectLink: "../projects/robotic-fleet-optimization.html",
      evidence: "Research blueprint · no simulator result",
      theme: "Optimization",
      time: "8 min",
      summary: "A fleet scheduler is balancing time, energy, health, priority, congestion, and future availability. Distance is useful, but it is only one part of the cost of assigning work.",
      hiddenFailure: "Nearest-available logic can create avoidable charging, failure exposure, workload imbalance, or missed deadlines.",
      industry: "Multi-robot task allocation has been studied as a system-level optimization problem for decades because resource use, completion time, and communication overhead interact. Modern robot factories add another layer: shared inference infrastructure, network dependence, battery duration, and failure handling now affect what 'available' means.",
      researchSignal: "The strongest near-term idea is not to learn an opaque dispatch policy immediately. It is to model utility and constraints explicitly, compare allocation strategies on the same task stream, and observe when health-aware decisions outperform the simple baseline.",
      scenario: "A high-priority task arrives while the nearest robot has low battery and a degraded health score. Compare it with a constrained alternative assignment.",
      engineering: "Build synthetic fleet state, explicit hard constraints, an availability-only baseline, a health-aware scheduler, and replayable decision reports.",
      blueprint: "Run a counterfactual scheduler: replay every task twice, once with nearest-available and once with health-aware allocation. Record deadline misses, energy use, charging interruptions, workload imbalance, and constraint violations. The difference becomes a decision-regret report, not a vague optimization score.",
      next: "Implement a deterministic simulator before introducing learned health estimates or agent coordination.",
      sources: [
        ["USC Robotics — Multi-robot task allocation research", "https://robotics.usc.edu/~gerkey/research/mrta.html"],
        ["NVIDIA Research — ROSA robot-factory serving system", "https://research.nvidia.com/publication/2026-07_rosa-robotics-foundation-model-serving-system-robot-factories"]
      ]
    },
    {
      slug: "dashboard-is-not-data-product",
      title: "A Dashboard Is Not a Data Product",
      question: "What must be true before a retail metric deserves a chart?",
      project: "Retail Sales and Inventory Intelligence",
      projectLink: "../projects/retail-inventory-intelligence.html",
      evidence: "Parked · future domain transfer",
      theme: "Data Architecture",
      time: "7 min",
      summary: "A dashboard is the last visible layer of a longer system. Before a number deserves a chart, its grain, definition, owner, freshness, source, and intended decision need to be clear.",
      hiddenFailure: "Joining transaction and snapshot data without grain discipline can multiply rows and create plausible but wrong metrics.",
      industry: "Product teams have already learned that a large collection of available metrics does not automatically create useful measurement. Google's HEART work starts from goals and signals before selecting metrics, while production data-validation systems treat data quality as part of the platform. The same discipline should reach the dashboard layer.",
      researchSignal: "A useful metric is both technically reproducible and connected to a decision. That suggests two contracts: a computation contract for the data team and an interpretation contract explaining what movement in the metric should cause a user to do.",
      scenario: "Identify a store-product combination that looks healthy in sales but is approaching stockout, then trace the conclusion to sales and inventory facts.",
      engineering: "Separate facts, define keys and time semantics, validate inventory movement, publish metric contracts, and preserve drill-through evidence.",
      blueprint: "Add a metric proof test. Select one chart value on every build, drill it back to the lowest-grain facts, recompute it independently, and display the definition, owner, freshness, and exclusions beside the result. If the proof fails, the chart is withheld.",
      next: "Resume only after stronger evidence in the core portfolio; forecasting and ROI remain future work.",
      sources: [
        ["Google Research — HEART user-centered metrics framework", "https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/"],
        ["Google Research — TensorFlow Data Validation in continuous ML pipelines", "https://research.google/pubs/tensorflow-data-validation-data-analysis-and-validation-in-continuous-ml-pipelines/"]
      ]
    },
    {
      slug: "ai-suggest-cause-not-declare",
      title: "AI Can Suggest a Cause. It Should Not Declare One.",
      question: "How should an AI-assisted investigation expose evidence and uncertainty?",
      project: "Manufacturing Root-Cause Analysis Assistant",
      projectLink: "../projects/manufacturing-root-cause.html",
      evidence: "Evolving research concept",
      theme: "Industrial Intelligence",
      time: "9 min",
      summary: "During an incident, engineers need a smaller and better ordered search space. An AI assistant can help gather evidence and rank hypotheses, but a confident paragraph is not the same as a causal finding.",
      hiddenFailure: "A fluent narrative can collapse correlation into cause and hide missing or contradictory evidence.",
      industry: "Microsoft's studies of large cloud services show why this remains difficult: incidents cross dependencies, telemetry is incomplete, and mitigation may restore service before the underlying cause is known. Production RCA systems improve the search by combining dependency graphs, traces, KPIs, causal methods, and engineer feedback—not by relying on generated text alone.",
      researchSignal: "Human feedback is especially useful when it narrows uncertain dependency structure or corrects a bad hypothesis. The design opportunity is to preserve that correction as reviewed evidence for later incidents without converting every operator comment into permanent truth.",
      scenario: "A defect spike appears on one machine and shift. Compare machine, process, inspection, maintenance, and contextual records before proposing a hypothesis.",
      engineering: "Retrieve traceable evidence, preserve timestamps and grain, label hypotheses, surface conflicts, record missing checks, and require engineer review.",
      blueprint: "Use a hypothesis board instead of a single answer. Each candidate cause receives supporting evidence, contradictory evidence, missing checks, confidence, and a named reviewer. Calibrate the system by measuring whether the true cause appears in the top three and whether confidence falls when key evidence is removed.",
      next: "Integrate a bounded investigation module into the Industrial Service Intelligence project.",
      sources: [
        ["Microsoft Research — RCA for microservices with reinforcement learning from human feedback", "https://www.microsoft.com/en-us/research/publication/root-cause-analysis-for-microservice-systems-via-hierarchical-reinforcement-learning-from-human-feedback/"],
        ["Microsoft Research — Empirical study of production incidents in a large cloud service", "https://www.microsoft.com/en-us/research/publication/how-to-fight-production-incidents-an-empirical-study-on-a-large-scale-cloud-service/"]
      ]
    },
    {
      slug: "simulate-before-decision",
      title: "Simulate the Decision Before You Make It",
      question: "Can a digital twin become a verification boundary?",
      project: "Supply Chain Digital Twin Research Lab",
      projectLink: "../projects/supply-chain-digital-twin.html",
      evidence: "Research blueprint · no measured outcomes",
      theme: "Digital Twins",
      time: "8 min",
      summary: "A useful digital twin is not only a visual copy of operations. It is a controlled place to compare decisions against the same state, assumptions, uncertainty, constraints, and outcome measures.",
      hiddenFailure: "A visual twin can look authoritative while using inconsistent initial state, hidden assumptions, or incomparable scenarios.",
      industry: "Digital twins have already been used across manufacturing and asset-heavy industries, but supply chains expose a harder problem: demand, lead time, capacity, and partner behavior change together. MIT research highlights adaptive feedback between simulation and AI while also noting that supply-chain twins remain underused and are often misunderstood.",
      researchSignal: "The most credible path is to treat the twin as an experiment system. It should distinguish observed state from estimated state, keep policy versions and random seeds, and show how sensitive a recommendation is to uncertain demand or lead time.",
      scenario: "Compare inventory reallocation and recovery policies under one disruption across backlog, service, cost, and recovery time.",
      engineering: "Version the state, scenario, policy, random seed, constraints, simulator, and outcomes so every comparison can be replayed.",
      blueprint: "Build a decision twin before a visual twin. For each recommendation, store the initial state, assumptions, policy, seed, outcome distribution, and rejected alternatives. Then perturb demand and lead time to identify decisions that remain useful across uncertainty rather than winning one perfect scenario.",
      next: "Build the validated state model and a deterministic reference simulation.",
      sources: [
        ["MIT Center for Transportation & Logistics — Adaptability through digital twins", "https://ctl.mit.edu/publications/adaptability-manufacturing-operations-through-digital-twins"],
        ["MIT Center for Transportation & Logistics — Digital twins in supply chains", "https://ctl.mit.edu/news/unlocking-potential-digital-twins-supply-chains"]
      ]
    },
    {
      slug: "index-helps-workload",
      title: "When Does an Index Help the Workload, Not Just One Query?",
      question: "What evidence proves a database change improves the system?",
      project: "Database Performance and Workload Lab",
      projectLink: "../projects/database-performance-lab.html",
      evidence: "Research blueprint · benchmark planned",
      theme: "Performance",
      time: "8 min",
      summary: "An index is a workload decision. It changes reads, writes, storage, maintenance, plans, and concurrency, so one faster query is not enough evidence for a production change.",
      hiddenFailure: "One faster query can conceal slower writes, storage growth, plan instability, tail latency, or lock contention.",
      industry: "Commercial database systems have shipped workload-based tuning tools for years, including Microsoft's Index Tuning Wizard and Database Engine Tuning Advisor. The continuing research problem is regression: optimizer estimates can recommend an index that later makes part of the production workload worse.",
      researchSignal: "Recent Microsoft work focuses on candidate filtering, workload selection, continuous tuning, and explicit safeguards against query regressions. This supports a careful model: recommend broadly, change incrementally, measure on the real workload shape, and retain a rollback path.",
      scenario: "Compare a baseline and candidate index under a controlled read/write mix and repeatable cache conditions.",
      engineering: "Version data shape, workload, concurrency, cache state, configuration, query plans, latency distributions, throughput, and correctness.",
      blueprint: "Give each index candidate a benefit budget and a regression budget. Replay a mixed workload, measure p50 and p95 latency, throughput, write amplification, storage, and plan changes, then reject any candidate that improves the target query but breaches a protected workload limit.",
      next: "Define the workload generator and publish the first reproducible baseline.",
      sources: [
        ["Microsoft Research — ML-powered index tuning: progress and open challenges", "https://www.microsoft.com/en-us/research/publication/ml-powered-index-tuning-an-overview-of-recent-progress-and-open-challenges/"],
        ["Microsoft Research — Anytime algorithm of Database Tuning Advisor", "https://www.microsoft.com/en-us/research/publication/anytime-algorithm-of-database-tuning-advisor-for-microsoft-sql-server/"]
      ]
    },
    {
      slug: "architecture-to-business-value",
      title: "From Architecture Diagram to Business Value",
      question: "How does a technical intervention become a measurable business hypothesis?",
      project: "Product and Business Case Studies",
      projectLink: "../projects/business-case-studies.html",
      evidence: "Case-study track · assumptions explicit",
      theme: "Business / Product",
      time: "7 min",
      summary: "An architecture explains how a system might work. A business case must also explain whose decision changes, what baseline work is replaced or improved, how value will be measured, and what could prevent adoption.",
      hiddenFailure: "Architecture can become solution theater when the user decision, baseline, cost, risk, and validation plan are left implicit.",
      industry: "The FinOps community has pushed technology measurement from total spend toward unit economics such as cost per transaction, case resolved, or model action. Google's HEART framework reaches the same issue from the product side by mapping goals to user-centered signals and metrics. Both discourage metrics that exist without a decision context.",
      researchSignal: "Technical measures are usually leading indicators, not business outcomes. Lower latency may improve task completion; better task completion may reduce handling time; only then might cost-to-serve change. The chain needs evidence at every step instead of jumping from system performance to ROI.",
      scenario: "Take one industrial AI proposal and map the current workflow, intervention, measurable hypothesis, adoption constraints, and evidence needed for a decision.",
      engineering: "Separate facts from assumptions, define the value unit, connect technical measures to operating outcomes, and include sensitivity and adoption constraints.",
      blueprint: "Create a value evidence chain with four links: technical intervention, workflow change, operating outcome, and business result. Give every link an owner, baseline, measurement window, and failure condition. Report a range and sensitivity analysis until observed data is strong enough to replace assumptions.",
      next: "Publish the first complete case using evidence already present in the portfolio.",
      sources: [
        ["FinOps Foundation — Unit economics", "https://www.finops.org/framework/capabilities/unit-economics/"],
        ["Google Research — HEART user-centered metrics framework", "https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/"]
      ]
    },
    {
      slug: "shortest-drone-route-wrong",
      title: "When the Shortest Drone Route Is the Wrong Route",
      question: "When do environment and vehicle health change the preferred inspection mission?",
      project: "Environmental & Health-Aware Drone Fleet Intelligence",
      projectLink: "../projects/drone-fleet-intelligence.html",
      evidence: "Research blueprint · implementation next",
      theme: "Physical Intelligence",
      time: "9 min",
      summary: "An industrial inspection route has to be feasible, conflict-aware, energy-aware, and recoverable. Distance is one objective inside a safety and operations problem, not the decision by itself.",
      hiddenFailure: "The shortest route can consume more energy, enter communication gaps, stress degraded components, or leave an unsafe return reserve.",
      industry: "NASA's UAS Traffic Management research treats strategic deconfliction, tactical separation, and collision avoidance as different layers. Current work also studies routing and scheduling under wind uncertainty, operational-volume constraints, traffic flow, and package-delivery demand. Industry has already moved beyond drawing the shortest line on a map.",
      researchSignal: "For an inspection fleet, vehicle condition should enter the same planning boundary. Battery reserve, component health, wind, communication coverage, task priority, and alternative landing options need explicit uncertainty and hard constraints before an optimizer ranks feasible routes.",
      scenario: "Assign several industrial inspection tasks across a small synthetic fleet under changing wind and battery conditions.",
      engineering: "Create versioned mission, fleet, environment, health, and decision data; compare transparent planners in a replayable simulator; keep hard constraints outside the LLM.",
      blueprint: "Add an uncertainty envelope to every route. Simulate wind and energy error across a bounded range, reject plans that violate return reserve or separation in any protected case, and show why the selected route survived. If critical inputs are missing, the planner should abstain rather than manufacture confidence.",
      next: "Build Phase 1: deterministic laptop simulation with synthetic data and no field-performance claim.",
      sources: [
        ["NASA — UTM technical documents, papers, and demonstrations", "https://www.nasa.gov/directorates/armd/aosp/utm/utm-nasa-technical-documents-papers-and-presentations/"],
        ["NASA — Aerial vehicle routing and scheduling for UAS traffic management", "https://ntrs.nasa.gov/api/citations/20230009645/downloads/DASC2023_MonteCarlo_Rev-3.pdf"]
      ]
    },
    {
      slug: "elevator-scheduling-decisions",
      title: "Can an Elevator System Explain and Improve Its Own Scheduling Decisions?",
      question: "How might enterprise context, simulation, and safe control meet in a smart building?",
      project: "Future ElevateIQ direction",
      projectLink: "../engineering-notes.html#enterprise-physical",
      evidence: "Future concept · no implementation",
      theme: "Physical Intelligence",
      time: "8 min",
      summary: "Elevator dispatch is a compact example of a larger physical-intelligence problem: demand changes over time, the full state is not observable, several assets act as a team, and the controller must respect service and safety boundaries.",
      hiddenFailure: "An optimization can improve average wait while worsening tail latency, energy, equipment stress, accessibility, or emergency behavior.",
      industry: "Research on reinforcement learning for elevator groups showed decades ago that dispatch is continuous, stochastic, partially observed, and multi-agent. Simulation could outperform a heuristic on its chosen objective, but that does not make direct deployment safe or prove that every operational objective improved.",
      researchSignal: "A modern design can add health state, energy, accessibility, emergency modes, and explanation without asking an LLM to control the cars. Learned or optimized policies can remain inside a simulator and shadow evaluator while deterministic controllers and certified constraints keep authority.",
      scenario: "Morning queue congestion raises waiting time. Compare the current policy with a simulated candidate while monitoring energy, p95 wait, utilization, and health constraints.",
      engineering: "Preserve event identity, demand state, car health, policy version, simulator inputs, constraints, decision trace, and measured outcomes.",
      blueprint: "Build a shadow-policy evaluator that watches the same demand stream as the current scheduler. Compare average and p95 wait, energy, car utilization, health stress, accessibility service, and emergency constraints. It may explain a different assignment, but it cannot command a car.",
      next: "Keep this as a future direction until a deterministic simulation and evidence model exist.",
      sources: [
        ["NeurIPS — Improving elevator performance using reinforcement learning", "https://papers.neurips.cc/paper/1073-improving-elevator-performance-using-reinforcement-learning.pdf"],
        ["University of Massachusetts — Elevator group control with multiple RL agents", "https://doi.org/10.1023/A:1007518724497"]
      ]
    }
  ];

  const bySlug = Object.fromEntries(posts.map((post) => [post.slug, post]));
  const root = document.querySelector("[data-blog-root]");
  if (!root) return;

  const header = () => `<a class="skip-link" href="#blog-main">Skip to content</a><header class="blog-header"><nav class="blog-nav"><a class="blog-brand" href="../index.html"><span aria-hidden="true">SK</span><b>Sourav Khandai</b></a><div><a href="../index.html">Portfolio</a><a href="../index.html#projects">Projects</a><a href="../engineering-notes.html#company-context">Context &amp; Memory</a><a href="index.html">All stories</a></div></nav></header>`;
  const footer = () => `<footer class="blog-footer"><div><p>© 2026 Sourav Khandai</p><p>Reliable systems · honest evidence · human judgment</p><a href="#blog-main">Back to top ↑</a></div></footer>`;
  const card = (post) => `<article class="blog-card" data-theme="${post.theme}"><div class="blog-card-meta"><span>${post.theme}</span><span>${post.evidence}</span></div><h2>${post.title}</h2><p class="blog-card-question">${post.question}</p><p>${post.summary}</p><div class="blog-card-footer"><span>${post.project} · ${post.time}</span><a href="${post.slug}.html" aria-label="Read ${post.title}">Read story <span aria-hidden="true">→</span></a></div></article>`;

  if (document.body.hasAttribute("data-blog-index")) {
    const themes = ["All", ...new Set(posts.map((post) => post.theme))];
    root.innerHTML = `${header()}<main id="blog-main"><section class="blog-index-hero"><div><p class="blog-kicker">Research notes &amp; project stories</p><h1>The reasoning behind the systems.</h1><p>Each story starts with a real operating problem, connects it to what industry has already learned, and then turns current research into a small, testable engineering blueprint. Project status and evidence limits remain explicit throughout.</p></div><aside><strong>${posts.length}</strong><span>stories and blueprints</span><p>Use case → industry lesson → research signal → practical experiment.</p></aside></section><section class="blog-index"><div class="blog-filters" role="group" aria-label="Filter stories">${themes.map((theme, index) => `<button type="button" data-blog-filter="${theme}" aria-pressed="${index === 0}">${theme}</button>`).join("")}</div><p class="blog-filter-status" aria-live="polite">${posts.length} stories shown</p><div class="blog-grid">${posts.map(card).join("")}</div></section></main>${footer()}`;
    document.querySelectorAll("[data-blog-filter]").forEach((button) => button.addEventListener("click", () => {
      const theme = button.dataset.blogFilter;
      document.querySelectorAll("[data-blog-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      let visible = 0;
      document.querySelectorAll(".blog-card").forEach((item) => { const show = theme === "All" || item.dataset.theme === theme; item.hidden = !show; if (show) visible += 1; });
      document.querySelector(".blog-filter-status").textContent = `${visible} ${visible === 1 ? "story" : "stories"} shown · ${theme}`;
    }));
    return;
  }

  const post = bySlug[document.body.dataset.blogSlug];
  if (!post) { root.innerHTML = `${header()}<main id="blog-main" class="blog-not-found"><h1>Story not found</h1><a href="index.html">Browse all stories</a></main>${footer()}`; return; }

  const sourceList = (sourceItems) => `<section class="article-sources"><h2>10. Research references</h2><ol>${sourceItems.map(([name, href]) => `<li><a href="${href}" target="_blank" rel="noreferrer">${name} <span aria-hidden="true">↗</span></a></li>`).join("")}</ol></section>`;
  const standardBody = `<section><h2>1. The operating problem</h2><p>${post.summary}</p></section><section><h2>2. Why the obvious solution is incomplete</h2><p>${post.hiddenFailure}</p></section><section><h2>3. What industry has already learned</h2><p>${post.industry}</p></section><section><h2>4. What the research suggests</h2><p>${post.researchSignal}</p></section><section><h2>5. The engineering question</h2><blockquote>${post.question}</blockquote></section><section><h2>6. Case study / scenario</h2><p>${post.scenario}</p></section><section><h2>7. Architecture and decisions</h2><p>${post.engineering}</p></section><section><h2>8. A practical blueprint to test</h2><p>${post.blueprint}</p></section><section class="article-evidence"><h2>9. Evidence, limits, and next step</h2><p><strong>${post.evidence}.</strong> This story does not claim users, deployments, or measured benefits that the project has not demonstrated.</p><p><strong>Next experiment:</strong> ${post.next}</p></section>${sourceList(post.sources)}`;
  const fullBody = post.full ? post.sections.map(([title, paragraphs], index) => `<section><h2>${index + 1}. ${title}</h2>${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</section>`).join("") + `<section class="article-evidence"><h2>${post.sections.length + 1}. Evidence and limits</h2><p><strong>${post.evidence}.</strong> The Line 3 example is synthetic, the future project is not deployed inside a real employer, and no real employee conversations are used. The architecture and research questions are available; implementation results are not yet claimed.</p></section><section class="article-sources"><h2>Research references</h2><ol>${post.sources.map(([name, href]) => `<li><a href="${href}">${name} <span aria-hidden="true">↗</span></a></li>`).join("")}</ol></section>` : "";
  root.innerHTML = `${header()}<main id="blog-main"><article><header class="article-hero"><div class="article-meta"><span>${post.theme}</span><span>${post.evidence}</span><span>${post.time} read</span></div><h1>${post.title}</h1>${post.subtitle ? `<p class="article-subtitle">${post.subtitle}</p>` : ""}<p class="article-question">${post.question}</p><div class="article-links"><a href="${post.projectLink}">Related project <span aria-hidden="true">→</span></a><a href="index.html">All stories</a></div></header><div class="article-layout"><aside class="article-rail"><span>Related project</span><strong>${post.project}</strong><p>${post.evidence}</p><a href="${post.projectLink}">View architecture and evidence →</a></aside><div class="article-body">${post.full ? fullBody : standardBody}</div></div></article><nav class="article-next" aria-label="Continue reading"><a href="${post.projectLink}"><span>Return to the engineering record</span><strong>${post.project}</strong></a><a href="index.html"><span>Explore the collection</span><strong>All research notes &amp; stories</strong></a></nav></main>${footer()}`;
})();
