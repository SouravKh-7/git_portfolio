(() => {
  "use strict";

  const terms = {
    "batch processing": "Processing a bounded collection of records on a schedule or explicit trigger.",
    "streaming": "Continuously processing events as they arrive, usually with explicit ordering, state and replay rules.",
    "CDC": "Change Data Capture: recording inserts, updates and deletes from a source so downstream systems can process changes incrementally.",
    "incremental loading": "Loading only new or changed data since a recorded checkpoint instead of rebuilding the full dataset.",
    "idempotency": "The property that repeating the same operation produces the same valid end state rather than duplicate effects.",
    "schema drift": "An unexpected change in source fields, types or structure that may break or silently alter downstream processing.",
    "data contract": "A versioned agreement covering a dataset's schema, semantics, quality, cadence, ownership and change expectations.",
    "data quality": "Evidence that data satisfies defined structural, semantic, completeness, validity and timeliness expectations.",
    "reconciliation": "Comparing records, counts or business quantities across boundaries to detect missing, duplicated or inconsistent results.",
    "quarantine": "A controlled area for rejected records that preserves payloads and failure reasons without publishing them as trusted data.",
    "lineage": "Metadata describing where data came from, how it changed and which downstream assets depend on it.",
    "observability": "The ability to infer system and data-product health from run state, freshness, volume, quality, logs, metrics and traces.",
    "SLA": "Service Level Agreement: a formal commitment for service behavior such as availability, freshness or recovery.",
    "SLO": "Service Level Objective: a measurable target used to manage reliability, often supporting an SLA.",
    "RPO": "Recovery Point Objective: the maximum acceptable amount of data loss measured in time.",
    "RTO": "Recovery Time Objective: the maximum acceptable time to restore a service or data product.",
    "Bronze layer": "A source-aligned layer that preserves reproducible raw evidence plus ingestion metadata.",
    "Silver layer": "A validated and conformed layer where types, keys, quality rules and shared entities are standardized.",
    "Gold layer": "A consumer-shaped layer of metrics, facts, dimensions or aggregates prepared for a defined use.",
    "Medallion architecture": "A layered data pattern that progressively moves data from source evidence through conformance to consumer-ready products.",
    "SCD Type 2": "A dimensional modeling pattern that preserves attribute history with effective dates or versions rather than overwriting old state.",
    "event time": "The time an event occurred in the source domain.",
    "arrival time": "The time an event reached the processing platform; it may differ significantly from event time.",
    "late-arriving data": "Data received after its expected processing window, requiring explicit correction and recomputation behavior.",
    "partition pruning": "Skipping irrelevant storage partitions by applying predicates to partition columns.",
    "data skew": "An uneven distribution of records or work that overloads a subset of partitions or workers.",
    "shuffle": "Redistribution of data between distributed workers for joins, aggregations or repartitioning, often with network and disk cost.",
    "semantic layer": "A governed interface that defines business measures, dimensions and relationships consistently for consumers.",
    "ADR": "Architecture Decision Record: a short, durable record of a decision, its context, alternatives and consequences."
  };

  const lookup = new Map(Object.entries(terms).map(([term, definition]) => [term.toLowerCase(), { term, definition }]));
  const glossary = document.querySelector("[data-glossary]");
  if (glossary) {
    glossary.innerHTML = `<div class="glossary-grid">${Object.entries(terms).map(([term, definition]) => `<details><summary>${term}</summary><p>${definition}</p></details>`).join("")}</div>`;
  }

  const tooltip = document.createElement("div");
  tooltip.className = "term-definition";
  tooltip.id = "term-definition";
  tooltip.setAttribute("role", "tooltip");
  tooltip.hidden = true;
  document.body.appendChild(tooltip);

  let pinnedElement = null;
  const setExpanded = (element, expanded) => { if (element) element.setAttribute("aria-expanded", String(expanded)); };
  const hide = (force = false) => {
    if (pinnedElement && !force) return;
    setExpanded(pinnedElement, false);
    pinnedElement = null;
    tooltip.hidden = true;
  };
  const show = (element, pin = false) => {
    const entry = lookup.get((element.dataset.term || element.textContent).trim().toLowerCase());
    if (!entry) return;
    tooltip.innerHTML = `<strong>${entry.term}</strong><br>${entry.definition}`;
    tooltip.hidden = false;
    const rect = element.getBoundingClientRect();
    const width = tooltip.offsetWidth;
    const left = Math.max(16, Math.min(window.innerWidth - width - 16, rect.left));
    const top = Math.min(window.innerHeight - tooltip.offsetHeight - 16, rect.bottom + 10);
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${Math.max(16, top)}px`;
    if (pin) {
      setExpanded(pinnedElement, false);
      pinnedElement = element;
      setExpanded(element, true);
    }
  };

  document.querySelectorAll(".technical-term[data-term]").forEach((source) => {
    const element = document.createElement("button");
    element.type = "button";
    element.className = source.className;
    element.dataset.term = source.dataset.term;
    element.textContent = source.textContent;
    source.replaceWith(element);
    element.setAttribute("aria-expanded", "false");
    element.setAttribute("aria-label", `${element.textContent.trim()}: show definition`);
    element.setAttribute("aria-describedby", tooltip.id);
    element.addEventListener("mouseenter", () => { if (!pinnedElement) show(element); });
    element.addEventListener("mouseleave", () => { if (!pinnedElement) hide(); });
    element.addEventListener("focus", () => { if (!pinnedElement) show(element); });
    element.addEventListener("blur", () => { if (pinnedElement !== element) hide(); });
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      show(element, true);
    });
    element.addEventListener("keydown", (event) => {
      if (event.key === "Escape") hide(true);
    });
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".technical-term")) hide(true);
  });
  window.addEventListener("scroll", () => hide(), { passive: true });
  window.addEventListener("resize", () => hide(true));
})();
