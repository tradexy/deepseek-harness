# Fork customizations

Fork-local additions live here so they stay isolated from upstream `packages/`, `apps/`, and `docs/` and never conflict on an upstream sync.

Each subdirectory is a self-contained `--patch` overlay. Load one beside any profile:

```sh
pnpm dsh web --patch ./customizations/hello-plugin/cordis.yml
```

`hello-plugin` is a dependency-free smoke test that logs `[hello-plugin] loaded` and `[hello-plugin] active` during boot. Use it to confirm the fork's dev loop after a branch switch or an upstream merge.

Once a customization grows beyond a smoke test, promote it to a proper workspace package under `packages/` following `docs/cookbook/adding-a-package.md`, or to a separate plugin repository.
