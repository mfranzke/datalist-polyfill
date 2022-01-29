# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Safari TP seems to support the `datalist` element at least basically. Yeah !!! Exciting news! I'm planning to release a new major version soon to both cheer as well as accommodate their implementation.

## [1.24.4] - 2020-05-23

### Changed

- Updated webdriverio, prettier, husky and xo dependencies
- Replaced Greenkeeper by Snyk for vulnerabilities scanning
- Formatted code by prettier
- husky: moved the hook to the dedicated config file
- README: added Gitter badge

### Fixed

- npmignore: added necessary folder

## [1.24.3] - 2020-03-22

### Changed

- Updated `webdriverio` and `prettier` dependencies

### Fixed

- build: `*.min.js` files should't get prettified

## [1.24.2] - 2020-03-19

### Added

- improvement(prettier): run `prettier` when committing files
- a minzipped size badge

### Changed

- Updated `webdriverio` dependency
- improvement(prettier): prettified and optimized the file
- Formatting and code & content optimizations
- `xo`: added further rules for IE9 & IE10 compatibility

## [1.24.1] - 2020-03-15

### Changed

- Updated `webdriverio`, `commitlint`, `husky`, `prettier` and `xo` dependencies
- test(xo): specifying the JS filename explicitly
- build the minified JS file again

### Fix

- Corrected some metadata regarding the packages
- build(packages): corrected metadata regarding files to ignore and updated `bower.json`

## [1.24.0] - 2020-02-26

### Added

- Linking Apples changelog on the datalist feature from our readme
- `.gitignore` file
- Docs: further mentioned IE10+ and EDGE specifics
- `.npmignore` file
- `Commitlint` & `husky` for CI

### Changed

- Updated `webdriverio` and `xo` dependencies
- Reformatted the JS code
- Removed pointless loop in the code PR [#61](https://github.com/mfranzke/datalist-polyfill/issues/61)
- Updated docs regarding browser support [#62](https://github.com/mfranzke/datalist-polyfill/issues/62)

### Fixed

- Docs: filesize in the readme
- fixed to have a "correct" minification [#58](https://github.com/mfranzke/datalist-polyfill/issues/58)
- Fix exception in IE9 emulator mode PR [#65](https://github.com/mfranzke/datalist-polyfill/issues/65)
- Badges displaying problems in some readers / compilers
- Docs: optimizing on the typos and clearity

## [1.23.3] - 2019-01-28

### Changed

- update `xo` to version 0.24.0

### Fixed

- No substring matching for multiple emailadress suggestions in IE10+ and EDGE / [#54](https://github.com/mfranzke/datalist-polyfill/issues/54)
- EDGE: Incorrect handling of non-text input fields / [#55](https://github.com/mfranzke/datalist-polyfill/issues/55)
- IE10: Changes by [#39](https://github.com/mfranzke/datalist-polyfill/issues/39) break script execution due to usage of `.dataset` / [#56](https://github.com/mfranzke/datalist-polyfill/issues/56)
- Some simple corrections, like e.g. removing incorrectly set `multiple` attributes

## [1.23.2] - 2019-01-08

### Fixed

- Prevent the form to be submitted on selecting a value via `ENTER` key within the `select` / [#51](https://github.com/mfranzke/datalist-polyfill/issues/51)

## [1.23.1] - 2019-01-07

### Fixed

- JavaScript bug in IE9 and corrected the handling of the browsers towards IE10+ / [#50](https://github.com/mfranzke/datalist-polyfill/issues/50)

## [1.23.0] - 2019-01-05

### Added

- Microsoft EDGE / `datalist` popups get "emptied" when receiving focus via tabbing / [#49](https://github.com/mfranzke/datalist-polyfill/issues/49)

### Changed

- Updated `webdriver.io` testing framework to version 5
- Updated some aspects within the `README` file as well as announced some upcoming bigger changes regarding and to cheer the recognized basic support of `datalist` elements within Apple Safari browser.
- Refactoring to prevent a „Function has a complexity of 21.“
- Some simple reformatting of the code according to `prettier`

## [1.22.2] - 2018-11-03

### Changed

- Added comment regarding the structure of the HTML code / [#44](https://github.com/mfranzke/datalist-polyfill/issues/44) & [#45](https://github.com/mfranzke/datalist-polyfill/issues/45)

### Fixed

- Preventing a JS error on no `type`-attribute being provided for the `input`-element / [#45](https://github.com/mfranzke/datalist-polyfill/issues/45)

## [1.22.1] - 2018-08-27

### Fixed

- Escaping the user inputs value as doublequotes wouldn't work on the newly added IE11+ and EDGE functionality / [#40](https://github.com/mfranzke/datalist-polyfill/issues/40)

## [1.22.0] - 2018-08-27

### Added

- Substring matching for the suggestions on both the `value` and the `text` values / [#36](https://github.com/mfranzke/datalist-polyfill/issues/36)

## [1.21.2] - 2018-08-11

### Added

- Finally integrated the test regarding clicking the `select`s `option` elements, as this was actually previously prevented by the other bug fixed in the previous release

### Fixed

- Corrected the code style of the `README` file again, as this got incorrectly reformatted previously

## [1.21.1] - 2018-08-09

### Fixed

- Suggestions aren‘t working `onClick` any more ([#35](https://github.com/mfranzke/datalist-polyfill/issues/35))

## [1.21.0] - 2018-08-08

### Added

- Added testcases and added [crossbrowsertesting](https://crossbrowsertesting.com/) logo to `README`

### Changed

- increased specificity on one of the selectors according the usage in other parts of the code
- Check for correct element on the `input`s event delegation
- Simplified some code parts
- Further aligned the naming conventions
- code and complexity simplifications

### Fixed

- Arrow keys (top&down) disturb the general browser behaviour on number fields ([#32](https://github.com/mfranzke/datalist-polyfill/issues/32))

## [1.20.1] - 2018-07-20

### Changed

- Code simplifications

### Fixed

- Suggestions aren‘t working `onclick` any more [#31](https://github.com/mfranzke/datalist-polyfill/issues/31)

## [1.20.0] - 2018-07-18

### Changed

- on `input[type=url]` omitting the scheme part and performing intelligent matching on the domain name ([#28](https://github.com/mfranzke/datalist-polyfill/issues/28))
- README: Updated the tested browsers list as well as updated the Features section due to the updates by this release
- Preparation for automated testing / splitting the demo page by regular and IE9

### Fixed

- IE9: Use `.getAttribute` for retrieving `.type` and `.multiple` values/existance ([#29](https://github.com/mfranzke/datalist-polyfill/issues/29))
- list IDL attribute must return the current suggestions source element ([#30](https://github.com/mfranzke/datalist-polyfill/issues/30))

## [1.19.0] - 2018-07-13

### Added

- In case of the ESC key being pressed while focusing the polyfilling select, we still want to focus the `input[list]`

### Changed

- Performance: Set a local variable
- Preparation for some automated testing
- Changed and added some functionality to the description within the `README` file

## [1.18.1] - 2018-07-10

### Added

- Dispatch the input event as well on the related `input[list]` on using the `Backspace` key within the polyfilling `select`

## [1.18.0] - 2018-07-10

### Changed

- Defined the system-font for the demo-page
- Renamed some variables to some more meaningful names
- Cleanup on some unnecessary variables & comments

### Removed

- Removed an old separation in between `eventTarget`-Tagnames of `select` and `option`, that was integrated due to the mouse-event, which has been replaced again a while ago

## [1.17.0] - 2018-07-07

### Added

- Include behavior on pressing `Tab` or other printable keys ([#27](https://github.com/mfranzke/datalist-polyfill/issues/27))
- Added Greenkeeper badge. I'm using this service to keep being updated on the dev dependencies.

## [1.16.2] - 2018-07-04

### Fixed

- Fixed a bug that lead to an incorrectly selected suggestion (first instead of last) while using the up key on the `input` element
- Fix for `input[list]` elements with `class` attribute - thanks to @mricherzhagen for mentioning this and even also providing a solution by pull request [#25](https://github.com/mfranzke/datalist-polyfill/issues/25)

## [1.16.1] - 2018-06-28

### Fixed

- Introduced a new bug by the fix for [#23](https://github.com/mfranzke/datalist-polyfill/issues/23). Reverted that one and corrected the `ESLint` rules settings. ([#24](https://github.com/mfranzke/datalist-polyfill/issues/24))

## [1.16.0] - 2018-06-27

### Added

- Linting as well as security: `prettier`, `xo`, `codacy`
- And their badges

### Changed

Made a lot of code changes in relation to what the previously mentioned linters reported. (e.g. [#23](https://github.com/mfranzke/datalist-polyfill/issues/23))

### Security

Made some code changes in relation to what the previously mentioned linters reported. (e.g. [#21](https://github.com/mfranzke/datalist-polyfill/issues/21), [#22](https://github.com/mfranzke/datalist-polyfill/issues/22))

## [1.15.1] - 2018-06-22

### Fixed

- A previous checkin has broken the solution provided for [#16](https://github.com/mfranzke/datalist-polyfill/issues/16), so I've fixed this again.

## [1.15.0] - 2018-06-22

### Changed

- Mainly simplified the code.

## [1.14.4] - 2018-06-21

### Fixed

- IE9: After choosing a suggestion out of the polyfilling select, the select itself wouldn't get hidden. ([#19](https://github.com/mfranzke/datalist-polyfill/issues/19))

## [1.14.3] - 2018-06-20

### Changed

- Changed the order in a comparsion as this simplifies the response.

### Fixed

- Sadly another small bug slipped through today, it's about an incorrect variable being used.

## [1.14.2] - 2018-06-20

### Fixed

- A small bug sadly slipped through that doesn't hide the polyfilling `select` on non-matching option elements regarding the value.

## [1.14.1] - 2018-06-20

### Added

- Hiding the polyfilling `select` on pressing `ENTER`, which is equal to the behavior on pressing `ESC`.
- Added more badges to the `README`. I'm loving badges.

### Changed

- Made some necessary changes to enhance the current demo page by the minimum amount of relevant `HTML` tags that should be included within every page (and even also added the IE related meta tag due to backwards compatibility).

### Removed

- Removed some sample code out of the `README` page due to the new `NPM` websites layout.

### Fixed

- The determination of `option` elements within the polyfilling `select` has incorrectly even also included `:disabled` elements.

## [1.14.0] - 2018-06-12

### Added

- Added `MutationObserver` to even also capture changes to the `option` elements as a correction to enhance the current functionality ([#16](https://github.com/mfranzke/datalist-polyfill/issues/16)).

### Changed

- Changed some URLs from `HTTP` to the new kid on the block: `HTTPS`. Nice ! ;-)
- Additionally did some necessary updates to the documentation.

## [1.13.2] - 2018-06-11

### Changed

- Focusing the `input[list]` after selecting a suggestion, as in [#18](https://github.com/mfranzke/datalist-polyfill/issues/18)

## [1.13.1] - 2018-06-04

### Changed

- Some code refactoring, nothing really serious
  By the way, it was polyfills 1st birthday one month ago. Yeah !!!

## [1.13.0] - 2018-05-28

### Added

- Thanks to @eddr and @Kravimir for inspiring me via [#5](https://github.com/mfranzke/datalist-polyfill/issues/5) that there should be another possibility on defining `value` and `label` for the suggestions. As the browser vendors (GC vs. the others) don't seem to be aligned on this topic, I've decided to enable the `label`-attribute to serve as the definitive label being displayed, even if a value is being defined differing from the label. Check out the „Different ways of defining an option“ section on the demo page regarding this topic.

### Changed

- The docs. And changed (`dependencies`) and added (`jsdelivr`) badges. I like badges.
- As well as extracted the `CHANGELOG` to an external file.

## [1.12.3] - 2018-05-04

### Fixed

- @wlekin thankfully mentioned (extracted to [#15](https://github.com/mfranzke/datalist-polyfill/issues/15)) that the polyfilling `select` gets positioned incorrectly underneath the `input[list]` element on iOS.

## [1.12.2] - 2018-05-01

### Fixed

- Thank you @IceCreamYou for fixing the case sensitive `focusOut` -> `focusout` event name

## [1.12.1] - 2018-04-07

### Changed

- simple (code) style changes (plus added `.editorconfig` to keep it that way) and typo

## [1.12.0] - 2018-03-18

### Added

- @ottoville thankfully contributed by mentioning and implementing the feature of emitting an event when item in `datalist` is selected

## [1.11.2] - 2018-03-17

### Changed

- @mertenhanisch has styled the code according to more „standard“ formatting and also improved the wording of the documentation, which is awesome.
- And @mitchhentges thankfully supports on reviewing your great community support and ensures to the keep the wheels turning on the development of this projects.
  Many kudos to the both of you !!!

## [1.11.1] - 2017-11-24

### Fixed

- @hryamzik thankfully mentioned by [#7](https://github.com/mfranzke/datalist-polyfill/issues/7) that the polyfilling `select` gets positioned incorrectly in case of the `input[list]` element being styled as a block-level element.

## [1.11.0] - 2017-10-08

### Changed

- I'm very thankful for @ailintom mentioning the missing IE9 support with [#2](https://github.com/mfranzke/datalist-polyfill/issues/2), which is still relevant (at least and maybe foremost) for the Windows Vista users.
- Additionally @Kravimir thankfully brought to my attention, that IE9 handles the `option` subelements quite restricted - so I've added a section regarding IE9 support to the demo page with the additional two lines of HTML, that you'll need to add in case you also need / want to still support IE9 in your projects, as well as changed the JavaScript code to even also support IE9.

## [1.10.3] - 2017-10-07

### Changed

- Added a comment regarding IE9 - and some simple code styling.

## [1.10.2] - 2017-09-26

### Fixed

- Simple corrections.

## [1.10.1] - 2017-09-25

### Fixed

- Simple bugfix, that came up through the latest implementation on the up and down arrow keys.

## [1.10.0] - 2017-08-16

### Changed

- Added the ability to open the datalist on the up and down keys even in case that no value has been provided - this seems to be intentionally and even also adapts the behavior by supporting browsers.

## [1.9.0] - 2017-07-20

### Changed

Regarding the changes out of release version 1.6.0 to emulate the expected UI quite nicely, I was still struggling with using that hacky solution (`multiple` attribute) and even also of how to prevent multiple selections on the polyfilling select.

- Actually the attribute `size` came to my attention, which much better fits the requirements and behaves as designed quite perfectly. Chapeau!

## [1.8.1] - 2017-07-18

### Fixed

- Bugfix regarding the handling of the label values.

## [1.8.0] - 2017-07-24

### Changed

- Restricted the polyfill to only work with relevant input types; we’d like to exclude the ones that even already need another polyfill to „work“ correctly or have a meaningful UI, like e.g. `color` or `date`-related ones, as those polyfills should handle the support of the datalist themselves depending on their own functionality.

## [1.7.0] - 2017-06-29

### Added

- As mentioned by @aFarkas [within his review](https://github.com/h5bp/html5please/issues/18), `option` elements could be of some different formats. This release especially follows [the spec](https://www.w3.org/TR/html5/forms.html#the-datalist-element) regarding the aspect that „Each suggestion has a value and a label.“.

## [1.6.2] - 2017-06-28

### Changed

- Optimized the behavior to select the entries within the polyfilling `select[multiple]` on using the up and down arrow keys from the polyfilled `input[list]`.

## [1.6.1] - 2017-06-16

### Changed

- Introduced speaking variables for the different `keycodes`.
- And implemented some feedback by flow.
- As well as additional code simplifications.

## [1.6.0] - 2017-06-16

### Changed

This is so far the biggest and greatest update !

- Depending of the feedback by Michael the visual appearance has changed and will better emulate the expected layout as in other browsers (on non-touch interactions). That for the script is creating the polyfilling `select` as a `multiple`-selection type, which emulates the expected „form“ better.
- And better positioning as well as styling the polyfilling `select` according to the `input` field, like e.g. even also set the polyfilling `select` elements `border-radius` equally as the one by the polyfilled `input`.

## [1.5.0] - 2017-06-10

### Changed

- Simplified the styling and got rid of the external CSS files / dependency. You could remove that one now. Yeah!

## [1.4.0] - 2017-06-09

### Added

- Added `RTL` text-direction support

## [1.3.0] - 2017-05-30

### Added

- Added support for multiple email addresses, separated by comma.

### Changed

- And again, updated documentation slightly. And demo accordingly.

## [1.2.1] - 2017-05-29

### Changed

- Simple code style modifications. Because style matters.

## [1.2.0] - 2017-05-29

### Added

- Added `.options` (for `datalist` elements) and `.list` (for `input` elements) properties according to the specs.

## [1.1.2] - 2017-05-22

### Changed

- Further simplified the code, so that we could even skip the `.matches()` polyfill. Yeah.
- And documentation updates.

## [1.1.1] - 2017-05-10

### Fixed

- fixed another simple bug that lead to an incorrect index being selected - let's skip this, as it's not even the standard behavior

## [1.1.0] - 2017-05-09

### Fixed

- some small corrections

## [1.0.3] - 2017-05-09

### Changed

- better preselection on entries within the dropdown depending on the `input` elements value

## [1.0.2] - 2017-05-08

### Added

- added a `package.json` file

## [1.0.1] - 2017-05-08

### Fixed

- Small, but important typo. :-) Thanks @Fyrd for mentioning this.

## [1.0.0] - 2017-05-04

### Added

- First release.
