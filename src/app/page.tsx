import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/HeroSection';
import styles from './page.module.css';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "オートウェビナー大学CLAN",
  "alternateName": "CLAN",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"}/images/logo.webp`,
  "description": "マーケティング自動化とオートウェビナー構築でビジネスを加速させるオンラインスクール",
  "foundingDate": "2011",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "JP"
  },
  "founder": {
    "@type": "Person",
    "name": "前田 由紀子",
    "jobTitle": "Web集客コンサルタント",
    "description": "1980年鹿児島県生まれ。高校卒業後、ブルガリなどのハイブランドで13年間勤務。2011年、ローフードとファスティングの事業で福岡で起業。協会設立を経て、東京・青山に料理教室を開講。現在、株式会社CLANの代表取締役として活動中。"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Japanese"
  },
  "sameAs": [],
  "offers": [
    {
      "@type": "Service",
      "name": "オートウェビナー構築コンサルティング",
      "description": "オートウェビナーシステムの構築と運用サポート"
    },
    {
      "@type": "Service", 
      "name": "マーケティング自動化システム",
      "description": "24時間働き続ける完全自動化されたマーケティングシステムの構築"
    }
  ]
};

export default function Home() {
  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <div className={styles.featuresHeader}>
              <h2 className={styles.featuresTitle}>
                なぜ選ばれるのか
              </h2>
              <p className={styles.featuresSubtitle}>
                オートウェビナー大学CLANが提供する独自のマーケティング自動化システムの特徴
              </p>
            </div>
            
            <div className={styles.featuresGrid}>
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
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>
              今すぐ始めてみませんか？
            </h2>
            <p className={styles.ctaSubtitle}>
              無料相談であなたのビジネスに最適なマーケティング自動化プランをご提案します。
            </p>
            <a 
              href="https://utage-system.com/p/EcESO02xLLoK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              無料相談を申し込む
              <svg className={styles.ctaButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
