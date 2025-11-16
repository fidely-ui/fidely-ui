import { defineConfig } from 'tsup'

import rootConfig from '../../tsup.config'

export default defineConfig({
  ...rootConfig,
  entry: ['src/index.ts', 'src/collection.ts', 'src/components/**/index.ts'],
  external: [
    'react',
    'react-dom',
    '@pandacss/dev',
    '@fidely-ui/panda-preset',
    '@ark-ui/react',
  ],
  noExternal: [/@fidely-ui\/styled-system/],
})
