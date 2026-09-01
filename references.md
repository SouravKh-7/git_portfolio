---
layout: page
title: Project References
permalink: /references/
---

These links are background material for the projects. They include open-source software, public datasets, standards, official documentation, and research papers.

A link here does not mean the project currently uses that technology. The project status and implementation evidence still come from its repository.

{% for project in site.data.projects %}
## {{ project.name }}

**Current status:** {{ project.status }}

{% if project.references.size > 0 %}
{% for reference in project.references %}
- [{{ reference.name }}]({{ reference.url }}) — **{{ reference.kind }}.** {{ reference.note }}
{% endfor %}
{% else %}
- No external reference has been selected yet.
{% endif %}

{% endfor %}
