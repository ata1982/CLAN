'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchComponent from '@/components/SearchComponent';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>CLAN</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className={styles.nav} role="navigation" aria-label="メインナビゲーション">
              <ul className={styles.navList}>
                <li><Link href="/" className={styles.navLink}>ホーム</Link></li>
                <li><Link href="/blog" className={styles.navLink}>ブログ</Link></li>
                <li><Link href="/tools" className={styles.navLink}>まえゆきツール</Link></li>
                <li><Link href="/achievement" className={styles.navLink}>お客様の声</Link></li>
                <li><Link href="/contact" className={styles.navLink}>お問い合わせ</Link></li>
              </ul>
            </nav>
            
            {/* Actions */}
            <div className={styles.actions}>
              {/* Search button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={styles.searchButton}
                aria-label="検索"
                title="検索 (Ctrl+K)"
              >
                <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              
              {/* CTA Button */}
              <a 
                href="https://utage-system.com/p/EcESO02xLLoK"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                まずは相談する
              </a>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className={styles.mobileMenuButton}
                aria-label="メニューを開く"
                aria-expanded={isMenuOpen}
              >
                <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <nav>
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileNavItem}>
                <Link href="/" onClick={closeMenu} className={styles.mobileNavLink}>
                  ホーム
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href="/blog" onClick={closeMenu} className={styles.mobileNavLink}>
                  ブログ
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href="/tools" onClick={closeMenu} className={styles.mobileNavLink}>
                  まえゆきツール
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href="/achievement" onClick={closeMenu} className={styles.mobileNavLink}>
                  お客様の声
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href="/contact" onClick={closeMenu} className={styles.mobileNavLink}>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className={styles.mobileCta}>
            <a 
              href="https://utage-system.com/p/EcESO02xLLoK"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={styles.mobileCtaButton}
            >
              まずは相談する
            </a>
          </div>
        </div>
      </div>

      {/* Search Component */}
      <SearchComponent 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}