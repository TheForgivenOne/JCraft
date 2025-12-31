import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  external: [
    'clsx',
    'tailwind-merge',
  ],
  sourcemap: true,
  clean: true,
});