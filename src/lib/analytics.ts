'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, unknown>;
  page?: string;
  sessionId?: string;
  userId?: string;
}

interface PerformanceMetrics extends Record<string, unknown> {
  pageLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
}

class Analytics {
  private sessionId: string;
  private userId?: string;
  private isInitialized = false;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initialize();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initialize() {
    if (typeof window === 'undefined' || this.isInitialized) return;

    this.isInitialized = true;
    this.userId = localStorage.getItem('user_id') || undefined;

    // Web Vitals の監視
    this.initializeWebVitals();
    
    // スクロール深度の追跡
    this.initializeScrollTracking();
    
    // クリックイベントの追跡
    this.initializeClickTracking();

  }

  private async sendEvent(event: AnalyticsEvent) {
    try {
      const payload = {
        ...event,
        sessionId: this.sessionId,
        userId: this.userId,
        page: window.location.pathname,
        timestamp: Date.now(),
      };

      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch {
      // Analytics error silently handled
    }
  }

  // パフォーマンスメトリクスを送信
  public sendPerformanceMetrics() {
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {
      pageLoadTime: performance.now(),
      domContentLoaded: 0,
    };    // DOMContentLoaded時間を計算
    if (performance.getEntriesByType) {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0];
        metrics.domContentLoaded = nav.domContentLoadedEventEnd - nav.fetchStart;
        metrics.pageLoadTime = nav.loadEventEnd - nav.fetchStart;
      }
    }

    // Web Vitals メトリクス
    if ('web-vital' in window) {
      // 実際の実装では web-vitals ライブラリを使用
      // import {getCLS, getFID, getFCP, getLCP} from 'web-vitals';
    }

    this.sendEvent({
      event: 'performance_metrics',
      properties: metrics,
    });
  }

  // ページビューを追跡
  public trackPageView(page: string) {
    this.sendEvent({
      event: 'page_view',
      properties: {
        page,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      },
    });
  }
  // イベントを追跡
  public track(event: string, properties?: Record<string, unknown>) {
    this.sendEvent({
      event,
      properties,
    });
  }

  // コンバージョンを追跡
  public trackConversion(type: string, value?: number, properties?: Record<string, unknown>) {
    this.sendEvent({
      event: 'conversion',
      properties: {
        type,
        value,
        ...properties,
      },
    });
  }

  // エラーを追跡
  public trackError(error: Error, context?: string) {
    this.sendEvent({
      event: 'error',
      properties: {
        message: error.message,
        stack: error.stack,
        context,
        url: window.location.href,
      },
    });
  }

  // Web Vitals の初期化
  private initializeWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEventTiming;
        
        this.sendEvent({
          event: 'web_vital',
          properties: {
            metric: 'LCP',
            value: lastEntry.startTime,
            rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
          },
        });
      });      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // ブラウザがサポートしていない場合
      }
    }

    // First Input Delay (FID)
    let firstInputProcessed = false;
    const handleFirstInput = (event: Event) => {
      if (!firstInputProcessed) {
        firstInputProcessed = true;
        const delay = performance.now() - (event as Event & { timeStamp: number }).timeStamp;
        
        this.sendEvent({
          event: 'web_vital',
          properties: {
            metric: 'FID',
            value: delay,
            rating: delay < 100 ? 'good' : delay < 300 ? 'needs-improvement' : 'poor'
          },
        });
      }
    };

    ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(type => {
      addEventListener(type, handleFirstInput, { once: true, passive: true, capture: true });
    });
  }

  // スクロール深度の追跡
  private initializeScrollTracking() {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      maxScroll = Math.max(maxScroll, scrollPercent);

      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          this.sendEvent({
            event: 'scroll_depth',
            properties: {
              depth: milestone,
              page: window.location.pathname,
            },
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ページ離脱時に最大スクロール深度を送信
    window.addEventListener('beforeunload', () => {
      this.sendEvent({
        event: 'max_scroll_depth',
        properties: {
          maxDepth: maxScroll,
          page: window.location.pathname,
        },
      });
    });
  }

  // クリックイベントの追跡
  private initializeClickTracking() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // CTAボタンのクリック
      if (target.matches('.btn-primary, .btn-cta, [data-track="cta"]')) {
        this.sendEvent({
          event: 'cta_click',
          properties: {
            text: target.textContent?.trim(),
            href: target.getAttribute('href'),
            position: this.getElementPosition(target),
          },
        });
      }

      // 外部リンクのクリック
      if (target.matches('a[href^="http"]')) {
        const href = target.getAttribute('href');
        if (href && !href.includes(window.location.hostname)) {
          this.sendEvent({
            event: 'external_link_click',
            properties: {
              url: href,
              text: target.textContent?.trim(),
            },
          });
        }
      }

      // ナビゲーションリンクのクリック
      if (target.matches('nav a, .nav-link')) {
        this.sendEvent({
          event: 'navigation_click',
          properties: {
            text: target.textContent?.trim(),
            href: target.getAttribute('href'),
            section: target.closest('nav')?.getAttribute('aria-label') || 'unknown',
          },
        });
      }
    });
  }

  private getElementPosition(element: HTMLElement): string {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    if (rect.top < viewportHeight * 0.5) {
      return 'above-fold';
    } else if (rect.top < viewportHeight) {
      return 'below-fold';
    } else {
      return 'far-below-fold';
    }
  }
}

// グローバルインスタンス
let analytics: Analytics;

export const useAnalytics = () => {
  const pathname = usePathname();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !analytics) {
      analytics = new Analytics();
    }

    if (analytics && !initializedRef.current) {
      initializedRef.current = true;
      
      // ページロード時のメトリクス送信
      setTimeout(() => {
        analytics.sendPerformanceMetrics();
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (analytics && pathname) {
      analytics.trackPageView(pathname);
    }
  }, [pathname]);

  return analytics;
};

export default Analytics;
