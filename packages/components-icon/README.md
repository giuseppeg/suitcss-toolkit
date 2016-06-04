# SUIT Icon

[![Build Status](https://secure.travis-ci.org/giuseppeg/components-icon.svg?branch=master)](http://travis-ci.org/giuseppeg/suitcss-components-icon)

A SUIT component for SVG Icons

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](https://npmjs.org/): `npm install suitcss-components-icon`
* Download: [releases](https://github.com/giuseppeg/suitcss-components-icon/releases/latest)

## Available classes

* `Icon` - The core class

## Usage

```html
<svg class="Icon">...</svg>
```

## Colors

By default the Icon's `fill` is set to [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword).

There are two ways to change the Icon's color:

* Override its `fill` property
* Set its parent's `color` to something else

N.B. you must strip out all of the `fill` attributes from your SVG images otherwise what described above won't work (including default color).

## Scaling

There are two ways to scale Icons:

* Override its `height`
* Override the `font-size` of the Icon or its parent

## Alignment

By default the bottom of the Icons is aligned with the bottom of the parent element's font.

Different alignments can be achieved with flexbox or by overriding the Icon's `vertical-align` property.
Read More about [vertical alignment](http://christopheraue.net/2014/03/05/vertical-align/).

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

* Google Chrome 4+
* Opera 10.1+
* Firefox 3+
* Safari 3.2+
* Internet Explorer 9+
* Android Browser 3+
