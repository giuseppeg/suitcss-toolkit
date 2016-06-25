# SUIT CSS Toolkit

A toolkit of UI components and utilities developed following the [SUIT's design principles](https://github.com/suitcss/suit/tree/master/doc).

*Toolkit* is developed as a mono-repository and managed with [lernajs](https://lernajs.io/).

# Contributing

```bash
git clone https://github.com/giuseppeg/suitcss-toolkit.git
cd suitcss-toolkit
npm i
```

All of the packages are under the `packages` folder.

When making a change please *create a new branch* and adhere to the following naming conventions:

```
[packages/packageName/](add|update|fix|try)[/description]
```

Examples:

```bash
packages/components-form/add
packages/components-dropdown/fix/alignment
update/packagejson # refers to the monorepo root
```

# Scaffolding

You can scaffold a new component or utilities with the following commands:

```bash
make component name=my-component
make utils name=my-utils
```

# License

[BSD-3-Clause](./LICENSE)