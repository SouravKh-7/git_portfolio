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
      problem: "Pipeline improvements need reproducible baselines, correctness checks, and comparable measurements.",
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
      problem: "Machine, service, warranty, maintenance, customer, dealer, and parts data are fragmented.",
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
      problem: "Fleet scheduling must consider health, availability, battery, capacity, location, and route conflicts.",
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
      problem: "Sales and inventory decisions depend on consistent data across products, stores, transactions, and stock movements.",
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
      problem: "Investigations require traceable evidence across records, procedures, incidents, and sensor summaries.",
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

  const progressItems = [
    { title: "Portfolio Website", progress: 70, status: "In progress", description: "Improving navigation, story flow, project cards, demo visuals, and tracker sections." },
    { title: "GitHub Portfolio Index", progress: 60, status: "In progress", description: "Organizing repositories, project maturity, navigation, and evidence." },
    { title: "AI-Assisted Data Reliability Platform", progress: 45, status: "Reference build", description: "Strengthening reproducibility, metadata, observability, and documentation." },
    { title: "Data Pipeline Optimization Framework", progress: 35, status: "Active build", description: "Preparing a measurable baseline and correctness-backed benchmarks." },
    { title: "Industrial Service Intelligence Platform", progress: 30, status: "Active build", description: "Building the MVP data model, service metrics, and decision-support foundation." },
    { title: "Research / Optimization Notes", progress: 25, status: "Researching", description: "Developing fleet-health, scheduling, simulation, and optimization questions." },
    { title: "PM & Business Case Studies", progress: 20, status: "Planned", description: "Turning technical projects into structured product and business cases." }
  ];

  const timelineItems = [
    { phase: "Foundation", status: "Completed", when: "Past", description: "Organized the portfolio direction around data systems, reliability, AI-ready workflows, industrial intelligence, and business cases.", progress: 100 },
    { phase: "Current Build", status: "In Progress", when: "Now", description: "Improving the GitHub Pages website, project cards, repo navigation, visual diagrams, and flagship project presentation.", progress: 55 },
    { phase: "Next Milestone", status: "Next", when: "Next", description: "Add stronger project READMEs, architecture diagrams, evidence sections, and reproducible setup instructions.", progress: 15 },
    { phase: "Later Direction", status: "Later", when: "Later", description: "Add PM/business case studies, research notes, and deeper project case-study pages.", progress: 5 }
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
  const progressList = document.querySelector("[data-progress-list]");
  const timelineList = document.querySelector("[data-timeline-list]");
  const researchNotesGrid = document.querySelector("[data-research-notes]");
  const capabilitiesGrid = document.querySelector("[data-capabilities]");

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
          <p class="milestone"><span>Next milestone</span> ${project.nextMilestone}</p>
          <div class="project-actions">
            ${repoControl}
            <button class="detail-toggle" type="button" aria-expanded="false" aria-controls="detail-${project.id}">Read Details</button>
          </div>
          <div class="project-detail" id="detail-${project.id}" hidden>
            <h4>Why it matters</h4>
            <p>${project.why}</p>
            <p class="limitation"><strong>Limitation:</strong> ${project.limitation}</p>
          </div>
        </article>`;
    }).join("");
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
        <div class="timeline-copy"><div><h4>${item.phase}</h4><span>${item.status}</span></div><p>${item.description}</p><small>${item.progress}% portfolio maturity for this phase</small></div>
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
  const detailButtons = [...document.querySelectorAll(".detail-toggle")];
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

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const detail = document.getElementById(button.getAttribute("aria-controls"));
      if (!detail) return;
      const willOpen = detail.hidden;
      detail.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
      button.textContent = willOpen ? "Close Details" : "Read Details";
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
