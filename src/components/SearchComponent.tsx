'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { searchData, type SearchResult } from '@/data/search-data';

interface SearchComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchComponent({ isOpen, onClose }: SearchComponentProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // 検索処理（デバウンス付き）
    const timeoutId = setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        (item.category && item.category.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'course': return 'コース';
      case 'blog': return 'ブログ';
      case 'seminar': return 'セミナー';
      case 'page': return 'ページ';
      default: return '';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'blog': return 'bg-green-100 text-green-800';
      case 'seminar': return 'bg-purple-100 text-purple-800';
      case 'page': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >      <div className="flex items-start justify-center min-h-screen pt-16 px-4">
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
          role="dialog"
          aria-label="検索モーダル"
          aria-modal="true"
        >
          {/* 検索入力 */}
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="コース、セミナー、ブログ記事を検索..."
                className="w-full pl-10 pr-4 py-3 text-lg border-0 focus:outline-none focus:ring-0"
              />
              <button
                onClick={onClose}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* 検索結果 */}
          <div className="overflow-y-auto max-h-96">
            {isLoading ? (
              <div className="p-6 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-apple-primary mx-auto"></div>
                <p className="mt-2 text-gray-500">検索中...</p>
              </div>
            ) : query.trim() === '' ? (
              <div className="p-6 text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p>何をお探しですか？</p>
                <p className="text-sm mt-1">コース、セミナー、ブログ記事を検索できます</p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <p>「{query}」に一致する結果が見つかりませんでした</p>
                <p className="text-sm mt-1">別のキーワードで検索してみてください</p>
              </div>
            ) : (
              <div className="p-2">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={onClose}
                    className="block p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(result.type)}`}>
                            {getTypeLabel(result.type)}
                          </span>
                          {result.category && (
                            <span className="px-2 py-1 text-xs font-medium bg-apple-primary/10 text-apple-primary rounded-full">
                              {result.category}
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{result.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{result.excerpt}</p>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* フッター */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">↑</kbd>
                  <kbd className="ml-1 px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">↓</kbd>
                  <span className="ml-2">選択</span>
                </div>
                <div className="flex items-center">
                  <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">Enter</kbd>
                  <span className="ml-2">開く</span>
                </div>
              </div>
              <div className="flex items-center">
                <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">Esc</kbd>
                <span className="ml-2">閉じる</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
