# datalist-polyfill
This is a minimal and library dependency-free vanilla JavaScript polyfill for the awesome datalist-functionality, that will bring joy and happiness into our lives :-)

Tested in Safari, for which it's mainly meant for, as all of the others are already supporting it - quite - well: <http://caniuse.com/#feat=datalist>  
No dependencies, written in plain JavaScript. Released under the MIT License: <http://www.opensource.org/licenses/mit-license.php>

## Features
*	Lightweight: 3.07 kB of JavaScript - less than 1.3 kB gzipped
*	Fully flexible to change the data / `<option>`s
*	Enables core keyboard controls like e.g. the up and down arrow keys, ESC and ENTER
*	Implements the [WAI-ARIA design pattern](https://www.w3.org/TR/wai-aria-practices/)

## Core concepts
The plugin was designed with the following concepts kept in mind:

*	library dependency-free  
*	DOM agnostic by event delegation  
*	code accessibility / readability: because this is what developers even also should take care about regarding themselves

## Installation
Just integrate both the CSS and JavaScript file into your code - et voilà.

You may optionally load via NPM or Bower-

    $ npm install datalist-polyfill
    $ bower install datalist-polyfill

## API
Nothing really, just plug it in, it will work out of the box.

You'd like to set a title-Attribute on the datalist HTML tag, as this would get used as label for the first, disabled entry within the polyfilling select.

### dynamic HTML (or DHTML, if you like to be a little bit nostalgic)
In case that you'd like to dynamically add or modify / build your HTML code, you're even also fine with this polyfill, as it's built with event delegation that makes your UI work with a glance - no function to call after DOM manipulation or something similar.

### Changes to the available options
If you'd like to make a change to the integrated list of `<option>` elements, feel free to either remove or add them right away - the list would get generated on the fly after the user typed in something into the input field, so I've even also got you covered on this.

You could even also disable `<option>` elements by the disabled attribute if necessary.

## Demo
See the polyfill in action either by downloading / forking this repo and have a look at the demo.html, or on JSFiddle: <https://jsfiddle.net/mfranzke/s6awjfze/>

## things to keep in mind
*	The demo HTML code is meant to be simple - I do know that things like a surrounding `<form>` and `<fieldset>` are missing. But lets focus on the relevant tags that this polyfill is all about for the demo.
*	After I thought it through and even also did some experiments, I've finally chosen the `<select>` element to polyfill the functionality of the datalist functionality, as it brought most of the functionality, whereas I accepted that it doesn't behave and doesn't look totally equally.  
	*	As I wanted to use most native elements in the most low level / simple way instead of visually emulating a list and than afterwards regain all of the functionality via a lot of JavaScript logic, I've ended up with this element, that even also knows how to play with nested `<option>` elements pretty well.
	*	I even also tried its multiple attribute, as this is most likely even already what you're up to regarding appearance and functionality, but it does result in - surprise - the possibility for multiple selections, which isn't `<datalist>`s kind of thing ...
	*	If you'd like to support oldies, but goldies like Internet Exlorer 9 and below, you'll even also need to include some `classlist` polyfill  

## Credits
Supported by Christian and Johannes.

## Changelog

### Version 1.1.0 - 2017/05/09
some small corrections

### Version 1.0.3 - 2017/05/09
better preselection on entries within the dropdown depending on the inputs value

### Version 1.0.2 - 2017/05/08
added a package.json file

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

But on the other hand this leads to an additional visible field and doesn't emulate the (hopefully, fingers crossed) upcoming x-browser implementation and leaves unnecessary syntax for all of the clients that wouldn't even need it (anymore).