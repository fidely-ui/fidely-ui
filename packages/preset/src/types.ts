import type { SemanticTokens, Tokens } from '@pandacss/dev'

export interface ColorPalette {
  name: string
  tokens: Tokens['colors']
  semanticTokens: SemanticTokens['colors']
}

export interface PresetsOptions {
  accentColor: ColorPalette
  grayColor: ColorPalette
  rounded: Radius
}

export type AccentColor = (typeof accent)[number]

export const accent = [
  'neutral',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as const

export type GrayColor = (typeof grayColor)[number]
export const grayColor = [
  'neutral',
  'mauve',
  'olive',
  'sage',
  'sand',
  'slate',
] as const

export type Radius = (typeof radii)[number]
export const radii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
