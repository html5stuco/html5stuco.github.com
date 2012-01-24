---
hide: false
layout: slides
group: slides
title: Semantic HTML5

permalink: /slides/02-markup
category: slides
---

<<<<<<< HEAD
<article class="dark">
  <h1>Building HTML5 Apps</h1>
  <p>Week 2 &ndash; Semantic HTML5</p>
</article>

<article>
  <section>
    <p class="em-txt c">HTML is...</p>
    <aside class="center-txt build">
      <p>For content</p>
      <p>Adapted from XML</p>
      <p>Only for content</p>
    </aside>
  </section>
</article>

<article>
  <section class="build">
    <p class="em-txt c">What we see...</p>
  </section>
</article>

<article class="fill">
  <img src="/img/02-nyt-orig.png" alt="New York Times website">
</article>

<article>
  <section class="build">
    <p class="em-txt c">What the browser sees...</p>
  </section>
</article>

<article class="fill">
  <img src="/img/02-nyt-elems.png" alt="New York Times website with some elements highlighted">
</article>

<article class="fill">
  <img src="/img/02-nyt-divitis.png" alt="New York Times source with a bunch of divs">
</article>

<article>
  <section>
    <p class="em-txt" style="margin-top: 40px;">Accessiblity is key!</p>
    <img src="/img/02-raycharles-thesussman.jpg" alt="Ray Charles" class="centered">
    <p class="center-txt">Screen readers, search engines, mobile users</p>
  </section>
</article>

<article class='fill'>
  <iframe src='http://www.youtube.com/embed/D3-v9tRu9oE?modestbranding=1'>&nbsp;</iframe>
</article>

<article>
  <h3>Some tags to try:</h3>
  <ul class="build">
    <li><code>header</code> and <code>footer</code></li>
    <li><code>figure</code> and <code>figcaption</code></li>
    <li><code>nav</code> (navigation)</li>
    <li><code>time</code></li>
    <li><code>video</code> and <code>audio</code></li>
    <li><code>summary</code></li>
    <li><strong><code>section</code></strong> (similar to <code>div</code>)</li>
  </ul>
</article>

<article>
  <p class="em-txt" style="margin-top: 0;">An example</p>
  <img src="/img/02-unstyled-txt.png" alt="Unstyled HTML output" class="centered">
  <p class="center-txt"><a href="http://jsfiddle.net/byee/MFEwm/">http://jsfiddle.net/byee/MFEwm/</a></p>
</article>

<article>
	<h1>Dive into HTML5, Ch. 3</h1>
</article>

<article>
	<p>Old Doctype:</p>
	<pre class="old">&lt;!DOCTYPE html
          PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;</pre>
  	<p>HTML5 Doctype:</p>
  	<pre>&lt;!DOCTYPE html&gt;</pre>
</article>

<article>
	<pre class="old">&lt;div id="header"&gt;
    &lt;h1>My Weblog&lt;/h1&gt;
    &lt;p class="tagline"&gt;
        A lot of effort went into making this effortless.
    &lt;/p&gt;
&lt;/div&gt;</pre>
	<pre>&lt;header&gt;
    &lt;hgroup&gt;        
        &lt;h1&gt;My Weblog&lt;/h1&gt;
        &lt;h2&gt;
            A lot of effort went into making this effortless.
        &lt;/h2&gt;
    &lt;/hgroup&gt;
&lt;/header&gt;</pre>
</article>

<article>
	<h1>a word from our sponsors...</h1>
</article>

<article>
	<pre>&lt;div class="entry"&gt;
    &lt;p class="post-date"&gt;October 22, 2009&lt;/p&gt;
    &lt;h2&gt;Travel day&lt;/h2&gt;
    ...
&lt;/div&gt;
	</pre>
	<pre>&lt;article&gt;
    &lt;header&gt;
        &lt;time datetime="2009-10-22" pubdate&gt;October 22, 2009&lt;/time&gt;
        &lt;h1&gt;Travel day&lt;/h1&gt;
    &lt;/header&gt;
    ...
&lt;/article&gt;
	</pre>
</article>

<article>
	<pre>&lt;div id="nav"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;blog&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;gallery&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;about&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
	</pre>
	<pre>&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;blog&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;gallery&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;about&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;
	</pre>
</article>

<article>
	<pre>&lt;div id="footer"&gt;
    &lt;p&gt;&amp;copy; 2012&lt;/p&gt;
&lt;/div&gt;
	</pre>
	<pre>&lt;footer&gt;
    &lt;p&gt;
        &amp;copy; 2012
    &lt;/p&gt;
&lt;/footer&gt;
	</pre>
</article>

<article>
	<p>A few special characters</p>
		<pre>&amp;copy; = &copy;
&amp;amp; = &amp;
&amp;rarr; = &rarr;
&amp;larr; = &larr;
</pre>
<pre>
Use quotation marks instead of ' ' and " "

&amp;lsquo; = &lsquo;
&amp;rsquo; = &rsquo;
&amp;ldquo; = &ldquo;
&amp;rdquo; = &rdquo; 
</pre>
</article>

<article>
<h1>Let&rsquo;s start Project 1</h1>
</article>