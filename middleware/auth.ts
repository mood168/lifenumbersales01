import { until } from '@vueuse/core'

export default defineNuxtRouteMiddleware(async (to) => {
  // 允許訪問公共頁面
  const publicPages = ['/login', '/', '/calculate']
  if (publicPages.includes(to.path)) {
    return
  }

  // 檢查用戶是否已登入
  const { isSignedIn } = useAuth()
  if (!isSignedIn) {
    return navigateTo('/login')
  }
}) 