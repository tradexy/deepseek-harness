export const name = 'hello-command'

/**
 * Registers a `/hello` slash command that shows up in the Web UI command menu
 * and answers without contacting the model.
 * @param {import('@deepseek-ai/cordis').Context} ctx
 */
export function apply(ctx) {
  ctx.inject(['commands'], (commandCtx) => {
    commandCtx.commands.register({
      name: 'hello',
      description: 'Say hello from the fork overlay',
      handler: () => ({ kind: 'success', text: 'Hello from your dsh fork!' }),
    })
    console.log('[hello-command] registered /hello')
  })
}
