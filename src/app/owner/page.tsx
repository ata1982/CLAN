import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "運営者情報 | オートウェビナー大学",
  description: "オートウェビナー大学を運営するチームのご紹介"
};

export default function OwnerPage() {
  return (
    <div className="bg-white">
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <h1 className="apple-hero-title">運営者情報</h1>
          <p className="apple-hero-subtitle">オートウェビナー大学を運営するチームのご紹介</p>
        </div>
      </section>

      <div className="apple-page-container">
        <div style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          maxWidth: '520px',
          margin: '60px auto 40px auto',
          padding: '36px 24px 32px 24px',
          textAlign: 'center'
        }}>
          <Image 
            src="/images/profile-owner.webp" 
            alt="前田由紀子 プロフィール写真"
            width={120}
            height={120}
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '50%',
              boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
              margin: '0 auto 18px auto',
              display: 'block',
              border: '4px solid #f8f9fa',
              background: '#f8f9fa'
            }}
            loading="lazy"
            priority={false}
          />
          <div style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginBottom: '0.2em',
            color: '#0d3283'
          }}>前田 由紀子</div>
          <div style={{
            color: '#ff3a3a',
            fontSize: '1.05rem',
            marginBottom: '1em',
            fontWeight: '500'
          }}>Web集客コンサルタント</div>
          <div style={{
            fontSize: '0.98em',
            color: '#444',
            marginBottom: '1.2em',
            lineHeight: '1.8'
          }}>
            1980年鹿児島県生まれ。高校卒業後、ブルガリなどのハイブランドで13年間勤務。2011年、ローフードとファスティングの事業で福岡で起業。協会設立を経て、東京・青山に料理教室を開講。現在、株式会社CLANの代表取締役として活動中。
          </div>
          <ul style={{
            textAlign: 'left',
            margin: '1.2em auto 1.5em auto',
            paddingLeft: '1.2em',
            maxWidth: '350px',
            fontSize: '0.97em',
            color: '#333'
          }}>
            <li style={{marginBottom: '0.5em', listStyle: 'disc'}}>著書: <a href="https://www.amazon.co.jp/dp/B09X1Y2L4F" target="_blank" rel="noopener">美人は7日でつくられる</a></li>
            <li style={{marginBottom: '0.5em', listStyle: 'disc'}}>専門分野: オートマーケティング、セールスファネル構築、集客戦略策定</li>
            <li style={{marginBottom: '0.5em', listStyle: 'disc'}}>実績: 自動化マーケティングによる売上改善事例300件以上</li>
          </ul>
          <h2 style={{fontSize:'1.1rem',fontWeight:'bold',margin:'2em 0 0.7em 0',color:'#0d3283'}}>会社概要</h2>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            margin: '0 auto 0.5em auto',
            background: '#f8f9fa',
            borderRadius: '10px',
            overflow: 'hidden',
            fontSize: '0.98em',
            boxShadow: '0 1px 6px rgba(0,0,0,0.04)'
          }}>
            <tbody>
              <tr>
                <th style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#ff3a3a',
                  background: '#f3f3f3',
                  width: '34%',
                  fontWeight: '700',
                  borderRight: '1px solid #eee'
                }}>社名</th>
                <td style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#333',
                  background: '#fff'
                }}>株式会社CLAN</td>
              </tr>
              <tr>
                <th style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#ff3a3a',
                  background: '#f3f3f3',
                  width: '34%',
                  fontWeight: '700',
                  borderRight: '1px solid #eee'
                }}>所在地</th>
                <td style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#333',
                  background: '#fff'
                }}>〒892-0851 鹿児島県鹿児島市上竜尾町1番2号</td>
              </tr>
              <tr>
                <th style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#ff3a3a',
                  background: '#f3f3f3',
                  width: '34%',
                  fontWeight: '700',
                  borderRight: '1px solid #eee'
                }}>代表者</th>
                <td style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#333',
                  background: '#fff'
                }}>前田 由紀子</td>
              </tr>
              <tr>
                <th style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#ff3a3a',
                  background: '#f3f3f3',
                  width: '34%',
                  fontWeight: '700',
                  borderRight: '1px solid #eee'
                }}>資本金</th>
                <td style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#333',
                  background: '#fff'
                }}>3,000,000円</td>
              </tr>
              <tr>
                <th style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#ff3a3a',
                  background: '#f3f3f3',
                  width: '34%',
                  fontWeight: '700',
                  borderRight: '1px solid #eee'
                }}>連絡先</th>
                <td style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#333',
                  background: '#fff'
                }}><a href="mailto:info@clanbiz.net">info@clanbiz.net</a></td>
              </tr>
              <tr>
                <th style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#ff3a3a',
                  background: '#f3f3f3',
                  width: '34%',
                  fontWeight: '700',
                  borderRight: '1px solid #eee'
                }}>受付時間</th>
                <td style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#333',
                  background: '#fff'
                }}>9:00〜18:00（土日祝を除く）</td>
              </tr>
              <tr>
                <th style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#ff3a3a',
                  background: '#f3f3f3',
                  width: '34%',
                  fontWeight: '700',
                  borderRight: '1px solid #eee'
                }}>事業内容</th>
                <td style={{
                  padding: '8px 10px',
                  textAlign: 'left',
                  color: '#333',
                  background: '#fff'
                }}>セールスファネル構築代行</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
