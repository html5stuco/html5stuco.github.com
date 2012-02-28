---
hide: false
layout: slides
group: slides
title: Video and Audio

permalink: /slides/06-media
category: slides
---

<article class="dark">
  <h1>Building HTML5 Apps</h1>
  <p>Week 6 &ndash; Media</p>
</article>

<article>
  <section>
    <p class="em-txt c">Don't forget to sign in!</p>
    <p class="em-txt"><a href="http://goo.gl/M9H65" style="text-decoration: none; "><span style="font-weight: normal; color: #666">goo.gl/</span>M9H65</a></p>
  </section>
</article>

<article>
  <section>
    <p class="em-txt c">Media without Flash!</p>
  </section>
</article>

<article>
  <section>
    <p class="em-txt c">Remember <code>&lt;img&gt;</code>?</p>
    <code><pre>
&lt;img src="/path/to/image.jpg" alt="Description" /&gt;
    </pre></code>
  </section>
</article>

<article>
  <section>
    <p class="center-txt c">Don't forget to include a fallback!</p>
    <code class="em-txt"><pre>
&lt;audio src="/path/to/music.ogg" /&gt;
  &lt;p&gt;Sorry, you do not support HTML5 audio!&lt;/p&gt;
&lt;audio&gt;
    </pre></code>
  </section>
</article>

<article>
  <section>
    <p class="center-txt">Set attributes to control audio file</p>
    <code class="em-txt"><pre>
&lt;audio src="/path/to/music.ogg" controls autoplay loop /&gt;
  &lt;p&gt;Sorry, you do not support HTML5 audio!&lt;/p&gt;
&lt;audio&gt;
    </pre></code>
    <aside class="build center-txt">
      <p><code>controls</code> &nbsp; Adds in default browser controls</p>
      <p><code>autoplay</code> &nbsp; Starts the music as soon as it can</p>
      <p><code>loop</code> &nbsp; Restarts the music as soon as it ends</p>
      <p><code>preload</code> &nbsp; Buffers based on 3 values: <code>none</code>, <code>auto</code>, and <code>metadata</code></p>
    </aside>
  </section>
</article>

<article>
  <section>
<p class="center-txt c"><a href="https://developer.mozilla.org/en/XPCOM_Interface_Reference/nsIDOMHTMLMediaElement">MDN Reference</a> for media elements</p>
    <code class="em-txt"><pre>
&lt;audio id="myAudio" src="/path/to/music.ogg" /&gt;
  &lt;p&gt;Sorry, you do not support HTML5 audio!&lt;/p&gt;
&lt;audio&gt;
    </pre></code>
    <code class="em-txt"><pre>
var a = document.getElementById("myAudio");
a.play();
    </pre></code>
  </section>
</article>

<article>
  <section>
    <p class="em-txt c"><a href="http://jsfiddle.net/byee/mmj2p">JSFiddle Example</a></p>
  </section>
</article>
