---
layout: page
title: Projects
permalink: /projects/
---

Start with the three main data-engineering projects. Supporting implementations come next, followed by research plans and future ideas. Every entry separates what exists now from what comes next.

## Simple Status Guide

- **Active Build** - working code exists and the next implementation phase is underway.
- **Early Build** - architecture and starter code exist; the end-to-end system is not complete.
- **Working Reference / Active Study** - useful supporting evidence, but not a main portfolio project.
- **Earlier Experiment** - retained to show prior learning without competing with current work.
- **Design Study / Research Plan / Future Idea** - exploratory work; no completed implementation or result is claimed.

{% assign categories = "Featured Data Engineering Projects|Supporting Data & Industrial Projects|Research & Future Ideas" | split: "|" %}
{% for category in categories %}
## {{ category }}

{% assign category_projects = site.data.projects | where: "category", category %}
{% for project in category_projects %}
### {{ project.name }}

**Status:** {{ project.status }}<br>

{{ project.summary }}

**Current engineering evidence:**
{% if project.engineering_evidence.size > 0 %}
{% for item in project.engineering_evidence %}
- {{ item }}
{% endfor %}
{% else %}
- No implementation evidence is claimed yet.
{% endif %}

**AI role:** {{ project.ai_role }}<br>
**Limitations:** {{ project.limitations }}<br>
**Next milestone:** {{ project.next_milestone }}

**Problem this work addresses:** {{ project.problem }}

{% if project.references.size > 0 %}
**Open-source and research references:**
{% for reference in project.references %}
- [{{ reference.name }}]({{ reference.url }}) — {{ reference.kind }}. {{ reference.note }}
{% endfor %}
{% endif %}

{% if project.repository_url != "" %}[Repository / project record]({{ project.repository_url }}){% endif %}{% if project.case_study_url != "" %} · [Case study]({{ project.case_study_url }}){% endif %}{% if project.blog_url != "" %} · [Blog]({{ project.blog_url }}){% endif %}

{% if project.related_projects.size > 0 %}**Related work:** {{ project.related_projects | join: ", " }}{% endif %}

{% endfor %}
{% endfor %}
