---
layout: default
title: Building HTML5 Apps
---

<header>
  <nav>
    <ul>
      <li><a href="#syllabus">Syllabus</a></li>
      <li><a href="#slides">Slides</a></li>
      <li><a href="#examples">Examples</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#resources">Resources</a></li>
    </ul>
  </nav>
  <section class="container">
    <h1>Building</h1>
    <img class="html5-logo" src="/img/html5_logo.jpg" />
    <h1>Web Apps</h1>
  </section>
</header>

<section id="syllabus">
  <section class="container">  
    <h1>Syllabus</h1>
    <h2>Course Info</h2>   
    <h2>Grading</h2>
    <ul>
      <li>Project 1 - 10%</li>
      <li>Project 2 - 10%</li>
      <li>Project 3 - 50%</li>
      <li>Attendance - 30%</li>
    </ul>
    <ul class="schedule">
      <li>
        <label>1/17</label>
        <span class="topic">Introduction</span>
        <span class="work"></span>
      </li>
      <li>
        <label>1/24</label>
        <span class="topic">Semantic HTML</span>
        <span class="work"><a class="external" href="http://diveintohtml5.info/semantics.html" target="_blank">Ch. 3 (Dive into HTML5)</a></span>
      </li>
      <li>
        <label>1/31</label>
        <span class="topic">CSS3</span>
        <span class="work">Ch. 1 (CSS3 for Web Designers)</span>
      </li>
      <li>
        <label>2/7</label>
        <span class="topic">CSS3</span>
        <span class="work">Ch. 2 (CSS3 for Web Designers)</span>
      </li>
      <li>
        <label>2/14</label>
        <span class="topic">Project 1 Presentations</span>
        <span class="work"><strong>Project 1 Due</strong></span>
      </li>
      <li>
        <label>2/21</label>
        <span class="topic">Responsive Web Design</span>
        <span class="work"><a class="external" href="http://www.alistapart.com/articles/responsive-web-design/" target="_blank">&#147;Responsive Web Design&#148; by Ethan Marcotte</a></span>
      </li>
      <li>
        <label>2/28</label>
        <span class="topic">Geolocation API</span>
        <span class="work"><a class="external" href="http://diveintohtml5.info/geolocation.html" target="_blank">Ch. 6 (Dive in HTML5)</a></span>
      </li>
      <li>
        <label>3/6</label>
        <span class="topic">Audio &amp; Video APIs</span>
        <span class="work"><a class="external" href="http://diveintohtml5.info/video.html" target="_blank">Ch. 5 (Dive in HTML5)</a></span>
      </li>
      <li class="spring-break">
        <label>3/12</label>
        <span class="topic">NO CLASS</span>
        <span class="work">(Spring Break)</span>
      </li>
      <li>
        <label>3/19</label>
        <span class="topic">Project 2 Presentations</span>
        <span class="work"><strong>Project 2 Due</strong></span>
      </li>
      <li>
        <label>3/26</label>
        <span class="topic">History API &amp; AJAX</span>
        <span class="work"><a class="external" href="http://diveintohtml5.info/history.html" target="_blank">Ch. 11 (Dive in HTML5)</a></span>
      </li>
      <li>
        <label>4/3</label>
        <span class="topic">Local storage &amp; Offline Apps</span>
        <span class="work"><a class="external" href="http://diveintohtml5.info/storage.html" target="_blank">Ch. 7</a> &amp; <a class="external" href="http://diveintohtml5.info/offline.html" target="_blank">Ch. 8</a> (Dive in HTML5)</span>
      </li>
      <li>
        <label>4/10</label>
        <span class="topic">Forms Deep Dive</span>
        <span class="work"><a class="external" href="http://diveintohtml5.info/forms.html" target="_blank">Ch. 9 (Dive in HTML5)</a></span>
      </li>
      <li>
        <label>4/17</label>
        <span class="topic">Overflow</span>
        <span class="work"></span>
      </li>
      <li>
        <label>4/24</label>
        <span class="topic">Overflow</span>
        <span class="work"></span>
      </li>
      <li>
        <label>5/1</label>
        <span class="topic">Final Presentations</span>
        <span class="work"><strong>Project 3 Due</strong></span>
      </li>
    </ul>
  </section>
</section>

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

<section id="examples">
  <section class="container">
    <h2>Examples</h2>
    <ol>
    {% for post in site.categories.examples %}
      {% if post.hide %}
      <li class="unreleased"><span class="unreleased-link">{{ post.title }}</span> &mdash; <span class="unreleased-txt">Coming soon!</span></li>
      {% else %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
    </ol>
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