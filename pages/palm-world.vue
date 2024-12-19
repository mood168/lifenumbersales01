<template>
  <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <div class="h-[50px]"></div>
    
    <!-- 頂部搜尋區域 -->
    <div class="p-4 flex gap-2">
      <input 
        type="text" 
        v-model="searchQuery"
        class="flex-1 rounded-md border-0 px-4 py-2 shadow-sm"
        placeholder="搜尋..."
      >
      <button class="bg-gray-700 text-white px-4 py-2 rounded-md">
        搜尋
      </button>
    </div>

    <!-- 網格布局 -->
    <div class="grid grid-cols-3 gap-4 p-4">
      <div 
        v-for="item in filteredItems" 
        :key="item.id"
        class="aspect-square rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:scale-105 transition-transform cursor-pointer p-4 flex flex-col items-center justify-center text-center"
      >
        <h3 class="text-white font-medium text-sm sm:text-base">{{ item.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const searchQuery = ref('')

const items = [
  { id: 1, title: '夫妻關係' },
  { id: 2, title: '人際交往' },
  { id: 3, title: '適合職業' },
  { id: 4, title: '職場交際' },
  { id: 5, title: '客戶個性' },
  { id: 6, title: '車牌號碼' },
  { id: 7, title: '幸運顏色' },
  { id: 8, title: '適合珠寶' },
  { id: 9, title: '1號人格' },
  { id: 10, title: '2號人格' },
  { id: 11, title: '3號人格' },
  { id: 12, title: '4號人格' },
  { id: 13, title: '5號人格' },
  { id: 14, title: '6號人格' },
  { id: 15, title: '7號人格' },
  { id: 16, title: '8號人格' },
  { id: 17, title: '9號人格' }
]

// 搜尋功能
const filteredItems = computed(() => {
  if (!searchQuery.value) return items
  return items.filter(item => 
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const backgroundStyle = {
  backgroundImage: 'url(/images/background.jpg)'
}
</script>

<style scoped>
@media (max-width: 468px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
}
</style> 