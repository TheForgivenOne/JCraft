import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  external: [
    'react',
    'react-dom',
    '@radix-ui/react-*',
    '@jcraft/utils',
    '@jcraft/types',
    'clsx',
    'tailwind-merge',
    'class-variance-authority',
    'lucide-react',
    'tailwindcss-animate',
  ],
  jsx: 'react-jsx',
});
