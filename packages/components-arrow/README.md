# SUIT Arrow

[![Build Status](https://secure.travis-ci.org/giuseppeg/suitcss-components-arrow.svg?branch=master)](http://travis-ci.org/giuseppeg/suitcss-components-arrow)

A SUIT component for an arrow to use with dropdowns, tooltips etc.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](https://npmjs.org/): `npm install suitcss-components-arrow`
* Download: [releases](https://github.com/giuseppeg/suitcss-components-arrow/releases/latest)

## Available classes

* `Arrow` - The core Arrow class
* `Arrow--[top|right|bottom|left]` – Position modifiers. `Arrow--bottom` is the default.

## Configurable variables

```css
--Arrow-size

--Arrow-backgroundColor

--Arrow-borderColor
--Arrow-borderRadius

--Arrow-boxShadowColor
--Arrow-boxShadowSpread
```

## Usage

```html
<span class="Arrow"></span>
```

It is recommended to use a wrapper element to control the `Arrow` position.
E.g.:

```html
<span class="Dropdown-arrow" aria-hidden="true">
  <span class="Arrow"></span>
</span>
```

### Tweaking the Arrow Size

The arrow size can be changed by overriding the `font-size` of `.Arrow` element.

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

To generate the testing build.

```
npm run build-test
```

Basic visual tests are in `test/index.html`.

To pre-process:

```
npm run preprocess
```

To pre-process the tests:

```
npm run preprocess-test
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
