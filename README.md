[npm]: https://npmjs.com/package/datalist-polyfill "datalist polyfill – on NPM"


# datalist-polyfill

[![datalist-polyfill on Npmjs](https://img.shields.io/npm/v/datalist-polyfill.svg "npm version")][npm]
[![Total downloads ~ Npmjs](https://img.shields.io/npm/dt/datalist-polyfill.svg "Count of total downloads – NPM")][npm]
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d1f98a2d1fd44c41b7ad5c7670d8cdcd)](https://app.codacy.com/app/mfranzke/datalist-polyfill?utm_source=github.com&utm_medium=referral&utm_content=mfranzke/datalist-polyfill&utm_campaign=badger)
[![jsDelivr CDN downloads](https://data.jsdelivr.com/v1/package/npm/datalist-polyfill/badge "Count of total downloads – jsDelivr")](https://www.jsdelivr.com/package/npm/datalist-polyfill "datalist polyfill – on jsDelivr")
[![dependencies Status](https://david-dm.org/mfranzke/datalist-polyfill/status.svg "Count of dependencies")](https://david-dm.org/mfranzke/datalist-polyfill "datalist polyfill – on david-dm")
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

This is a minimal and dependency-free vanilla JavaScript polyfill for the awesome datalist-functionality, that will bring joy and happiness into our lives :-)

* Mainly built for Safari (but supporting IE9 as well), as nearly all of the other browsers [support it quite nicely](https://caniuse.com/#feat=datalist)
* Released under the [![MIT license](https://img.shields.io/npm/l/datalist-polyfill.svg "license badge")](https://opensource.org/licenses/mit-license.php)
* Made in Germany. And supported by so many great people from all over this planet - see "Credits" accordingly.

## Features
*	Lightweight: 5.67 kB of minified JavaScript, around 2.52 kB gzipped
*	Fully flexible to change the datalist entries / `<option>`s
*	Supporting:
	*	the relevant input field types: `text`, `email`, `number`, `search`, `tel` and `url` ...
	*	... while leaving the others like color or date related, as those would most likely need another polyfill to work correctly or have a meaningful UI
	*	`input[type=email]` elements `multiple` attribute
	*	properties `.options` for `datalist` elements and `.list` for `input` elements
	*	right to left text-direction
	*	non-touch and touch interactions
	*	different types of `option` declarations
	*	both Safari and Internet Explorer (IE9+) browsers
	* controlling the display of differing `value` and `label` values
*	Emits "input" event when item in the `datalist` is selected
*	Enables core keyboard controls such as the up and down arrow keys, `ESC`, and `ENTER`
*	Implements the [WAI-ARIA design pattern](https://www.w3.org/TR/wai-aria-practices/)

## Core concepts
The polyfill was designed with the following concepts kept in mind:

*	dependency-free
*	Supporting DOM changes by event delegation and MutationObserver
*	code accessibility / readability

## Installation
Just integrate the JavaScript file into your code - et voilà.

You may optionally load via NPM or Bower:

    $ npm install datalist-polyfill
    $ bower install datalist-polyfill

## API
Nothing really, just plug it in, it will work out of the box.

This package is also enabling the [`.options` (for `datalist` elements)](https://developer.mozilla.org/en/docs/Web/API/HTMLDataListElement) and [`.list` (for `input` elements)](https://developer.mozilla.org/en/docs/Web/API/HTMLInputElement) properties according to the specs.

If you set a `title`-Attribute on the `<datalist>` HTML tag, it would get used as label for the first disabled entry within the polyfilling select on non-touch interactions.

### dynamic HTML (or DHTML, if you like to be a little bit nostalgic)
In case that you'd like to dynamically add or modify / create your HTML code, you're good to go with this polyfill, as it's based on event delegation and additionally using MutationObserver (IE11+) that makes your UI work easily - no refresh nor reinit function to call after DOM manipulation or something similar.

### Changes to the available `option` elements
If you'd like to make a change to the integrated list of `<option>` elements, feel free to either remove or add them right away - the list would get generated on the fly after the user typed in something into the `<input>` field, so you're covered on this.

You can also disable `<option>` elements by adding the `disabled` attribute to the `<option>` HTML tag if necessary.

### Differing `value` and `label` values
As the browser vendors (Google Chrome vs. the others) don't seem to be aligned on this topic, I've decided to enable the `label`-attribute to serve as the definitive label being displayed, even if a value is being defined differing from the label. On different `value` and `text` values, both of them would get displayed within the suggestions, as Google Chrome does it. But if you define a differing `label`-attribute, its value would get displayed exclusively (as all the other browsers do it) to give you some flexibility on how to define those suggestions. Check out the „Different ways of defining an option“ section on the demo page regarding this topic.

### Microsoft Internet Explorer
#### Internet Explorer 9
You'll need the declaration for the standard `hidden` attribute, that you might already have included in case you're using [`normalize.css`](https://github.com/necolas/normalize.css/). Otherwise just adapt it from there:
```css
/**
 * Add the correct
 * display in IE 10-
 */

[hidden] {
  display: none;
}
```

And you need to add a nesting `select` element wrapped by a conditional comment into the `datalist` element.
Please have a look at the [demo page](https://mfranzke.github.io/datalist-polyfill/demo.html) accordingly, the code is being mentioned within the `Internet Explorer 9 support` section.

## Demo
See the polyfill in action either by downloading / forking this repo and have a look at `demo.html`, or at the hosted demo: <https://mfranzke.github.io/datalist-polyfill/demo.html>

## things to keep in mind
*	The demo HTML code is meant to be simple - I do know that things like a surrounding `<form>` are missing, and I've left the latin letters and english expressions for the right to left text-direction example. But lets focus on the relevant tags that this polyfill is all about for the demo.
*   iOS Safari handles the `label`-attribute different from Safari on Mac OS. This is being equalized during the handling of the `label`-attributes-value for differing `value` and `label` values.
*	After I thought it through and did some experiments, I've finally chosen the `<select>` element to polyfill the `<datalist>`, as it brought most of the functionality, whereas I accepted that it doesn't behave and doesn't look equally.  
	*	As I wanted to mainly focus on native elements in the most low level / simple way instead of visually emulating a list and than afterwards regain all of the functionality via a lot of JavaScript logic, I've ended up with this element, that knows how to play nicely with nested `<option>` elements.
	*	I tried its `multiple` attribute, as this is most likely already what you're up to regarding appearance, but it does violate the form-follows-function concept and results in - surprise - the possibility for multiple selections, which isn't always `<datalist>` elements kind of thing... Then the `size` attribute came to my attention, which much better fits the requirements and behaves as designed quite perfectly.

## Credits
Supported by Christian, Johannes, @mitchhentges, @mertenhanisch, @ailintom, @Kravimir, @mischah, @hryamzik, @ottoville, @IceCreamYou, @wlekin, @eddr and @beebee1987. Thank you very much for that, highly appreciated !

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
*	Windows
	*	Windows 7 SP1, Internet Explorer 9.0.8112.16421

## Outro
Personally I even also do like the "keep it simple" approach provided within the [W3C specs](https://www.w3.org/TR/html5/forms.html#the-datalist-element) even already.

But on the other hand this leads to an additional visible field, but doesn't emulate the (hopefully, fingers crossed) upcoming x-browser implementation and leaves unnecessary syntax for all of the clients that wouldn't even need it (anymore).

If you're trying out and using my work, feel free to contact me and give me any feedback. I'm curious about how it's gonna be used.
