import auth from '~/middleware/auth'

export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', auth, { global: true })
}) 