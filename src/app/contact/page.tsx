import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "お問い合わせ｜オートウェビナー大学CLAN",
  description: "オートウェビナー大学CLANへのお問い合わせページ。マーケティング自動化やウェビナー構築に関するご相談をお受けしています。",
  openGraph: {
    title: "お問い合わせ｜オートウェビナー大学CLAN",
    description: "オートウェビナー大学CLANへのお問い合わせページ。マーケティング自動化やウェビナー構築に関するご相談をお受けしています。",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              マーケティング自動化やオートウェビナー構築に関するご質問、ご相談をお気軽にお寄せください。
              専門スタッフが迅速にお答えいたします。
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Direct Consultation */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                無料相談
              </h3>
              <p className="text-gray-600 mb-6">
                あなたのビジネスに最適なマーケティング自動化プランを無料でご提案いたします。
              </p>
              <a 
                href="https://utage-system.com/p/EcESO02xLLoK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
              >
                無料相談を申し込む
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="text-gray-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                メールでのお問い合わせ
              </h3>
              <p className="text-gray-600 mb-6">
                詳細なご質問やご相談は、メールにてお気軽にお送りください。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 w-16">宛先:</span>
                  <span className="text-sm text-gray-600">info@example.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 w-16">返信:</span>
                  <span className="text-sm text-gray-600">営業日24時間以内</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              よくあるご質問
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "オートウェビナーの導入にはどのくらいの期間が必要ですか？",
                  answer: "お客様のビジネス規模や要件によりますが、通常2-4週間程度で基本的なシステムの導入が完了します。その後、運用しながら最適化を行っていきます。"
                },
                {
                  question: "技術的な知識がなくても利用できますか？",
                  answer: "はい、問題ありません。弊社の専門スタッフが設定から運用まで全面的にサポートいたします。また、操作マニュアルや研修も提供しています。"
                },
                {
                  question: "料金体系について教えてください",
                  answer: "お客様のビジネス規模や利用する機能によって料金が変わります。無料相談にて詳細なお見積もりをご提示いたしますので、まずはお気軽にご相談ください。"
                },
                {
                  question: "他社のマーケティングツールとの連携は可能ですか？",
                  answer: "多くの主要なマーケティングツールとの連携が可能です。既存のツールを活かしつつ、より効率的なマーケティング自動化システムを構築できます。"
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Q. {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                お気軽にご相談ください
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                マーケティング自動化のプロフェッショナルが、あなたのビジネス成長をサポートします。
                まずは無料相談で、可能性を探ってみませんか？
              </p>
              <a 
                href="https://utage-system.com/p/EcESO02xLLoK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                今すぐ無料相談を始める
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}