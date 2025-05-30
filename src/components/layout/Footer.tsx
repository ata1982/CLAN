import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter Section */}
        <div className={styles.newsletterSection} style={{
          background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
              📬 最新情報をお届けします
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
              マーケティング自動化の最新トレンドや実践的なノウハウ、限定セミナーの情報を
              定期的にお送りします。今すぐ登録して、ビジネス成長のヒントを受け取りましょう。
            </p>
            <div style={{ maxWidth: '24rem', margin: '0 auto' }}>
              <NewsletterForm source="footer" compact />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.companySection}>
            <h2 className={styles.logo}>CLAN</h2>
            <p className={styles.companyDescription}>
              オートウェビナー大学CLANは、マーケティング自動化と
              オートウェビナー構築でビジネスを加速させるオンラインスクールです。
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.linksSection}>
            <h3>サービス</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/tools" className={styles.footerLink}>まえゆきツール</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/achievement" className={styles.footerLink}>お客様の声</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.linksSection}>
            <h3>会社情報</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/about" className={styles.footerLink}>会社概要</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/owner" className={styles.footerLink}>代表挨拶</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/blog" className={styles.footerLink}>ブログ</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact" className={styles.footerLink}>お問い合わせ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linksSection}>
            <h3>お問い合わせ</h3>
            <div className={styles.newsletterDescription}>
              <p>ビジネスの自動化について<br />お気軽にご相談ください。</p>
            </div>
            <Link 
              href="https://utage-system.com/p/EcESO02xLLoK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                color: '#ffffff',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                marginTop: '1rem'
              }}
            >
              無料相談する
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2024 オートウェビナー大学CLAN. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>プライバシーポリシー</Link>
              <Link href="/terms" className={styles.bottomLink}>利用規約</Link>
              <Link href="/tokutei" className={styles.bottomLink}>特定商取引法</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}