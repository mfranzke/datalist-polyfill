# datalist-polyfill

[![Financial Contributors on Open Collective](https://opencollective.com/datalist-polyfill/all/badge.svg?label=financial+contributors)](https://opencollective.com/datalist-polyfill) [![MIT license](https://img.shields.io/npm/l/datalist-polyfill.svg "license badge")](https://opensource.org/licenses/mit-license.php)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/datalist-polyfill)](https://bundlephobia.com/result?p=datalist-polyfill)
[![Total downloads ~ Npmjs](https://img.shields.io/npm/dt/datalist-polyfill.svg "Count of total downloads – NPM")](https://npmjs.com/package/datalist-polyfill "datalist polyfill – on NPM")
[![jsDelivr CDN downloads](https://data.jsdelivr.com/v1/package/npm/datalist-polyfill/badge "Count of total downloads – jsDelivr")](https://www.jsdelivr.com/package/npm/datalist-polyfill "datalist polyfill – on jsDelivr")
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8338e7ee4e554d05b5277cb449d92375)](https://www.codacy.com/gh/mfranzke/datalist-polyfill/dashboard)
[![GitHub Super-Linter](https://github.com/mfranzke/datalist-polyfill/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/mfranzke/datalist-polyfill/actions/workflows/linter.yml)
[![CodeQL](https://github.com/mfranzke/datalist-polyfill/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/mfranzke/datalist-polyfill/actions/workflows/codeql-analysis.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/mfranzke/datalist-polyfill/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mfranzke/datalist-polyfill?targetFile=package.json)
[![dependencies Status](https://david-dm.org/mfranzke/datalist-polyfill/status.svg "Count of dependencies")](https://david-dm.org/mfranzke/datalist-polyfill "datalist polyfill – on david-dm")
[![datalist-polyfill on Npmjs](https://img.shields.io/npm/v/datalist-polyfill.svg?color=rgb%28237%2C%2028%2C%2036%29 "npm version")](https://npmjs.com/package/datalist-polyfill "datalist polyfill – on NPM")
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Join the chat at https://gitter.im/datalist-polyfill/community](https://badges.gitter.im/datalist-polyfill/community.svg)](https://gitter.im/datalist-polyfill/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE-OF-CONDUCT.md)

**Update:** Safari now supports the `datalist` element at least basically, as [announced earlier this year with the latest release of Safari both for iOS and MacOS X](https://developer.apple.com/documentation/safari_release_notes/safari_12_1_release_notes#3130314). Yeah !!! Exciting news!
I'm planning to release a new major version soon to both cheer as well as accommodate their implementation.

This is a minimal and dependency-free vanilla JavaScript polyfill for the awesome datalist-functionality, that will bring joy and happiness into our lives :-)

- supports all standard's functionality as well as mimics other browsers behavior.
- mitigating the [different levels of support](https://caniuse.com/#feat=datalist) both by Safari and IE9+ as well as Edge
- Released under the MIT license
- Made in Germany. And supported by so many great people from all over this planet - see "Credits" accordingly.
- Compatible down to Microsoft Internet Explorer 9

## Features

- Lightweight (see the badge above)
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

### `value` property on the `option` elements for Microsoft IE 10 & IE 11 and Edge

As explained in detail below in the section ["Microsoft Internet Explorer 10 & 11 and Microsoft Edge"](#microsoft-internet-explorer-10--11-and-microsoft-edge), for fixing missing behaviour in IE 10+ and Edge we're manipulating the `value` for the `option` elements in those browser so you can't access them securely as a getter, but would need to take the original values out of `data-originalvalue`.

### Microsoft Internet Explorer

#### Microsoft Edge

Microsoft Edge doesn't trigger the `input` event any more after selecting an item via mouseclick (on `input` elements other than type of `text`), even though that IE11 still did, nevermind ...

That for the optimizations on substring matching for Microsoft Edge specifically by #GH-39 (as explained further in the following ["Microsoft Internet Explorer 10 & 11 and Microsoft Edge"](#microsoft-internet-explorer-10--11-and-microsoft-edge) section) need to get restricted to `input[type="text"]` elements even only.

There might be possible solutions to even also achieve the expected behaviour on non-text-input elements - even though that I only could think about ugly solutions that I don't want to have within the polyfill and that might even also break existing CSS & JS architecture / selectors.

#### Microsoft Internet Explorer 10 & 11 and Microsoft Edge

As mentioned with #GH-63, related to aspects reported via #GH-36 and #GH-39 (and in [Microsoft Edges platform issues](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9573654/)), it doesn't work in IE 10 & 11 as well as in Edge to "Search both the value and label, using substring matching; currently it searches both the value and label, but uses prefix matching".

As requested with #GH-36 we wanted to even also enrich the experience within the "newest" IE versions (10 & 11) and Edge browsers that provided basic support, but not the substring matching for users input. In this case the technical solution has been to manipulate the values in a way that the browser could actually handle that functionality as well, by including the users input at the beginning of the value after a substring matching to the original value, followed by a unique string for preventing any inconsistencies, followed by the original value itself, in this case for the sorting of the entries (this is mainly done in the `updateIEOptions` function around line 191 to 200 of the code).

This actually leads to a different behavior for the developers on the `value` property of each `option` elements within the `datalist` element for IE & Edge, but on the other hand provides a better UX for IE & Edge users by a consistent behavior for the user.

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

- The HTML demo code is meant to be simple - I do know that things like a surrounding `<form>` are missing, and I've left the latin letters and english expressions for the right to left text-direction example. But lets focus on the relevant tags that this polyfill is all about for the demo.
- iOS Safari handles the `label`-attribute different from Safari on Mac OS. This is being equalized during the handling of the `label`-attributes-value for differing `value` and `label` values.
- After I thought it through and did some experiments, I've finally chosen the `<select>` element to polyfill the `<datalist>`, as it brought most of the functionality, whereas I accepted that it doesn't behave and doesn't look equally.
  - As I wanted to mainly focus on native elements in the most low level / simple way instead of visually emulating a list and than afterwards regain all of the functionality via a lot of JavaScript logic, I've ended up with this element, that knows how to play nicely with nested `<option>` elements.
  - I tried its `multiple` attribute, as this is most likely already what you're up to regarding appearance, but it does violate the form-follows-function concept and results in - surprise - the possibility for multiple selections, which isn't always `<datalist>` elements kind of thing... Then the `size` attribute came to my attention, which much better fits the requirements and behaves as designed quite perfectly.
- Let the `datalist` element be a direct follower of the `input` element - and don't nest it into the `label` in case that you're doing so with the `input` (which you nevertheless shouldn't do in general, but hey, gods great zoo is great).
- If embedding a webview within an iOS app, you should be using `WKWebView` instead of `UIWebView`, as it supports `datalist` right natively and the latter even also leads to a JavaScript error (thanks to @jscho13 for mentioning this).

## Credits

Supported by Christian, Johannes, @mitchhentges, @mertenhanisch, @ailintom, @Kravimir, @mischah, @hryamzik, @ottoville, @IceCreamYou, @wlekin, @eddr, @beebee1987, @mricherzhagen, @acespace90, @damien-git, @nexces, @Sora2455, @jscho13, @alexirion and @vinyfc93. Thank you very much for that, highly appreciated !

## Tested with

- Mac
  - macOS 10.13, Safari 11
  - macOS 10.12, Safari 10
  - macOS 10.11, Safari 9
- iOS
  - iPhone 8 Simulator, Mobile Safari 11.0
  - iPhone 7 Plus Simulator, Mobile Safari 10.0
  - iPad Pro Simulator, Mobile Safari 9.3
- Windows
  - Windows 7 SP1, Internet Explorer 9.0.8112.16421
  - Windows 8.1, Internet Explorer 11.0.9600.19101

### Big Thanks

Cross-browser testing platform provided by [CrossBrowserTesting][crossbrowsertestinghomepage]

[![CrossBrowserTesting](https://static1.smartbear.co/crossbrowsertesting/media/site/cbt-smartbear-logo.svg "CrossBrowserTesting")][crossbrowsertestinghomepage]

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
    <th>Edge</th>
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

And if you do like this polyfill, please consider even also having a look at the other polyfill we've developed: <https://github.com/mfranzke/loading-attribute-polyfill>

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/mfranzke/datalist-polyfill/graphs/contributors"><img src="https://opencollective.com/datalist-polyfill/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/datalist-polyfill/contribute)]

#### Individuals

<a href="https://opencollective.com/datalist-polyfill"><img src="https://opencollective.com/datalist-polyfill/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/datalist-polyfill/contribute)]

<a href="https://opencollective.com/datalist-polyfill/organization/0/website"><img src="https://opencollective.com/datalist-polyfill/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/1/website"><img src="https://opencollective.com/datalist-polyfill/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/2/website"><img src="https://opencollective.com/datalist-polyfill/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/3/website"><img src="https://opencollective.com/datalist-polyfill/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/4/website"><img src="https://opencollective.com/datalist-polyfill/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/5/website"><img src="https://opencollective.com/datalist-polyfill/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/6/website"><img src="https://opencollective.com/datalist-polyfill/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/7/website"><img src="https://opencollective.com/datalist-polyfill/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/8/website"><img src="https://opencollective.com/datalist-polyfill/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/datalist-polyfill/organization/9/website"><img src="https://opencollective.com/datalist-polyfill/organization/9/avatar.svg"></a>
