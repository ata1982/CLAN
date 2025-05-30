'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function Analytics() {
  useReportWebVitals((metric) => {
    // Web Vitalsの測定結果をコンソールに出力
    console.log('Web Vitals:', metric);
    
    // プロダクションでは分析サービスに送信
    if (process.env.NODE_ENV === 'production') {
      // Google Analyticsやその他の分析サービスに送信
      // gtag('event', metric.name, {
      //   event_category: 'Web Vitals',
      //   event_label: metric.id,
      //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      //   non_interaction: true,
      // });
    }
  });

  return null;
}