# Fork customizations

Fork-local additions live here so they stay isolated from upstream `packages/`, `apps/`, and `docs/` and never conflict on an upstream sync.

## Bundles (the durable form)

A **bundle** is any npm package whose manifest declares `dsh.bundle` and ships a patch layer. The harness composes it with a **profile** under `$DSH_HOME/profiles/<name>`; `dev:web` boots the profile named `web`, so installing a bundle there makes it part of your normal dev harness with no launcher flags.

```sh
# One-time, per bundle. The profile directory is pnpm's cwd, so use an absolute path.
DSH_HOME=~/.dsh-dev pnpm dsh plugin --profile web add "$PWD/customizations/hello-bundle"

# Verify the composed layer without booting, then restart the dev harness.
DSH_HOME=~/.dsh-dev pnpm dsh --profile web --dump-config
```

`dsh plugin` runs pnpm inside the profile and appends the package to `dsh.profile.bundles` because the manifest declares `dsh.bundle`; removal is `DSH_HOME=~/.dsh-dev pnpm dsh plugin --profile web remove @tradexy/dsh-bundle-hello`.

### `hello-bundle`

Registers a `/hello` slash command. Open any session in the Web UI, type `/`, and pick **hello**; it answers `Hello from your dsh fork!` without contacting the model, so no API key is needed.

## Overlays (the dev form)

A `--patch` overlay applies for one launch only and is handy for a quick experiment, but launcher flags must precede app flags and `dev:web` already fixes the profile to `web`. Prefer a bundle for anything you intend to keep.

### `hello-plugin`

A dependency-free boot smoke test that logs `[hello-plugin] loaded`, `[hello-plugin] active`, and `[hello-plugin] unloaded`. Load it with `pnpm dsh web --patch ./customizations/hello-plugin/cordis.yml`.

Promote a bundle to a workspace package under `packages/` following `docs/cookbook/adding-a-package.md` when it needs TypeScript, tests, or its own build.
