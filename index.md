---
layout: default
title: Building HTML5 Apps
---

Projects
---

<ol>
{% for project in site.categories.projects %}
  <li><a href="{{ project.url }}">{{ project.title }}</a></li>
{% endfor %}
</ol>


Slides
---
<ul>
{% for post in site.categories.slides %}
  <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
  {% unless post.hide %} 
    <span class="unreleased">Coming soon!</span>
  {% endunless %}
  </li>
{% endfor %}
</ul>