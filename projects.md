---
layout: page
title: Projects
permalink: /projects/
---

This catalog separates working evidence from active, parked, evolving, and archived work. A project brief or roadmap is not presented as completed implementation.

## Status Guide

- **Reference Implementation** - runs locally with documented behavior, tests, and limitations.
- **Active Development** - working implementation exists, but significant milestones remain.
- **Design / Blueprint** - architecture and requirements exist, while implementation is limited.
- **Research Blueprint / Implementation Next** - the research synthesis and system design exist; the first deterministic implementation has not yet been built.
- **Planned** - approved future work that has not started meaningfully.
- **Parked** - intentionally paused.
- **Evolving** - the concept is being incorporated into another project.

{% assign categories = "Data Platforms and Reliability|Industrial Data and Operational Intelligence|Research, Optimization and Intelligent Operations|Business Data Products" | split: "|" %}
{% for category in categories %}
## {{ category }}

{% assign category_projects = site.data.projects | where: "category", category %}
{% for project in category_projects %}
### [{{ project.name }}]({{ project.repository_url }})

**Status:** {{ project.status }}<br>
**Priority:** {{ project.priority }}

{{ project.summary }}

**Problem:** {{ project.problem }}

**Current engineering evidence:**
{% for item in project.engineering_evidence %}
- {{ item }}
{% endfor %}

**AI role:** {{ project.ai_role }}<br>
**Limitations:** {{ project.limitations }}<br>
**Next milestone:** {{ project.next_milestone }}

{% if project.related_projects.size > 0 %}**Related work:** {{ project.related_projects | join: ", " }}{% endif %}

{% endfor %}
{% endfor %}
