import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '無料セミナー | オートウェビナー大学',
  description: 'オートウェビナー大学が主催する無料セミナー情報ページです。マーケティング自動化、ファネル構築、集客・販売の効率化に関する最新セミナーをご紹介します。',
  openGraph: {
    title: '無料セミナー | オートウェビナー大学',
    description: 'オートウェビナー大学が主催する無料セミナー情報ページです。マーケティング自動化、ファネル構築、集客・販売の効率化に関する最新セミナーをご紹介します。',
    images: ['/assets/images/ogp_image_seminar.webp'],
  },
};

export default function FreeSeminarPage() {
  const upcomingSeminars = [
    {
      id: 1,
      title: "はじめてのWebマーケティング講座",
      date: "2025年6月22日（日）",
      time: "13:30〜16:30",
      capacity: "定員30名",
      location: "オンライン（Zoom）",
      badge: "NEW",
      badgeType: "new",
      description: "Webマーケティングの基礎を学びたい初心者向けセミナーです。SEO、広告運用、SNS活用など、Webマーケティングの全体像を分かりやすく解説します。",
      points: [
        "Webマーケティングの基礎知識",
        "集客チャネルの選び方",
        "効果測定の方法",
        "自社に合った戦略の立て方"
      ]
    },
    {
      id: 2,
      title: "UTAGE初級者向けハンズオンセミナー",
      date: "2025年7月5日（土）",
      time: "10:00〜12:00",
      capacity: "定員20名",
      location: "オンライン（Zoom）",
      badge: "残席わずか",
      badgeType: "limited",
      description: "UTAGEを使った自動マーケティングシステムの構築方法を実践形式で学べるハンズオンセミナーです。ランディングページの作成からメール配信設定まで、実際に操作しながら学びます。",
      points: [
        "UTAGEの基本的な機能と操作方法",
        "簡単なランディングページの作成",
        "リード獲得後のメール自動配信設定",
        "顧客データの管理と活用方法"
      ]
    },
    {
      id: 3,
      title: "IT導入補助金2025活用セミナー",
      date: "2025年7月15日（火）",
      time: "14:00〜15:30",
      capacity: "定員50名",
      location: "オンライン（Zoom）",
      badge: "オンライン",
      badgeType: "online",
      description: "IT導入補助金2025の概要と申請方法、UTAGEを活用したビジネス自動化についてご紹介するセミナーです。最大450万円の補助金を活用して、あなたのビジネスをデジタル化しましょう。",
      points: [
        "IT導入補助金2025の概要と対象",
        "申請に必要な書類と手続き",
        "UTAGEを活用したビジネス自動化",
        "補助金申請の成功事例"
      ]
    },
    {
      id: 4,
      title: "オートファネル構築実践セミナー",
      date: "2025年7月20日（日）",
      time: "13:00〜17:00",
      capacity: "定員15名",
      location: "鹿児島市中央町10-2（当社セミナールーム）",
      badge: "会場開催",
      badgeType: "offline",
      description: "売上を自動化するオートファネルの設計から構築までを学べる実践セミナーです。集客、育成、販売の各フェーズでの最適な施策と設定方法を解説します。",
      points: [
        "ターゲットに合わせたファネル設計",
        "リード獲得からクロージングまでの自動化",
        "効果的なコンテンツ制作のポイント",
        "データに基づくファネル改善方法"
      ],
      status: "満席"
    },
    {
      id: 5,
      title: "売れるランディングページ作成講座",
      date: "2025年7月25日（金）",
      time: "19:00〜21:00",
      capacity: "定員30名",
      location: "オンライン（Zoom）",
      badge: "NEW",
      badgeType: "new",
      description: "成約率の高いランディングページを作るためのポイントを解説するセミナーです。購入意欲を高めるコピーライティングや効果的なデザイン、CTAの設置方法などを学びます。",
      points: [
        "顧客心理に基づいたLP構成",
        "購入ボタンをクリックしたくなるコピーの書き方",
        "信頼性を高める要素と配置",
        "成約率を倍増させる改善ポイント"
      ]
    },
    {
      id: 6,
      title: "ステップメール設計マスター講座",
      date: "2025年8月1日（金）",
      time: "14:00〜16:00",
      capacity: "定員25名",
      location: "オンライン（Zoom）",
      badge: "残席わずか",
      badgeType: "limited",
      description: "見込み客を熱狂的なファンに変えるステップメールの設計法を学ぶセミナーです。高い開封率とクリック率を実現する7ステップのメール設計術を解説します。",
      points: [
        "開封されるメールタイトルの作り方",
        "信頼関係を構築するコンテンツ設計",
        "購入意欲を高める心理トリガーの活用法",
        "効果的なCTAの設置タイミングと方法"
      ]
    }
  ];

  const pastSeminars = [
    {
      date: "2025/4/15",
      title: "ChatGPTを活用したマーケティング自動化",
      type: "オンライン"
    },
    {
      date: "2025/3/28",
      title: "Instagram広告完全攻略セミナー",
      type: "会場開催"
    },
    {
      date: "2025/2/10",
      title: "ECサイト売上アップの秘訣",
      type: "オンライン"
    }
  ];

  const getBadgeStyles = (badgeType: string) => {
    switch (badgeType) {
      case 'new':
        return 'bg-apple-accent text-white';
      case 'online':
        return 'bg-green-500 text-white';
      case 'offline':
        return 'bg-gray-500 text-white';
      case 'limited':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-br from-apple-primary to-blue-600 py-32 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              無料セミナー
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              ビジネス自動化の基礎から実践まで、あなたの成長をサポートする無料セミナーをご用意しています。<br />
              オンライン・オフライン問わず、お気軽にご参加いただけます。
            </p>
          </div>
        </section>

        {/* フィルターボタン */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              <button className="px-6 py-3 bg-white text-apple-primary border-2 border-apple-primary rounded-full font-semibold hover:bg-apple-primary hover:text-white transition-all duration-200">
                すべて
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200">
                オンライン
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200">
                会場開催
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200">
                初級者向け
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200">
                中級者向け
              </button>
            </div>
          </div>
        </section>

        {/* 開催予定セミナー */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-apple-primary font-semibold text-sm uppercase tracking-wide">UPCOMING SEMINARS</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">開催予定のセミナー</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                最新のマーケティングと自動化についての<br />無料セミナーを開催しています
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingSeminars.map((seminar) => (
                <div key={seminar.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 pr-20">
                      {seminar.title}
                    </h3>
                    <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyles(seminar.badgeType)}`}>
                      {seminar.badge}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📅</span>
                        <span>{seminar.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">🕒</span>
                        <span>{seminar.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">👥</span>
                        <span>{seminar.capacity}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📍</span>
                        <span className="font-semibold">{seminar.location}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {seminar.description}
                      </p>
                      <ul className="space-y-2">
                        {seminar.points.map((point, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="text-apple-primary font-bold mr-2 mt-1">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center text-apple-accent font-bold">
                        <span className="mr-1">★</span>
                        <span>無料</span>
                      </div>
                      {seminar.status === '満席' ? (
                        <span className="bg-gray-400 text-white px-6 py-2 rounded-full font-semibold">
                          満席
                        </span>
                      ) : (
                        <button className="bg-apple-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-apple-primary-dark transition-colors duration-200">
                          申し込む
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* セミナー資料請求CTA */}
            <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">見逃したセミナーがありますか？</h3>
              <p className="text-gray-600 mb-6">セミナーの録画版や追加資料をご希望の方はこちらからお問い合わせください。</p>
              <a href="/contact" className="inline-flex items-center bg-apple-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-apple-primary-dark transition-colors duration-200">
                <span>セミナー資料を請求する</span>
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 過去のセミナー */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-apple-primary font-semibold text-sm uppercase tracking-wide">ARCHIVES</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">過去のセミナー</h2>
              <p className="text-xl text-gray-600">人気のセミナーは定期的に再開催しています</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastSeminars.map((seminar, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-sm text-gray-500 mb-3">{seminar.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{seminar.title}</h3>
                  <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {seminar.type}
                  </div>
                  <a href="#" className="block text-apple-primary font-semibold hover:text-apple-primary-dark transition-colors duration-200">
                    録画視聴を申し込む
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* セミナーカレンダー */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-apple-primary font-semibold text-sm uppercase tracking-wide">SCHEDULE</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">セミナーカレンダー</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-center text-gray-600 mb-8">
                オートウェビナー大学が開催する全てのセミナーをカレンダーでご確認いただけます。<br />
                日程や時間をクリックすると詳細が表示されます。
              </p>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-500">【Googleカレンダー埋め込み予定地】</p>
                <p className="text-sm text-gray-400 mt-2">実際のサイトではGoogleカレンダーが表示されます</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-apple-primary to-apple-primary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              まずは無料でご相談ください
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              オートファネルの構築やマーケティングの自動化について、<br />
              専門家があなたの状況をお伺いし、最適なステップをご提案します。<br />
              まずはお気軽にお問い合わせください。
            </p>
            <a 
              href="https://utage-system.com/p/EcESO02xLLoK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-apple-primary bg-white hover:bg-gray-50 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-apple-primary shadow-lg hover:shadow-xl"
            >
              無料相談してみる
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
