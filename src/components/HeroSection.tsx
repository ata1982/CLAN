import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationShape1}></div>
        <div className={styles.decorationShape2}></div>
      </div>
      
      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          専門知識が自動で売れる。
        </h1>
        
        <p className={styles.subtitle}>
          あなたの専門性を24時間働き続けるデジタル資産に変換。<br />
          オートウェビナーで構築する、次世代マーケティング自動化の世界。
        </p>
        
        {/* CTA Buttons */}
        <div className={styles.ctaContainer}>
          <a 
            href="https://utage-system.com/p/EcESO02xLLoK"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            無料相談を開始する
          </a>
          
          <a 
            href="#features"
            className={styles.secondaryButton}
          >
            詳細を見る
          </a>
        </div>
        
        {/* Demo area */}
        <div className={styles.demoArea}>
          <div className={styles.demoPlaceholder}>
            オートウェビナー システムデモ
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <p className={styles.scrollText}>Scroll</p>
      </div>
    </section>
  );
}