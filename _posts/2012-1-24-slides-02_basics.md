---
hide: false
layout: slides
group: slides
title: Semantic HTML5

permalink: /slides/02-markup
category: slides
---

<article>
	<h1>Dive into HTML5, Ch 3</h1>
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