# Sourav Khandai — Data Engineering Portfolio

I build projects around machine data, production incidents, supply chains and data quality. This repository contains the website and case studies. Each project has its own source repository.

[Open the portfolio](https://souravkh-7.github.io/git_portfolio/) · [GitHub profile](https://github.com/SouravKh-7)

## Start with the code

| Project | What exists | Next step |
| --- | --- | --- |
| [Manufacturing Equipment Lifecycle & Uptime Intelligence Platform](https://github.com/SouravKh-7/manufacturing-asset-lifecycle-platform) | Python scripts validate synthetic CSVs, quarantine invalid rows and calculate condition, reliability and maintenance priority. | Tests for the existing logic, followed by the hackathon telemetry contract. |
| [Pipeline Reliability Workbench](https://github.com/SouravKh-7/production-incident-ai-assistant) | Python scaffold, incident and evidence contracts, and an initial contract test. | Build a deterministic incident timeline from a synthetic bundle. |
| [Manufacturing & Retail Supply Chain Lakehouse](https://github.com/SouravKh-7/manufacturing-retail-supply-chain-lakehouse) | Source-contract type, contract test and design notes. | Implement the first reproducible Bronze ingestion slice. |

The manufacturing output helps explain how readings and maintenance history contribute to a priority. The incident and supply-chain projects describe intended uses while their pipelines are being built. No business savings or production deployment is claimed.

## Hackathon work

- [Hackathon Build Journal](https://github.com/SouravKh-7/hackathon-build-journal) records the problem, plan, progress and lessons.
- [NVIDIA hackathon execution](https://github.com/SouravKh-7/nebius-nvidia-manufacturing-uptime-ai) holds the hackathon-specific plans and future additions.
- The OpenCV competition currently has an initial journal entry.

## Website structure

| File or directory | Purpose |
| --- | --- |
| `index.html` | Short homepage with current output, featured projects, hackathons and approach. Jekyll renders its project cards from the catalog. |
| `_data/projects.yml` | Project catalog. The `home` fields supply the featured homepage summaries. |
| `projects.md` | Full catalog, including supporting work and research. |
| `projects/` | Technical case studies. |
| `engineering-notes.html` | Longer architecture notes, glossary and research directions. |
| `blog/` | Articles and project questions. |
| `styles.css` | Shared palette and existing page styles. |
| `home.css`, `home.js` | Homepage and notes layout; mobile navigation. Main content is rendered before JavaScript runs. |
| `script.js` | Earlier project presentation data and helpers, retained for compatibility. The new homepage does not use it. |
| `docs/writing-style.md` | Writing rules and examples for future updates. |
| `docs/portfolio-review.md` | Review findings, changes made and the remaining organization work. |

## Build locally

The site uses Jekyll, the Minima theme and Bundler. Run these commands from this repository:

```sh
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

The site uses the base path `/git_portfolio`. Open the corresponding path on the local Jekyll server. The generated site is written to `_site/`.

For an isolated verification build:

```sh
bundle exec jekyll build --disable-disk-cache --destination ../portfolio-build
```

GitHub Pages publishes the site. Check the live page after pushing; a successful local build alone does not confirm deployment.

## Updating a project

Update the catalog first, then check its case study and source README. Keep the same name and current status across those pages. Mark tools that are only proposed, link to code or output for current claims, and record the next concrete task.

The broader portfolio includes [supporting implementations and research](https://souravkh-7.github.io/git_portfolio/projects/). The featured project order remains manufacturing, incident investigation, then supply chain.
