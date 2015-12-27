# SUIT CSS components-form

[![Build Status](https://secure.travis-ci.org/giuseppeg/suitcss-components-form.png?branch=master)](http://travis-ci.org/giuseppeg/suitcss-components-form)

Component CSS for forms. Provides general styling to build hightly composable and consistent forms.

Read more about [SUIT CSS](https://github.com/suitcss/suit/).

## Installation

* [npm](https://www.npmjs.org/package/suitcss-components-form): `npm install suitcss-components-form`
* Download: [zip](https://github.com/giuseppeg/suitcss-components-form/releases/latest)

## Features

* Full-width forms
* Horizontal fluid forms
* Inter-fields vertical spacing
* Fields adapt to the dimensions of an ancestral context
* Works with wrapping labels
* Collapsable labels that expand on hover
* Simple Custom Select
* Basic validation states

## Available classes

* `Form` core component
* `Form--horizontal` horizontal forms
* `Form--spaced` adds spacing between form fields
* `Form-field` a form field container
* `Form-field--checkbox` checkbox input modifier
* `Form-field--radio` radio input modifier
* `Form-label` form label text
* `Form-label--fit` collapsable labels that expand on hover
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

`Form-field` and `Form-message` can be grouped (wrapped) with `Form-inputWrapper`.<br>
This is particularly useful to align them with labels when making horizontal forms.

```html
<form class="Form Form--horizontal" action="/" method="GET">
  <div class="Form-field">
    <label class="Form-label" for="field">Field</label>
    <div class="Form-inputWrapper">
      <input class="Form-input" type="text" id="field">
      <p class="Form-message">Hello there</p>
    </div>
  </div>
</form>
```

### Special form fields

Basic styles for more complex form fields are included in this component.

#### Buttons

Buttons are not styled – styling is left to the consumer of this component.

SUIT CSS Form provides a container `.Form-button` that makes buttons
[full-width](https://github.com/suitcss/suit/blob/master/doc/components.md#adapting-to-ancestral-context) and consistent with the `Form` styles by tweaking padding,
borders and border radii only.

```html
<form class="Form" action="/" method="GET">
  <div class="Form-field">
    <label class="Form-label" for="field">Field</label>
    <input class="Form-input" type="text" id="field">
  </div>
  <div class="Form-field">
    <span class="Form-button u-inlineBlock">
      <button>Submit</button>
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

#### Fit labels with ellipsis

When making horizontal forms and form labels are too long you have two options:

* Let the label text wrap (default).
* Avoid wrapping text (suggested solution – use an utility class).
* Hide overflowing text and add ellipsis.

The latter approach provides a bad UX because people can't expand and read the label text.

**It is advised not to do so!** However if you still want to do this use
`Form-field--fit` to add an expand on `hover` and `active` effect.

### Horizontal forms

* `Form--horizontal` makes an entire form horizontal.
* `Form-field--horizontal` makes a single `Form-field` horizontal.

```html
<form class="Form Form--horizontal" action="/" method="GET">
  <div class="Form-field">
    <label class="Form-label" for="field">Field</label>
    <input class="Form-input" type="text" id="field">
  </div>
</form>
```

It is possible to make a single horizontal `Form-field`:

```html
<form class="Form" action="/" method="GET">
  <div class="Form-field Form-field--horizontal">
    <label class="Form-label" for="field-regular">Field</label>
    <input class="Form-input" type="text" id="field-regular">
  </div>
  <div class="Form-field Form-field--horizontal">
    <label class="Form-label" for="field">Horizontal Field</label>
    <input class="Form-input" type="text" id="field">
  </div>
</form>
```

The label `width` is auto-computed and variable.
Use [size utilities](https://github.com/suitcss/utils-size) to set a fixed and constant width.

N.B. Checkbox and radio inputs stay full-width.

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
* `--Form-label-margin`

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
* `--Form-message-margin`

#### .Form[-field]--horizontal

* `--Form--horizontal-gutter`

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
