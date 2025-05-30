import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// ブログ記事データ（実際の実装では外部API または CMS から取得）
const blogPosts = [
  {
    id: 1,
    title: "マーケティング自動化の基礎知識",
    excerpt: "ビジネスの成長を加速させるマーケティング自動化について、基本的な概念から実践的な手法まで詳しく解説します。",
    content: `
      <h2>マーケティング自動化とは</h2>
      <p>マーケティング自動化（マーケティングオートメーション）は、マーケティング活動の多くの部分を自動化し、効率化する手法です。顧客の行動や属性に基づいて、適切なタイミングで適切なメッセージを自動的に配信することで、より効果的なマーケティングを実現します。</p>
      
      <h3>主な機能と効果</h3>
      <ul>
        <li><strong>リード管理</strong>：見込み客の情報を一元管理し、スコアリングにより優先度を判定</li>
        <li><strong>メール配信</strong>：パーソナライズされたメールを適切なタイミングで自動配信</li>
        <li><strong>行動追跡</strong>：Webサイト上の行動を追跡し、関心度を測定</li>
        <li><strong>セグメンテーション</strong>：顧客を属性や行動によりグループ分け</li>
      </ul>
      
      <h3>導入のメリット</h3>
      <p>マーケティング自動化を導入することで、以下のようなメリットが得られます：</p>
      <ol>
        <li>マーケティング効率の向上</li>
        <li>リード品質の改善</li>
        <li>営業チームとの連携強化</li>
        <li>ROI（投資対効果）の向上</li>
      </ol>
      
      <h3>まとめ</h3>
      <p>マーケティング自動化は、現代のデジタルマーケティングにおいて必須のツールとなっています。適切に導入・運用することで、ビジネスの成長を大きく加速させることができます。</p>
    `,
    image: "/assets/images/blog-marketing-automation.webp",
    category: "マーケティング",
    date: "2024-12-15",
    readTime: "5分",
    slug: "marketing-automation-basics",
    tags: ["マーケティング自動化", "MA", "効率化", "デジタルマーケティング"],
    author: {
      name: "前田 由紀",
      bio: "マーケティングコンサルタント・オートウェビナー大学代表",
      image: "/assets/images/instructor-maeda.webp"
    }
  },
  {
    id: 2,
    title: "UTAGEシステム導入完全ガイド",
    excerpt: "UTAGEシステムの導入から運用まで、ステップバイステップで詳しく解説。成功事例も含めて紹介します。",
    content: `
      <h2>UTAGEシステムとは</h2>
      <p>UTAGEシステムは、ウェビナーマーケティングに特化したオールインワンプラットフォームです。ライブ配信からオンデマンド配信、顧客管理、決済まで、ウェビナービジネスに必要なすべての機能を統合しています。</p>
      
      <h3>主な機能</h3>
      <ul>
        <li><strong>ウェビナー配信</strong>：高品質なライブ・録画配信</li>
        <li><strong>ランディングページ作成</strong>：コンバージョン最適化されたページ</li>
        <li><strong>顧客管理</strong>：参加者の行動分析とフォローアップ</li>
        <li><strong>決済システム</strong>：商品販売とサブスクリプション管理</li>
        <li><strong>メール配信</strong>：ステップメールとプロモーション配信</li>
      </ul>
      
      <h3>導入ステップ</h3>
      <ol>
        <li><strong>アカウント作成</strong>：UTAGEの公式サイトからアカウントを作成</li>
        <li><strong>初期設定</strong>：会社情報、決済設定、メール設定を行う</li>
        <li><strong>コンテンツ作成</strong>：ウェビナーコンテンツとランディングページを作成</li>
        <li><strong>テスト配信</strong>：本番前にテスト配信を実施</li>
        <li><strong>本格運用</strong>：プロモーション開始と効果測定</li>
      </ol>
      
      <h3>成功事例</h3>
      <p>多くの企業がUTAGEシステムを活用して成果を上げています。例えば、コンサルティング会社A社では、UTAGEを導入して月間売上が300%向上し、新規顧客獲得コストを50%削減することに成功しました。</p>
      
      <h3>まとめ</h3>
      <p>UTAGEシステムは、ウェビナーマーケティングを成功させるための強力なツールです。適切な導入と運用により、ビジネスの成長を大きく加速させることができます。</p>
    `,
    image: "/assets/images/blog-utage-intro.webp",
    category: "UTAGE",
    date: "2024-12-10",
    readTime: "8分",
    slug: "utage-system-guide",
    tags: ["UTAGE", "ウェビナー", "マーケティングツール", "オンライン販売"],
    author: {
      name: "前田 由紀",
      bio: "マーケティングコンサルタント・オートウェビナー大学代表",
      image: "/assets/images/instructor-maeda.webp"
    }
  },
  {
    id: 3,
    title: "ビジネス自動化で時間を最大化する方法",
    excerpt: "効率的なビジネス自動化の手法と、それによって得られる時間の有効活用について詳しく説明します。",
    content: `
      <h2>ビジネス自動化の重要性</h2>
      <p>現代のビジネス環境において、競争力を維持するためには効率性が不可欠です。ビジネス自動化は、繰り返し作業を自動化し、より価値の高い活動に時間を投資できるようにする重要な戦略です。</p>
      
      <h3>自動化できる業務領域</h3>
      <ul>
        <li><strong>マーケティング</strong>：メール配信、SNS投稿、リード管理</li>
        <li><strong>営業</strong>：見積作成、フォローアップ、スケジュール調整</li>
        <li><strong>顧客サービス</strong>：問い合わせ対応、FAQ自動応答</li>
        <li><strong>経理・財務</strong>：請求書作成、経費精算、レポート生成</li>
        <li><strong>人事</strong>：採用プロセス、勤怠管理、評価システム</li>
      </ul>
      
      <h3>自動化ツールの選び方</h3>
      <p>効果的な自動化を実現するためには、適切なツール選択が重要です：</p>
      <ol>
        <li><strong>業務要件の明確化</strong>：自動化したい業務プロセスを詳細に分析</li>
        <li><strong>ROI計算</strong>：導入コストと効果を数値化して評価</li>
        <li><strong>拡張性</strong>：将来の成長に対応できるかを考慮</li>
        <li><strong>統合性</strong>：既存システムとの連携可能性を確認</li>
      </ol>
      
      <h3>時間の有効活用法</h3>
      <p>自動化により得られた時間を戦略的に活用することで、ビジネスの成長を加速できます：</p>
      <ul>
        <li>新規事業の企画・開発</li>
        <li>顧客との関係構築</li>
        <li>チームのスキル向上</li>
        <li>市場分析と戦略立案</li>
      </ul>
      
      <h3>まとめ</h3>
      <p>ビジネス自動化は単なる効率化ツールではなく、企業の競争力向上と持続的成長を実現するための戦略的投資です。適切な計画と実装により、大きな成果を得ることができます。</p>
    `,
    image: "/assets/images/blog-business-automation.webp",
    category: "自動化",
    date: "2024-12-05",
    readTime: "6分",
    slug: "business-automation-time-management",
    tags: ["ビジネス自動化", "効率化", "時間管理", "生産性向上"],
    author: {
      name: "前田 由紀",
      bio: "マーケティングコンサルタント・オートウェビナー大学代表",
      image: "/assets/images/instructor-maeda.webp"
    }
  }
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: '記事が見つかりません | オートウェビナー大学',
    };
  }

  return {
    title: `${post.title} | オートウェビナー大学`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | オートウェビナー大学`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  const relatedPosts = blogPosts.filter(p => p.id !== post?.id).slice(0, 3);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Article Header */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-gray-700">
                    ホーム
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/blog" className="hover:text-gray-700">
                    ブログ
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-900">{post.title}</span>
                </li>
              </ol>
            </nav>

            {/* Article Meta */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-apple-primary bg-apple-primary/10 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{post.author.name}</span>
                </div>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">タグ</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-4">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
                  <p className="text-gray-600 mt-1">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              関連記事
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-apple-primary bg-apple-primary/10 rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-apple-primary hover:text-apple-primary-dark font-medium transition-colors duration-200"
                    >
                      続きを読む
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-apple-primary to-apple-primary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              無料相談で詳しく話を聞いてみませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              マーケティング自動化やUTAGEシステムについて、<br />
              専門家が無料でアドバイスいたします。
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

// 静的パスの生成（オプション）
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
