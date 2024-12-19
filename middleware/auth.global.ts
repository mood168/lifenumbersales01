export default defineNuxtRouteMiddleware((to) => {
  const { isSignedIn } = useAuth()
  
  // 如果用戶未登入且不在登入頁面，重定向到登入頁面
  if (!isSignedIn.value && to.path !== '/login') {
    return navigateTo('/login')
  }
  
  // 如果用戶已登入且在登入頁面，重定向到首頁
  if (isSignedIn.value && to.path === '/login') {
    return navigateTo('/')
  }
}) 