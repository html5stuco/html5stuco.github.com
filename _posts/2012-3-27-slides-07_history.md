---
hide: false
layout: slides
group: slides
title: History API

permalink: /slides/07-history
category: slides
---

<article class="dark">
  <h1>Building HTML5 Apps</h1>
  <p>Week 8 &ndash; History API</p>
</article>

<article>
  <section>
    <p class="em-txt c">Don't forget to sign in!</p>
    <p class="em-txt"><a href="http://goo.gl/M9H65" style="text-decoration: none; "><span style="font-weight: normal; color: #666">goo.gl/</span>M9H65</a></p>
  </section>
</article>

<article>
  <section>
    <h3>History?!</h3>
    <p class="em-txt"><a href="http://diveintohtml5.info/history.html">Diving into HTML 5: Chapter 11</a></p>
  </section>
</article>

<article>
  <section>
    <h3>What is the History API?</h3>
    <p class="em-txt">A standard way to use javascript to manipulate browser history.</p>
  </section>
</article>

<article>
  <section>
    <h3>But why?</h3>
    <ul>
      <li>Every resource on the web should have it&#146;s own unique url</li>
      <li>But requesting a new url is expensive</li>
      <li>Instead of refreshing the whole page, just load the things that are changing</li>
      <li>It&#146;s so much more efficient!</li>
    </ul>
    <p>Finally, you can have your cake and eat it too</p>
  </section>
</article>

<article>
  <section>
    <h3>How</h3>
    <ol>
      <li>Load the part of the page that is different</li>
      <li>Swap in the changed content</li>
      <li>Update the browser location bar</li>
    </ol>
  </section>
</article>

<article>
  <section>
    <p class="em-txt"><a href="http://diveintohtml5.info/examples/history/adagio.html">Dive into HTML5 demo</a></p>
  </section>
</article>

<article>
  <section>
    <p class="em-txt">Push!</p>
    <code><pre>history.pushState(state, title, url);</pre></code>
    <code><pre>history.pushState(null, null, link.href);</pre></code>
  </section>
</article>

<article>
  <section>
    <p class="em-txt">Pop!</p>
    <code><pre>window.addEventListener("popstate", function(e) {
    // function to change content back
}</pre></code>
  </section>
</article>