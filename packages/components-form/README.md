# SUIT CSS components-form

[![Build Status](https://secure.travis-ci.org/giuseppeg/suitcss-components-form.png?branch=master)](http://travis-ci.org/giuseppeg/suitcss-components-form)

Component CSS for forms. Provides general styling to build hightly composable and consistent forms.

Read more about [SUIT CSS](https://github.com/suitcss/suit/).

## Installation

* [npm](https://www.npmjs.org/package/suitcss-components-form): `npm install suitcss-components-form`
* Download: [zip](https://github.com/giuseppeg/suitcss-components-form/releases/latest)

## Features

* Full-width forms
* Inter-fields vertical spacing
* Fields adapt to the dimensions of an ancestral context
* Simple Custom Select
* Basic validation states

## Available classes

* `Form` core component
* `Form--spaced` adds spacing between form fields
* `Form-field` a form field container
* `Form-field--checkbox` checkbox input modifier
* `Form-field--radio` radio input modifier
* `Form-label` form label text
* `Form-input` the actual form input
* `Form-message` an (optional) form message

## Use

A form can have any number of fields. Each form field must contain a single
form input, label and optionally a message.

```html
<form class="Form" action="/" method="GET">
  <div class="Form-field">
    <label class="Form-label" for="field">Field</label>
    <input class="Form-input" type="text" id="field">
    <p class="Form-message">Hello there</p>
  </div>
</form>
```

### Special form fields

Basic styles for more complex form fields are included in this component.

#### Buttons

Buttons are not styled. You are free to style buttons as you please or use an existing component like [suitcss-button](https://github.com/suitcss/components-button).

SUIT CSS Form however provides two classes:

* `.Form-button` – Attaches to a nested component
* `.Form-wrapButton` – Wraps a nested component

Both make buttons [full-width](https://github.com/suitcss/suit/blob/master/doc/components.md#adapting-to-ancestral-context) and consistent with the `Form` styles by tweaking padding, borders and border radii only.

Read more about how to [style dependencies](https://github.com/suitcss/suit/blob/master/doc/components.md#styling-dependencies).


```html
<form class="Form" action="/" method="GET">
  <div class="Form-field">
    <label class="Form-label" for="field">Field</label>
    <input class="Form-input" type="text" id="field">
  </div>
  <div class="Form-field">
    <!-- .Form-button attaches to the .Button component -->
    <button class="Form-button Button">
      Submit
    </button>
  </div>
  <div class="Form-field u-inlineBlock">
    <!-- .Form-wrapButton wraps the .Button component -->
    <span class="Form-wrapButton">
      <button class="Button">Submit</button>
    </span>

  </div>
</form>
```

Tip: Use an utility class e.g. `u-inlineBlock` when you don't want full-width buttons.

#### Checkbox and Radio inputs

* `Form-field--checkbox`
* `Form-field--radio`

Checkbox and radio inputs are `Form-field` modifiers.<br>
Use one `Form-field` per `Form-input`.

```html
<form class="Form" action="/" method="GET">
  <div class="Form-field Form-field--checkbox">
    <input class="Form-input" type="checkbox" id="check-field">
    <label class="Form-label" for="check-field">Field</label>
  </div>
  <label class="Form-field Form-field--radio">
    <input class="Form-input" type="radio">
    <span class="Form-label">Field</span>
  </label>
</form>
```

#### Custom Select

Modern browsers that support the CSS3 `appearance` property
get basic custom select styles without any additional class
needed:

* Padding, border and border radii match other inputs styles.
* Custom arrow.

### Horizontal forms

Use a layout component like [suitcss-grid](https://github.com/suitcss/components-grid).

### Vertical spacing between Form-field

`Form--spaced` adds uniform vertical space between `Form-field`.

```html
<form class="Form Form--spaced" action="/" method="GET">
  <div class="Form-field">
    <label class="Form-label" for="field-regular">Field</label>
    <input class="Form-input" type="text" id="field-regular">
  </div>
  <div class="Form-field Form-field--radio">
    <input class="Form-input" type="radio" id="radio-field">
    <label class="Form-label" for="radio-field">Field</label>
  </div>
  <div class="Form-field Form-field--radio">
    <input class="Form-input" type="radio" id="radio-field1">
    <label class="Form-label" for="radio-field1">Field</label>
  </div>
</form>
```

N.B. Checkboxes or radio inputs are grouped and the space between each
is half of the regular `Form-field` margin.

### Basic Form validation styles

Basic styles for **visual** validation state classes for the `Form-field`:

* `is-valid`
* `is-invalid`
* `is-warning`


## Configurable properties

Properties names are self explainatory.

#### .Form-label

* `--Form-label-color`
* `--Form-label-font-size`
* `--Form-label-font-weight`

#### .Form-input

* `--Form-input-border-color`
* `--Form-input-border-radius`
* `--Form-input-color`
* `--Form-input-font-size`
* `--Form-input-padding`

#### checkbox and radio

* `--Form-checkradio-gutter` vertical space between the form input and the label.

#### Custom &lt;select&gt; arrow

* `--Form-select-background`
* `--Form-select-background-2x`
* `--Form-select-background-width`

#### .Form-message

* `--Form-message-color`
* `--Form-message-font-size`

#### .Form--spaced

* `--Form--spaced-margin`

### .Form-field's State

#### .Form-field.is-valid

* `--Form-state-valid-border-color`
* `--Form-state-valid-label-color`
* `--Form-state-valid-message-color`

#### .Form-field.is-invalid

* `--Form-state-invalid-border-color`
* `--Form-state-invalid-label-color`
* `--Form-state-invalid-message-color`

#### .Form-field.is-warning

* `--Form-state-warning-border-color`
* `--Form-state-warning-label-color`
* `--Form-state-warning-message-color`

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

To generate the testing build:

```
npm run build-test
```

To watch the files for making changes to test:

```
npm run watch
```

Basic visual tests are in `test/index.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 28+
* Safari 6.1+
* Internet Explorer 8+
