import { NextResponse } from 'next/server';

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

    console.log('Analytics event received:', {
      event: event.event,
      page: event.page,
      timestamp: new Date(event.timestamp).toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
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
  } catch (error) {
    console.error('Analytics GET API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
