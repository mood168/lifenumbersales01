<template>
  <div>
    <template v-if="isSignedIn">
      <!-- 漢堡選單按鈕 - 僅在手機版顯示 -->
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="fixed top-5 right-4 z-50 lg:hidden">
        <div class="w-6 h-5 flex flex-col justify-between">
          <span class="w-full h-0.5 bg-gray-800 dark:bg-white"></span>
          <span class="w-full h-0.5 bg-gray-800 dark:bg-white"></span>
          <span class="w-full h-0.5 bg-gray-800 dark:bg-white"></span>
        </div>
      </button>

      <!-- 側邊導航欄 -->
      <nav 
        :class="[
          'fixed left-0 top-0 h-full bg-gray-900 text-white z-40 transition-transform duration-300',
          'w-[350px]',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:translate-x-0' // 桌面版總是顯示
        ]"
      >
        <!-- 原有的導航內容 -->
        <div class="p-6 border-b border-gray-700">
          <NuxtLink to="/" class="text-2xl font-bold">
            紫喬問數
          </NuxtLink>
        </div>

        <div class="mt-6">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="block px-6 py-4 hover:bg-gray-800 transition-colors text-lg">
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- User Section -->
        <div class="absolute bottom-20 left-0 w-full px-6 py-4 border-t border-gray-700">
          <client-only>
            <div class="flex items-center space-x-3 mb-4">
              <UserButton afterSignOutUrl="/" />
              <div class="text-sm">
                <p class="font-medium">{{ user?.firstName || '用戶' }}</p>
                <p class="text-gray-400">{{ user?.emailAddresses[0]?.emailAddress }}</p>
              </div>
            </div>
          </client-only>
        </div>

        <!-- Bottom Section -->
        <div class="absolute bottom-6 left-6">
          <div class="flex items-center space-x-4">
            <UButton
              icon="i-heroicons-moon-20-solid"
              color="white"
              variant="ghost"
              class="!p-2"
              @click="toggleColorMode" />
          </div>
        </div>
      </nav>

      <!-- 主內容區域 -->
      <div 
        :class="[
          'transition-margin duration-300',
          'lg:ml-[350px]'
        ]"
      >
        <slot />
      </div>
    </template>

    <template v-else>
      <div class="w-full">
        <slot />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface NavigationItem {
  name: string
  path: string
}

const { isSignedIn } = useAuth()
const { user } = useUser()
const colorMode = useColorMode()
const isMenuOpen = ref(false)

const navigationItems: NavigationItem[] = [
  { name: '生命靈數計算', path: '/calculate' },
  { name: '掌中世界', path: '/palm-world' },
  { name: '訂閱價格', path: '/pricing' },
  { name: '與我討論', path: '/contact' }
]

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.router-link-active {
  @apply bg-gray-800 font-semibold;
}

:deep(.cl-userButtonBox) {
  @apply h-10 w-10;
}

:deep(.cl-userButtonTrigger) {
  @apply p-0;
}
</style> 