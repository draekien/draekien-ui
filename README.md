# Draekien-UI

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

- [Introduction](#introduction)
- [Storybook](#storybook)
- [Getting Started](#getting-started)
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
