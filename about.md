---
layout: page
title: About
permalink: /about/
---

I’m Sourav Khandai. I work on data engineering projects using Python and SQL, with manufacturing data as my starting point.

My manufacturing and process-engineering background gives me practical questions to work on. How do I connect a machine reading to its maintenance history? What happens when an ID is missing? Can I explain the calculation behind a maintenance priority?

I started the equipment project with CSV files. It now checks machine, telemetry and maintenance records, keeps rejected rows with reasons, and creates condition, reliability and priority outputs. The next work is to test those calculations and build the streaming extension described in the NVIDIA hackathon repository.

## What I’m working on

- A working local Python pipeline for machine and maintenance data.
- A Python scaffold for collecting production-incident evidence.
- Source contracts and a data model for a manufacturing and retail supply-chain lakehouse.
- Plans for PySpark, Databricks and Delta Lake as those projects grow.

[See the projects and their current state]({{ '/projects/' | relative_url }}).

## How I approach the work

I start with the source records and the question the output should answer. I define the keys, write the transformations and check the calculations. Missing data, duplicate rows and failed joins need to be visible.

After that, I look at the practical use. A maintenance summary might make a review easier, but I would need a comparison with the existing process before claiming time saved or lower downtime.

For the planned AI work, I want the assistant to retrieve relevant records and explain what they show. The engineer remains responsible for the decision.

## What I’m learning next

I want to get deeper into Spark processing, late data, incremental updates, table history and failure recovery. I also keep research notes on scheduling, simulation, robotics and document retrieval.

[Engineering notes]({{ '/engineering-notes.html' | relative_url }}) · [GitHub](https://github.com/SouravKh-7)
