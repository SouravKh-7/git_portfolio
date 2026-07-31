(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const backToTop = document.querySelector("[data-back-to-top]");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const projectCards = [...document.querySelectorAll("[data-project-card]")];
  const projectGroups = [...document.querySelectorAll("[data-project-group]")];
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const pathButtons = [...document.querySelectorAll("[data-path-filter]")];
  const clearFilter = document.querySelector("[data-clear-filter]");
  const countOutput = document.querySelector("[data-project-count]");
  const filterFeedback = document.querySelector("[data-filter-feedback]");
  const emptyState = document.querySelector("[data-empty-state]");
  const emptyReset = document.querySelector("[data-reset-empty]");

  const filterLabels = {
    all: "Showing the full project ecosystem.",
    flagship: "Showing the primary flagship system.",
    active: "Showing projects with active implementation work.",
    industrial: "Showing industrial and operational systems.",
    "ai-systems": "Showing AI-assisted and AI-ready system work.",
    research: "Showing optimization and research projects.",
    "parked-evolved": "Showing parked, evolving, and archived work.",
    "business-cases": "Showing product and business case studies.",
    recruiter: "Recruiter path: flagship, active builds, and a product case.",
    engineer: "Engineer path: technical systems, reliability, and optimization.",
    researcher: "Researcher path: robotics, routing, simulation, and optimization.",
    business: "Business path: industrial data products and value-focused cases.",
    "ai-reader": "AI systems path: grounded, bounded, human-controlled workflows."
  };

  const setActiveFilter = (filter) => {
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const categories = (card.dataset.filters || "").split(" ");
      const audiences = (card.dataset.audiences || "").split(" ");
      const visible = filter === "all" || categories.includes(filter) || audiences.includes(filter);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    projectGroups.forEach((group) => {
      group.hidden = !group.querySelector("[data-project-card]:not([hidden])");
    });

    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const isAudiencePath = !filterButtons.some((button) => button.dataset.filter === filter);
    clearFilter.hidden = filter === "all";
    countOutput.textContent = String(visibleCount);
    filterFeedback.textContent = filterLabels[filter] || `Showing ${visibleCount} matching projects.`;
    emptyState.hidden = visibleCount !== 0;

    if (isAudiencePath) {
      clearFilter.textContent = "Clear guided path ×";
    } else {
      clearFilter.textContent = "Clear filter ×";
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
  });

  pathButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.pathFilter);
      document.querySelector("#projects").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  [clearFilter, emptyReset].forEach((button) => {
    button?.addEventListener("click", () => setActiveFilter("all"));
  });

  const closeNavigation = () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  const updateScrollState = () => {
    const isScrolled = window.scrollY > 24;
    header.classList.toggle("is-scrolled", isScrolled);
    backToTop.classList.toggle("is-visible", window.scrollY > 720);
  };

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const navSectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sectionTargets = navSectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        navSectionLinks.forEach((link) => {
          link.classList.toggle("is-current", link.getAttribute("href") === `#${visibleEntry.target.id}`);
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.01, 0.2] }
    );

    sectionTargets.forEach((section) => sectionObserver.observe(section));
  }

  setActiveFilter("all");
})();
