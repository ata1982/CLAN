import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

// Blog post data - In a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "マーケティング自動化の基礎知識",
    excerpt: "ビジネスの成長を加速させるマーケティング自動化について、基本的な概念から実践的な手法まで詳しく解説します。",
    image: "/images/blog-marketing-automation.webp",
    category: "マーケティング",
    date: "2024-12-15",
    readTime: "5分",
    slug: "marketing-automation-basics"
  },
  {
    id: 2,
    title: "UTAGEシステム導入完全ガイド",
    excerpt: "UTAGEシステムの導入から運用まで、ステップバイステップで詳しく解説。成功事例も含めて紹介します。",
    image: "/images/blog-utage-intro.webp",
    category: "UTAGE",
    date: "2024-12-10",
    readTime: "8分",
    slug: "utage-system-guide"
  },
  {
    id: 3,
    title: "ビジネス自動化で時間を最大化する方法",
    excerpt: "効率的なビジネス自動化の手法と、それによって得られる時間の有効活用について詳しく説明します。",
    image: "/images/blog-business-automation.webp",
    category: "自動化",
    date: "2024-12-05",
    readTime: "6分",
    slug: "business-automation-time-management"
  },
  {
    id: 4,
    title: "CRMシステムを活用した顧客管理",
    excerpt: "顧客関係管理（CRM）システムを効果的に活用して、顧客との関係を強化し、売上向上を実現する方法を解説します。",
    image: "/images/blog-crm.webp",
    category: "CRM",
    date: "2024-11-28",
    readTime: "7分",
    slug: "crm-customer-management"
  },
  {
    id: 5,
    title: "デジタルコンテンツ制作のベストプラクティス",
    excerpt: "効果的なデジタルコンテンツの制作方法と、コンテンツマーケティングで成果を上げるための秘訣をお伝えします。",
    image: "/images/blog-digital-content.webp",
    category: "コンテンツ",
    date: "2024-11-20",
    readTime: "9分",
    slug: "digital-content-best-practices"
  },
  {
    id: 6,
    title: "メール配信システムの効果的な活用法",
    excerpt: "メールマーケティングの基本から応用まで、効果的なメール配信システムの構築と運用方法を詳しく解説します。",
    image: "/images/blog-mail-system.webp",
    category: "メールマーケティング",
    date: "2024-11-15",
    readTime: "6分",
    slug: "email-marketing-system"
  }
];

const categories = ["すべて", "マーケティング", "UTAGE", "自動化", "CRM", "コンテンツ", "メールマーケティング"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
          padding: '5rem 0'
        }}>
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto', 
            padding: '0 2rem',
            textAlign: 'center'
          }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ブログ
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              マーケティング自動化、ビジネス成長、そしてUTAGEシステムに関する
              最新の情報とノウハウをお届けします。
            </p>
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

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      priority={false}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-apple-primary bg-apple-primary/10 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
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

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              最新情報をお届けします
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              マーケティング自動化に関する最新のノウハウやUTAGEシステムの活用法を
              定期的にお送りします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-apple-primary"
              />
              <button className="px-6 py-3 bg-apple-primary hover:bg-apple-primary-dark text-white font-medium rounded-lg transition-colors duration-200">
                登録する
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
