---
layout: default
title: Building HTML5 Apps
---

<header>
  <section class="container">
    <nav>
      <ul>
        <li><a href="#syllabus">Syllabus</a></li>
        <li><a href="#slides">Slides &amp; Demos</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
    </nav>
    <section class="title-block">  
      <h1>Building</h1>
      <img class="html5-logo" src="/img/html5_logo.jpg" />
      <h1>Web Apps</h1>
    </section>
  </section>
</header>

<section id="slides">
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

<section id="projects">
  <section class="container">
    <h2>Projects</h2>
    <ol>
    {% for project in site.categories.projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a></li>
    {% endfor %}
    </ol>
  </section>
</section>