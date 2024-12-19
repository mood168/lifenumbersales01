<template>
  <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <div class="h-[50px]"></div>
    
    <div class="container mx-auto px-4 py-8">
      <!-- 頁面標題 -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-white mb-4">選擇您的訂閱方案</h1>
        <p class="text-white/80">解鎖完整的紫喬問數功能，開啟您的命理之旅</p>
      </div>

      <!-- 價格方案卡片 -->
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- 基礎方案 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all">
          <h3 class="text-xl font-semibold text-white mb-4">基礎方案</h3>
          <div class="text-3xl font-bold text-white mb-6">
            NT$ 299<span class="text-lg font-normal">/月</span>
          </div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              基礎命盤分析
            </li>
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              每月運勢預測
            </li>
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              基礎數字解析
            </li>
          </ul>
          <button class="w-full py-3 px-4 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
            選擇方案
          </button>
        </div>

        <!-- 進階方案 -->
        <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 transform scale-105 relative">
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
            最受歡迎
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">進階方案</h3>
          <div class="text-3xl font-bold text-white mb-6">
            NT$ 499<span class="text-lg font-normal">/月</span>
          </div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              包含基礎方案所有功能
            </li>
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              詳細運勢分析
            </li>
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              人際關係指引
            </li>
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              事業發展建議
            </li>
          </ul>
          <button class="w-full py-3 px-4 bg-white/30 hover:bg-white/40 text-white rounded-lg transition-colors">
            選擇方案
          </button>
        </div>

        <!-- 專業方案 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all">
          <h3 class="text-xl font-semibold text-white mb-4">專業方案</h3>
          <div class="text-3xl font-bold text-white mb-6">
            NT$ 999<span class="text-lg font-normal">/月</span>
          </div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              包含進階方案所有功能
            </li>
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              一對一專業諮詢
            </li>
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              客製化分析報告
            </li>
            <li class="flex items-center text-white">
              <span class="mr-2">✓</span>
              優先支援服務
            </li>
          </ul>
          <button class="w-full py-3 px-4 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
            選擇方案
          </button>
        </div>
      </div>

      <!-- 常見問題 -->
      <div class="mt-20 max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold text-white mb-8 text-center">常見問題</h2>
        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ faq.question }}</h3>
            <p class="text-white/80">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const faqs = [
  {
    question: '如何選擇適合的方案？',
    answer: '建議您可以從基礎方案開始體驗，了解自己的需求後再考慮升級。我們提供彈性的方案變更，您可以隨時升級或降級您的訂閱服務'
  },
  {
    question: '可以隨時取消訂閱嗎？',
    answer: '是的，您可以隨時取消訂閱。取消後，您仍可以使用到當期結束，之後將自動停止續費。'
  },
  {
    question: '付款方式有哪些？',
    answer: '我們接受信用卡、Line Pay、街口支付等多種付款方式，讓您選擇最便利的支付方式。'
  }
]

const backgroundStyle = {
  backgroundImage: 'url(/images/background.jpg)'
}
</script> 