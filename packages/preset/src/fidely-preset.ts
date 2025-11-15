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
import amber from './colors/amber'
import bronze from './colors/bronze'
import brown from './colors/brown'
import crimson from './colors/crimson'
import cyan from './colors/cyan'
import gold from './colors/gold'
import grass from './colors/grass'
import indigo from './colors/indigo'
import iris from './colors/iris'
import jade from './colors/jade'
import lime from './colors/lime'
import mauve from './colors/mauve'
import mint from './colors/mint'
import olive from './colors/olive'
import pink from './colors/pink'
import plum from './colors/plum'
import ruby from './colors/ruby'
import sage from './colors/sage'
import sand from './colors/sand'
import sky from './colors/sky'
import slate from './colors/slate'
import teal from './colors/teal'
import tomato from './colors/tomato'
import violet from './colors/violet'
import yellow from './colors/yellow'

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

            amber: amber.tokens,
            blue: blue.tokens,
            bronze: bronze.tokens,
            brown: brown.tokens,
            crimson: crimson.tokens,
            cyan: cyan.tokens,
            gold: gold.tokens,
            grass: grass.tokens,
            green: green.tokens,
            indigo: indigo.tokens,
            iris: iris.tokens,
            jade: jade.tokens,
            lime: lime.tokens,
            mauve: mauve.tokens,
            mint: mint.tokens,
            olive: olive.tokens,
            orange: orange.tokens,
            pink: pink.tokens,
            plum: plum.tokens,
            purple: purple.tokens,
            red: red.tokens,
            ruby: ruby.tokens,
            sage: sage.tokens,
            sand: sand.tokens,
            sky: sky.tokens,
            slate: slate.tokens,
            teal: teal.tokens,
            tomato: tomato.tokens,
            violet: violet.tokens,
            yellow: yellow.tokens,

            gray: grayColor.tokens ?? {},
            [accentColor.name]: accentColor.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            amber: amber.semanticTokens,
            blue: blue.semanticTokens,
            bronze: bronze.semanticTokens,
            brown: brown.semanticTokens,
            crimson: crimson.semanticTokens,
            cyan: cyan.semanticTokens,
            gold: gold.semanticTokens,
            grass: grass.semanticTokens,
            green: green.semanticTokens,
            indigo: indigo.semanticTokens,
            iris: iris.semanticTokens,
            jade: jade.semanticTokens,
            lime: lime.semanticTokens,
            mauve: mauve.semanticTokens,
            mint: mint.semanticTokens,
            olive: olive.semanticTokens,
            orange: orange.semanticTokens,
            pink: pink.semanticTokens,
            plum: plum.semanticTokens,
            purple: purple.semanticTokens,
            red: red.semanticTokens,
            ruby: ruby.semanticTokens,
            sage: sage.semanticTokens,
            sand: sand.semanticTokens,
            sky: sky.semanticTokens,
            slate: slate.semanticTokens,
            teal: teal.semanticTokens,
            tomato: tomato.semanticTokens,
            violet: violet.semanticTokens,
            yellow: yellow.semanticTokens,

            gray: normalizeNeutralTokens(grayColor.semanticTokens),
            [accentColor.name]: accentColor.semanticTokens,
          },
          radii: createRadii(rounded),
        },
      },
    },
  })
}
