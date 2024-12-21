export default function CoursesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">基礎課程</h3>
        <p className="text-gray-600 dark:text-gray-300">
          了解生命靈數的基本概念和計算方法，探索數字對人生的影響。
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">進階課程</h3>
        <p className="text-gray-600 dark:text-gray-300">
          深入探討生命靈數與性格特質的關聯，學習如何運用數字能量改善生活。
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">專業課程</h3>
        <p className="text-gray-600 dark:text-gray-300">
          培養專業諮詢師的能力，學習如何為他人提供生命靈數分析和建議。
        </p>
      </div>
    </div>
  );
} 