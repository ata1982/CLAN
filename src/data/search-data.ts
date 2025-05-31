// Search data - move this to API in production
export interface SearchResult {
  id: string;
  title: string;
  type: 'course' | 'blog' | 'seminar' | 'page';
  excerpt: string;
  url: string;
  category?: string;
}

export const searchData: SearchResult[] = [
  // Tools
  {
    id: 'tools-1',
    title: 'まえゆきツール',
    type: 'page',
    excerpt: '前田由紀子が開発したマーケティング自動化ツール集',
    url: '/tools',
    category: 'ツール'
  },
  // Blog posts
  {
    id: 'blog-1',
    title: 'マーケティング自動化の基礎知識',
    type: 'blog',
    excerpt: 'ビジネスの成長を加速させるマーケティング自動化について',
    url: '/blog/marketing-automation-basics',
    category: 'マーケティング'
  },
  {
    id: 'blog-2',
    title: 'UTAGEシステム導入完全ガイド', 
    type: 'blog',
    excerpt: 'UTAGEシステムの導入から運用まで完全解説',
    url: '/blog/utage-system-guide',
    category: 'UTAGE'
  },
  {
    id: 'blog-3',
    title: 'ビジネス自動化による時間管理術',
    type: 'blog',
    excerpt: '自動化システムを活用した効率的な時間管理の方法',
    url: '/blog/business-automation-time-management',
    category: 'マーケティング'
  },
  {
    id: 'blog-4',
    title: 'CRMによる顧客管理の最適化',
    type: 'blog',
    excerpt: '顧客関係管理システムを活用した売上向上の秘訣',
    url: '/blog/crm-customer-management',
    category: 'UTAGE'
  },
  {
    id: 'blog-5',
    title: 'デジタルコンテンツ制作のベストプラクティス',
    type: 'blog',
    excerpt: '効果的なデジタルコンテンツの企画・制作・運用方法',
    url: '/blog/digital-content-best-practices',
    category: 'コンテンツ制作'
  },
  {
    id: 'blog-6',
    title: 'メールマーケティングシステムの構築',
    type: 'blog',
    excerpt: '自動配信とパーソナライゼーションでCVR向上',
    url: '/blog/email-marketing-system',
    category: 'マーケティング'
  },
  // Pages
  {
    id: 'page-1',
    title: '会社概要',
    type: 'page', 
    excerpt: 'オートウェビナー大学CLANの会社情報',
    url: '/about',
  },
  {
    id: 'page-2',
    title: 'お客様の声',
    type: 'page',
    excerpt: 'お客様の成功事例と体験談', 
    url: '/achievement',
  },
  {
    id: 'page-3',
    title: 'お問い合わせ',
    type: 'page',
    excerpt: 'マーケティング自動化に関するご相談・お問い合わせ',
    url: '/contact',
  },
  {
    id: 'page-4',
    title: '代表プロフィール',
    type: 'page',
    excerpt: '前田由紀子のプロフィールと経歴',
    url: '/owner',
  }
];

export const searchCategories = ["すべて", "マーケティング", "UTAGE", "コンテンツ制作", "ツール"] as const;