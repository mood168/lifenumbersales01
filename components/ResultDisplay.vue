<template>
  <div v-if="result" class="max-w-md mx-auto mt-8">
    <!-- 計算結果區塊 -->
    <div class="bg-blue-50/80 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-bold mb-4">計算結果</h2>
      
      <div class="space-y-3">
        <!-- 生日 -->
        <div class="bg-emerald-200/80 rounded-lg p-3">
          <div>您的生日：{{ result.birthDate }}</div>
        </div>

        <!-- 生命密碼 -->
        <div class="bg-pink-200/80 rounded-lg p-3 flex justify-between items-center">
          <div>生命密碼：{{ result.number }}</div>
          <button class="text-blue-600 text-sm underline">詳細內容</button>
        </div>

        <!-- 三者之合 -->
        <div class="bg-emerald-200/80 rounded-lg p-3 flex justify-between items-center">
          <div>三者之合：3710</div>
          <button class="text-blue-600 text-sm underline">詳細內容</button>
        </div>

        <!-- 別人眼中的你 -->
        <div class="bg-pink-200/80 rounded-lg p-3 flex justify-between items-center">
          <div>別人眼中的你：3</div>
          <button class="text-blue-600 text-sm underline">詳細內容</button>
        </div>

        <!-- 人生功課數 -->
        <div class="bg-emerald-200/80 rounded-lg p-3 flex justify-between items-center">
          <div>人生功課數：6</div>
          <button class="text-blue-600 text-sm underline">詳細內容</button>
        </div>

        <!-- 補數 -->
        <div class="bg-pink-200/80 rounded-lg p-3">
          <div>補數：4 5 8</div>
        </div>

        <!-- 連線數 -->
        <div class="bg-emerald-200/80 rounded-lg p-3">
          <div>連線數：按數字顯示內容</div>
          <div class="font-bold">123 369</div>
        </div>
      </div>
    </div>

    <!-- 九宮格圖 -->
    <div class="relative">
      <!-- 主要九宮格 -->
      <div class="grid grid-cols-3 gap-2">
        <div v-for="n in 9" :key="n" 
          class="w-20 h-20 border border-gray-300 flex items-center justify-center text-2xl font-bold relative">
          {{ n }}
          <div v-if="hasHighlight(n)" class="absolute inset-0 border-4 border-pink-400 rounded-lg"></div>
          <div v-if="hasCircle(n)" class="absolute inset-0 border-2 border-black rounded-full m-1"></div>
          <div v-if="hasTriangle(n)" class="absolute inset-0 bg-emerald-200/50"></div>
        </div>
      </div>
      
      <!-- 數字 0 的格子 -->
      <div class="absolute -right-[5.5rem] bottom-0 w-20 h-20 border border-gray-300 flex items-center justify-center text-2xl font-bold">
        0
        <div v-if="hasCircle(0)" class="absolute inset-0 border-2 border-black rounded-full m-1"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LifePathResult } from '~/composables/useLifeNumberCalculator'

const props = defineProps<{
  result: LifePathResult | null
}>()

const hasHighlight = (n: number) => [1, 3].includes(n)
const hasCircle = (n: number) => [6, 9, 0].includes(n)
const hasTriangle = (n: number) => [7].includes(n)

function defineProps<T>() {
  throw new Error('Function not implemented.');
}
</script>

<style>
:deep(.backdrop-blur-sm) {
  backdrop-filter: blur(8px);
}


</style> 