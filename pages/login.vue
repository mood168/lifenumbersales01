<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="bg-white rounded-3xl p-8 shadow-lg">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">建立您的帳號</h2>
          <p class="mt-2 text-gray-600">
            開始探索生命靈數的奧秘
          </p>
        </div>

        <!-- 社交登入按鈕 -->
        <div class="space-y-4 mb-6">
          <button 
            @click="signInWithGitHub"
            class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <img src="~/assets/images/github.svg" alt="GitHub" class="w-5 h-5" />
            <span class="text-gray-700">使用 GitHub 繼續</span>
          </button>
          <button 
            @click="signInWithGoogle"
            class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <img src="~/assets/images/google.svg" alt="Google" class="w-5 h-5" />
            <span class="text-gray-700">使用 Google 繼續</span>
          </button>
        </div>

        <!-- 分隔線 -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">或</span>
          </div>
        </div>

        <!-- 註冊表單 -->
        <form class="space-y-4" @submit.prevent="handleSignUp">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">名字</label>
              <input 
                type="text" 
                v-model="firstName"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">姓氏</label>
              <input 
                type="text" 
                v-model="lastName"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">電子郵件</label>
            <input 
              type="email" 
              v-model="emailAddress"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">密碼</label>
            <div class="relative">
              <input 
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              <button 
                type="button" 
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2">
                <i class="text-gray-400">{{ showPassword ? '👁️' : '👁' }}</i>
              </button>
            </div>
          </div>

          <button 
            type="submit"
            :disabled="isLoading"
            class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50">
            {{ isLoading ? '處理中...' : '繼續' }}
          </button>
        </form>

        <!-- 已有帳號？登入連結 -->
        <div class="mt-4 text-center">
          <span class="text-sm text-gray-600">已經有帳號？</span>
          <NuxtLink to="/sign-in" class="text-sm text-purple-600 hover:text-purple-500 ml-1">
            登入
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const emailAddress = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)

const { signUp } = useClerk()

const signInWithGitHub = () => {
  signUp.authenticateWithRedirect({
    strategy: 'oauth_github',
    redirectUrl: '/',
    redirectUrlComplete: '/'
  })
}

const signInWithGoogle = () => {
  signUp.authenticateWithRedirect({
    strategy: 'oauth_google',
    redirectUrl: '/',
    redirectUrlComplete: '/'
  })
}

const handleSignUp = async () => {
  if (isLoading.value) return

  try {
    isLoading.value = true
    await signUp.create({
      firstName: firstName.value,
      lastName: lastName.value,
      emailAddress: emailAddress.value,
      password: password.value
    })

    // 註冊成功後重定向到首頁
    navigateTo('/')
  } catch (error) {
    console.error('註冊失敗:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* 自定義樣式 */
input:focus {
  outline: none;
}

button:disabled {
  cursor: not-allowed;
}
</style> 