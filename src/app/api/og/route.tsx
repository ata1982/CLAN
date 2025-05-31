import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'オートウェビナー大学';
    const description = searchParams.get('description') || 'マーケティング自動化とウェビナー構築でビジネスを加速';
    
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '60px',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  marginRight: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                }}
              >
                🚀
              </div>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                オートウェビナー大学
              </div>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  fontSize: '24px',
                  color: '#6b7280',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '40px',
                fontSize: '20px',
                color: '#9ca3af',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#10b981',
                  marginRight: '15px',
                }}
              />
              マーケティング自動化でビジネスを加速
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}