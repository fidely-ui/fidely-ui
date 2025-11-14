import { defineConfig } from '@pandacss/dev'
import { snapsPreset } from '@snaps-ui/panda-preset'
import neutral from '@snaps-ui/panda-preset/colors/neutral'

export default defineConfig({
  presets: [
    '@pandacss/preset-panda',
    snapsPreset({
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
  importMap: '@snaps-ui/styled-system',
  outdir: 'styled-system',
  jsxFramework: 'react',
  staticCss: {
    recipes: '*',
  },
  theme: {
    extend: {},
  },
})
