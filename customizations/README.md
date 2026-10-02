# Fork customizations

Fork-local additions live here so they stay isolated from upstream `packages/`, `apps/`, and `docs/` and never conflict on an upstream sync.

Each subdirectory is a self-contained `--patch` overlay. Load one beside any profile:

```sh
pnpm dsh web --patch ./customizations/hello-command/cordis.yml
```

With the local `dshdev` launcher, forward the flag after the function name:

```sh
dshdev --patch ./customizations/hello-command/cordis.yml
```

## `hello-command`

Registers a `/hello` slash command. Open any session in the Web UI, type `/`, and pick **hello** from the command menu; it answers `Hello from your dsh fork!` without contacting the model, so no API key is needed.

## `hello-plugin`

A dependency-free boot smoke test that logs `[hello-plugin] loaded`, `[hello-plugin] active`, and `[hello-plugin] unloaded`. Use it to confirm the overlay path after a branch switch or an upstream merge.

Once a customization grows beyond a sample, promote it to a proper workspace package under `packages/` following `docs/cookbook/adding-a-package.md`, or to a separate plugin repository.
