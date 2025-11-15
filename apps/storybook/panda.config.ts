import { defineConfig } from '@pandacss/dev'
import { fidelyPreset } from '@fidely-ui/panda-preset'
import neutral from '@fidely-ui/panda-preset/colors/neutral'

export default defineConfig({
  presets: [
    fidelyPreset({
      accentColor: neutral,
      grayColor: neutral,
      rounded: 'sm',
    }),
  ],
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    '../patherns/src/examples/**/*.{js,jsx,ts,tsx}',
  ],
  // Files to exclude
  exclude: [],
  importMap: '@fidely-ui/styled-system',
  // The output directory for your css system
  outdir: 'styled-system',
  staticCss: {
    recipes: '*',
  },
  theme: {
    extend: {},
  },
})
