import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "オートウェビナー大学｜マーケティング自動化とウェビナー構築でビジネスを加速",
  description: "オートウェビナー大学は、マーケティング自動化とウェビナー構築であなたのビジネスを加速させるオンラインスクールです。Utageシステム導入やIT導入補助金活用もサポート。",
  keywords: "マーケティング自動化, ウェビナー, UTAGE, オンラインスクール, ビジネス加速",
  openGraph: {
    title: "オートウェビナー大学｜マーケティング自動化とウェビナー構築でビジネスを加速",
    description: "オートウェビナー大学は、マーケティング自動化とウェビナー構築であなたのビジネスを加速させるオンラインスクールです。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
