# datalist-polyfill
This is a minimal and library dependency-free vanilla JavaScript polyfill for the awesome datalist-functionality, that will bring joy and happiness into our lives :-)

Tested in Safari, for which it's mainly meant for, as nearly all of the others are already supporting it - quite - well: <http://caniuse.com/#feat=datalist>  
No dependencies, written in plain JavaScript. Released under the MIT License: <http://www.opensource.org/licenses/mit-license.php>

## Features
*	Lightweight: 4.61 kB of JavaScript - less than 1.73 kB gzipped
*	Fully flexible to change the datalist entries / `<option>`s
*	Supporting:
	*	the relevant input field types: `text`, `email`, `number`, `search`, `tel` and `url` ...
	*	... while leaving the others like color or date related, as those would most likely need another polyfill to „work“ correctly or have a meaningful UI
	*	`input[type=email]` elements multiple attribute
	*	properties `.options` for `datalist` elements and `.list` for `input` elements
	*	right to left text-direction
	*	non-touch and touch interactions
	*	different forms of `option` declarations
*	Enables core keyboard controls like e.g. the up and down arrow keys, `ESC` and `ENTER`
*	Implements the [WAI-ARIA design pattern](https://www.w3.org/TR/wai-aria-practices/)

## Core concepts
The plugin was designed with the following concepts kept in mind:

*	library dependency-free
*	Supporting DOM changes by event delegation
*	code accessibility / readability: because this is what we as developers should even also take care about

[![Dependency Status](https://gemnasium.com/badges/github.com/mfranzke/datalist-polyfill.svg)](https://gemnasium.com/github.com/mfranzke/datalist-polyfill)

## Installation
Just integrate both the CSS and JavaScript file into your code - et voilà.

You may optionally load via NPM or Bower:

    $ npm install datalist-polyfill
    $ bower install datalist-polyfill

## API
Nothing really, just plug it in, it will work out of the box.

We're even also enabling the [`.options` (for `datalist` elements)](https://developer.mozilla.org/en/docs/Web/API/HTMLDataListElement) and [`.list` (for `input` elements)](https://developer.mozilla.org/en/docs/Web/API/HTMLInputElement) properties according to the specs.

And you'd like to set a `title`-Attribute on the `<datalist>` HTML tag, as this would get used as label for the first, disabled entry within the polyfilling select on non-touch interactions.

### dynamic HTML (or DHTML, if you like to be a little bit nostalgic)
In case that you'd like to dynamically add or modify / create your HTML code, you're even also good to go with this polyfill, as it's based on event delegation that makes your UI work easily - no (refresh) function to call after DOM manipulation or something similar.

### Changes to the available `option` elements
If you'd like to make a change to the integrated list of `<option>` elements, feel free to either remove or add them right away - the list would get generated on the fly after the user typed in something into the `<input>` field, so I've even also got you covered on this.

You could even also disable `<option>` elements by adding the `disabled` attribute to the `<option>` HTML tag if necessary.

## Demo
See the polyfill in action either by downloading / forking this repo and have a look at `demo.html`, or at the hosted demo on JSFiddle: <https://jsfiddle.net/mfranzke/s6awjfze/>

## things to keep in mind
*	The demo HTML code is meant to be simple - I do know that things like a surrounding `<form>` are missing, and I've left the latin letters and english expressions even also for the right to left text-direction example. But lets focus on the relevant tags that this polyfill is all about for the demo.
*	After I thought it through and even also did some experiments, I've finally chosen the `<select>` element to polyfill the functionality of the `<datalist>` functionality, as it brought most of the functionality, whereas I accepted that it doesn't behave and doesn't look totally equally.  
	*	As I wanted to mainly focus on native elements in the most low level / simple way instead of visually emulating a list and than afterwards regain all of the functionality via a lot of JavaScript logic, I've ended up with this element, that even also knows how to play nicely with nested `<option>` elements.
	*	I've previously decided against using the `multiple` attribute, as I wanted to kind of strictly fulfill the form follows function concept - but a nice and fruitful discussion with Michael let me think that through again and change my mind (and attitude) on that, as this is most likely even already what you're up to regarding appearance. But it still does result in - surprise - the possibility for multiple selections, which I'm still thinking about whether I need to fix this or keep it as an easter egg ...

## Credits
Supported by Christian, Johannes and Michael / @mischah. Thank you very much for that, highly appreciated !

## Changelog

### Version 1.8.0 - 2017/07/14
Restricted the polyfill to only work with relevant input types; we’d like to exclude the ones that even already need another polyfill to „work“ correctly or have a meaningful UI, like e.g. color or date-related ones, as those polyfills should handle the support of the datalist themselves depending on their own functionality.

### Version 1.7.0 - 2017/06/29
As mentioned by @aFarkas [within his review](https://github.com/h5bp/html5please/issues/18), `option` elements could be of some different formats. This release especially follows [the spec](https://www.w3.org/TR/html5/forms.html#the-datalist-element) regarding the aspect that "Each suggestion has a value and a label.". 

### Version 1.6.2 - 2017/06/28
Optimized the behavior to select the entries within the polyfilling `select[multiple]` on using the up and down arrow keys from the polyfilled `input[list]`.

### Version 1.6.1 - 2017/06/16
Introduced speaking variables for the different keycodes. And implemented some feedback by flow. As well as additional code simplifications.

### Version 1.6.0 - 2017/06/16
This is so far the biggest and greatest update ! Depending of the feedback by Michael the visual appearance has changed and will better emulate the expected layout as in other browsers (on non-touch interactions). That for the script is creating the polyfilling select as a multiple-selection type, which emulates the expected „form“ better. And better positioning as well as styling the polyfilling select according to the input field, like e.g. even also set the polyfilling selects border-radius equally as the one by the polyfilled input.

### Version 1.5.0 - 2017/06/10
Simplified the styling and got rid of the external CSS files / dependency. You could remove that one now. Yeah!

### Version 1.4.0 - 2017/06/09
Added RTL text-direction support

### Version 1.3.0 - 2017/05/30
Added support for multiple email addresses, separated by comma. And again, updated documentation slightly. And demo accordingly.

### Version 1.2.1 - 2017/05/29
Simple code style modifications. Because style matters.

### Version 1.2.0 - 2017/05/29
Added .options (for `datalist` elements) and .list (for `input` elements) properties according to the specs.

### Version 1.1.2 - 2017/05/14
Further simplified the code, so that we could even skip the `.matches()` polyfill. Yeah. And documentation updates.

### Version 1.1.1 - 2017/05/10
fixed another simple bug that lead to an incorrect index being selected - let's skip this, as it's not even the standard behaviour

### Version 1.1.0 - 2017/05/09
some small corrections

### Version 1.0.3 - 2017/05/09
better preselection on entries within the dropdown depending on the inputs value

### Version 1.0.2 - 2017/05/08
added a `package.json` file

### Version 1.0.1 - 2017/05/08
Small, but important typo. :-) Thanks Fyrd for mentioning this.

### Version 1.0.0 - 2017/05/04
First release.

## Tested with

*	Mac
	*	Mac OSX 10.12, Safari 10
	*	Mac OSX 10.11, Safari 9
	*	Mac OSX 10.10, Safari 8
	*	Mac OSX 10.9, Safari 7
	*	Mac OSX 10.8, Safari 6.2
	*	Mac OSX 10.7, Safari 6
*	iOS
	*	iPad Pro / 10.2, Mobile Safari 10.0
	*	iPhone 6 Plus / 10.3, Mobile Safari 10.0

## Outro
Personally I even also do like the "keep it simple" approach provided within the W3C specs even already:
<https://www.w3.org/TR/html5/forms.html#the-datalist-element>

But on the other hand this leads to an additional visible field, but doesn't emulate the (hopefully, fingers crossed) upcoming x-browser implementation and leaves unnecessary syntax for all of the clients that wouldn't even need it (anymore).

If you're trying out and using my work, feel free to contact me and give me any feedback. I'm curious about how it's gonna be used.