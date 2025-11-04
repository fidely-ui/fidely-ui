import { defineConfig } from '@pandacss/dev'
import { createSnapsPreset } from '@snaps-ui/panda-preset'
import neutral from '@snaps-ui/panda-preset/colors/neutral'

export default defineConfig({
  presets: [
    '@pandacss/preset-panda',
    createSnapsPreset({
      accentColor: neutral,
      grayColor: neutral,
      radius: 'sm',
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
  // The output directory for your css system
  outdir: 'styled-system',
  staticCss: {
    recipes: '*',
  },
  theme: {
    extend: {},
  },
})
