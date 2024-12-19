<template>
  <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <div class="h-[50px]"></div>
    
    <div class="container mx-auto px-4 py-8">
      <!-- 頁面標題 -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-white mb-4">與我討論</h1>
        <p class="text-white/80">掃描下方 QR Code 加入 LINE 好友</p>
      </div>

      <!-- QR Code 區塊 -->
      <div class="max-w-sm mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <div class="flex flex-col items-center">
          <!-- QR Code 圖片 -->
          <img 
            src="/images/line-qrcode.png" 
            alt="LINE QR Code" 
            class="w-64 h-64 mb-6"
          />
          
          <!-- LINE 圖示和文字 -->
          <div class="flex items-center gap-2 text-gray-700">
            <img 
              src="/images/line-icon.png" 
              alt="LINE" 
              class="w-8 h-8"
            />
            <span class="text-lg font-medium">掃描加入好友</span>
          </div>
        </div>
      </div>
      <div class="h-[50px]"></div>
      <!-- 補充說明 -->
      <div class="mt-12 max-w-2xl mx-auto">
        <h2 class="text-xl font-semibold text-white mb-4 text-center">為什麼選擇 LINE 諮詢？</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
            <h3 class="font-medium text-white mb-2 text-center">即時回覆</h3>
            <p class="text-white/80 text-sm text-center">快速獲得專業的解答和建議</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
            <h3 class="font-medium text-white mb-2 text-center">個人化服務</h3>
            <p class="text-white/80 text-sm text-center">根據您的需求提供客製化諮詢</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
            <h3 class="font-medium text-white mb-2 text-center">便利溝通</h3>
            <p class="text-white/80 text-sm text-center">隨時隨地都能輕鬆聯繫</p>
          </div>
        </div>
      </div>
      <div class="h-[50px]"></div>
      <!-- 注意事項 -->
      <div class="mt-12 text-center text-white/80 text-sm">
        <p>服務時間：週一至週五 09:00-18:00</p>
        <p>非服務時間的諮詢會在下個工作日回覆</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const backgroundStyle = {
  backgroundImage: 'url(/images/background.jpg)'
}
</script> 