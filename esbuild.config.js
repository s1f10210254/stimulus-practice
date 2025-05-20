require("esbuild")
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.js",
    sourcemap: true,
    target: ["es2020"],
    format: "esm",
    logLevel: "info",
  })
  .catch(() => process.exit(1));
