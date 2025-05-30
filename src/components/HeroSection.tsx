export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-apple-primary/10 via-transparent to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight opacity-0 animate-fade-in-up">
            専門知識が自動で売れる。
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up [animation-delay:0.3s] [animation-fill-mode:forwards]">
            あなたの専門性を24時間働き続けるデジタル資産に変換。<br />
            UTAGEで構築する、次世代マーケティング自動化の世界。
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <a 
              href="https://utage-system.com/p/EcESO02xLLoK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-apple-primary hover:bg-apple-primary-dark rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-apple-primary focus:ring-offset-2 focus:ring-offset-black shadow-lg hover:shadow-xl"
            >
              無料相談を開始する
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="#features"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              詳細を見る
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
          
          {/* Hero image or video placeholder */}
          <div className="mt-16 opacity-0 animate-fade-in-scale [animation-delay:0.9s] [animation-fill-mode:forwards]">
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-600">
                {/* Placeholder for hero image/video */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-apple-primary to-apple-primary-dark rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">UTAGE システムデモ</p>
                    <p className="text-sm text-gray-500 mt-1">マーケティング自動化の実際の動作をご覧ください</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-apple-primary rounded-full opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-apple-accent rounded-full opacity-60 animate-pulse [animation-delay:0.5s]" />
              <div className="absolute top-1/3 -right-8 w-4 h-4 bg-apple-secondary rounded-full opacity-60 animate-pulse [animation-delay:1s]" />
            </div>
          </div>
          
          {/* Key benefits */}
          <div className="mt-20 opacity-0 animate-fade-in-up [animation-delay:1.2s] [animation-fill-mode:forwards]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-apple-primary to-apple-primary-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">自動化</h3>
                <p className="text-gray-300 text-sm">24時間働き続ける販売システム</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-apple-accent to-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">拡張性</h3>
                <p className="text-gray-300 text-sm">スケーラブルなビジネス成長</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">収益化</h3>
                <p className="text-gray-300 text-sm">持続的な収益の仕組み作り</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up [animation-delay:1.5s] [animation-fill-mode:forwards]">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">スクロールして詳細を見る</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
