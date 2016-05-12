# SUIT Dropdown

[![Build Status](https://secure.travis-ci.org/giuseppeg/suitcss-components-dropdown.svg?branch=master)](http://travis-ci.org/giuseppeg/suitcss-components-dropdown)

A SUIT component for dropdowns

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Usage

```html
<div class="Dropdown is-expanded">
  <button
    aria-controls="dd-1-menu"
    aria-expanded="true"
    aria-haspopup="true"
    class="Dropdown-toggle"
    id="dd-1-toggle"
  >
    dropdown
  </button>
  <ul
    aria-labelledby="dd-1-toggle"
    aria-hidden="false"
    class="Dropdown-menu"
    id="dd-1-menu"
    role="menu"
  >
    <li class="Dropdown-item" role="menuitem">
      Item
    </li>
    <li class="Dropdown-item" role="menuitem">
      <a class="Dropdown-link" href="">Link Item</a>
    </li>
  </ul>
</div>
```

See the [test page](http://giuseppeg.github.io/suitcss-components-dropdown/test) for more examples.

### Dropdown-menu toggling

Toggle the `is-expanded` state class on `Dropdown` to show/hide the `Dropdown-menu`.

## Accessibility

For better accessibility it is recommended to use `aria` attributes and `role` like in the examples.

You can use a tiny script like [a11y-toggle](http://edenspiekermann.github.io/a11y-toggle/) or write your own to toggle the `Dropdown-menu` while preserving accessibility.

When writing a JavaScript component for the Dropdown it is highly recommended to implement basic keyboard navigation and other [common accessibility features](https://github.com/paypal/bootstrap-accessibility-plugin/#dropdown).

## Installation

* [npm](https://npmjs.org/): `npm install suitcss-components-dropdown`
* Download: [releases](https://github.com/giuseppeg/suitcss-components-dropdown/releases/latest)

## Available classes

* `Dropdown` - The core class
* `Dropdown-toggle` – The element to toggle the dropdown menu, not styled.
* `Dropdown-menu` - The dropdown menu
* `Dropdown-item` - A dropdown menu item
* `Dropdown-link` - A dropdown menu link

### Modifiers

* `Dropdown-menu--inversePlacement` - Inverts the dropdown menu position by placing it on the right or left if any anchestor has `[dir="rtl"]`
* `Dropdown-menu--upPlacement` – Shows the dropdown menu at the top
* `Dropdown-item--separated` – Separates the `Dropdown-item` by adding a `border-top` to it

### State

* `is-expanded` – Can be set on `Dropdown` to show the `Dropdown-menu`
* `is-active` – Can be set on `Dropdown-item` and `Dropdown-link` to mark them as active

## Configurable variables

* `--Dropdown-menu-backgroundColor`
* `--Dropdown-menu-borderColor`
* `--Dropdown-menu-borderRadius`
* `--Dropdown-menu-boxShadow`
* `--Dropdown-menu-zIndex`

* `--Dropdown-item-borderColor`
* `--Dropdown-item-padding-horizontal`
* `--Dropdown-item-padding-vertical`

* `--Dropdown-link-color`
* `--Dropdown-link-onHover-backgroundColor`
* `--Dropdown-link-onHover-color`

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
