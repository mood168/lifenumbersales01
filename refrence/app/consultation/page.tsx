export default function ConsultationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">諮詢項目</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">「生命運數/ 一對一」</h2>
          <p className="text-black/70 dark:text-white/70 mb-4">了解個人天賦特質、改善負面模式，建立和諧關係，增強自我覺察與幸福感。</p>
          <p className="font-semibold text-black dark:text-white">NT$ 1300 / 120分鐘</p>
        </div>
        <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">「建立有愛組織團隊」</h2>
          <p className="text-black/70 dark:text-white/70 mb-4">以生命靈數探索成員的特質與角色，提升協作效率與創意表現。透過遊戲與互動，建立最佳合作策略，助力團隊達成目標，創造卓越成果。</p>
          <p className="font-semibold text-black dark:text-white">時間 內容/ 量身訂作</p>
        </div>
      </div>
    </main>
  );
} 