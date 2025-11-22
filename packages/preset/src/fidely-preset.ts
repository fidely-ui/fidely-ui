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
import * as colors from './colors/index'

export const fidelyPreset = (options: PresetsOptions) => {
  const { accentColor, rounded, grayColor } = options

  const normalizeNeutralTokens = (tokens: SemanticTokens['colors']) =>
    JSON.parse(
      JSON.stringify(tokens).replace(new RegExp(grayColor.name, 'g'), 'gray')
    )

  return definePreset({
    name: '@fidely-ui/panda-preset',
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

            ...Object.fromEntries(
              Object.entries(colors).map(([name, mod]) => [name, mod.tokens])
            ),

            gray: grayColor.tokens ?? {},
            [accentColor.name]: accentColor.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,

            ...Object.fromEntries(
              Object.entries(colors).map(([name, mod]) => [
                name,
                mod.semanticTokens,
              ])
            ),

            gray: normalizeNeutralTokens(grayColor.semanticTokens),
            [accentColor.name]: accentColor.semanticTokens,
          },
          radii: createRadii(rounded),
        },
      },
    },
  })
}
