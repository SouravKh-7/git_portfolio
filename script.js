(() => {
  "use strict";

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
      clearFilter.textContent = filterButtons.some((button) => button.dataset.filter === filter)
        ? "Clear filter"
        : "Clear guided path";
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

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
    if (!navLinks?.classList.contains("is-open")) return;
    if (!event.target.closest(".nav-shell")) closeNavigation();
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
  const navigationTargets = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!activeEntry) return;

        navigationLinks.forEach((link) => {
          link.classList.toggle("is-current", link.getAttribute("href") === `#${activeEntry.target.id}`);
        });
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0.01, 0.15, 0.35] }
    );

    navigationTargets.forEach((section) => sectionObserver.observe(section));
  }

  const yearOutput = document.querySelector("[data-current-year]");
  if (yearOutput) yearOutput.textContent = String(new Date().getFullYear());

  setFilter("all");
})();
