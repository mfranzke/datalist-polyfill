[npm]: https://npmjs.com/package/datalist-polyfill 'datalist polyfill – on NPM'

# datalist-polyfill

[![MIT license](https://img.shields.io/npm/l/datalist-polyfill.svg 'license badge')](https://opensource.org/licenses/mit-license.php)
[![datalist-polyfill on Npmjs](https://img.shields.io/npm/v/datalist-polyfill.svg 'npm version')][npm]
[![Total downloads ~ Npmjs](https://img.shields.io/npm/dt/datalist-polyfill.svg 'Count of total downloads – NPM')][npm]
[![jsDelivr CDN downloads](https://data.jsdelivr.com/v1/package/npm/datalist-polyfill/badge 'Count of total downloads – jsDelivr')](https://www.jsdelivr.com/package/npm/datalist-polyfill 'datalist polyfill – on jsDelivr')
[![dependencies Status](https://david-dm.org/mfranzke/datalist-polyfill/status.svg 'Count of dependencies')](https://david-dm.org/mfranzke/datalist-polyfill 'datalist polyfill – on david-dm')
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d1f98a2d1fd44c41b7ad5c7670d8cdcd)](https://app.codacy.com/app/mfranzke/datalist-polyfill?utm_source=github.com&utm_medium=referral&utm_content=mfranzke/datalist-polyfill&utm_campaign=badger)
[![Greenkeeper badge](https://badges.greenkeeper.io/mfranzke/datalist-polyfill.svg)](https://greenkeeper.io/)

**Update:** Safari TP supports the `datalist` element at least basically, and [its functionality will be included within the next release of Safari both for iOS and MacOS X](https://developer.apple.com/documentation/safari_release_notes/safari_12_1_release_notes#3130314). Yeah !!! Exciting news!
I'm planning to release a new major version soon to both cheer as well as accommodate their implementation.

This is a minimal and dependency-free vanilla JavaScript polyfill for the awesome datalist-functionality, that will bring joy and happiness into our lives :-)

- Supports all standard's functionality as well as mimics other browsers behavior.
- Mitigating the [different levels of support](https://caniuse.com/#feat=datalist) both by Safari and IE9+ as well as EDGE
- Released under the MIT license
- Made in Germany. And supported by so many great people from all over this planet - see "Credits" accordingly.

## Features

- Lightweight: 6.9 kB of minified JavaScript, around 2.6 kB gzipped
- Fully flexible to change the datalist entries / `<option>`s
- Supporting:
  - the relevant input field types: `text`, `email`, `number`, `search`, `tel` and `url` ...
  - ... while leaving the others like color or date related, as those would most likely need another polyfill to work correctly or have a meaningful UI
  - `input[type=email]` elements `multiple` attribute
  - properties `.options` for `datalist` elements and `.list` for `input` elements
  - right to left text-direction
  - non-touch and touch interactions
  - different types of `option` declarations
  - both Safari and Internet Explorer (IE9+) browsers
  - controlling the display of differing `value` and `label` values
  - on `input[type=url]` omitting the scheme part and performing intelligent matching on the domain name
  - substring matching on both the `value` and the `text` values
- Emits "input" event when item in the `datalist` is selected
- Enables core keyboard controls such as
  - on the `input`
    - up and down arrow keys
  - on the `select`
    - `ESC`
    - `ENTER`
    - `BACKSPACE`
    - pressing printable characters
- Implements the [WAI-ARIA design pattern](https://www.w3.org/TR/wai-aria-practices/)

## Core concepts

The polyfill was designed with the following concepts kept in mind:

- dependency-free
- Supporting DOM changes by event delegation and MutationObserver
- code accessibility / readability

## Installation

Just integrate the JavaScript file into your code - et voilà.

You may optionally load via NPM or Bower:

    $ npm install datalist-polyfill
    $ bower install datalist-polyfill

## API

Nothing really, just plug it in, it ~~will~~ should work out of the box.

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

#### Microsoft EDGE

Microsoft EDGE doesn't trigger the `input` event any more after selecting an item via mouseclick (on `input` elements other than type of `text`), even though that IE11 still did, nevermind ...

That for the optimizations on substring matching for Microsoft EDGE specifically by #GH-39 need to get restricted to `input[type="text"]` elements even only.

There might be possible solutions to even also achieve the expected behaviour on non-text-input elements - even though that I only could think about ugly solutions that I don't want to have within the polyfill and that might even also break existing CSS & JS architecture / selectors.

#### Microsoft Internet Explorer 9

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
Please have a look at the [demo page](https://mfranzke.github.io/datalist-polyfill/demos/ie9/) accordingly, the code is being listed at the beginning.

## Demo

See the polyfill in action either by downloading / forking this repo and have a look at `demos/index.html` and `demos/ie9/index.html`, or at the hosted demo: <https://mfranzke.github.io/datalist-polyfill/demos/> and <https://mfranzke.github.io/datalist-polyfill/demos/ie9/>

## things to keep in mind

- The demo HTML code is meant to be simple - I do know that things like a surrounding `<form>` are missing, and I've left the latin letters and english expressions for the right to left text-direction example. But lets focus on the relevant tags that this polyfill is all about for the demo.
- iOS Safari handles the `label`-attribute different from Safari on Mac OS. This is being equalized during the handling of the `label`-attributes-value for differing `value` and `label` values.
- After I thought it through and did some experiments, I've finally chosen the `<select>` element to polyfill the `<datalist>`, as it brought most of the functionality, whereas I accepted that it doesn't behave and doesn't look equally.
  - As I wanted to mainly focus on native elements in the most low level / simple way instead of visually emulating a list and than afterwards regain all of the functionality via a lot of JavaScript logic, I've ended up with this element, that knows how to play nicely with nested `<option>` elements.
  - I tried its `multiple` attribute, as this is most likely already what you're up to regarding appearance, but it does violate the form-follows-function concept and results in - surprise - the possibility for multiple selections, which isn't always `<datalist>` elements kind of thing... Then the `size` attribute came to my attention, which much better fits the requirements and behaves as designed quite perfectly.
- Let the `datalist` element be a direct follower of the `input` element - and don't nest it into the `label` in case that you're doing so with the `input` (which you nevertheless shouldn't do in general, but hey, gods great zoo is great).
- If embedding a webview within an iOS app, you should be using `WKWebView` instead of `UIWebView`, as it supports `datalist` right natively and the latter even also leads to a JavaScript error (thanks to @jscho13 for mentioning this).

## Credits

Supported by Christian, Johannes, @mitchhentges, @mertenhanisch, @ailintom, @Kravimir, @mischah, @hryamzik, @ottoville, @IceCreamYou, @wlekin, @eddr, @beebee1987, @mricherzhagen, @acespace90, @damien-git, @nexces, @Sora2455 and @jscho13. Thank you very much for that, highly appreciated !

## Tested with

- Mac
  - Mac OSX 10.13, Safari 11
  - Mac OSX 10.12, Safari 10
  - Mac OSX 10.11, Safari 9
- iOS
  - iPhone 8 Simulator, Mobile Safari 11.0
  - iPhone 7 Plus Simulator, Mobile Safari 10.0
  - iPad Pro Simulator, Mobile Safari 9.3
- Windows
  - Windows 7 SP1, Internet Explorer 9.0.8112.16421
  - Windows 8.1, Internet Explorer 11.0.9600.19101

### Big Thanks

Cross-browser testing platform provided by [CrossBrowserTesting][crossbrowsertestinghomepage]

[![CrossBrowserTesting](https://crossbrowsertesting.com/blog/wp-content/uploads/2017/09/cbt-wp-logo.png 'CrossBrowserTesting')][crossbrowsertestinghomepage]

[crossbrowsertestinghomepage]: https://crossbrowsertesting.com

## Prospects & functionality overview

The following problems are mainly reported and [listed on caniuse](https://caniuse.com/#feat=datalist) as well as due to issues flagged on Github.

<table>
  <tr>
    <th>Problem</th>
    <th>IE9</th>
    <th>iOS</th>
    <th>Safari < 12.1</th>
    <th>iOS WebView</th>
    <th>Safari >= 12.1</th>
    <th>IE11+</th>
    <th>EDGE</th>
    <th>Firefox</th>
    <th>Chrome</th>
    <th>Chrome WebView</th>
  </tr>
  <tr>
    <th align="left">Basic functionality</th>
    <td colspan="3" align="center">✔ <i>Polyfill</i></td>
    <td align="center">✔ via WKWebView</td>
    <td colspan="5" align="center">✔</td>
    <td align="center"><a href="https://github.com/mfranzke/datalist-polyfill/issues/33">#GH-33</a></td>
  </tr>
  <tr>
    <th align="left"><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=773041">long lists of items are unscrollable resulting in unselectable options</a></th>
    <td colspan="8" align="center">✔</td>
    <td align="center"><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=773041" target="_blank">fixed with v.69</a></td>
    <td align="center">✔</td>
  </tr>
  <tr>
    <th align="left"><a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9573654/">No substring matching for the suggestions</a></th>
    <td colspan="5" align="center">✔</td>
    <td colspan="2" align="center">✔ by <a href="https://github.com/mfranzke/datalist-polyfill/issues/39">#GH-39</a></td>
    <td colspan="3" align="center">✔</td>
  </tr>
  <tr>
    <th align="left"><a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/20066595/">`datalist` popups gets &quot;emptied&quot; when receiving focus via tab</a></th>
    <td colspan="6" align="center">✔</td>
    <td align="center">✔ by <a href="https://github.com/mfranzke/datalist-polyfill/issues/49">#GH-49</a></td>
    <td colspan="3" align="center">✔</td>
  </tr>
</table>

## Outro

Personally I even also do like the "keep it simple" approach provided within the [W3C specs](https://www.w3.org/TR/html5/forms.html#the-datalist-element) even already.

But on the other hand this leads to an additional visible field, but doesn't emulate the (hopefully, fingers crossed) upcoming x-browser implementation and leaves unnecessary syntax for all of the clients that wouldn't even need it (anymore).

If you're trying out and using my work, feel free to contact me and give me any feedback. I'm curious about how it's gonna be used.
