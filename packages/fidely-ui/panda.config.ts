import { defineConfig } from '@pandacss/dev'
import { fidelyPreset } from '@fidely-ui/panda-preset'
import neutral from '@fidely-ui/panda-preset/colors/neutral'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  importMap: '@fidely-ui/styled-system',
  jsxFramework: 'react',
  presets: [
    '@pandacss/preset-panda',
    fidelyPreset({
      accentColor: neutral,
      grayColor: neutral,
      rounded: 'sm',
    }),
  ],
})
