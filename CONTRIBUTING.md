# Contributing to Fidely UI

If you plan to contribute to Fidely UI, please take a moment to feel awesome ✨ People like you are what open source is about ♥. Any contributions, no matter how big or small, are highly appreciated.

## Before getting started

- Before jumping into a PR be sure to search [existing PRs](https://github.com/fidely-ui/fidely-ui/pulls) or [issues](https://github.com/fidely-ui/fidely-ui/issues) for an open or closed item that relates to your submission.
- Select an issue from [here](https://github.com/fidely-ui/fidely-ui/issues) or create a new one
- Consider the results from the discussion on the issue if any

## Taking issues

Before taking an issue, ensure that:

- The issue has been assigned the public label
- The issue is clearly defined and understood
- No one has been assigned to the issue
- No one has expressed intention to work on it

You can then:

1. Comment on the issue with your intention to work on it
2. Begin work on the issue

Always feel free to ask questions or seek clarification on the issue.

## Overview

There are many ways you can help improve Fidely UI:

- **Improve documentation**  
  Fix typos, clarify explanations, expand missing sections, or add new guides.

- **Add new demos**  
  Contribute component demos for the website and Storybook

- **Fix bugs**  
  Report bugs, fix existing issues, or improve edge cases.

- **Contribute new features**  
  Propose new ideas via GitHub Discussions or work on an existing requested feature.

- **Enhance the codebase**  
  Refactor, optimize, or improve existing implementations.

### Feature Requests

For new components or large feature ideas, please **[open a GitHub Discussion first](https://github.com/orgs/fidely-ui/discussions)**.
This helps us align on scope, API design, and implementation before any code is written.

## About this repository

Fidely UI is a **monorepo** managed with **pnpm** and **Changesets**.

| Workspace            | Description                    | Path                               |
| :------------------- | :----------------------------- | :--------------------------------- |
| **React Components** | Headless primitives (Ark UI)   | `packages/fidely-ui`               |
| **Panda Preset**     | Design tokens & CSS recipes    | `packages/presets`                 |
| **Documentation**    | Next.js & MDX (Velite powered) | `apps/website`                     |
| **Demos/Testing**    | Storybook & Patterns           | `apps/storybook` & `apps/patterns` |

## Development Setup

### 1. Fork the repository

Click the **Fork** button at the top right of the repository page.

---

### 2. Clone your fork locally

```bash
git clone https://github.com/your-username/fidely-ui.git
```

---

### 3. Navigate into the project

```bash
cd fidely-ui
```

---

### 4. Create a new branch

```bash
git checkout -b your-feature-branch
```

---

### 5. Install dependencies

```bash
pnpm install
```

---

### 6. Build all packages locally

```bash
pnpm build:packages
```

---

### 7. Start the environment:

- Storybook: `pnpm dev:storybook`
- Documentation: `pnpm dev:web`

---

## Styles & Documentation

### Documentation

Documentation is written in **MDX** and lives at:
`apps/website/content/docs`

### Styling

Styling is handled via **Panda CSS recipes** and **slot recipes** located in:
`packages/presets`

> [!IMPORTANT]
> **Note:** If you modify `packages/presets` or `packages/fidely-ui`, you must run:
>
> ```bash
> pnpm build:packages
> ```
>
> If the changes still don't reflect, try running `pnpm install`. We are actively working on a better HMR (Hot Module Replacement) experience for this!

If you encounter CSS errors on the dev server after building, go to
`apps/website/app/global.css`, temporarily comment out the CSS layers,
reload, and then uncomment them.

---

## Commit Convention

We follow Conventional Commits:

```bash
category(scope): message
```

Allowed categories

- **feat / feature**: new features

- **fix**: bug fixes (reference issues when possible)

- **refactor**: code changes without behavior changes

- **docs**: documentation updates

- **build**: build system or dependency changes

- **test**: adding or updating tests

- **ci**: CI or GitHub Actions changes

- **chore**: all changes to the repository that do not fit into any of the above categories

Example

```bash
feat(components): add size prop to button
```

## Recommended Extensions

We recommend using the following extensions in your editor:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
