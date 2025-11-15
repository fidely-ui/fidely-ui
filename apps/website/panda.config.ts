import { defineConfig } from '@pandacss/dev'
import { fidelyPreset } from '@fidely-ui/panda-preset'
import neutral from '@fidely-ui/panda-preset/colors/neutral'

export default defineConfig({
  presets: [
    '@pandacss/preset-panda',
    fidelyPreset({
      accentColor: neutral,
      grayColor: neutral,
      rounded: 'sm',
    }),
  ],
  preflight: true,
  include: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    '../patherns/src/examples/**/*.{js,jsx,ts,tsx}',
  ],
  importMap: '@fidely-ui/styled-system',
  outdir: 'styled-system',
  jsxFramework: 'react',
  staticCss: {
    recipes: '*',
  },
  theme: {
    extend: {},
  },
})
