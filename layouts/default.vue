<template>
  <div class="min-h-screen relative">
    <!-- 背景圖片 -->
    <div class="fixed inset-0 z-0">
      <img 
        src="/images/1920x1080.png" 
        alt="背景"
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- 內容區域 -->
    <div class="relative z-10">
      <AppNavbar>
        <slot />
      </AppNavbar>
    </div>
  </div>
</template>

<script setup lang="ts">
// 布局組件不需要額外的邏輯
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply antialiased;
}
</style> 