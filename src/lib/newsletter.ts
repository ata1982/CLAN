// Newsletter utilities and constants
export const NEWSLETTER_INTERESTS = [
  'マーケティング自動化',
  'ウタゲシステム', 
  'ランディングページ作成',
  'メールマーケティング',
  'コンテンツマーケティング',
  'セールスファネル',
  '動画マーケティング',
  'SNSマーケティング',
] as const;

export interface NewsletterSubscription {
  email: string;
  name?: string;
  interests?: string[];
  source?: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateNewsletterData = (data: unknown): NewsletterSubscription | null => {
  if (!data || typeof data !== 'object') return null;
  
  const subscription = data as Record<string, unknown>;
  const { email, name, interests, source } = subscription;
  
  if (typeof email !== 'string' || !validateEmail(email)) {
    return null;
  }
  
  return {
    email: email.trim().toLowerCase(),
    name: typeof name === 'string' ? name.trim() : undefined,
    interests: Array.isArray(interests) ? interests.filter(i => typeof i === 'string') : undefined,
    source: typeof source === 'string' ? source.trim() : 'website'
  };
};