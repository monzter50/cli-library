import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  minify: true,
  entry: [ "src/bin/cli.ts" ],
  format: [ "esm" ],
  target: "esnext",
  outDir: "dist",
});
