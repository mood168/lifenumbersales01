export default function ConsultationSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">個人諮詢</h3>
        <p className="text-gray-600 dark:text-gray-300">
          透過生命靈數分析，了解您的性格特質、潛在優勢和人生挑戰，
          為您提供具體的建議和指導。
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">企業諮詢</h3>
        <p className="text-gray-600 dark:text-gray-300">
          協助企業運用生命靈數進行團隊分析，優化人員配置，
          提升團隊協作效率和組織氛圍。
        </p>
      </div>
    </div>
  );
} 