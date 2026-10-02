export const name = 'hello-plugin'

/**
 * Fork-local smoke-test plugin. Proves the fork overlay path loads without
 * depending on any workspace package, so it needs no build step.
 * @param {import('@deepseek-ai/cordis').Context} ctx
 */
export function apply(ctx) {
  console.log('[hello-plugin] loaded')

  ctx.effect(() => {
    console.log('[hello-plugin] active')
    return () => console.log('[hello-plugin] unloaded')
  })
}
