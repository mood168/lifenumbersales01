export default function ContactSection() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">聯絡資訊</h3>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            <strong>電子郵件：</strong> contact@example.com
          </p>
          <p>
            <strong>LINE ID：</strong> @example
          </p>
          <p>
            <strong>營業時間：</strong> 週一至週五 10:00-18:00
          </p>
          <p className="text-sm mt-6">
            如有任何問題或建議，歡迎隨時與我們聯繫。
            我們會在收到訊息後，儘快回覆您。
          </p>
        </div>
      </div>
    </div>
  );
} 