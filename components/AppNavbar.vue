<template>
  <div>
    <!-- 只在登入時顯示導航欄 -->
    <template v-if="isSignedIn">
      <nav class="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white z-50">
        <!-- Logo -->
        <div class="p-6 border-b border-gray-700">
          <NuxtLink to="/" class="text-2xl font-bold">
            紫微問數
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
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

      <!-- Main Content Wrapper with margin -->
      <div class="ml-64">
        <slot />
      </div>
    </template>

    <!-- 未登入時不顯示導航欄，內容佔滿整個寬度 -->
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