import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'オートウェビナー大学とは｜マーケティング自動化とウェビナー構築でビジネスを加速',
  description: 'オートウェビナー大学は、マーケティング自動化とウェビナー構築であなたのビジネスを加速させるオンラインスクールです。UTAGEを活用したオートウェビナー構築で時間と売上を手に入れましょう。',
  openGraph: {
    title: 'オートウェビナー大学とは｜マーケティング自動化とウェビナー構築でビジネスを加速',
    description: 'オートウェビナー大学は、マーケティング自動化とウェビナー構築であなたのビジネスを加速させるオンラインスクールです。UTAGEを活用したオートウェビナー構築で時間と売上を手に入れましょう。',
    images: ['/images/ogp_image_about.webp'],
    type: 'article',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0071e3 0%, #00c2ff 100%)',
        color: 'white',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          {/* 動画背景プレースホルダー */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0,113,227,0.8) 0%, rgba(0,194,255,0.8) 100%)'
          }} />
        </div>
        
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-0.03em'
          }}>
            あなたの知識と情熱を<br />自動のビジネスに
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            fontWeight: 300,
            marginBottom: '2rem',
            maxWidth: '650px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            オートウェビナー大学は「自分らしい働き方」と<br />
            「売上の安定」を両立したい方のための<br />
            ウェビナー自動化・デジタル活用の学び場です
          </p>
          <div style={{ 
            marginTop: '2rem',
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://utage-system.com/p/EcESO02xLLoK"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                color: '#0071e3',
                fontWeight: 500,
                fontSize: '16px',
                padding: '12px 28px',
                borderRadius: '980px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                minWidth: '160px'
              }}
            >
              無料相談をする →
            </a>
            <a 
              href="/document.html"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                fontWeight: 500,
                fontSize: '16px',
                padding: '12px 28px',
                borderRadius: '980px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                minWidth: '160px'
              }}
            >
              資料を見る 📄
            </a>
          </div>
        </div>
      </section>

      {/* コンセプトセクション */}
      <section style={{ padding: '120px 0', backgroundColor: 'white' }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '6%',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '300px', marginBottom: '40px' }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              color: '#1d1d1f'
            }}>
              「自分らしい働き方」と<br />「売上の安定」の両立
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#424245',
              marginBottom: '1.5rem'
            }}>
              起業家やフリーランスの最大の悩みは「時間と収入のトレードオフ」。収入を増やそうとすると働く時間が増え、自由な時間を確保しようとすると収入が減る...
            </p>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#424245'
            }}>
              そんなジレンマを解決するのが<strong>「オートウェビナー」</strong>の力です。24時間365日、あなたに代わって信頼関係の構築から決済までのプロセスをすべて自動化することで、あなたは本来やりたいことや得意なことに集中できるようになります。
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <img 
              src="/images/hero-pc.webp" 
              alt="自動ウェビナーによる時間と売上の両立"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '16px' }}
            />
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section style={{ 
        padding: '120px 0', 
        backgroundColor: '#f5f5f7' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 6vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              lineHeight: 1.2,
              color: '#1d1d1f'
            }}>
              オートウェビナーの4つの特徴
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#86868b',
              maxWidth: '650px',
              margin: '0 auto'
            }}>
              なぜオートウェビナーが選ばれているのか、4つのポイントをご紹介します
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🚀',
                title: '複数ツールの連携が不要',
                text: 'LP作成、メール配信、決済システム、会員サイト...様々なツールの連携は複雑で時間がかかります。UTAGEは必要な機能がすべて揃った統合プラットフォーム。ツール選びや連携の手間から解放されます。'
              },
              {
                icon: '🌙',
                title: '寝ている間も売上が上がる',
                text: 'オートウェビナーシステムは24時間365日稼働し、あなたに代わって見込み客の教育から販売までを自動で行います。時差のある海外からの購入も逃しません。自動化された販売の仕組みがあなたの代わりに働き続けます。'
              },
              {
                icon: '💡',
                title: 'ITスキル不要',
                text: '「デジタルマーケティングは難しい...」そんな不安は不要です。私たちのサポートで、専門知識がなくても自分だけのオートウェビナーシステムを構築できます。まずはあなたの専門知識をお聞かせください。'
              },
              {
                icon: '⏰',
                title: '貴重な自分時間の確保',
                text: '時間は有限です。オートウェビナーの導入により、問い合わせ対応や営業活動から解放され、クリエイティブな活動や家族との時間など、本当に大切なことに時間を使えるようになります。'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  marginBottom: '1.5rem',
                  background: '#f5f5f7',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: '#1d1d1f'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#424245',
                  flexGrow: 1
                }}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロフィールセクション */}
      <section style={{ padding: '120px 0', backgroundColor: 'white' }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '6%',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', marginBottom: '40px' }}>
            <img 
              src="/images/profile-owner.webp" 
              alt="前田 由紀子"
              style={{ 
                maxWidth: '400px', 
                width: '100%', 
                height: 'auto', 
                borderRadius: '16px' 
              }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '0.5rem',
              color: '#1d1d1f'
            }}>
              前田 由紀子
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#0071e3',
              fontWeight: 500,
              marginBottom: '1.5rem'
            }}>
              オートウェビナー構築の専門家
            </p>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#424245',
              marginBottom: '1.5rem'
            }}>
              元IT企業のフロントエンドエンジニアとして活躍した後、フリーランスとして独立。「自分らしく働きたい」と始めた独立生活でしたが、最初は時間と売上のトレードオフに悩み続けていました。
            </p>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#424245',
              marginBottom: '2rem'
            }}>
              オートウェビナーシステムの構築で、自分の時間を確保しながらも安定した売上を実現。ITエンジニアとフリーランスの両方の経験を活かし、「テクノロジーを使いこなせない」という悩みを持つ個人事業主やコンサルタントの方々の「売れる仕組み」づくりをサポートしています。
            </p>
            <a 
              href="/owner"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: '#0071e3',
                color: 'white',
                fontWeight: 500,
                padding: '10px 20px',
                borderRadius: '980px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
            >
              詳しく見る →
            </a>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section style={{ 
        padding: '120px 0', 
        backgroundColor: '#f5f5f7' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 6vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              lineHeight: 1.2,
              color: '#1d1d1f'
            }}>
              自動化を実現する3つのサービス
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#86868b',
              maxWidth: '650px',
              margin: '0 auto'
            }}>
              オートウェビナー大学が提供する、ビジネス自動化のためのサービスをご紹介します
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                image: '/images/service-funnel.webp',
                title: 'オートウェビナー構築代行',
                text: '24時間あなたに代わって商品を売り続ける自動販売システムの構築を代行します。コンセプト設計から各種設定、LP制作、動画編集まで。IT補助金対象サービスです。',
                link: 'https://utage-system.com/p/EcESO02xLLoK',
                linkText: '詳細を見る'
              },
              {
                image: '/images/service-lp.webp',
                title: 'ウェビナー用LP制作',
                text: '集客から成約までを導くランディングページを制作します。あなたの強みやストーリーを魅力的に伝え、ウェビナーへの申し込みを最大化します。',
                link: '/course/lp.html',
                linkText: 'Coming Soon'
              },
              {
                image: '/images/service-video.webp',
                title: 'ウェビナー動画制作',
                text: '視聴者を惹きつけ、説得力のあるウェビナー動画を制作します。あなたのメッセージを効果的に伝え、視聴者の行動を促すための動画編集サービスです。',
                link: '/course/video.html',
                linkText: 'Coming Soon'
              }
            ].map((service, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  height: '100%'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
                <div style={{ 
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    color: '#1d1d1f'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#424245',
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}>
                    {service.text}
                  </p>
                  <a 
                    href={service.link}
                    style={{
                      alignSelf: 'flex-start',
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: '#0071e3',
                      color: 'white',
                      fontWeight: 500,
                      padding: '10px 20px',
                      borderRadius: '980px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '0.9rem'
                    }}
                  >
                    {service.linkText} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section style={{ padding: '120px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 6vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              lineHeight: 1.2,
              color: '#1d1d1f'
            }}>
              よくあるご質問
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#86868b'
            }}>
              お客様からよくいただくご質問に回答します
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                question: 'UTAGEってどんなシステムですか？',
                answer: 'UTAGEは、ランディングページ制作、メール・LINE配信、会員サイト構築、決済システムなどがオールインワンで揃った統合型マーケティングプラットフォームです。複数のツールを連携させる手間なく、一つのシステムで集客から販売までの全プロセスを自動化できます。'
              },
              {
                question: 'IT導入補助金は本当に使えますか？',
                answer: 'はい、UTAGEを活用したオートウェビナー構築サービスはIT導入補助金の対象となります。2025年度のIT導入補助金では最大450万円の補助金が受けられ、面倒な申請手続きもすべて私たちが代行します。詳しくは「詳細を見る」ボタンからご確認ください。'
              },
              {
                question: 'ITが苦手でも大丈夫ですか？',
                answer: 'はい、問題ありません！私たちのオートウェビナー構築代行サービスでは、システムの設定から運用まですべてサポートします。「丸投げプラン」なら、あなたはコンテンツの核となる専門知識を提供するだけで、技術的な部分はすべて私たちが対応します。また、ご自身で運用されたい場合には、専用のマニュアルや個別サポートもご用意しています。'
              },
              {
                question: 'どんな業種や職種に向いていますか？',
                answer: 'コンサルタント、コーチ、セラピスト、士業（税理士、行政書士など）、専門知識を持つ個人事業主の方など、自分の専門知識やノウハウをサービスとして販売している方に特に適しています。また、オンラインスクールやセミナー運営、会員サイト運営などのビジネスモデルとの相性も抜群です。B to Cだけでなく、B to Bの営業プロセスの効率化にも効果を発揮します。'
              },
              {
                question: '費用対効果はどうですか？',
                answer: 'オートウェビナー構築の初期投資は、IT導入補助金を活用すれば実質負担を大幅に抑えられます。また、構築後は24時間365日稼働する販売システムとなるため、例えば月に数件の高額商品が自動で販売されるだけでも十分な投資回収が見込めます。また、時間的コストの削減効果も大きく、営業や個別説明に費やしていた時間を創造的な活動や家族との時間に使えるようになります。'
              }
            ].map((faq, index) => (
              <details 
                key={index}
                style={{
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  marginBottom: '20px'
                }}
              >
                <summary style={{
                  padding: '20px 0',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  listStyle: 'none'
                }}>
                  <span>{faq.question}</span>
                  <span style={{ fontSize: '1.5rem', color: '#0071e3' }}>+</span>
                </summary>
                <div style={{
                  paddingBottom: '20px',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#86868b'
                }}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section style={{
        background: 'linear-gradient(135deg, #0071e3, #00c2ff)',
        color: 'white',
        textAlign: 'center',
        padding: '100px 0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            IT導入補助金2025活用可能
          </h2>
          <h3 style={{
            fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
            fontWeight: 300,
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            申請は完全丸投げOK！
          </h3>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            UTAGEの導入で最大450万円の補助金が受けられます。<br />
            面倒な申請手続きはすべてお任せください。<br />
            あなたは事業成長に集中するだけでOKです。
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/free-consultation"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                color: '#0071e3',
                fontWeight: 600,
                padding: '16px 32px',
                borderRadius: '980px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                minWidth: '180px'
              }}
            >
              無料相談してみる
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
