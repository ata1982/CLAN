import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// お問い合わせフォームデータの型定義
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
}

// バリデーション関数
function validateContactData(data: unknown): ContactFormData | null {
  // データが存在し、オブジェクトであることを確認
  if (!data || typeof data !== 'object') {
    return null;
  }

  const formData = data as Record<string, unknown>;
  const { name, email, subject, message, company, phone } = formData;

  // 必須フィールドのチェック（文字列型の確認も含む）
  if (typeof name !== 'string' || typeof email !== 'string' || 
      typeof subject !== 'string' || typeof message !== 'string') {
    return null;
  }

  // メールアドレスの基本バリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return null;
  }

  // 文字数制限
  if (name.length > 100 || subject.length > 200 || message.length > 2000) {
    return null;
  }

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
    company: typeof company === 'string' ? company.trim() : '',
    phone: typeof phone === 'string' ? phone.trim() : ''
  };
}

// 🔒 環境変数の安全な管理
// セキュリティ強化されたバージョン

// 環境変数の検証と型安全性
interface EnvConfig {
  NODE_ENV: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  MAIL_FROM?: string;
  ADMIN_EMAIL?: string;
}

// 環境変数の安全な取得
function getSecureEnvVar(key: keyof EnvConfig, defaultValue?: string): string {
  const value = process.env[key];
  if (!value && !defaultValue) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || defaultValue || '';
}

// 機密情報のマスキング（ログ出力時用）
function maskSensitiveData(value: string): string {
  if (value.length <= 4) return '***';
  return value.substring(0, 2) + '*'.repeat(value.length - 4) + value.substring(value.length - 2);
}

// 安全な環境変数チェック
function validateEnvironment(): boolean {
  try {
    if (process.env.NODE_ENV === 'production') {
      // 本番環境では必須チェック
      getSecureEnvVar('SMTP_HOST');
      getSecureEnvVar('SMTP_USER');
      getSecureEnvVar('SMTP_PASS');
    }
    return true;
  } catch (error) {
    console.error('Environment validation failed:', error);
    return false;
  }
}

// メール送信設定（セキュリティ強化版）
async function createTransporter() {
  // 環境変数の検証
  if (!validateEnvironment()) {
    throw new Error('Environment configuration is invalid');
  }

  // 開発環境では Ethereal Email を使用
  if (process.env.NODE_ENV === 'development') {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  // 本番環境ではSMTPサーバー設定を使用（セキュア設定）
  return nodemailer.createTransport({
    host: getSecureEnvVar('SMTP_HOST'),
    port: parseInt(getSecureEnvVar('SMTP_PORT', '587')),
    secure: getSecureEnvVar('SMTP_SECURE', 'false') === 'true',
    auth: {
      user: getSecureEnvVar('SMTP_USER'),
      pass: getSecureEnvVar('SMTP_PASS'),
    },
    // セキュリティ強化設定
    requireTLS: true,
    connectionTimeout: 10000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  });
}

// POSTリクエストハンドラー（セキュリティ強化版）
export async function POST(request: NextRequest) {
  try {
    // セキュリティヘッダーの確認
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'https://clan-roan.vercel.app',
      'https://your-domain.com',
      ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [])
    ];

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: 'Unauthorized origin', code: 'UNAUTHORIZED' },
        { status: 403 }
      );
    }

    const body = await request.json();
    
    // データバリデーション
    const validatedData = validateContactData(body);
    if (!validatedData) {
      return NextResponse.json(
        { 
          error: '入力データが不正です。必須項目を確認してください。',
          code: 'VALIDATION_ERROR' 
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, company, phone } = validatedData;

    // メールトランスポーター作成
    const transporter = await createTransporter();

    // 管理者向けメール内容（機密情報を含まない）
    const adminMailOptions = {
      from: getSecureEnvVar('MAIL_FROM', 'noreply@clan-roan.vercel.app'),
      to: getSecureEnvVar('ADMIN_EMAIL', 'admin@clan-roan.vercel.app'),
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f8f9fa; font-weight: bold; width: 120px;">お名前</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f8f9fa; font-weight: bold;">メールアドレス</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${email}</td>
          </tr>
          ${company ? `
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f8f9fa; font-weight: bold;">会社名</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${company}</td>
          </tr>
          ` : ''}
          ${phone ? `
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f8f9fa; font-weight: bold;">電話番号</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${phone}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f8f9fa; font-weight: bold;">件名</td>
            <td style="border: 1px solid #ddd; padding: 12px;">${subject}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f8f9fa; font-weight: bold; vertical-align: top;">メッセージ</td>
            <td style="border: 1px solid #ddd; padding: 12px; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
        </p>
      `,
    };

    // 自動返信メール内容
    const autoReplyOptions = {
      from: getSecureEnvVar('MAIL_FROM', 'noreply@clan-roan.vercel.app'),
      to: email,
      subject: `【自動返信】お問い合わせありがとうございます - ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            お問い合わせありがとうございます
          </h2>
          
          <p>${name} 様</p>
          
          <p>この度は、CLANにお問い合わせいただき、誠にありがとうございます。</p>
          
          <p>以下の内容でお問い合わせを承りました：</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>件名:</strong> ${subject}</p>
            <p><strong>お問い合わせ内容:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
          </div>
          
          <p>お問い合わせの内容を確認次第、担当者より<strong>2営業日以内</strong>にご連絡いたします。</p>
          
          <hr style="margin: 30px 0;">
          
          <div style="color: #666; font-size: 14px;">
            <p><strong>CLAN</strong></p>
            <p>🌐 Website: <a href="https://clan-roan.vercel.app">https://clan-roan.vercel.app</a></p>
            <p>
              本メールは自動送信されています。このメールに直接返信いただいても対応できませんので、
              ご質問等がございましたら改めてお問い合わせフォームからご連絡ください。
            </p>
          </div>
        </div>
      `,
    };

    // メール送信実行
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    // 開発環境でのみプレビューURL出力（本番では機密情報を出力しない）
    if (process.env.NODE_ENV === 'development') {
      console.log('管理者向けメールプレビュー利用可能');
      console.log('自動返信メールプレビュー利用可能');
    }

    return NextResponse.json(
      { 
        message: 'お問い合わせを承りました。ご返信まで今しばらくお待ちください。',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    // エラーログから機密情報を除外
    const sanitizedError = error instanceof Error ? 
      error.message.replace(/password|token|key|secret/gi, '[REDACTED]') : 
      'Unknown error';
    
    console.error('Contact form error:', sanitizedError);
    
    return NextResponse.json(
      { 
        error: 'サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。',
        code: 'SERVER_ERROR' 
      },
      { status: 500 }
    );
  }
}

// GETリクエストハンドラー（APIの状態確認用）
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API is running',
      endpoints: ['POST /api/contact'],
      status: 'healthy'
    },
    { status: 200 }
  );
}