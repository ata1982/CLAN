import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://autowebinar-university.com';
  const currentDate = new Date().toISOString();

  // 静的ページ
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/achievement`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // コースページ
  const coursePages = [
    {
      url: `${baseUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // 個別コースページ（実際の実装では動的に生成）
    'utage-master',
    'ma-basics',
    'funnel-construction',
    'email-marketing',
    'content-creation',
  ].map(slug => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // セミナーページ
  const seminarPages = [
    {
      url: `${baseUrl}/seminar`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-seminar`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    // 個別セミナーページ
    'lp-creation',
    'video-editing',
    'step-mail',
    'auto-funnel',
    'youtube-thumbnail',
    'canva-design',
  ].map(slug => ({
    url: `${baseUrl}/seminar/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ブログページ
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    // 個別ブログ記事（実際の実装では動的に生成）
    'marketing-automation-basics',
    'utage-system-guide',
    'business-automation-time-management',
    'crm-customer-management',
    'digital-content-best-practices',
    'email-marketing-system',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...coursePages,
    ...seminarPages,
    ...blogPages,
  ];
}
