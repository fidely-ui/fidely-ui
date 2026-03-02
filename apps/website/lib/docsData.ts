import { docs } from '~/.velite'

import { type SearchDialogItem } from '~/components/search-dialog'

const getStarted = docs
  .filter((page) => page.category.startsWith('getting-started'))
  .map((page) => ({
    label: page.title,
    value: page.slug,
    description: page.description ?? '',
    category: 'Get Started',
  }))

const styling = docs
  .filter((page) => page.category.startsWith('styling'))
  .map((page) => ({
    label: page.title,
    value: page.slug,
    description: page.description ?? '',
    category: 'Styling',
  }))

const theming = docs
  .filter((page) => page.category.startsWith('theming'))
  .map((page) => ({
    label: page.title,
    value: page.slug,
    description: page.description ?? '',
    category: 'Theming',
  }))

const components = docs
  .filter((page) => page.category.startsWith('components'))
  .map((page) => ({
    label: page.title,
    value: page.slug,
    description: page.description ?? '',
    category: 'Component',
  }))

const utilities = docs
  .filter((page) => page.category.startsWith('utilities'))
  .map((page) => ({
    label: page.title,
    value: page.slug,
    description: page.description ?? '',
    category: 'Utilities',
  }))

export const data: SearchDialogItem[] = [
  ...getStarted,
  ...styling,
  ...theming,
  ...components,
  ...utilities,
]
