import { definePreset } from '@pandacss/dev'
import { type SemanticTokens } from '@pandacss/dev'

import { type PresetsOptions } from './types'
import { textStyles } from './theme/text-styles'
import { breakpoints } from './theme/breakpoints'
import { conditions } from './theme/conditions'
import { keyframes } from './theme/keyframes'
import { globalCss } from './theme/global-css'
import { tokens } from './theme/tokens'
import { semanticTokens } from './theme/semantic-tokens'
import { createRadii } from './utils/createRadii'
import { recipes } from './theme/recipe'
import { slotRecipes } from './theme/slot-recipe'
import red from './colors/red'
import blue from './colors/blue'
import green from './colors/green'
import purple from './colors/purple'
import orange from './colors/orange'

export const createSnapsPreset = (options: PresetsOptions) => {
  const { accentColor, radius, grayColor } = options

  const normalizeNeutralTokens = (tokens: SemanticTokens['colors']) =>
    JSON.parse(
      JSON.stringify(tokens).replace(new RegExp(grayColor.name, 'g'), 'gray')
    )

  return definePreset({
    name: '@snaps-ui/panda-preset',
    presets: ['@pandacss/preset-panda'],
    conditions,
    globalCss: {
      ...globalCss,
      html: {
        colorPalette: accentColor.name,
      },
    },
    theme: {
      extend: {
        breakpoints,
        keyframes,
        recipes,
        slotRecipes,
        textStyles,
        tokens: {
          ...tokens,
          colors: {
            ...tokens.colors,
            red: red.tokens,
            blue: blue.tokens,
            green: green.tokens,
            purple: purple.tokens,
            orange: orange.tokens,
            gray: grayColor.tokens ?? {},
            [accentColor.name]: accentColor.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            red: red.semanticTokens,
            blue: blue.semanticTokens,
            green: green.semanticTokens,
            purple: purple.semanticTokens,
            orange: orange.semanticTokens,
            gray: normalizeNeutralTokens(grayColor.semanticTokens),
            [accentColor.name]: accentColor.semanticTokens,
            radii: createRadii(radius),
          },
        },
      },
    },
  })
}
