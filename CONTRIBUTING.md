# Contributing to Fidely UI

Thanks for showing interest in contributing to **Fidely UI 💖** — you rock!

## Overview

Here are a few ways you can help improve Fidely UI:

- **Improve the documentation**: Add new demos, fix typos, or expand missing information.
- **Add new demos**: Contribute new component demos to the website and Storybook.
- **Fix bugs**: Report bugs, fix them, or suggest improvements.
- **Contribute to the code**: Propose new features by opening a GitHub Discussion, or pick up an existing issue to work on.
- **Enhance the codebase**: Improve performance, accessibility, or developer experience.

> We welcome all contributions — no matter how big or small.

## Architecture

Fidely UI is built with **flexibility and reusability** in mind. It provides production-ready components powered by a lightweight core, while keeping styling and customization fully in your control.

### Filing Issues

- If the issue is related to **component logic or accessibility**, open it in the Fidely UI repository.
- If it’s a **styling or design issue**, you can usually fix it directly in the Fidely UI codebase and submit a PR.

### Feature Requests

- If the feature is a **new component**, start a discussion in the [Fidely UI repository](https://github.com/fidely-ui/fidely-ui).
- If the feature involves **core logic or architectural changes**, open an issue so we can evaluate and plan together.

## Local Setup

- Clone the repository

```bash
git clone https://github.com/fidely-ui/fidely-ui.git
```

Install dependencies

```bash
pnpm install
```

Build all packages locally

```bash
pnpm build:packages
```

Start Storybook

```bash
pnpm dev:storybook
```

Start documentation website

```bash
pnpm dev:web
```

## Recommended Extensions

We recommend using the following extensions in your editor:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [MDX](https://mdxjs.com/)
