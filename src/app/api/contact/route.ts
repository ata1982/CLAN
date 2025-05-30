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

// メール送信設定
async function createTransporter() {
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

  // 本番環境ではSMTPサーバー設定を使用
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// POSTリクエストハンドラー
export async function POST(request: NextRequest) {
  try {
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

    // 管理者向けメール内容
    const adminMailOptions = {
      from: process.env.MAIL_FROM || 'noreply@autowebinar-university.com',
      to: process.env.ADMIN_EMAIL || 'admin@autowebinar-university.com',
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
      from: process.env.MAIL_FROM || 'noreply@autowebinar-university.com',
      to: email,
      subject: `【自動返信】お問い合わせありがとうございます - ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            お問い合わせありがとうございます
          </h2>
          
          <p>${name} 様</p>
          
          <p>この度は、オートウェビナー大学にお問い合わせいただき、誠にありがとうございます。</p>
          
          <p>以下の内容でお問い合わせを承りました：</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>件名:</strong> ${subject}</p>
            <p><strong>お問い合わせ内容:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
          </div>
          
          <p>お問い合わせの内容を確認次第、担当者より<strong>2営業日以内</strong>にご連絡いたします。</p>
          
          <div style="background-color: #e7f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">お急ぎの場合</h3>
            <p>緊急のご相談や即日対応をご希望の場合は、下記より無料相談をご予約ください：</p>
            <p><a href="https://autowebinar-university.com/free-consultation" style="color: #007bff; text-decoration: none;">📞 無料相談の予約はこちら</a></p>
          </div>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #856404; margin-top: 0;">まずは無料セミナーで学んでみませんか？</h3>
            <p>マーケティングオートメーションの基礎から実践まで学べる無料セミナーを開催しています：</p>
            <p><a href="https://autowebinar-university.com/free-seminar" style="color: #856404; text-decoration: none;">🎓 無料セミナーの詳細はこちら</a></p>
          </div>
          
          <hr style="margin: 30px 0;">
          
          <div style="color: #666; font-size: 14px;">
            <p><strong>オートウェビナー大学</strong></p>
            <p>📧 Email: info@autowebinar-university.com</p>
            <p>🌐 Website: <a href="https://autowebinar-university.com">https://autowebinar-university.com</a></p>
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

    // 開発環境の場合はプレビューURLを出力
    if (process.env.NODE_ENV === 'development') {
      console.log('管理者向けメール:', nodemailer.getTestMessageUrl(await transporter.sendMail(adminMailOptions)));
      console.log('自動返信メール:', nodemailer.getTestMessageUrl(await transporter.sendMail(autoReplyOptions)));
    }

    return NextResponse.json(
      { 
        message: 'お問い合わせを承りました。ご返信まで今しばらくお待ちください。',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
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