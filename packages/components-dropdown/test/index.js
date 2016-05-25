const test = require('tape-css')(require('tape'));

const styles = require('../build/test.css');

const dom = require('hyperscript');
const getStyle = require('computed-style');
const {
  isOffscreen,
  getMaxItemsWidth,
  getRect,
  prepare,
  select,
  toggleClass,
  toggleRtl
} = require('./utils.js');

{
  const {
    dropdown,
    dropdownMenu,
    settings
  } = prepare(styles);

  test(
    '.Dropdown-menu',
    settings,
    (is) => {
      toggleClass(dropdown, 'is-expanded');

      is.ok(
        isOffscreen(dropdownMenu),
        'is offscreen by default'
      );

      toggleClass(dropdown, 'is-expanded');

      is.ok(
        !isOffscreen(dropdownMenu),
        'is visible when expanded'
      );

      is.equal(
        getMaxItemsWidth(dropdownMenu),
        (
          getRect(dropdownMenu).width
          - parseInt(getStyle(dropdownMenu, 'border-left-width'), 10)
          - parseInt(getStyle(dropdownMenu, 'border-right-width'), 10)
        ),
        'is as wide as the most wide Dropdown-item'
      );

      is.equal(
        getRect(dropdownMenu).top,
        getRect(dropdown).bottom,
        'is positioned at the bottom'
      );

      is.equal(
        getRect(dropdownMenu).left,
        getRect(dropdown).left,
        'is left aligned by default'
      );

      toggleRtl();

      is.equal(
        getRect(dropdownMenu).right,
        getRect(dropdown).right,
        'is right aligned in RTL mode'
      );

      toggleRtl();

      is.end();
    }
  );
}

{
  const {
    dropdown,
    dropdownMenu,
    settings
  } = prepare(styles);

  toggleClass(dropdownMenu, 'Dropdown-menu--inversePlacement');

  test(
    '.Dropdown-menu--inversePlacement',
    settings,
    (is) => {
      is.equal(
        getRect(dropdownMenu).right,
        getRect(dropdown).right,
        'is right aligned'
      );

      toggleRtl();

      is.equal(
        getRect(dropdownMenu).left,
        getRect(dropdown).left,
        'is left aligned in RTL mode'
      );

      toggleRtl();

      is.end();
    }
  );
}

{
  const {
    dropdown,
    dropdownMenu,
    settings
  } = prepare(styles);

  toggleClass(dropdownMenu, 'Dropdown-menu--upPlacement');

  test(
    '.Dropdown-menu--upPlacement',
    settings,
    (is) => {
      is.equal(
        getRect(dropdownMenu).bottom,
        getRect(dropdown).top,
        'is positioned at the top'
      );
      is.end();
    }
  );
}

{
  const {
    dropdown,
    dropdownMenu,
    settings
  } = prepare(styles);

  const dropdownLink = dropdownMenu.querySelector('.Dropdown-link');

  test(
    '.Dropdown-link',
    settings,
    (is) => {
      const initialBgColor = getStyle(dropdownLink, 'background-color');

      [
        ':active',
        ':focus',
        ':hover',
        'is-active'
      ].forEach(state => {
        const description = `
          is highlighted on \`${state.charAt(0) == ':' ? state : '.' + state}\`
        `.trim();

        toggleClass(dropdownLink, state);

        is.notEqual(
          getStyle(dropdownLink, 'background-color'),
          initialBgColor,
          description
        );

        if (state == ':active') {
          is.notEqual(
            getStyle(dropdownLink, 'box-shadow'),
            'none',
            description
          );
        }

        toggleClass(dropdownLink, state);
      });

      is.end();
    }
  );
}
