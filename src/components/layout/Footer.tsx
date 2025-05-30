import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              📬 最新情報をお届けします
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              マーケティング自動化の最新トレンドや実践的なノウハウ、限定セミナーの情報を
              定期的にお送りします。今すぐ登録して、ビジネス成長のヒントを受け取りましょう。
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm source="footer" compact />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white hover:text-apple-primary transition-colors duration-200">
              CLAN
            </Link>
            <p className="mt-4 text-gray-300 max-w-md leading-relaxed">
              マーケティング自動化とウェビナー構築であなたのビジネスを加速させるオンラインスクールです。
              Utageシステム導入やIT導入補助金活用もサポート。
            </p>
            <div className="mt-6">
              <a 
                href="https://utage-system.com/p/EcESO02xLLoK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-apple-primary hover:bg-apple-primary-dark rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-apple-primary focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                無料相談はこちら
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ナビゲーション</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-300 hover:text-white transition-colors duration-200">
                  まえゆきツール
                </Link>
              </li>
              <li>
                <Link href="/achievement" className="text-gray-300 hover:text-white transition-colors duration-200">
                  お客様の声
                </Link>
              </li>              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors duration-200">
                  オンラインコース
                </Link>
              </li>
              <li>
                <Link href="/seminar" className="text-gray-300 hover:text-white transition-colors duration-200">
                  セミナー
                </Link>
              </li>
              <li>
                <Link href="/free-seminar" className="text-gray-300 hover:text-white transition-colors duration-200">
                  無料セミナー
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">情報</h3>            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/tokutei" className="text-gray-300 hover:text-white transition-colors duration-200">
                  特定商取引法
                </Link>
              </li>
              <li>
                <Link href="/free-consultation" className="text-gray-300 hover:text-white transition-colors duration-200">
                  無料相談
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 オートウェビナー大学 CLAN. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                マーケティング自動化であなたのビジネスを次のステージへ
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
