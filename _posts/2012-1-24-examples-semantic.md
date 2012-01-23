---
layout: example
title: Semantic HTML

prettyprint: true
permalink: /examples/buttons
category: examples
---

Semantic HTML {: #example-title}
===========

<figure class="centered">
  <input class="result" type="submit" value="Pick me!" />
  <input class="result blue" type="submit" value="No, pick me!" />
</figure>

First, the HTML. The text on the button is set with `value="Pick Me"`.

    <input class="button" type="submit" value="Pick me!" />
    <input class="button blue" type="submit" value="No, pick me!" />
{: .lang-html }

Next, the CSS, starting with the default gray button.

    .btn {
      /* This lets the user know you can click something. */
      cursor: pointer;

      /* Set a default background color in case the user doesn't see the gradient */
      background-color: #e6e6e6;
      background-repeat: no-repeat;
      background-image: -moz-linear-gradient(top, #ffffff, #ffffff 25%, #e6e6e6);
      background-image: -webkit-linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);
      background-image: linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);

      /* Make the button larger (and easier to click) */
      padding: 5px 14px 6px;

      border: 1px solid #ccc;
      border-bottom-color: #bbb;

      /* Rounded corners */
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;

      /* Emphasize the text slightly */
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);

      /* Fade in different different colors when a user hovers */
      -webkit-transition: 0.1s linear all;
      -moz-transition: 0.1s linear all;
      transition: 0.1s linear all;
    }

    .btn:hover {
      /* Slide the background gradient up, revealing the lighter background color below. */
      background-position: 0 -15px;
      color: #333;  
    }

    .btn:active {
      /* Darken the top of the button to make it look as though the button is being pressed. */
      -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05);
    }
{: .lang-css}

This blue version builds off of the styles written above.

    .btn.blue {
      color: #FFF;
      background-color: #0064cd;
      background-image: -moz-linear-gradient(top, #049cdb, #0064cd);
      background-image: -webkit-linear-gradient(top, #049cdb, #0064cd);
      background-image: linear-gradient(top, #049cdb, #0064cd);
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
      border-color: #0064cd #0064cd #003f81;
      border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);

      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    }

    .btn.blue:hover {
      color: #FFF;
    }
{: .lang-css}

View the source to see additional gradients for older versions of Safari, Opera, and IE.

See the [Bootstrap library on Github](https://github.com/twitter/bootstrap/blob/master/bootstrap.css#L1873) for the full library's source.