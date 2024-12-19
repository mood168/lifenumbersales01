<template>
  <div class="min-h-screen p-8">
    <div class="container mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4 drop-shadow-lg">紫微問數❤靈運指掌</h1>
        <p class="text-xl text-white/90 drop-shadow">探索您的天賦與潛能</p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink 
          v-for="(item, index) in consultItems" 
          :key="index"
          :to="item.path"
          class="group">
          <UCard
            class="transform transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30">
            <template #header>
              <h3 class="text-xl font-semibold text-white drop-shadow-sm">{{ item.title }}</h3>
            </template>
            <p class="text-white/90 dark:text-gray-200">{{ item.description }}</p>
          </UCard>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ConsultItem {
  title: string
  description: string
  path: string
}

const consultItems: ConsultItem[] = [
  {
    title: '夫妻關係',
    description: '了解您與伴侶的相處模式與潛在挑戰',
    path: '/consult/marriage'
  },
  {
    title: '人際交往',
    description: '探索您的社交特質與人際互動模式',
    path: '/consult/social'
  },
  {
    title: '適合職業',
    description: '發掘最適合您的職業方向與發展路徑',
    path: '/consult/career'
  },
  {
    title: '職場交際',
    description: '提升職場人際關係與溝通技巧',
    path: '/consult/workplace'
  },
  {
    title: '客戶個性',
    description: '了解不同數字的客戶特質與應對策略',
    path: '/consult/customer'
  },
  {
    title: '車牌號碼',
    description: '選擇最適合您的幸運車牌號碼',
    path: '/consult/car-number'
  },
  {
    title: '幸運顏色',
    description: '找出能為您帶來好運的顏色',
    path: '/consult/lucky-color'
  },
  {
    title: '適合珠寶',
    description: '選擇最適合您的珠寶飾品',
    path: '/consult/jewelry'
  },
  {
    title: '個性解析',
    description: '深入了解不同生命靈數的性格特質',
    path: '/consult/personality'
  }
]
</script>

<style scoped>
.container {
  max-width: 1920px;
}
</style> 