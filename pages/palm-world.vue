<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400">
    <!-- 頂部間距 -->
    <div class="h-[50px]"></div>
    
    <!-- 頂部搜尋區域 -->
    <div class="p-4 flex gap-2">
      <input 
        type="text" 
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
        v-for="i in 15" 
        :key="i"
        class="aspect-square rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:scale-105 transition-transform cursor-pointer"
      >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>

<style scoped>
/* 確保網格項目在小螢幕上也能保持正方形 */
@media (max-width: 468px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
}
</style> 