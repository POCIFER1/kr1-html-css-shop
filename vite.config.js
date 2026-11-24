import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pages = [
  'index', 'catalog', 'about', 'contacts', 'product', 'screwdriver', 'lawnmower', 'vacuum-cleaners',
];

export default defineConfig({
  base: './',
  appType: 'mpa',
  esbuild: { jsx: 'automatic' },
  build: {
    rollupOptions: {
      input: pages.map((page) => resolve(import.meta.dirname, page + '.html')),
    },
  },
});
