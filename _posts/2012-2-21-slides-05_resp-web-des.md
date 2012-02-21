---
layout: slides
group: slides
title: Responsive Web Design

permalink: /slides/05-resp-web-des
category: slides
---

<article class="dark">
  <h1>Building HTML5 Apps</h1>
  <p>Week 6 &ndash; Responsive Web Design</p>
</article>

<article>
  <section>
    <p class="em-txt c">Don't forget to sign in!</p>
    <p class="em-txt"><a href="http://goo.gl/k4hLn" style="text-decoration: none; "><span style="font-weight: normal; color: #666">goo.gl/</span>k4hLn</a></p>
    <p class="center-text">(Case sensitive url)</p>
  </section>
</article>

<article>
  <section>
    <p class="em-txt c">Projects submissions due!</p>
    <p class="em-txt c"><a href="http://goo.gl/n68Iy" style="text-decoration: none; "><span style="font-weight: normal; color: #666">goo.gl/</span>n68Iy</a></p>
  </section>
</article>

<article>
  <section>
    <p class="em-txt c">Want to design the carnival website?</p>
    <p class="em-txt c">Contact <a href="mailto:sc0v@andrew.cmu.edu" style="text-decoration: none; ">Meg Hayes</a></p>
  </section>
</article>

<article>
  <section>
    <h3>Mobile and tablets and desktops...</h3>
    <p> (oh my!) </p>
    <img style="display: block; margin: 30px 0;" src="/img/05-devices.jpg" />
    <small>via <a href="http://www.webdesignshock.com" target="_blank">Web Design Shock.com</a></small>
  </section>
</article>

<article>
  <section>
    <p class="em-txt c">This looks like a job for... responsive design.</p>
  </section>
</article>

<article style="background: #fff;">
  <h3>Responsive layouts in the wild</h3>
  <a href="http://trentwalton.com" target="_blank"><img src="/img/05-ex1.png" style="width: 100%; margin: 25px 0;" alt="Responsive layout -- trentwalton.com" /></a>
  <a href="http://sparkbox.com"><img src="/img/05-ex2.png" style="width: 100%%;" alt="Responsive layout -- sparkbox.com" /></a>

  <p>Great resource: <a href="http://mediaqueri.es" target="_blank">http://mediaqueri.es</a></p>
</article>

<article>
  <h3>Responsive recipe:</h3>
  <ul>
    <li>Fluid layout</li>
    <li>Flexible images</li>
    <li><strong>Media Queries</strong></li>
  </ul>
</article>

<article style="background: #fff;">
  <h3>Fluid layouts &amp; flexible images</h3>
  <img style="height: 80%; margin: 20px 0;" src="http://i.imgur.com/zFzyg.png" /><br />
  <small>via <a href="http://thinkvitamin.com/design/beginners-guide-to-responsive-web-design/" target="_blank">Think Vitamin</a></small>
</article>

<article>
  <h3>Media Queries</h3>
  <p>Load stylesheet only for certain screen widths:</p>
  <code><pre>&lt;link rel="stylesheet" type="text/css" 
    media="screen and (max-device-width: 480px)" 
    href="mobile.css" /&gt;</pre></code>
  <p>or include the media query right in your stylesheet:</p>
  <code><pre>@media screen and (max-device-width: 480px) {
  .column {
    float: none;
  }
}</pre></code>
</article>

<article>
  <h3>Common Breakpoints</h3>
  <ul style="float: left; width: 200px; height: 400px">
    <li>320px</li>
    <li>480px</li>
    <li>600px</li>
    <li>768px</li>
    <li>900px</li>
    <li>1200p</li>
  </ul>
  <img style="display: inline-block; margin: 40px 0 20px 0" src="http://media.smashingmagazine.com/wp-content/uploads/2010/11/sizes.jpg" /><br />
  <small>via <a href="http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/" target="_blank">Smashing Magazine</a></small>
</article>

<article>
  <h3>Don&#146;t forget this</h3>
  <code><pre>&lt;meta name="viewport" content="width=device-width; 
  initial-scale=1.0"&gt;</pre></code>
  <img src="/img/05-iphone1.png" style="width:30%; margin: 0 50px;" /><img style="width:30%; margin: 0 50px;" src="/img/05-iphone2.png" />
</article>

<article>
  <a style="text-decoration: none" href="http://trentwalton.com/2011/07/14/content-choreography/" target="_blank"><h3>&#147;Content Coreography&#148; by Trent Walton</h3></a>
  <a href="http://trentwalton.com/2011/07/14/content-choreography/" target="_blank"><img src="/img/05-content.png" style="margin-top: 70px; display: block;" /></a>
</article>

<article>
  <h3>Responsive grid frameworks &amp; boilerplates</h3>
  <ul>
    <li><a href="http://twitter.github.com/bootstrap/scaffolding.html#gridSystem" target="_blank">Twitter Bootstrap</a> (plus a lot of other great features)</li>
    <li><a href="http://www.getskeleton.com/" target="_blank">Skeleton</a></li>
    <li><a href="http://lessframework.com/" target="_blank">Less Framework 4</a></li>
    <li><a href="http://stuffandnonsense.co.uk/projects/320andup/" target="_blank">320 and up</a></li>
  </ul>
</article>

<article>
  <h3>Mobile First?</h3>
  <ul>
    <li>Start with desktop style, alter as screens get smaller</li>
    <li>
      Start with mobile style, add things as screens get bigger
      <ul style="margin: 25px 50px; list-style-type: disc; font-size: 24px">
        <li>&#147;The absence of support for @media queries is in fact the first @media query&#148; -- <a href="http://yiibu.com/" target="_blank">Yiibu</a></li>
        <li>MYTH: mobile web = mobile safari -- <a style="font-style: italic;" href="http://mat-t.tumblr.com/post/2165737609/how-to-make-your-css-really-mobile-friendly" target="_blank">How to make your css *really* mobile friendly</a></li>
      </ul>
    </li>
    <li>Think progressive enhancement vs. graceful degredation</li>
  </ul>
</article>

<article>
  <h3>Further reading</h3>
  <a href="http://www.abookapart.com/products/responsive-web-design" target="_blank"><img  style="display: inline-block; margin: 30px 20px;" src="/img/05-resp-book.jpg" /></a>
  <a href="http://www.abookapart.com/products/mobile-first" target="_blank"><img style="display: inline-block; margin: 30px 20px; border:1px solid #000;" src="/img/05-mobile-first-book.jpg" /></a>
</article>

