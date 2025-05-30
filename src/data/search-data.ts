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
  // Courses
  {
    id: 'course-1',
    title: 'UTAGEマスターコース',
    type: 'course',
    excerpt: 'UTAGEシステムの使い方を基礎から応用まで学べる総合コース',
    url: '/courses/utage-master',
    category: 'UTAGE'
  },
  {
    id: 'course-2', 
    title: 'マーケティングオートメーション基礎',
    type: 'course',
    excerpt: 'マーケティング自動化の基本概念から実践まで',
    url: '/courses/ma-basics',
    category: 'マーケティング'
  },
  // Seminars
  {
    id: 'seminar-1',
    title: 'ランディングページ作成初級講座',
    type: 'seminar', 
    excerpt: '成約するLPの作り方を基礎から学べる講座',
    url: '/seminar/lp-creation',
    category: 'マーケティング'
  },
  {
    id: 'seminar-2',
    title: '動画編集初級講座',
    type: 'seminar',
    excerpt: 'プロ品質の動画編集スキルを習得',
    url: '/seminar/video-editing', 
    category: 'コンテンツ制作'
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
  }
];

export const searchCategories = ["すべて", "マーケティング", "UTAGE", "コンテンツ制作"] as const;