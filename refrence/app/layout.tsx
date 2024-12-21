import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '遇見數字❤️生活豐富',
  description: '計算生涯運數的工具',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} bg-white dark:bg-black min-h-screen`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
