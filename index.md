---
layout: default
title: Building HTML5 Apps
---

<header>
    <h1>Building HTML5 Apps</h1>
</header>

<section class="projects">
  <section class="container">
    <h2>Projects</h2>
    <ol>
    {% for project in site.categories.projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a></li>
    {% endfor %}
    </ol>
  </section>
</section>

<section class="slides">
  <section class="container">
    <h2>Slides</h2>
    <ul>
    {% for post in site.categories.slides reversed %}
      {% if post.hide %}
      <li class="unreleased"><span>{{ post.date | date: "%b %d" }}</span> &raquo; <span class="unreleased-link">{{ post.title }}</span> &mdash; <span class="unreleased-txt">Coming soon!</span></li>
      {% else %}
      <li><span>{{ post.date | date: "%b %d" }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
    </ul>
  </section>
</section>