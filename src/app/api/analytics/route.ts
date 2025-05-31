import { NextResponse } from 'next/server';
import { rateLimit, rateLimitConfigs } from '@/lib/rate-limit';
import { requireAuth } from '@/lib/auth';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, string | number | boolean>;
  timestamp: number;
  sessionId: string;
  userId?: string;
  page: string;
  userAgent: string;
}

// ダミーのアナリティクスデータストレージ（実際の実装ではDBを使用）
const analyticsData: AnalyticsEvent[] = [];

export async function POST(request: Request) {
  try {
    // Rate limiting
    const rateLimitResult = await rateLimit(request, rateLimitConfigs.api);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
          }
        }
      );
    }
    const data = await request.json();
    const userAgent = request.headers.get('user-agent') || '';
    
    const event: AnalyticsEvent = {
      ...data,
      timestamp: Date.now(),
      userAgent,
    };

    // 実際の実装では、ここでデータベースに保存
    analyticsData.push(event);
    
    // 基本的なバリデーション
    if (!event.event || !event.sessionId || !event.page) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }


    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const GET = requireAuth(async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const event = searchParams.get('event');
    const limit = parseInt(searchParams.get('limit') || '100');

    let filteredData = analyticsData;

    if (page) {
      filteredData = filteredData.filter(item => item.page === page);
    }

    if (event) {
      filteredData = filteredData.filter(item => item.event === event);
    }

    // 最新のイベントから取得
    const result = filteredData
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);

    return NextResponse.json({
      events: result,
      total: filteredData.length,
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
});
