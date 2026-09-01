(() => {
  "use strict";

  // Editorial content is kept here so projects, stages, notes, and maturity labels
  // can be updated without changing the page structure.
  const portfolio = {
    navigation: [
      ["Home", "introduction"], ["Featured", "featured-projects"], ["Projects", "projects"], ["Thinking", "thinking"],
      ["Research", "research"], ["Blog", "blog/index.html"]
    ],
    process: [
      {
        title: "Understand the operational problem",
        body: "I begin by identifying the person who experiences the problem, the decision they are trying to make, and the cost of acting on incomplete information. This keeps the system focused on a real operating need rather than a list of technologies.",
        question: "What decision should become safer, faster, or easier to explain?"
      },
      {
        title: "Identify sources and ownership",
        body: "I map files, APIs, tables, events, logs, arrival patterns, and the teams responsible for them. Ownership and data contracts matter because reliability depends on knowing what should arrive, when it should arrive, and how a change will be communicated.",
        question: "Who owns each source, and what does the system expect from it?"
      },
      {
        title: "Preserve and transform the data",
        body: "Raw inputs remain traceable before cleaning, joins, business rules, facts, and dimensions add meaning. I choose batch, incremental, or streaming movement according to the workload and preserve enough metadata to reconstruct what happened in a run.",
        question: "Can every useful output be traced back to its source and transformation?"
      },
      {
        title: "Validate, reconcile, and document",
        body: "Schema, null, duplicate, freshness, reference, and business-rule checks identify invalid records. Reconciliation compares the source and target so that successful execution is not mistaken for correct output, while documentation records the assumptions and known gaps.",
        question: "What evidence proves that the result is complete and internally consistent?"
      },
      {
        title: "Monitor health and capture evidence",
        body: "Pipeline status, quality results, lineage, run metadata, failure reasons, and incident history make reliability visible over time. Evidence should remain close to the condition it supports, so a failure can be investigated without reconstructing the entire system from memory.",
        question: "How will the system reveal a silent or partial failure?"
      },
      {
        title: "Serve a trusted decision",
        body: "The final output may be an API, report, dashboard, operational workflow, or carefully bounded AI context. The interface changes with the user, but the trust boundary remains explicit and consequential actions stay with an accountable person.",
        question: "Who uses the result, and what authority should remain outside the system?"
      }
    ],
    filters: [["all", "All"], ["active", "Active"], ["reference", "Reference implementation"], ["research", "Research"], ["blueprint", "Blueprint"], ["parked", "Parked"]],
    projects: [
      {
        title: "Machine Maintenance and Uptime Data Pipeline",
        description: "A working local CSV pipeline using synthetic machine, telemetry, and maintenance data. It validates and quarantines records, then builds condition, reliability, combined-summary, and maintenance-priority outputs.",
        problem: "Fragmented identifiers and maintenance records make machine condition, downtime, and failure history difficult to compare.",
        maturity: "Active build · local MVP",
        area: "Machine maintenance data and reliability",
        href: "projects/manufacturing-asset-lifecycle.html",
        architecture: "Synthetic sources → validation and quarantine → condition and reliability → machine summary → maintenance priority",
        research: "Databricks Bronze/Silver/Gold, CDC, SCD Type 2, tests, and observability remain future phases.",
        next: "Add automated tests and implement the first verified Databricks lakehouse slice.",
        repo: "https://github.com/SouravKh-7/manufacturing-asset-lifecycle-platform",
        filters: ["active", "reference"]
      },
      {
        title: "Production Incident AI Assistant",
        description: "A new project for putting alerts, logs, metrics, deployments, pipeline failures, and runbooks into one incident view.",
        problem: "On-call engineers spend time collecting evidence from separate tools before they can investigate a failure.",
        maturity: "New build · scaffold only",
        area: "Production incident investigation and reliability",
        href: "projects/production-incident-ai-assistant.html",
        architecture: "Read-only sources → normalized evidence → deterministic timeline and correlation → permissioned retrieval → engineer review",
        research: "Citation validity, unsupported claims, missing telemetry, conflicting sources, and permission enforcement.",
        next: "Build a synthetic incident bundle and deterministic timeline and evidence packet.",
        repo: "https://github.com/SouravKh-7/production-incident-ai-assistant",
        filters: ["active"]
      },
      {
        title: "Manufacturing & Retail Supply Chain Lakehouse",
        description: "A planned Databricks project for joining manufacturing, supplier, warehouse, inventory, sales, and return data.",
        problem: "The source systems use different keys and grains, and their data does not arrive at the same time.",
        maturity: "New build · scaffold only",
        area: "Lakehouse and supply-chain data engineering",
        href: "projects/manufacturing-retail-supply-chain-lakehouse.html",
        architecture: "Synthetic sources → Bronze contracts → Silver conformance and quarantine → reconciled Gold products",
        research: "CDC, late data, idempotency, backfills, SCD Type 2, freshness, and controlled Spark experiments.",
        next: "Finalize versioned source contracts and implement the first reproducible Bronze slice.",
        repo: "https://github.com/SouravKh-7/manufacturing-retail-supply-chain-lakehouse",
        filters: ["active"]
      },
      {
        title: "AI-Assisted Data Reliability Platform",
        description: "A working local project that checks pipeline data, keeps failure evidence, and tests a controlled incident-response flow.",
        problem: "A pipeline can complete while producing stale, invalid, incomplete, or unreconciled data.",
        maturity: "Verified local reference implementation",
        area: "Data reliability and platform engineering",
        href: "projects/ai-data-reliability.html",
        architecture: "Source → ingestion → validation → quarantine → reconciliation → evidence → review",
        research: "Distributed quality checks, lineage, and policy-controlled remediation.",
        next: "Strengthen operational metadata, observability, and failure-recovery evidence.",
        repo: "https://github.com/SouravKh-7/ai-data-reliability-platform",
        filters: ["active", "reference"]
      },
      {
        title: "Data Pipeline Optimization Framework",
        description: "A before-and-after test of changes made to a slow data pipeline. Results will be published only after the same workload can be repeated.",
        problem: "A faster run is not useful if the test changed or the output is wrong.",
        maturity: "Active development",
        area: "Performance, benchmarking, and reliability",
        href: "projects/pipeline-optimization.html",
        architecture: "Controlled workload → baseline → experiment → correctness check → comparison",
        research: "How performance changes behave under skew, partitions, and larger workloads.",
        next: "Publish reproducible before-and-after measurements.",
        repo: "https://github.com/SouravKh-7/data-pipeline-optimization-framework",
        filters: ["active", "research"]
      },
      {
        title: "Industrial Service Intelligence Platform",
        description: "A service-data project for joining tickets, machines, customers, dealers, warranties, and spare-parts records.",
        problem: "Separate service records make delays, repeat failures, SLA risk, and customer impact hard to compare.",
        maturity: "Active development",
        area: "Industrial data products and operational intelligence",
        href: "projects/industrial-service-intelligence.html",
        architecture: "Service sources → validation → conformed model → KPIs → decision support",
        research: "Industrial service models, asset context, and traceable operational decisions.",
        next: "Complete and document the MVP and trusted service metrics.",
        repo: "https://github.com/SouravKh-7/industrial-service-intelligence-platform",
        filters: ["active"]
      },
      {
        title: "Health-Aware Robotic Fleet Optimization",
        description: "A research project for scheduling robot tasks using health, battery, location, priority, and workload data.",
        problem: "The nearest available robot may not be the safest or most reliable choice.",
        maturity: "Design and research blueprint",
        area: "Operations research and intelligent systems",
        href: "projects/robotic-fleet-optimization.html",
        architecture: "Fleet state + tasks → constraints → scheduler → simulation → reviewed decision",
        research: "Health-aware scheduling, routing, workload balance, and operational risk.",
        next: "Build a simulator and deterministic optimization baseline.",
        repo: "https://github.com/SouravKh-7/health-aware-robotic-fleet-optimization",
        filters: ["research", "blueprint"]
      },
      {
        title: "Environmental & Health-Aware Drone Fleet Intelligence",
        description: "A research plan for assigning inspection-drone work using weather, battery, communication, drone condition, and mission priority.",
        problem: "The shortest route may be a poor choice when weather, battery reserve, and drone condition are included.",
        maturity: "Research blueprint · implementation next",
        area: "Physical intelligence, drone fleets, and decision assurance",
        href: "projects/drone-fleet-intelligence.html",
        architecture: "Work order → trusted fleet + weather state → allocation → route candidates → simulation → policy review → mission plan → telemetry",
        research: "Weather- and health-aware routing, fleet coordination, digital-twin verification, and grounded agent tool use.",
        next: "Build a deterministic laptop simulation with synthetic missions, trusted state products, and transparent baseline planners.",
        repo: "https://github.com/SouravKh-7/Health-Aware-Autonomous-Drone-System",
        filters: ["research", "blueprint"]
      },
      {
        title: "Enterprise Context & Organizational Memory Lab",
        description: "A future project for testing what company information an AI tool may retrieve, use, or remember.",
        problem: "An internal AI tool needs current information and clear permissions, but it should not keep every conversation forever.",
        maturity: "Future research · implementation direction",
        area: "Enterprise context, governed memory, and AI evaluation",
        href: "projects/enterprise-context-memory.html",
        architecture: "Question → context router → authorization → context fabric → answer / action → memory write gate → reviewed memory",
        research: "Permission-aware retrieval, memory lifecycle, conflict handling, user control, evaluation, and workflow-level cost.",
        next: "Build a synthetic context-routing benchmark and permission-aware retrieval reference path.",
        filters: ["research", "blueprint"]
      },
      {
        title: "Supply Chain Digital Twin Research Lab",
        description: "A research plan for comparing inventory and recovery decisions under the same simulated conditions.",
        problem: "Two supply-chain policies cannot be compared fairly when their demand, capacity, inventory, or disruption assumptions differ.",
        maturity: "Research blueprint",
        area: "Digital twins, simulation, and operations research",
        href: "projects/supply-chain-digital-twin.html",
        architecture: "Operational state → scenario builder → simulation → policy comparison → reviewed recommendation",
        research: "Parallel scenarios, uncertainty analysis, recovery policy, and cost-aware decision deadlines.",
        next: "Build the validated state model and deterministic baseline simulation.",
        filters: ["research", "blueprint"]
      },
      {
        title: "Database Performance and Workload Lab",
        description: "A planned set of database tests for query plans, indexes, concurrency, partitions, and storage cost.",
        problem: "Database results are hard to compare when the workload, cache, hardware, or correctness checks change.",
        maturity: "Research blueprint",
        area: "Database systems and performance engineering",
        href: "projects/database-performance-lab.html",
        architecture: "Versioned data → workload generator → baseline → candidate plan → metrics and correctness",
        research: "Tail latency, plan regression, read/write trade-offs, and workload isolation.",
        next: "Define the workload model and publish the first reproducible baseline.",
        filters: ["research", "blueprint"]
      },
      {
        title: "Manufacturing Root-Cause Analysis Assistant",
        description: "An older project for collecting maintenance evidence before an engineer reviews a possible root cause.",
        problem: "Investigations are slow when machine, process, inspection, maintenance, and incident records remain scattered.",
        maturity: "Evolving into another project",
        area: "Manufacturing evidence and human review",
        href: "projects/manufacturing-root-cause.html",
        architecture: "Manufacturing events → contextual joins → quality checks → evidence → engineer review",
        research: "Traceable root-cause hypotheses without autonomous cause claims.",
        next: "Consolidate the evidence workflow into the industrial platform.",
        repo: "https://github.com/SouravKh-7/manufacturing-root-cause-analysis-assistant",
        filters: ["research", "parked"]
      },
      {
        title: "Retail Sales and Inventory Intelligence",
        description: "An older retail project kept as a small test of data modeling and quality checks.",
        problem: "Sales and inventory decisions require consistent product, store, transaction, and stock-movement data.",
        maturity: "Parked",
        area: "Business data products",
        href: "projects/retail-inventory-intelligence.html",
        architecture: "Sales + inventory → validated facts → metrics → decision view",
        research: "Domain transfer of reliable data-product patterns.",
        next: "Remain parked until the core portfolio evidence is stronger.",
        repo: "https://github.com/SouravKh-7/retail-sales-inventory-intelligence",
        filters: ["parked"]
      },
      {
        title: "Industrial Operations Business Cases",
        description: "A set of short case studies connecting industrial project ideas to users, process problems, measures, assumptions, and risks.",
        problem: "A technical design is hard to judge when the practical use is not explained.",
        maturity: "Building",
        area: "Product thinking and industrial operations",
        href: "projects/business-case-studies.html",
        architecture: "User problem → assumptions → data needs → metrics → recommendation",
        research: "How technical architecture connects to value, risk, and adoption.",
        next: "Publish the first evidence-labeled case study.",
        filters: ["active"]
      },
      {
        title: "AI and Data Product Strategy Notes",
        description: "Planned notes about evidence quality, users, controls, measures, and delivery choices.",
        problem: "A technical system is not useful until its user, limits, risks, and measures are clear.",
        maturity: "Planned",
        area: "Data and AI product strategy",
        href: "projects/business-case-studies.html",
        architecture: "Evidence → user need → controls → metrics → delivery decision",
        research: "Governed AI product decisions built on data reliability.",
        next: "Publish the first note using a real portfolio project.",
        filters: ["blueprint"]
      }
    ],
    workStates: [
      {
        state: "Demonstrated",
        tone: "demonstrated",
        summary: "Working artifacts with direct verification.",
        items: [
          ["Reliability platform", "Local end-to-end reference implementation", "#case-study"],
          ["Quality evidence", "23 tests, 85% coverage, Ruff and local API checks", "#case-study"],
          ["Architecture record", "Current and target states separated", "system-design.html"]
        ]
      },
      {
        state: "Active",
        tone: "active",
        summary: "Implementation or measurement is underway.",
        items: [
          ["Pipeline optimization", "Reproducible baseline before performance claims", "projects/pipeline-optimization.html"],
          ["Industrial service intelligence", "Core operational MVP in development", "projects/industrial-service-intelligence.html"]
        ]
      },
      {
        state: "Strengthening",
        tone: "strengthening",
        summary: "Existing work needs deeper operational evidence.",
        items: [
          ["Deployment readiness", "Runtime verification, auth, RBAC and durable metadata", "system-design.html#deployment"],
          ["Operational visibility", "Production telemetry, lineage and recovery evidence", "system-design.html#current-target"]
        ]
      },
      {
        state: "Exploring next",
        tone: "exploring",
        summary: "Research directions, explicitly not implemented.",
        items: [
          ["Streaming path", "Arrival, ordering and recovery questions", "system-design.html#movement"],
          ["Health-aware optimization", "Simulator and deterministic baseline", "projects/robotic-fleet-optimization.html"],
          ["Drone fleet intelligence", "Weather, health, routing, and policy in a deterministic simulation blueprint", "projects/drone-fleet-intelligence.html"]
        ]
      }
    ],
    maturityPathway: [
      ["Problem defined", "Demonstrated", "Failure modes and trust boundary documented."],
      ["Architecture designed", "Demonstrated", "Layers, controls and guarded actions documented."],
      ["Local implementation", "Demonstrated", "End-to-end Python, Parquet, DuckDB and FastAPI path runs locally."],
      ["Validation / evidence", "Demonstrated", "Quality, quarantine, reconciliation and incidents produce inspectable evidence."],
      ["Testing / reproducibility", "Demonstrated", "23 tests pass with 85% coverage; lint and CI checks pass."],
      ["Deployment / operations", "In progress", "Compose is configured; runtime, auth, production metadata and telemetry remain open."]
    ],
    learningLandscape: [
      ["Ingestion", "Applied", "Idempotent multi-source loads", "Run IDs, hashes, raw Parquet", "Add late-arrival and backfill cases"],
      ["Data quality", "Applied", "Contracts, quarantine, rule severity", "Unit and integration tests", "Expand rule and drift scenarios"],
      ["Modeling", "Applied", "Facts, dimensions, curated products", "Documented data model", "Validate changing dimensions"],
      ["Reconciliation", "Applied", "Counts and payment totals", "PASS/WARN/FAIL metadata", "Add tolerance and correction cases"],
      ["Observability", "Developing", "Run metadata and incidents", "API endpoints and evidence records", "Add metrics, traces and alert history"],
      ["Deployment", "Developing", "Containers and service configuration", "Dockerfile, Compose and CI validation", "Verify runtime and environments"],
      ["Distributed systems", "Studying", "Idempotency and failure boundaries", "Design notes and deterministic retries", "Test concurrency and partition behavior"],
      ["Responsible AI", "Applied", "Bounded tools and approvals", "Guarded agent tests and decision history", "Add formal evaluations and auth"]
    ],
    coverageRadar: [
      ["Data Engineering", 5, "The portfolio is anchored in ingestion, transformation, quality, testing, and serving."],
      ["Data Architecture", 4, "Projects document source boundaries, modeling, metadata, lineage, and target-state design."],
      ["Reliability", 5, "Contracts, quarantine, reconciliation, incident evidence, and recovery are recurring concerns."],
      ["Distributed Systems", 3, "Spark, partitioning, concurrency, backpressure, and fault tolerance are active research directions."],
      ["Operations Research", 3, "Scheduling, routing, simulation, and optimization are represented through blueprint and experiment work."],
      ["Industrial AI", 4, "Industrial service, manufacturing, digital-twin, and fleet contexts shape the operating problems."],
      ["Business Thinking", 4, "Projects connect technical intervention to operational decisions and measurable hypotheses."],
      ["Governed Agentic AI", 3, "Agents remain a controlled future layer over deterministic evidence, policy, approval, and audit records."]
    ],
    radar: [
      ["Data ingestion", 4, "Idempotent multi-source ingestion is implemented and tested."],
      ["Data quality", 4, "Contracts, quarantine and broad validation checks are implemented."],
      ["Observability", 3, "Run metadata and incidents exist; production telemetry does not."],
      ["Architecture", 4, "A layered local design is implemented and documented."],
      ["Testing", 4, "23 tests, 85% coverage and CI checks provide reproducibility evidence."],
      ["Documentation", 4, "Architecture, model, runbook, security and verification records exist."],
      ["Deployment readiness", 2, "Containers are configured, but local runtime and production controls remain unverified."],
      ["AI-assisted investigation", 3, "The guarded deterministic path exists; optional model use is not deployment evidence."]
    ],
    notes: [
      {
        featured: true,
        title: "Why a successful pipeline run can still be a failed data product",
        summary: "A reliability note about the gap between execution status and trustworthy output, using freshness, schema drift, quarantine, reconciliation, and evidence as the central ideas.",
        category: "Data reliability",
        time: "6 minute outline",
        href: "projects/ai-data-reliability.html"
      },
      {
        title: "Boundaries, flows, and evidence",
        summary: "An architecture note about connecting systems without presenting planned integrations as completed implementation.",
        category: "Architecture decisions",
        time: "4 minute outline",
        href: "ecosystem/"
      },
      {
        title: "What changes when asset health becomes a scheduling constraint?",
        summary: "A research question about task assignment, fleet condition, simulation, routing, risk, and the need for a deterministic baseline.",
        category: "Operations research",
        time: "5 minute outline",
        href: "projects/robotic-fleet-optimization.html"
      },
      {
        title: "How many scenarios can be evaluated before the decision deadline?",
        summary: "A digital-twin research direction connecting validated supply-chain state, parallel simulation, policy comparison, uncertainty, and recovery evidence.",
        category: "Simulation and operations research",
        time: "Research blueprint",
        href: "projects/supply-chain-digital-twin.html"
      },
      {
        title: "When does an index improve the workload rather than one query?",
        summary: "A database research direction measuring query plans, p50 and p95 latency, throughput, write overhead, storage cost, and concurrency.",
        category: "Database systems",
        time: "Research blueprint",
        href: "projects/database-performance-lab.html"
      },
      {
        title: "From technical architecture to operating value",
        summary: "A developing business-case note connecting service data, stakeholder friction, measurable outcomes, assumptions, and adoption constraints.",
        category: "Industrial intelligence",
        time: "5 minute outline",
        href: "projects/business-case-studies.html"
      },
      {
        title: "The current engineering roadmap",
        summary: "A practical record of what is being built, what is being strengthened, and which research directions remain intentionally incomplete.",
        category: "Engineering journal",
        time: "Living note",
        href: "roadmap/"
      },
      {
        title: "How should enterprise intent become a physical action?",
        summary: "A systems question connecting trusted operational state, bounded agent reasoning, deterministic optimization, digital-twin verification, policy, human authority, telemetry, and measurable outcomes.",
        category: "Enterprise-to-Physical Intelligence",
        time: "Research synthesis",
        href: "#enterprise-physical"
      },
      {
        title: "When does the shortest drone route become the wrong route?",
        summary: "A research blueprint for comparing distance-only planning with energy-, weather-, health-, communication-, and fleet-aware baselines under reproducible scenarios.",
        category: "Drone fleet intelligence",
        time: "Research blueprint",
        href: "projects/drone-fleet-intelligence.html"
      },
      {
        title: "Can a digital twin become the verification boundary before physical action?",
        summary: "A decision-assurance question about testing candidate actions, assumptions, uncertainty, and safety policy in simulation before a consequential plan is published.",
        category: "Digital twins and governance",
        time: "Research direction",
        href: "projects/drone-fleet-intelligence.html#experiments"
      }
    ]
  };

  const pad = (value) => String(value).padStart(2, "0");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const navigation = document.querySelector("[data-navigation]");
  if (navigation) navigation.innerHTML = portfolio.navigation.map(([label, target]) => `<a href="${target.includes("/") ? target : `#${target}`}">${label}</a>`).join("");

  const processMap = document.querySelector("[data-process-map]");
  const processStages = document.querySelector("[data-process-stages]");
  if (processMap && processStages) {
    processMap.innerHTML = portfolio.process.map((stage, index) => `<li data-process-marker="${index}" data-number="${pad(index + 1)}">${stage.title}</li>`).join("");
    processStages.innerHTML = portfolio.process.map((stage, index) => `<li class="process-stage reveal" data-process-stage="${index}"><span>${pad(index + 1)}</span><h3>${stage.title}</h3><p>${stage.body}</p><p class="stage-question">Guiding question: ${stage.question}</p></li>`).join("");
  }

  const projectFilters = document.querySelector("[data-project-filters]");
  const projectIndex = document.querySelector("[data-project-index]");
  const filterStatus = document.querySelector("[data-filter-status]");
  if (projectFilters && projectIndex) {
    projectFilters.innerHTML = portfolio.filters.map(([value, label], index) => `<button type="button" data-filter="${value}" aria-pressed="${index === 0}">${label}</button>`).join("");
    projectIndex.innerHTML = portfolio.projects.map((project, index) => {
      const repoLink = project.repo ? `<a href="${project.repo}" target="_blank" rel="noreferrer">View Repo <span aria-hidden="true">↗</span></a>` : "";
      return `<li class="project-row reveal" data-project data-filters="${project.filters.join(" ")}">
        <span class="project-number">${pad(index + 1)}</span>
        <div class="project-copy">
          <div class="project-heading"><h3>${project.title}</h3><span class="project-status">${project.maturity}</span></div>
          <p>${project.description}</p>
          <dl class="project-thinking-preview">
            <div><dt>Problem</dt><dd>${project.problem}</dd></div>
            <div><dt>Architecture</dt><dd>${project.architecture}</dd></div>
            <div><dt>Research direction</dt><dd>${project.research}</dd></div>
            <div><dt>Next milestone</dt><dd>${project.next}</dd></div>
          </dl>
          <nav class="project-actions" aria-label="Explore ${project.title}">
            <a href="${project.href}">Case Study <span aria-hidden="true">→</span></a>
            <a href="${project.href}#architecture">Architecture <span aria-hidden="true">→</span></a>
            <a href="${project.href}#research-questions">Research Questions <span aria-hidden="true">→</span></a>
            ${repoLink}
          </nav>
        </div>
        <div class="project-meta"><span>${project.area}</span></div>
      </li>`;
    }).join("");
  }

  const workStates = document.querySelector("[data-work-states]");
  if (workStates) {
    workStates.innerHTML = portfolio.workStates.map((zone) => `<article class="work-state work-state-${zone.tone}"><header><span>${zone.state}</span><p>${zone.summary}</p></header><ul>${zone.items.map(([name, evidence, href]) => `<li><strong>${name}</strong><span>${evidence}</span><a href="${href}">Inspect evidence <span aria-hidden="true">→</span></a></li>`).join("")}</ul></article>`).join("");
  }

  const maturityPathway = document.querySelector("[data-maturity-pathway]");
  if (maturityPathway) {
    maturityPathway.innerHTML = portfolio.maturityPathway.map(([stage, status, evidence], index) => {
      const statusClass = status.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return `<li class="maturity-stage maturity-${statusClass}"><span class="maturity-index">${pad(index + 1)}</span><div><strong>${stage}</strong><span class="maturity-status">${status}</span><p>${evidence}</p></div></li>`;
    }).join("");
  }

  const learningLandscape = document.querySelector("[data-learning-landscape]");
  if (learningLandscape) {
    learningLandscape.innerHTML = portfolio.learningLandscape.map(([area, current, practised, evidence, next]) => `<tr><th scope="row">${area}</th><td data-label="Current">${current}</td><td data-label="Practised">${practised}</td><td data-label="Evidence">${evidence}</td><td data-label="Next">${next}</td></tr>`).join("");
  }

  function renderRadarChart(target, data, options = {}) {
    if (!target) return;
    const width = 720;
    const height = 650;
    const centerX = 360;
    const centerY = 310;
    const radius = 205;
    const count = data.length;
    const id = options.id || "radar";
    const point = (index, value, labelRadius = radius) => {
      const angle = (Math.PI * 2 * index / count) - Math.PI / 2;
      const scaled = labelRadius * (value / 5);
      return [centerX + Math.cos(angle) * scaled, centerY + Math.sin(angle) * scaled];
    };
    const polygon = (value) => data.map((_, index) => point(index, value).map((number) => number.toFixed(1)).join(",")).join(" ");
    const dataPolygon = data.map(([, value], index) => point(index, value).map((number) => number.toFixed(1)).join(",")).join(" ");
    const rings = [1, 2, 3, 4, 5].map((value) => `<polygon class="radar-ring" points="${polygon(value)}"></polygon><text class="radar-scale" x="${centerX + 6}" y="${(centerY - radius * value / 5) + 14}">${value}</text>`).join("");
    const axes = data.map(([, , explanation], index) => {
      const [x, y] = point(index, 5);
      return `<line class="radar-axis" x1="${centerX}" y1="${centerY}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"><title>${explanation}</title></line>`;
    }).join("");
    const labels = data.map(([label, value, explanation], index) => {
      const [x, y] = point(index, 5, radius + 54);
      const anchor = x < centerX - 20 ? "end" : x > centerX + 20 ? "start" : "middle";
      const lines = label.length > 19 ? label.split(" ").reduce((parts, word) => {
        if (!parts.length || `${parts[parts.length - 1]} ${word}`.length > 19) parts.push(word); else parts[parts.length - 1] += ` ${word}`;
        return parts;
      }, []) : [label];
      return `<text class="radar-label" x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}"><title>${label}: ${value} of 5. ${explanation}</title>${lines.map((line, lineIndex) => `<tspan x="${x.toFixed(1)}" dy="${lineIndex ? 17 : 0}">${line}${lineIndex === lines.length - 1 ? ` · ${value}` : ""}</tspan>`).join("")}</text>`;
    }).join("");
    const markers = data.map(([, value], index) => {
      const [x, y] = point(index, value);
      return `<circle class="radar-marker" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5"></circle>`;
    }).join("");
    const rows = data.map(([label, value, explanation]) => `<tr><th scope="row">${label}</th><td>${value} / 5</td><td>${explanation}</td></tr>`).join("");
    target.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${options.title || "Portfolio focus radar"}</title><desc id="${id}-desc">${options.description || "Eight editable dimensions shown on a scale from zero to five."}</desc>${rings}${axes}<polygon class="radar-data" points="${dataPolygon}"></polygon>${markers}${labels}</svg><figcaption>${options.caption || "Editable 0–5 focus values."}</figcaption><details class="radar-fallback"><summary>Read the chart as a table</summary><div><table><thead><tr><th>Dimension</th><th>Focus</th><th>Basis</th></tr></thead><tbody>${rows}</tbody></table></div></details>`;
  }

  renderRadarChart(document.querySelector("[data-coverage-radar]"), portfolio.coverageRadar, {
    id: "coverage-radar",
    title: "Engineering and research portfolio coverage",
    description: "Eight portfolio focus dimensions from zero to five. These are illustrative concentration values, not proficiency scores.",
    caption: "ILLUSTRATIVE · Portfolio concentration only; values are editable in script.js."
  });

  const radar = document.querySelector("[data-radar]");
  renderRadarChart(radar, portfolio.radar, {
    id: "evidence-radar",
    title: "Evidence-based implementation coverage",
    description: "Eight dimensions scored from zero to five using current repository evidence.",
    caption: "ILLUSTRATIVE · Evidence coverage interpretation, not an experiment result or personal skill level."
  });

  const readingList = document.querySelector("[data-reading-list]");
  if (readingList) readingList.innerHTML = portfolio.notes.map((note) => `<article class="reading-item reveal${note.featured ? " is-featured" : ""}"><div><h3>${note.title}</h3><p>${note.summary}</p></div><div class="reading-meta"><span>${note.category}</span><span>${note.time}</span></div><a href="${note.href}" aria-label="Read ${note.title}">↗</a></article>`).join("");

  const applyFilter = (filter) => {
    let visible = 0;
    document.querySelectorAll("[data-project]").forEach((project) => {
      const show = filter === "all" || project.dataset.filters.split(" ").includes(filter);
      project.hidden = !show;
      if (show) visible += 1;
    });
    document.querySelectorAll("[data-filter]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === filter)));
    const label = portfolio.filters.find(([value]) => value === filter)?.[1] || filter;
    if (filterStatus) filterStatus.textContent = `${visible} project${visible === 1 ? "" : "s"} shown · ${label}`;
  };
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => applyFilter(button.dataset.filter)));
  applyFilter("all");

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const closeMenu = () => { navLinks?.classList.remove("is-open"); navToggle?.setAttribute("aria-expanded", "false"); };
  navToggle?.addEventListener("click", () => {
    const open = !navLinks?.classList.contains("is-open");
    navLinks?.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("click", (event) => { if (navLinks?.classList.contains("is-open") && !event.target.closest(".nav-shell")) closeMenu(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 16);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  if ("IntersectionObserver" in window) {
    const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const navSections = navAnchors.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
    const sectionObserver = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!current) return;
      navAnchors.forEach((link) => {
        const active = link.getAttribute("href") === `#${current.target.id}`;
        link.classList.toggle("is-current", active);
        if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-25% 0px -63% 0px", threshold: [0.01, 0.2] });
    navSections.forEach((section) => sectionObserver.observe(section));

    const markers = [...document.querySelectorAll("[data-process-marker]")];
    const processObserver = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!current) return;
      const index = Number(current.target.dataset.processStage);
      markers.forEach((marker, markerIndex) => marker.classList.toggle("is-active", markerIndex === index));
    }, { rootMargin: "-28% 0px -45% 0px", threshold: [0.08, 0.3] });
    document.querySelectorAll("[data-process-stage]").forEach((stage) => processObserver.observe(stage));

    if (!reducedMotion) {
      document.documentElement.classList.add("motion-ready");
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
      }, { rootMargin: "0px 0px -6%", threshold: 0.07 });
      document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    }
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  // Dynamic editorial lists can change the document height after the browser
  // performs its first hash jump. Re-align direct section links once rendering is complete.
  if (window.location.hash) {
    const initialTarget = document.querySelector(window.location.hash);
    window.requestAnimationFrame(() => initialTarget?.scrollIntoView({ behavior: "auto", block: "start" }));
  }
})();
