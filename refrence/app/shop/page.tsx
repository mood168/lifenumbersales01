export default function ShopPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">商品展售</h1>
      <div className="flex items-center justify-center min-h-[400px] bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            商品即將上線
          </h2>
          <p className="text-black/70 dark:text-white/70">
            我們正在準備更好的商品與服務，敬請期待！
          </p>
        </div>
      </div>
    </main>
  );
} 