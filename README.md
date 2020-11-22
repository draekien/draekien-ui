# Draekien-UI

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

![Branch Coverage](./badges/badge-branches.svg)
![Branch Functions](./badges/badge-functions.svg)
![Branch Lines](./badges/badge-lines.svg)
![Branch Statements](./badges/badge-statements.svg)

- [Introduction](#introduction)
- [Storybook](#storybook)
- [Getting Started](#getting-started)
  - [Install and Consume](#install-and-consume)
  - [Custom Themes](#custom-themes)
  - [Using a component](#using-a-component)
- [Contributing](#contributing)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Dev tools](#dev-tools)
  - [Component Folder Structure](#component-folder-structure)
  - [Committing changes](#committing-changes)
  - [Structure](#structure)
  - [Examples](#examples)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm run start-storybook`](#npm-run-start-storybook)
  - [`npm test`](#npm-test)
  - [`npm run test-update`](#npm-run-test-update)
  - [`npm run test-watch`](#npm-run-test-watch)
  - [`npm build`](#npm-build)
  - [`npm run build-storybook`](#npm-run-build-storybook)
  - [`npm run build-all`](#npm-run-build-all)
  - [`npm release`](#npm-release)
  - [`npm run release-chromatic`](#npm-run-release-chromatic)
  - [`npm run lint`](#npm-run-lint)

## Introduction

This is just a personal project to create a UI library based on Theme-UI and to learn about CI/CD and eventually deploying to NPM.

## Storybook

This project deploys a storybook to Chromatic. Click [here](https://master--5fa749d1d2751d0021b71033.chromatic.com) to view the latest.

> The above link will take you away from Github

## Getting Started

### Install and Consume

In your react app, run `npm i draekien-ui`

To consume DraekienUi, you must import the `DraekienUi` comonent and wrap your code in this component.

> in your `index.tsx`

```jsx
// ... other imports
import { DraekienUi } from 'draekien-ui';

function Main() {
  return (
    <DraekienUi>
      <App />
    </DraekienUi>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
```

### Custom Themes

All it takes to use your own theme is to pass in a theme object to the `DraekienUi` `theme` prop. The theme passed in must be of type `ThemeType`, which is importable from the draekien-ui library. The theme that is passed in with be merged with the default draekien-ui theme.

> the following example will override the `p-400` color and set it to purple, while the rest of the theme will use the DraekienUi default theme.

```jsx
// ... other imports
import { DraekienUi } from 'draekien-ui';

function Main() {
  return (
    <DraekienUi theme={{ colors: { 'p-400': 'purple' } }}>
      <App />
    </DraekienUi>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
```

### Using a component

> All components are centralized in the main module. This means you can do the below to import a component from the main module

```jsx
import React from 'react';
import { Button } from 'draekien-ui';

const Element: React.FC = () => {
  return <Button onClick={() => {}}>Click me!</Button>;
};

export default Element;
```

## Contributing

### Overview

Clone the repository

```bash
git clone https://github.com/draekien/draekien-ui.git cd draekien-ui
```

Install dependencies

```bash
npm i
```

Checkout a new feature branch

```bash
# replace <YOUR_BRANCH_NAME> with the name of the branch you want to checkout
git checkout -b feature/<YOUR_BRANCH_NAME>
```

typey typey, then commit your changes and push your branch to remote

```bash
# replace <YOUR_BRANCH_NAME> with the name of the branch you want to checkout
git push --set-upstream origin feature/<YOUR_BRANCH_NAME>
```

make a PR to merge your changes into `master` and wait for a review.

```bash
# if you have the Github CLI
gh pr create --web
```

### Tech Stack

- [Storybook](https://storybook.js.org): Used to render component examples in isolation
- [Typescript](http://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript
- [Jest](https://jestjs.io/): JavaScript testing framework
- [React testing libary](https://testing-library.com/): For testing react components alongside Jest

### Dev tools

> Please install the following dev tools to make your development experience better when working on draekien-ui

- **EditorConfig**: this is [just a file](https://editorconfig.org/) placed in our project's root folder, which defines the code style for the project,
  If you are using VS Code, just paste the following: _publisher:"EditorConfig"_ in the extensions searchbar and install the _EditorConfig for VS Code_

- **Prettier**: A [formatter](https://prettier.io/docs/en/why-prettier.html) for JS/TS code. Is highly recommended to install the **Prettier - Code formatter** extension by _Esben Petersen_ to set Prettier as your formatter in VS Code, it will take the configuration defined in the `.prettier.config.js` file in the root folder.

- **ESLint**: A [linter](https://github.com/eslint/eslint) for our TS code. Get the **ESLint** plugin by _Dirk_Baeumer_ to integrate ESLint with VS Code.

### Component Folder Structure

> Example of a component folder

```bash
components
  ├── ... other components
  ├── button                          # or your component name
  │     ├── tests
  │     │   ├── __snapshots__
  │     │   ├── index.styles.test.ts  # style unit tests, if applicable
  │     │   └── index.test.tsx        # component unit tests
  │     ├── index.stories.tsx         # this renders the component for storybook
  │     ├── index.styles.ts           # css-in-js styles
  │     └── index.tsx                 # component code
  └── index.ts
```

### Committing changes

This repo follows the [conventional git format](https://www.conventionalcommits.org/) and this rule is enforced by a git hook.

We use **Commitizen** to guide you through Git commit wizard and gives commit messages a proper structure, which is essential for `semantic-release` step.
Easiest way to generate a compliant commit message is to run `npm run commit`.

### Structure

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. **fix**: a commit of the type `fix` patches a bug in your codebase (this correlates with `PATCH` in semantic versioning).
2. **feat**: a commit of the type `feat` introduces a new feature to the codebase (this correlates with `MINOR` in semantic versioning).
3. **BREAKING CHANGE**: a commit that has the text `BREAKING CHANGE`: at the beginning of its optional body or footer section introduces a breaking API change (correlating with `MAJOR` in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
4. Others: commit types other than `fix`: and `feat`: are allowed, for example [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (based on the [Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) convention) recommends `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
   A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`.

### Examples

**Commit message with description and breaking change in body**

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

**Commit message with optional `!` to draw attention to breaking change**

```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

**Commit message with no body**

```
docs: correct spelling of CHANGELOG
```

**Commit message with scope**

```
feat(lang): add polish language
```

**Commit message for a fix using an (optional) issue number.**

```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

## Available Scripts

### `npm start`

Starts the storybook locally

### `npm run start-storybook`

Starts the storybook locally with static file support

### `npm test`

Run tests with coverage

### `npm run test-update`

Run tests and update snapshots

### `npm run test-watch`

Run tests in watch mode (usefull for testing during development)

### `npm build`

Runs linter and tests, then builds typescript

### `npm run build-storybook`

Builds the storybook

### `npm run build-all`

Runs the build and build-storybook scripts concurrently

### `npm release`

Runs semantic release (Not set up yet)

### `npm run release-chromatic`

Releases storybook to chromatic

### `npm run lint`

Runs the linter
