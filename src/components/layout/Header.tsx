'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchComponent from '@/components/SearchComponent';

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-black/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="site-logo">
              <Link 
                href="/" 
                className="text-xl sm:text-2xl font-bold text-white hover:text-apple-primary transition-colors duration-200"
              >
                CLAN
              </Link>
            </div>              {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="メインナビゲーション">
              <Link 
                href="/" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                ホーム
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                会社概要
              </Link>
              <Link 
                href="/courses" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                コース
              </Link>
              <Link 
                href="/seminar" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                セミナー
              </Link>
              <Link 
                href="/free-seminar" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                無料セミナー
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                ブログ
              </Link>
              <Link 
                href="/tools" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                まえゆきツール
              </Link>
              <Link 
                href="/achievement" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                お客様の声
              </Link>              <Link 
                href="/contact" 
                className="text-white hover:text-apple-primary transition-colors duration-200 text-sm font-medium"
              >
                お問い合わせ
              </Link>
              
              {/* 検索ボタン */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-apple-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                aria-label="検索"
                title="検索 (Ctrl+K)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a 
                href="https://utage-system.com/p/EcESO02xLLoK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-apple-primary hover:bg-apple-primary-dark rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-apple-primary focus:ring-offset-2 focus:ring-offset-black"
                aria-label="無料相談する"
              >
                まずは相談する
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-white hover:text-apple-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-apple-primary"
              aria-label="メニューを開く"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`} />
                <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="モバイルメニュー"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />
        
        {/* Menu panel */}        <div className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-black/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6">
            {/* モバイル検索 */}
            <div className="mb-6">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  closeMenu();
                }}
                className="w-full flex items-center px-4 py-3 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                検索
              </button>
            </div>
            
            <nav className="flex-1" aria-label="モバイルメニュー"><ul className="space-y-6">
                <li>
                  <Link 
                    href="/" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    会社概要
                  </Link>
                </li>                <li>
                  <Link 
                    href="/courses" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    コース
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/seminar" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    セミナー
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/free-seminar" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    無料セミナー
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    ブログ
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tools" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    まえゆきツール
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/achievement" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    お客様の声
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    onClick={closeMenu}
                    className="block text-white hover:text-apple-primary transition-colors duration-200 text-lg font-medium"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="pb-8">
              <a 
                href="https://utage-system.com/p/EcESO02xLLoK"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full px-6 py-3 text-center text-white bg-apple-primary hover:bg-apple-primary-dark rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-apple-primary focus:ring-offset-2 focus:ring-offset-black"
                aria-label="無料相談する"
              >
                まずは相談する
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed CTA (bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 px-4 py-3 safe-area-padding-bottom">
        <a 
          href="https://utage-system.com/p/EcESO02xLLoK"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-3 text-center text-white bg-apple-primary hover:bg-apple-primary-dark rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-apple-primary"
          aria-label="無料相談する"
        >          まずは相談する
        </a>
      </div>

      {/* 検索コンポーネント */}
      <SearchComponent 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}
