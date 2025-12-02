import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    cli: 'bin/index.ts',
  },

  outDir: 'dist',
  target: 'node20',
  format: ['esm'],

  bundle: false,
  splitting: false,
  sourcemap: false,
  minify: false,
  clean: true,

  banner: {
    js: '#!/usr/bin/env node',
  },

  // dts: true,
})
