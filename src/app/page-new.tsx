import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                なぜ選ばれるのか
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                オートウェビナー大学CLANが提供する独自のマーケティング自動化システムの特徴
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "自動化システム",
                  description: "24時間働き続ける完全自動化されたマーケティングシステム"
                },
                {
                  icon: "📊",
                  title: "データ分析",
                  description: "詳細な分析とレポートでROIを最大化"
                },
                {
                  icon: "💡",
                  title: "専門サポート",
                  description: "経験豊富な専門家による手厚いサポート体制"
                },
                {
                  icon: "🎯",
                  title: "成果保証",
                  description: "確実に結果が出るまでの継続的なフォローアップ"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-apple-primary to-apple-primary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              今すぐ始めてみませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              無料相談であなたのビジネスに最適なマーケティング自動化プランをご提案します。
            </p>
            <a 
              href="https://utage-system.com/p/EcESO02xLLoK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-apple-primary bg-white hover:bg-gray-50 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-apple-primary shadow-lg hover:shadow-xl"
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
