# datalist-polyfill
This is a minimal and dependency-free vanilla JavaScript polyfill for the awesome datalist-functionality, that will bring joy and happiness into our lives :-)

Tested in Safari, which it's mainly meant for, as nearly all of the other browsers support it quite well: <http://caniuse.com/#feat=datalist>  
Released under the MIT License: <http://www.opensource.org/licenses/mit-license.php>

## Features
*	Lightweight: 5.048 kB of JavaScript, around 2.2 kB gzipped
*	Fully flexible to change the datalist entries / `<option>`s
*	Supporting:
	*	the relevant input field types: `text`, `email`, `number`, `search`, `tel` and `url` ...
	*	... while leaving the others like color or date related, as those would most likely need another polyfill to work correctly or have a meaningful UI
	*	`input[type=email]` element's multiple attributes
	*	properties `.options` for `datalist` elements and `.list` for `input` elements
	*	right to left text-direction
	*	non-touch and touch interactions
	*	different types of `option` declarations
	*	both Safari and Internet Explorer (IE9+) browsers
*	Enables core keyboard controls such as the up and down arrow keys, `ESC`, and `ENTER`
*	Implements the [WAI-ARIA design pattern](https://www.w3.org/TR/wai-aria-practices/)

## Core concepts
The plugin was designed with the following concepts kept in mind:

*	dependency-free
*	Supporting DOM changes by event delegation
*	code accessibility / readability

[![Dependency Status](https://gemnasium.com/badges/github.com/mfranzke/datalist-polyfill.svg)](https://gemnasium.com/github.com/mfranzke/datalist-polyfill)

## Installation
Just integrate both the CSS and JavaScript file into your code - et voilà.

You may optionally load via NPM or Bower:

    $ npm install datalist-polyfill
    $ bower install datalist-polyfill

## API
Nothing really, just plug it in, it will work out of the box.

This package is also enabling the [`.options` (for `datalist` elements)](https://developer.mozilla.org/en/docs/Web/API/HTMLDataListElement) and [`.list` (for `input` elements)](https://developer.mozilla.org/en/docs/Web/API/HTMLInputElement) properties according to the specs.

If you set a `title`-Attribute on the `<datalist>` HTML tag, it would get used as label for the first disabled entry within the polyfilling select on non-touch interactions.

### dynamic HTML (or DHTML, if you like to be a little bit nostalgic)
In case that you'd like to dynamically add or modify / create your HTML code, you're good to go with this polyfill, as it's based on event delegation that makes your UI work easily - no refresh nor reinit function to call after DOM manipulation or something similar.

### Changes to the available `option` elements
If you'd like to make a change to the integrated list of `<option>` elements, feel free to either remove or add them right away - the list would get generated on the fly after the user typed in something into the `<input>` field, so you're covered on this.

You can also disable `<option>` elements by adding the `disabled` attribute to the `<option>` HTML tag if necessary.

### Microsoft Internet Explorer
#### Internet Explorer 10-
You'll need the declaration for the standard `hidden` attribute, that you might already have included in case you're using [`normalize.css`](https://github.com/necolas/normalize.css/). Otherwise just adapt it from there:
```css
/**
 * Add the correct display in IE 10-.
 */

[hidden] {
  display: none;
}
```

#### Internet Explorer 9
In case you'd like to support IE9, you'll need to add a nesting `select` element wrapped by a conditional comment into the `datalist` element.
```html
<datalist id="animallist_ie" title="Choose a suggestion">
	<!--[if IE 9]><select disabled style="display:none" class="ie9_fix"><![endif]-->
		<option value="Cat">
		<option value="Cow">
		<option value="Dog">
		<option value="Horse">
		<option value="Lion">
		<option value="Pig" disabled>
		<option value="Zebra">
	<!--[if IE 9]></select><![endif]-->
</datalist>
```

## Demo
See the polyfill in action either by downloading / forking this repo and have a look at `demo.html`, or at the hosted demo on JSFiddle: <https://jsfiddle.net/mfranzke/s6awjfze/>

## things to keep in mind
*	The demo HTML code is meant to be simple - I do know that things like a surrounding `<form>` are missing, and I've left the latin letters and english expressions for the right to left text-direction example. But lets focus on the relevant tags that this polyfill is all about for the demo.
*	After I thought it through and did some experiments, I've finally chosen the `<select>` element to polyfill the `<datalist>`, as it brought most of the functionality, whereas I accepted that it doesn't behave and doesn't look equally.  
	*	As I wanted to mainly focus on native elements in the most low level / simple way instead of visually emulating a list and than afterwards regain all of the functionality via a lot of JavaScript logic, I've ended up with this element, that knows how to play nicely with nested `<option>` elements.
	*	I tried its `multiple` attribute, as this is most likely already what you're up to regarding appearance, but it does violate the form-follows-function concept and results in - surprise - the possibility for multiple selections, which isn't always `<datalist>` elements kind of thing... Then the `size` attribute came to my attention, which much better fits the requirements and behaves as designed quite perfectly.

## Credits
Supported by Christian, Johannes, @ailintom, @Kravimir and @mischah. Thank you very much for that, highly appreciated !

## Changelog

### Version 1.11.0- 2017/09/26
I'm very thankful for @ailintom mentioning the missing IE9 support with #GH-2, which is still relevant (at least and maybe foremost) for the Windows Vista users. Additionally @Kravimir thankfully brought to my attention, that IE9 handles the `option` subelements quite restricted - so I've added a section regarding IE9 support to the demo page with the additional two lines of HTML, that you'll need to add in case you also need / want to still support IE9 in your projects, as well as changed the JavaScript code to even also support IE9.

### Version 1.10.3- 2017/10/07
Added a comment regarding IE9 - and some simple code styling.

### Version 1.10.2- 2017/09/26
Simple corrections.

### Version 1.10.1- 2017/09/25
Simple bugfix, that came up through the latest implementation on the up and down arrow keys.

### Version 1.10.0 - 2017/08/16
Added the ability to open the datalist on the up and down keys even in case that no value has been provided - this seems to be intentionally and even also adapts the behavior by supporting browsers.

### Version 1.9.0 - 2017/07/20
Regarding the changes out of release version 1.6.0 to emulate the expected UI quite nicely, I was still struggling with using that hacky solution (`multiple` attribute) and even also of how to prevent multiple selections on the polyfilling select. Actually the attribute `size` came to my attention, which much better fits the requirements and behaves as designed quite perfectly. Chapeau!

### Version 1.8.1 - 2017/07/18
Bugfix regarding the handling of the label values.

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
