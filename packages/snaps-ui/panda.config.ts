import { defineConfig } from '@pandacss/dev'
import { snapsPreset } from '@snaps-ui/panda-preset'
import neutral from '@snaps-ui/panda-preset/colors/neutral'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  importMap: '@snaps-ui/styled-system',
  jsxFramework: 'react',
  presets: [
    '@pandacss/preset-panda',
    snapsPreset({
      accentColor: neutral,
      grayColor: neutral,
      rounded: 'sm',
    }),
  ],
})
