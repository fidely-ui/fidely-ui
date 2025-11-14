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
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: 'dist',
  jsxFramework: 'react',
  staticCss: {
    recipes: '*',
  },
})
