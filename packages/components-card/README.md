# SUIT Card

A SUIT component for Cards like containers

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](https://npmjs.org/packages/suitcss-components-card): `npm install suitcss-components-card`
* [releases history](https://github.com/giuseppeg/suitcss-toolkit/packages/components-card/CHANGELOG.md)

## Available classes

* `Card` - The core Card class

## Configurable variables

```css
--Card-backgroundColor
--Card-borderColor
--Card-borderRadius
--Card-boxShadow
```
If you want to turn off the card border you can set `--Card-borderColor` to `transparent`.

## Usage

```html
<div class="Card">
  Howdy
</div>
```

N.B. `Card` is just a container and it doesn't have default `padding` or styles to arrange its content.
You can combine it with a layout component like [Module](https://npmjs.org/package/suitcss-components-module) to achieve more complex structures.

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
