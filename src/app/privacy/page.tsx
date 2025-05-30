import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | オートウェビナー大学CLAN',
  description: 'オートウェビナー大学CLANのプライバシーポリシーをご確認ください。お客様の個人情報の取り扱いについて詳しく説明しています。',
  robots: 'noindex, nofollow',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                プライバシーポリシー
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                株式会社オートウェビナー大学CLAN（以下「当社」）は、
                お客様の個人情報保護の重要性を認識し、適切な取り扱いを行います。
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">1. 個人情報の定義</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  本ポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される個人情報を指します。
                  すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                  特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                  それにより特定の個人を識別することができることとなるものを含む）をいいます。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">2. 個人情報の収集</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  当社は、以下の場合に個人情報を収集することがあります：
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>お問い合わせフォームからのご連絡</li>
                  <li>サービスお申し込み時</li>
                  <li>メールニュースレターの配信登録</li>
                  <li>セミナーやイベントへの参加申し込み</li>
                  <li>アンケートやキャンペーンへの参加</li>
                  <li>当社ウェブサイトの閲覧（Cookieなど）</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">3. 収集する個人情報の種類</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  当社が収集する個人情報は以下の通りです：
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>氏名、会社名、部署名、役職名</li>
                  <li>メールアドレス、電話番号、FAX番号</li>
                  <li>住所、郵便番号</li>
                  <li>IPアドレス、アクセスログ</li>
                  <li>Cookie情報</li>
                  <li>その他お客様が当社に提供する情報</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">4. 個人情報の利用目的</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  当社は、収集した個人情報を以下の目的で利用いたします：
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>お問い合わせへの回答</li>
                  <li>サービスの提供および改善</li>
                  <li>契約の履行および顧客サポート</li>
                  <li>メールニュースレターの配信</li>
                  <li>セミナーやイベントのご案内</li>
                  <li>マーケティング活動および広告配信</li>
                  <li>統計データの作成（個人を特定できない形式）</li>
                  <li>法令に基づく対応</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">5. 個人情報の第三者提供</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  当社は、以下の場合を除き、お客様の同意を得ることなく個人情報を第三者に提供することはありません：
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">6. 個人情報の委託</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当社は、利用目的の達成に必要な範囲において、個人情報の取り扱いを外部に委託することがあります。
                  この場合、委託先に対して適切な監督を行い、個人情報の安全管理が図られるよう対処いたします。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">7. Cookieについて</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当社ウェブサイトでは、お客様により良いサービスを提供するためにCookieを使用しています。
                  Cookieは、ウェブサイトの利用状況の分析、サービスの改善、広告の最適化等に利用されます。
                  お客様はブラウザの設定によりCookieを無効にすることができますが、
                  その場合、一部のサービスが正常に機能しない可能性があります。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">8. 個人情報の保護対策</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                  また、個人情報を取り扱う従業員に対して、適切な監督を行います。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">9. 個人情報の開示・訂正・削除</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  お客様は、当社が保有するお客様の個人情報について、開示、訂正、利用停止、削除を求めることができます。
                  これらのご請求については、本人確認を行ったうえで、法令に従って対応いたします。
                  ご請求は、以下の連絡先までお申し出ください。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">10. プライバシーポリシーの変更</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当社は、法令の変更等に応じて、本ポリシーを変更することがあります。
                  変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時から効力を生じるものとします。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">11. お問い合わせ先</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>株式会社オートウェビナー大学CLAN</strong><br />
                    個人情報保護管理者：田中 太郎<br />
                    〒150-0002 東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア45階<br />
                    電話：03-1234-5678<br />
                    メール：privacy@autowebinar-clan.com
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    制定日：2020年4月1日<br />
                    最終改定日：2024年1月1日
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
