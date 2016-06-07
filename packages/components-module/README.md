# SUIT Module

[![Build Status](https://secure.travis-ci.org/giuseppeg/components-module.svg?branch=master)](http://travis-ci.org/giuseppeg/components-module)

A SUIT component for OOCSS Module / Section layouts – inspired by Nicole Sullivan's [Module component](https://github.com/stubbornella/oocss/wiki/standard-module-format).

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](https://npmjs.org/): `npm install suitcss-components-module`
* Download: [releases](https://github.com/giuseppeg/components-module/releases/latest)

## Available classes

* `Module` - The core class
* `Module-block` - A block unit, can contain headers, content, footers etc.
* `Module-block--separated` - Separates a Module-block from the Module-block above
* `Module--card` – Creates a Card-like Module, useful for Cards/Modals/Dialogs
* `Module--withGutter[Small|Large]` – Adds vertical spacing between `Module-block`
* `Module--withPadding[Small|Large]` – Adds inner spacing to each `Module-block`

## Configurable variables

Gutter is the vertical space between Module-block(s)

```css
--Module-gutter
--Module-gutter-small
--Module-gutter-large
```

Padding for the Module-block

```css
--Module-padding
--Module-padding-small
--Module-padding-large
```

Card-style Module

```css
--Module-card-backgroundColor
--Module-card-borderColor
--Module-card-borderRadius
--Module-card-boxShadow
```

Separator border for the Module-block

```css
--Module-block-separated-borderColor
```

## Usage

```html
<div class="Module">
  <div class="Module-block">...</div>
  <div class="Module-block">...</div>
  ...
</div>
```

See the [test](./test/index.html) file for more examples.

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
