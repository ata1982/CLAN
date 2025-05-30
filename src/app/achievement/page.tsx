import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Customer success stories data
const successStories = [
  {
    id: 1,
    name: "田中一郎",
    business: "コンサルティング業",
    image: "/images/achieve-1.webp",
    result: "月収300万円達成",
    period: "導入後6ヶ月",
    category: "コンサルティング",
    problem: "個別対応に時間を取られ、スケールできない状況でした",
    solution: "UTAGEシステムで自動化を構築し、効率的な顧客獲得を実現",
    outcome: "月収が従来の5倍に増加し、時間的な余裕も生まれました",
    quote: "UTAGEのおかげで、睡眠時間も確保しながら売上を大幅に伸ばすことができました。",
    details: [
      "自動ウェビナーシステムの構築",
      "ステップメール配信の最適化",
      "顧客管理システムの導入"
    ]
  },
  {
    id: 2,
    name: "佐藤美香",
    business: "オンライン講師",
    image: "/images/achieve-2.webp",
    result: "受講生1000名突破",
    period: "導入後4ヶ月",
    category: "教育・講師",
    problem: "集客に苦労し、講座の認知度が上がりませんでした",
    solution: "マーケティング自動化で効果的な集客システムを構築",
    outcome: "受講生数が10倍に増加し、安定した収益を確保",
    quote: "自動化システムのおかげで、教育内容の質向上に集中できるようになりました。",
    details: [
      "ランディングページの最適化",
      "SNS連携自動化",
      "受講生向けフォローアップシステム"
    ]
  },
  {
    id: 3,
    name: "鈴木健太",
    business: "IT関連サービス",
    image: "/images/achieve-3.webp",
    result: "売上500%向上",
    period: "導入後8ヶ月",
    category: "IT・技術",
    problem: "技術力はあるが営業が苦手で、案件獲得に課題がありました",
    solution: "UTAGEを活用した自動営業システムで効率的な案件獲得を実現",
    outcome: "営業工数を70%削減しながら売上を5倍に向上",
    quote: "技術者でも営業ができることを証明できました。システムが24時間働いてくれます。",
    details: [
      "技術セミナーの自動化",
      "顧客育成プロセスの構築",
      "提案書自動生成システム"
    ]
  },
  {
    id: 4,
    name: "山田花子",
    business: "美容・健康関連",
    image: "/images/achieve-4.webp",
    result: "リピート率90%達成",
    period: "導入後3ヶ月",
    category: "美容・健康",
    problem: "新規顧客は獲得できるが、リピート率が低い状況でした",
    solution: "顧客との継続的な関係構築システムを自動化で実現",
    outcome: "リピート率が3倍向上し、安定したビジネスモデルを構築",
    quote: "お客様との関係性が深まり、満足度も大幅に向上しました。",
    details: [
      "顧客フォローアップの自動化",
      "パーソナライズされたコンテンツ配信",
      "ロイヤルカスタマー育成プログラム"
    ]
  },
  {
    id: 5,
    name: "高橋誠",
    business: "士業（税理士）",
    image: "/images/achieve-5.webp",
    result: "顧客数200%増加",
    period: "導入後5ヶ月",
    category: "士業",
    problem: "従来の営業手法では限界を感じていました",
    solution: "専門知識を活かしたコンテンツマーケティングを自動化",
    outcome: "顧客数が2倍に増加し、単価も向上",
    quote: "専門性を武器にした自動化システムで、理想的な顧客を獲得できています。",
    details: [
      "税務セミナーの自動化",
      "専門コンテンツの定期配信",
      "相談予約システムの構築"
    ]
  },
  {
    id: 6,
    name: "伊藤翔太",
    business: "物販・EC事業",
    image: "/images/achieve-6.webp",
    result: "利益率40%向上",
    period: "導入後7ヶ月",
    category: "EC・物販",
    problem: "価格競争に巻き込まれ、利益率が低下していました",
    solution: "ブランディングと顧客教育を重視した販売システムを構築",
    outcome: "利益率が大幅に改善し、ブランド価値も向上",
    quote: "単なる価格競争から脱却し、価値で勝負できるようになりました。",
    details: [
      "ブランドストーリーの自動配信",
      "顧客教育コンテンツの充実",
      "アフターサービスの自動化"
    ]
  }
];

const categories = ["すべて", "コンサルティング", "教育・講師", "IT・技術", "美容・健康", "士業", "EC・物販"];

export default function AchievementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-apple-primary to-apple-primary-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              お客様の声・成功事例
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              オートウェビナー大学CLANで学ばれた方々の実際の成功事例をご紹介します。
              UTAGEシステムを活用して、ビジネスを大きく成長させた実績をご覧ください。
            </p>
            
            {/* Success Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/90">成功事例</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-white/90">平均売上向上率</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-white/90">顧客満足度</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    category === "すべて"
                      ? "bg-apple-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {successStories.map((story) => (
                <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-apple-primary to-apple-primary-dark p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 rounded-full">
                        {story.category}
                      </span>
                      <span className="text-sm opacity-90">{story.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                    <p className="text-white/90 mb-4">{story.business}</p>
                    <div className="text-3xl font-bold">{story.result}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Quote */}                    <blockquote className="text-lg text-gray-700 italic mb-6 border-l-4 border-apple-primary pl-4">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                    
                    {/* Problem, Solution, Outcome */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm mr-2">!</span>
                          課題
                        </h4>
                        <p className="text-gray-600 text-sm">{story.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm mr-2">✓</span>
                          解決策
                        </h4>
                        <p className="text-gray-600 text-sm">{story.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-2">★</span>
                          成果
                        </h4>
                        <p className="text-gray-600 text-sm">{story.outcome}</p>
                      </div>
                    </div>
                    
                    {/* Implementation Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">実施内容</h4>
                      <ul className="space-y-2">
                        {story.details.map((detail, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-apple-primary rounded-full mr-3"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              あなたも成功の仲間入りをしませんか？
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              これらの成功事例は、すべて実際にUTAGEシステムを活用した結果です。
              無料相談で、あなたのビジネスに最適な自動化プランをご提案します。
            </p>
            <a 
              href="https://utage-system.com/p/EcESO02xLLoK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-apple-primary hover:bg-apple-primary-dark rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-apple-primary focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg hover:shadow-xl"
            >
              無料相談を申し込む
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
