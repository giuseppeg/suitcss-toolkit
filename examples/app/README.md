TodoMVC app styled following the [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* clone this repo
* run `npm install`

## Build

Run `npm run build`.

The script will build your [themes](#themes) into the `build` folder.

## Folders structure

The app source code is in `src`.
Here you have the following structure:

```
base
components
views
utils
themes
```

In general it is a good idea to build standalone pieces and keep theme specific styles in `themes`.

This approach is recommended even if you have a single theme app since you should always have alternative themes for accessibility reasons.
You can read more about this topic in the [themes](#themes) section.

## base

Suggested maximum specificity: `0011`

Contains `suitcss-base` and generic rules or resets.
<br>At this point you may want to only target elements and keep the specificity very low.

## components

Suggested maximum specificity: `0020`

Contains suitcss components.
<br>It is a good idea to keep components simple and reusable.

Components are standalone, they just define variables that can be overriden in a Theme/Site file.

For consistency we suggest to use the following convention for properties names:

```
--ComponentName[-descendant|--modifier][-onState]-(cssProperty|variableName)
```


Examples

```
--ComponentName-backgroundColor
--ComponentName-descendant-backgroundColor
--ComponentName--modifier-backgroundColor
--ComponentName-onHover-backgroundColor
--ComponentName-descendant-onHover-backgroundColor
...
```

Example component `components/MyComponent/index.css`:


```css
/** @define MyComponent */

:root {
  --MyComponent-color: currentColor;
  --MyComponent-fontFamily: inherit;
  --MyComponent-fontSize: inherit;
}

.MyComponent {
  color: var(--MyComponent-color);
  font-family: var(--MyComponent-fontFamily);
  font-size: var(--MyComponent-fontSize);
}

.MyComponent-descendant {
  padding: var(--MyComponent-descendant-padding);
}

@media (--MyComponent-mediaLarge) {
  .MyComponent-descendant {
    display: none;
  }
}
```

Components should use but not define their own custom media queries.

In the example `--MyComponent-mediaLarge` will be defined at the theme level.

Read more about [components](https://github.com/suitcss/suit/blob/master/doc/components.md).

## views

No suggested maximum specificity.

Views are page (or portions of it) specific styles.
<br>Those styles usually are used to make small tweaks to a specific page or component in a specific context.

## utils

Specificity: `!important`.

Utility classes are one off and *final* rules.

Read more about [utilities](https://github.com/suitcss/suit/blob/master/doc/utilities.md).

## themes

Themes is the place where you customize your components and app.
<br>Each theme is a folder in `themes` and defines theme specific variables.

Customization usually happens by mapping component properties to theme specific ones.

```css
:root {
  --MyComponent-color: var(--color-primary);
}
```

A theme folder reproduces the app structure.
Say that you are making a `ThemeName` theme:

```
ThemeName
  - base
  - components
  - utils
  - views
  - variables
```

### variables

Variables is the place where you define theme properties to use in the maps.

```
variables
 - color.css
 - font.css
 - spacing.css
 - index.css
```

Properties are namespaced using the file name `themes/ThemeName/variables/color.css`:

```css
:root {
  --color-primary: black;
  --color-secondary: blue;
  --color-inverse: white;
  /* ... */
}
```

`index.css` includes them all `themes/ThemeName/variables/index.css`:

```css
@import "./color";
@import "./font";
@import "./size";
```

### theme parts

base, components, utils and views contain a single `index.css` file where we include the corrispective file from the app, variables and where we do the mapping.

Example:

```css
/* themes/ThemeName/components/index.css */

/* import the generic components from the app */
@import "../../../components";

/* import the variables */
@import "../variables";

/* optionally import theme only components or overrides */
/* @import "./Button"; */

/*
  Create a map of component variables and `../variables/`
  N.B. the maps could as well live in separate files e.g. in "./Button/index.css"
*/


/** MyComponent */

:root {
  --MyComponent-color: var(--color-primary);
  --MyComponent-fontFamily: var(--font-family-sansSerif);
  --MyComponent-fontSize: var(--font-size-medium);
}

@custom-media --MyComponent-mediaLarge (min-width: 960px);


/** AnotherComponent */
```
