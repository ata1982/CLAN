import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "無料相談 | オートウェビナー大学",
  description: "オートウェビナー大学の無料相談ページ。ビジネス自動化の専門家が、あなたの状況に合ったUTAGE活用法を無料でアドバイスします。IT導入補助金の申請サポートも実施中。",
  keywords: "無料相談,UTAGE,ビジネス自動化,IT導入補助金,マーケティング自動化",
  openGraph: {
    title: "無料相談 | オートウェビナー大学",
    description: "オートウェビナー大学の無料相談ページ。ビジネス自動化の専門家が、あなたの状況に合ったUTAGE活用法を無料でアドバイスします。IT導入補助金の申請サポートも実施中。",
    images: ["/images/hero-pc.webp"],
    type: "article"
  }
};

export default function FreeConsultationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #0071e3, #00c2ff)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Ccircle cx="20" cy="20" r="1" fill="%23ffffff" opacity="0.1"/%3E%3C/svg%3E')`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          <span className="inline-block bg-white/15 text-white font-semibold px-6 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            無料相談実施中
          </span>
          <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
            ビジネス自動化の<br />専門家に相談する
          </h1>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto opacity-95">
            「集客から販売までの自動化」「IT導入補助金の活用」について<br />
            あなたのビジネスに最適なプランを無料でご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://utage-system.com/event/tgNspV9MaQ68/register" 
              target="_blank" 
              className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:transform hover:-translate-y-1 transition-all duration-300 min-w-[200px]"
            >
              無料相談に申し込む
            </a>
            <a 
              href="/document.html" 
              className="inline-flex items-center justify-center bg-white/12 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 min-w-[200px]"
            >
              資料をダウンロード
            </a>
          </div>
        </div>
      </section>

      {/* 無料相談の価値提案セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">なぜ無料で相談できるのか？</h2>
          <p className="text-xl text-center mb-16 max-w-2xl mx-auto text-gray-600">
            300件以上のUTAGE導入実績を持つ専門家が、あなたのビジネスの成長を真剣に考えているからです。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-10 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">💡</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">専門家の知見</h3>
              <p className="text-gray-600 leading-relaxed">300件以上のUTAGE導入実績から得た、業界別・規模別の成功パターンをお伝えします。</p>
            </div>
            <div className="bg-white rounded-xl p-10 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">個別最適化</h3>
              <p className="text-gray-600 leading-relaxed">あなたのビジネスモデルに最適な自動化プランを、無料でご提案いたします。</p>
            </div>
            <div className="bg-white rounded-xl p-10 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">💰</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IT導入補助金</h3>
              <p className="text-gray-600 leading-relaxed">最大450万円のIT導入補助金活用方法も含めて、コスト面からサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 相談内容セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">無料相談で解決できること</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-10 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🔄</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">プロセス自動化</h3>
              <p className="text-gray-600 leading-relaxed">集客から販売、顧客フォローまでの一連のプロセスを自動化する具体的な方法をご提案します。</p>
            </div>
            <div className="bg-white rounded-xl p-10 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">📈</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">売上アップ戦略</h3>
              <p className="text-gray-600 leading-relaxed">リピート率向上、客単価アップ、新規獲得効率化など、売上向上の具体的な施策をお伝えします。</p>
            </div>
            <div className="bg-white rounded-xl p-10 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">⏰</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">時間効率化</h3>
              <p className="text-gray-600 leading-relaxed">繰り返し作業の自動化により、あなたの貴重な時間をより価値の高い業務に集中できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 有料相談プランセクション */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white/10 border border-white/20 rounded-xl p-10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">より本格的なサポートをお求めの方へ</h2>
            <p className="text-lg mb-8 opacity-90">
              無料相談の次のステップとして、実際の導入から運用まで<br />
              専門家が伴走する有料コンサルティングプランもご用意しています。
            </p>
            <a 
              href="https://site.skillmade.online/p/XcyQTlbtJUcQ" 
              target="_blank" 
              className="inline-flex items-center justify-center bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              有料相談プランを確認する
            </a>
          </div>
        </div>
      </section>

      {/* 無料相談の流れセクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">無料相談の流れ</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">1</div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">お申し込み</h3>
              <p className="text-gray-600 text-sm leading-relaxed">下記フォームに必要事項を入力し、無料相談をお申し込みください。</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">2</div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">日程調整</h3>
              <p className="text-gray-600 text-sm leading-relaxed">担当者からメールまたはお電話で、相談日程の調整をさせていただきます。</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-900 font-bold text-xl">3</div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">相談実施</h3>
              <p className="text-gray-600 text-sm leading-relaxed">オンラインまたはお電話で、ビジネスの状況や課題についてヒアリングを行います。</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">4</div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">プラン提案</h3>
              <p className="text-gray-600 text-sm leading-relaxed">あなたのビジネスに最適な自動化プランと導入ステップをご提案します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 成功事例セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">無料相談から始まった成功事例</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">コンサルタント業</h3>
              <p className="text-gray-600 leading-relaxed">
                セミナー集客から顧客管理までを自動化した結果、<strong className="text-blue-600">月商が2倍に増加</strong>し、<strong className="text-blue-600">作業時間は60%削減</strong>しました。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">美容サロン</h3>
              <p className="text-gray-600 leading-relaxed">
                問い合わせ対応と顧客管理を自動化。<strong className="text-blue-600">顧客対応時間が50%削減</strong>され、<strong className="text-blue-600">リピート率が30%向上</strong>しました。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">専門スクール</h3>
              <p className="text-gray-600 leading-relaxed">
                オンライン講座販売を自動化。<strong className="text-blue-600">初月から800万円の売上</strong>を達成し、手作業による販売管理から完全に解放されました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 申し込みセクション */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">無料相談のお申し込み</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600">
            以下のボタンから無料相談フォームにアクセスいただくと、<br />
            担当者から24時間以内にご連絡いたします。
          </p>
          <div className="relative inline-block">
            <a 
              href="https://utage-system.com/event/tgNspV9MaQ68/register" 
              target="_blank" 
              className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              無料相談フォームに進む
            </a>
            <span className="absolute -top-2 -right-2 bg-white text-red-500 text-sm font-bold px-3 py-1 rounded-full shadow-lg">無料</span>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">よくある質問</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">相談は本当に無料ですか？</h3>
              <p className="text-gray-600 leading-relaxed">はい、相談は完全無料です。料金は一切いただきませんので、お気軽にご相談ください。</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">相談時間はどのくらいですか？</h3>
              <p className="text-gray-600 leading-relaxed">通常は45分〜60分程度です。お客様の状況や課題によって柔軟に対応いたします。</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">相談後に必ず契約しなければいけませんか？</h3>
              <p className="text-gray-600 leading-relaxed">いいえ、契約の義務はございません。相談内容を踏まえて、ご自身でご判断ください。「今は様子を見たい」というお声も多くいただいています。</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">UTAGEは小規模事業者でも導入できますか？</h3>
              <p className="text-gray-600 leading-relaxed">はい、個人事業主様から中小企業様まで幅広く導入いただいています。規模に関わらず、集客や販売プロセスを自動化したいビジネスに適しています。また、IT導入補助金を活用すれば、導入コストを大幅に抑えることも可能です。</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IT導入補助金とは何ですか？</h3>
              <p className="text-gray-600 leading-relaxed">IT導入補助金は、中小企業・小規模事業者等のデジタル化を支援する経済産業省の補助金制度です。UTAGEの導入にこの補助金を活用すると、最大450万円の補助を受けることができます。申請手続きなどは弊社が全面的にサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項セクション */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">ご相談に関する注意事項</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                お申し込み後、24時間以内に担当者よりご連絡いたします（土日祝を除く）。
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                ご相談はオンライン（Zoom）または電話にて行います。
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                IT導入補助金のご相談は、申請期限や予算状況により対応できない場合があります。お早めにご相談ください。
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                ご相談内容によっては、お答えできない場合や別途お時間をいただく場合がございます。
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                競合他社様からのお問い合わせや、当社事業と関連性の低いご相談は、お断りする場合がございます。
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
