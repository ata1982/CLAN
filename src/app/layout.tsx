import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'),
  title: "オートウェビナー大学｜マーケティング自動化とウェビナー構築でビジネスを加速",
  description: "オートウェビナー大学は、マーケティング自動化とウェビナー構築であなたのビジネスを加速させるオンラインスクールです。Utageシステム導入やIT導入補助金活用もサポート。",
  keywords: "マーケティング自動化, ウェビナー, UTAGE, オンラインスクール, ビジネス加速",
  openGraph: {
    title: "オートウェビナー大学｜マーケティング自動化とウェビナー構築でビジネスを加速",
    description: "オートウェビナー大学は、マーケティング自動化とウェビナー構築であなたのビジネスを加速させるオンラインスクールです。",
    type: "website",
    locale: "ja_JP",
    images: ['/images/hero-pc.webp'],
    siteName: "オートウェビナー大学"
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle"
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
    <html lang="ja" className={notoSansJP.variable} suppressHydrationWarning>
      <body className={`${notoSansJP.className} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
