'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-black shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex items-center space-x-7">
            <a href="/#" className="py-4 px-2 text-black dark:text-white hover:text-gray-500">首頁</a>
            <div className="flex items-center space-x-7">
              <a href="/#courses" className="py-4 px-2 text-black dark:text-white hover:text-gray-500">課程資訊</a>
              <a href="/#consultation" className="py-4 px-2 text-black dark:text-white hover:text-gray-500">諮詢項目</a>
              <a href="/#contact" className="py-4 px-2 text-black dark:text-white hover:text-gray-500">立即聯絡</a>
              <a href="/#shop" className="py-4 px-2 text-black dark:text-white hover:text-gray-500">商品展售</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 