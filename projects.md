---
layout: page
title: Projects
permalink: /projects/
---

This catalog is rendered from `_data/projects.yml`, the website source of truth. The three resume projects appear first and in canonical order; supporting and research work remains visible below them. A scaffold, brief, or roadmap is not presented as completed implementation.

## Status Guide

- **Reference Implementation** - runs locally with documented behavior, tests, and limitations.
- **Active Development** - working implementation exists, but significant milestones remain.
- **Active Build** - an early local implementation exists and the next engineering phase is in progress.
- **New Build / Active Development** - architecture and a source-contract scaffold exist; the end-to-end system is not implemented.
- **Supporting Project / Legacy Experiment** - retained evidence or an earlier experiment that is not a current flagship.
- **Design / Blueprint** - architecture and requirements exist, while implementation is limited.
- **Research Blueprint / Implementation Next** - the research synthesis and system design exist; the first deterministic implementation has not yet been built.
- **Future Research / Implementation Direction** - the architecture and experiment questions are defined, but no working reference service or result is claimed.
- **Planned** - approved future work that has not started meaningfully.
- **Parked** - intentionally paused.
- **Evolving** - the concept is being incorporated into another project.

{% assign categories = "Featured Resume Projects|Supporting Data Engineering Projects|Industrial / Operational Intelligence|Research, Optimization and Intelligent Operations|Research & Optimization" | split: "|" %}
{% for category in categories %}
## {{ category }}

{% assign category_projects = site.data.projects | where: "category", category %}
{% for project in category_projects %}
### {{ project.name }}

**Status:** {{ project.status }}<br>
**Priority:** {{ project.priority }}<br>
**Resume project:** {% if project.resume_project %}Yes{% else %}No{% endif %}

{{ project.summary }}

**Problem:** {{ project.problem }}

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

{% if project.repository_url != "" %}[Repository / project record]({{ project.repository_url }}){% endif %}{% if project.case_study_url != "" %} · [Case study]({{ project.case_study_url }}){% endif %}{% if project.blog_url != "" %} · [Blog]({{ project.blog_url }}){% endif %}

{% if project.related_projects.size > 0 %}**Related work:** {{ project.related_projects | join: ", " }}{% endif %}

{% endfor %}
{% endfor %}
