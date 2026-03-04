import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "随机旅行盲盒 | Travel Mystery Box",
  description: "一键开启下一站的神秘目的地，极简暗黑旅行灵感盒。"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}