import { NextResponse } from 'next/server';

interface NewsletterSubscription {
  email: string;
  name?: string;
  interests?: string[];
  source?: string;
  timestamp: number;
}

// ダミーのデータストレージ（実際の実装ではDBを使用）
const subscribers: NewsletterSubscription[] = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, name, interests, source } = data;

    // バリデーション
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // 重複チェック
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email address is already subscribed' },
        { status: 409 }
      );
    }

    // 新規登録
    const subscription: NewsletterSubscription = {
      email,
      name: name || '',
      interests: interests || [],
      source: source || 'website',
      timestamp: Date.now(),
    };

    subscribers.push(subscription);

    // 実際の実装では、ここでメール送信サービス（SendGrid、Mailchimp等）に登録
    console.log('New newsletter subscription:', {
      email,
      name,
      source,
      timestamp: new Date(subscription.timestamp).toISOString(),
    });

    // ウェルカムメール送信（模擬）
    await sendWelcomeEmail(subscription);

    return NextResponse.json({
      success: true,
      message: '登録が完了しました。確認メールをお送りします。',
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    const paginatedSubscribers = subscribers
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(offset, offset + limit)
      .map(sub => ({
        email: sub.email,
        name: sub.name,
        timestamp: sub.timestamp,
        interests: sub.interests,
        source: sub.source,
      }));

    return NextResponse.json({
      subscribers: paginatedSubscribers,
      total: subscribers.length,
      page: Math.floor(offset / limit) + 1,
      hasMore: offset + limit < subscribers.length,
    });

  } catch (error) {
    console.error('Newsletter GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// メールアドレスバリデーション
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ウェルカムメール送信（模擬）
async function sendWelcomeEmail(subscription: NewsletterSubscription) {
  // 実際の実装では、メール送信サービスを使用
  console.log(`📧 Sending welcome email to ${subscription.email}`);
  
  const emailContent = {
    to: subscription.email,
    subject: 'オートウェビナー大学へようこそ！',
    text: `
${subscription.name || 'お客様'}

オートウェビナー大学のニュースレターにご登録いただき、ありがとうございます！

今後、以下のような内容をお届けします：
- マーケティング自動化の最新トレンド
- 実践的なウタゲ活用術
- 限定セミナーのご案内
- 成功事例とケーススタディ

ご質問やご要望がございましたら、お気軽にお問い合わせください。

オートウェビナー大学
https://autowebinar-university.com
    `,
    html: generateWelcomeEmailHTML(subscription),
  };

  // 実際のメール送信処理をここに実装
  return emailContent;
}

function generateWelcomeEmailHTML(subscription: NewsletterSubscription): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>オートウェビナー大学へようこそ</title>
  <style>
    body { font-family: 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: white; padding: 30px; border: 1px solid #e1e8ed; }
    .footer { background: #f7f9fa; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #657786; }
    .btn { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
    .highlight { background: #f0f8ff; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 オートウェビナー大学へようこそ！</h1>
      <p>マーケティング自動化の学習を始めましょう</p>
    </div>
    
    <div class="content">
      <h2>こんにちは、${subscription.name || 'お客様'}！</h2>
      
      <p>ニュースレターにご登録いただき、ありがとうございます。これから一緒にマーケティング自動化の世界を探求していきましょう！</p>
      
      <div class="highlight">
        <h3>📚 今後お届けする内容</h3>
        <ul>
          <li>マーケティング自動化の最新トレンド</li>
          <li>実践的なウタゲ活用術</li>
          <li>限定セミナーのご案内</li>
          <li>成功事例とケーススタディ</li>
        </ul>
      </div>
      
      <p>まずは、こちらから始めてみませんか？</p>
      
      <a href="https://autowebinar-university.com/courses" class="btn">無料コースを見る</a>
      
      <p>ご質問やご要望がございましたら、お気軽にお問い合わせください。</p>
    </div>
    
    <div class="footer">
      <p>オートウェビナー大学<br>
      <a href="https://autowebinar-university.com">https://autowebinar-university.com</a></p>
      
      <p><small>このメールの配信停止をご希望の場合は、<a href="#">こちら</a>をクリックしてください。</small></p>
    </div>
  </div>
</body>
</html>
  `;
}
