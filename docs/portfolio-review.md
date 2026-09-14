# Portfolio review — 14 September 2026

Scope: the public homepage, portfolio source, public GitHub repository list, profile README, featured project READMEs and the manufacturing case study. This was a presentation and organization review, not a complete audit of every project's code.

## Main findings

1. The homepage repeated project status, architecture principles, AI boundaries and research direction across many large sections. Readers had to scroll through broad statements to find implementation details.
2. The opening introduced architecture and tools before showing an inspectable output.
3. The full-screen hero and large section spacing gave short statements more space than the code evidence.
4. The homepage duplicated project content already maintained in the YAML catalog.
5. A dated timeline described work by calendar period without linking evidence for each period. The new homepage uses current project states instead.
6. The GitHub profile used earlier display names for the manufacturing and incident projects. The public portfolio uses the longer manufacturing title and Pipeline Reliability Workbench.
7. The public repository list showed no homepage links on the reviewed repositories. Several older research repositories also had no description.
8. The portfolio's writing was strongest when it named files, keys and limitations. Repeated phrases about governed intelligence and operational decisions made other passages less specific.

## Changes made in the portfolio repository

- Replaced the long homepage with a shorter sequence: actual output, projects, implementation example, hackathons, approach and writing.
- Kept the olive, cream and serif style, with smaller headings and more readable content widths.
- Added an actual synthetic machine result, with a link to the saved CSV and the calculation at an inspected commit.
- Rendered featured project cards from the existing YAML catalog.
- Kept detailed architecture, glossary and research sections on engineering-notes.html.
- Removed the homepage's dependence on scroll-triggered text visibility.
- Kept the NVIDIA and OpenCV cards together, with full event names and current status.
- Rewrote the homepage, About page and repository introduction using direct technical language.
- Added writing guidance with concrete before-and-after examples.
- Put technical evidence before the problem description in the full project catalog.

## Recommended GitHub organization

Keep the current repository boundaries: long-term manufacturing code, NVIDIA hackathon execution and central journal. They serve different purposes and already link to each other.

Suggested profile pins, in order:

1. manufacturing-asset-lifecycle-platform — current local implementation and domain focus.
2. nebius-nvidia-manufacturing-uptime-ai — current hackathon plan and future additions.
3. ai-data-reliability-platform — supporting local implementation; verify its current tests before promoting exact counts.
4. production-incident-ai-assistant — clearly labelled Python scaffold.
5. manufacturing-retail-supply-chain-lakehouse — clearly labelled contracts and design.
6. hackathon-build-journal — progress across the two events.

Add the live portfolio as the website link on git_portfolio. Use the corresponding case-study link for each featured source repository. Give older research repositories a short description stating their actual state.

Align the profile's display names with the portfolio. Repository URLs do not need to change. Keep earlier work in a supporting or research section; do not archive or rename a repository solely to make the profile look tidier.

These profile, pin and repository-setting recommendations were not applied as part of the website edit.

## Next content work

- Rewrite the remaining long case studies and older articles using docs/writing-style.md. The existing notes retain earlier wording; moving them did not constitute a complete rewrite.
- Replace broad research descriptions with one question, one proposed experiment and its acceptance criteria.
- Add real test evidence to the manufacturing case study once automated tests exist.
- Add a short demo recording after the hackathon application runs.
- Verify historical test and coverage claims against an exact code version before reusing them.
- Retire unused presentation data in script.js after checking all dependent pages. The current homepage uses the YAML catalog and home.js.

## Practical value to demonstrate later

For manufacturing, measure whether a reviewer can trace a priority to source records and whether that reduces review effort. For incident work, measure timeline completeness and retrieval relevance before claiming faster incident resolution. For supply-chain work, show that quantities reconcile before claiming better business decisions.
