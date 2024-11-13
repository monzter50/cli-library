import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    minify: true,
    entry: ['bin/cli.ts'],
    format: ['esm'],
    target: 'esnext',
    outDir: 'dist/bin',
});
