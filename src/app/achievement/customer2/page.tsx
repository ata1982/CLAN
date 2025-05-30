import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '末岡俊也様 - UTAGE導入事例 | ゴルフレッスン業界で2ヶ月400万円売上達成',
  description: 'メンタル・脳科学・運動生理学に基づくゴルフ指導のパイオニア、末岡俊也様によるUTAGE導入成功事例。11月下旬のローンチから2ヶ月で400万円以上の売上を実現したゴルフレッスン自動化の秘訣をご紹介。',
  keywords: 'UTAGE,導入事例,ゴルフレッスン,末岡俊也,脳科学ゴルフ,オンラインレッスン,ゴルフ指導,売上400万円,ゴルフコーチング',
};

export default function Customer2() {
  return (
    <>
      <Header />
      <main>
        {/* ヘッダーセクション */}
        <div style={{
          background: 'linear-gradient(135deg, #0d3283 0%, #082258 100%)',
          color: 'white',
          padding: '40px 0'
        }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 20px',
            position: 'relative'
          }}>
            <h1 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              marginBottom: '10px',
              lineHeight: '1.3',
              color: '#fff'
            }}>
              末岡俊也様 - UTAGE導入事例
            </h1>
            <p style={{
              fontSize: '1.1rem',
              opacity: '0.9',
              marginBottom: '20px'
            }}>
              メンタル、脳科学、運動生理学に基づくゴルフ指導のパイオニア
            </p>
          </div>
        </div>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {/* メイン成果バナー */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 5px 25px rgba(0,0,0,0.05)',
            padding: '35px',
            marginTop: '-40px',
            position: 'relative',
            zIndex: '10',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '1.7rem',
              color: '#ff6347',
              marginBottom: '15px'
            }}>
              🏆 <span style={{
                backgroundColor: '#ffff00',
                padding: '2px 0',
                fontWeight: 'bold'
              }}>UTAGE構築代行丸投げちゃん導入成功事例</span>
            </h2>
            <p style={{ fontSize: '1.1rem' }}>
              <span style={{ color: '#ff0000', fontWeight: 'bold' }}>11月下旬のローンチから2か月で400万円以上の売上</span>を実現した
              <br />ゴルフレッスンのプロが語るUTAGE導入の効果
            </p>
          </div>

          {/* プロフィールセクション */}
          <section style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            marginBottom: '40px',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: '#f0f7ff',
              padding: '20px',
              borderBottom: '1px solid #e1eeff',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '10px', color: '#0d3283', fontSize: '20px' }}>👤</span>
              <h2 style={{
                margin: '0',
                color: '#0d3283',
                fontSize: '1.3rem'
              }}>UTAGE構築代行丸投げちゃんでの成功事例</h2>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#ff6347',
                color: 'white',
                padding: '3px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginLeft: '10px',
                verticalAlign: 'middle'
              }}>CASE STUDY</span>
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '25px'
            }}>
              <div style={{ flex: '1' }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  marginBottom: '10px',
                  color: '#0d3283',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '10px', color: '#0d3283' }}>👔</span> 末岡 俊也 様
                </h3>
                <p style={{
                  fontSize: '1rem',
                  marginBottom: '15px',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '10px', color: '#666', fontSize: '14px' }}>⛳</span> 
                  ゴルフインストラクター
                </p>
                <div>
                  <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                    ゴルフでベストスコア63、ベストハーフ29。
                    <span style={{
                      backgroundColor: '#ffff00',
                      padding: '2px 0',
                      fontWeight: 'bold'
                    }}>メンタル、脳科学、運動生理学に基づくゴルフ指導のパイオニア</span>として、
                    20年以上にわたりツアープロから一般ゴルファーまでのべ1万人以上の方々にレッスンを提供。
                    オンラインによるゴルフ上達マスター講座の運営や、YouTubeチャンネル「末岡俊也 脳科学ゴルフ」（登録者数2万5300人）も運営。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 目次 */}
          <section style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '25px',
            margin: '40px 0'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              color: '#0d3283'
            }}>
              <span style={{ marginRight: '10px', color: '#0d3283' }}>📋</span> 目次
            </h3>
            <ol style={{ listStyleType: 'none' }}>
              <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '25px' }}>
                <span style={{ position: 'absolute', left: '0', top: '5px', color: '#0d3283' }}>▶</span>
                <a href="#section1" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
                  UTAGE導入前の悩み・課題
                </a>
              </li>
              <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '25px' }}>
                <span style={{ position: 'absolute', left: '0', top: '5px', color: '#0d3283' }}>▶</span>
                <a href="#section2" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
                  「丸投げちゃん」を選んだ理由
                </a>
              </li>
              <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '25px' }}>
                <span style={{ position: 'absolute', left: '0', top: '5px', color: '#0d3283' }}>▶</span>
                <a href="#section3" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
                  導入後の変化と効果
                </a>
              </li>
              <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '25px' }}>
                <span style={{ position: 'absolute', left: '0', top: '5px', color: '#0d3283' }}>▶</span>
                <a href="#section4" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
                  迷っている方へのアドバイス
                </a>
              </li>
              <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '25px' }}>
                <span style={{ position: 'absolute', left: '0', top: '5px', color: '#0d3283' }}>▶</span>
                <a href="#section5" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
                  ゴルフ上達へのメッセージ
                </a>
              </li>
            </ol>
          </section>

          {/* 成果セクション */}
          <section style={{
            background: 'linear-gradient(135deg, #0d3283 0%, #1a5cb5 100%)',
            color: 'white',
            borderRadius: '8px',
            padding: '30px',
            margin: '40px 0',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              marginBottom: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ marginRight: '10px', color: '#ffdd57' }}>📊</span> UTAGE導入後の効果
            </h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              gap: '20px'
            }}>
              <div style={{
                flex: '1',
                minWidth: '150px',
                padding: '20px 10px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  color: '#7bdcb5'
                }}>
                  400万円+ <span style={{ color: '#7bdcb5', fontSize: '1.5rem' }}>↑</span>
                </div>
                <div style={{ fontSize: '0.9rem' }}>2ヶ月間の売上</div>
              </div>
              <div style={{
                flex: '1',
                minWidth: '150px',
                padding: '20px 10px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  color: '#7bdcb5'
                }}>
                  1万人+ <span style={{ color: '#7bdcb5', fontSize: '1.2rem' }}>👥</span>
                </div>
                <div style={{ fontSize: '0.9rem' }}>レッスン提供実績</div>
              </div>
              <div style={{
                flex: '1',
                minWidth: '150px',
                padding: '20px 10px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  color: '#7bdcb5'
                }}>
                  2.5万人 <span style={{ color: '#7bdcb5', fontSize: '1.2rem' }}>▶</span>
                </div>
                <div style={{ fontSize: '0.9rem' }}>YouTube登録者数</div>
              </div>
            </div>
          </section>

          {/* 引用セクション */}
          <div style={{
            backgroundColor: '#fff9e5',
            borderLeft: '5px solid #f39800',
            padding: '25px',
            margin: '40px 0',
            borderRadius: '0 8px 8px 0',
            position: 'relative'
          }}>
            <p style={{
              fontSize: '1.05rem',
              color: '#333',
              fontWeight: '500',
              lineHeight: '1.7',
              position: 'relative',
              paddingLeft: '15px'            }}>
              &ldquo;やはり「プロライン」の時は、本当に自分でZOOMのリンクを送ったりという手動の作業をしていたんですけれども、
              <span style={{
                backgroundColor: '#ffff00',
                padding: '2px 0',
                fontWeight: 'bold'
              }}>UTAGEにして構築していただいた結果、ZOOMのリンクを自動的に送るシステムになっていたり、リマインドも送ってもらえるシステムになっていたり</span>したことで、
              <span style={{ color: '#ff0000', fontWeight: 'bold' }}>ものすごくスムーズに個別相談を実行することができて</span>、本当に良かったです。&rdquo;
            </p>
          </div>

          {/* インタビューセクション1 */}
          <section style={{ marginBottom: '50px' }} id="section1">
            <h2 style={{
              background: 'linear-gradient(135deg, #0d3283 0%, #1a5cb5 100%)',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              margin: '40px 0 20px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '10px' }}>❓</span> UTAGE導入前の悩み・課題
            </h2>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              padding: '25px',
              marginBottom: '20px'
            }}>
              <div style={{
                backgroundColor: '#f0f7ff',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #0d3283'
              }}>
                <strong>前田：</strong> 皆さん、こんにちは。UTAGE構築代行「丸投げちゃん」の前田です。本日は、末岡俊也様をお迎えしております。末岡様はなんと、ゴルフでベストスコア63、ベストハーフ29という卓越した成績をお持ちで、メンタル、脳科学、運動生理学に基づくゴルフ指導のパイオニアとして知られています。20年以上にわたり、ツアープロから一般ゴルファーまでのべ1万人以上の方々にレッスンを提供されてきました。また、オンラインによるゴルフ上達マスター講座を運営し、多くのゴルファーのスキル向上に貢献されています。さらに、YouTubeチャンネル「末岡俊也 脳科学ゴルフ」を運営し、チャンネル登録者数は2万5300人に上ります。今回は、弊社のUTAGE構築代行「丸投げちゃん」をご利用いただいたご縁で末岡様にお話を伺います。末岡様、どうぞよろしくお願いします。
              </div>

              <div style={{ padding: '15px 0' }}>
                <p><strong>末岡：</strong> よろしくお願いします。</p>
              </div>

              <div style={{
                backgroundColor: '#f0f7ff',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #0d3283'
              }}>
                <strong>前田：</strong> このUTAGE構築代行を利用する前、どのような悩みや困っていたことがありましたか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  <strong>末岡：</strong> オンラインレッスンを始めようとした時に、「プロライン」というツールを使っていたんですけれども、そのツールの使い方も行き当たりばったりでよくわからないまま使っていました。
                  <span style={{ fontWeight: 'bold' }}>ほぼ手動でオンラインレッスンの募集や提供をしていた</span>んです。
                  「UTAGE」というのを知った時に、「もっと進んだツールがあるんだな」と思って、UTAGEの構築を教えてくださるところで学んだんですけれども、なかなか難しくて。それで前田さんのお世話になることにしました。
                </p>
              </div>
            </div>
          </section>

          {/* インタビューセクション2 */}
          <section style={{ marginBottom: '50px' }} id="section2">
            <h2 style={{
              background: 'linear-gradient(135deg, #0d3283 0%, #1a5cb5 100%)',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              margin: '40px 0 20px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '10px' }}>✅</span> 「丸投げちゃん」を選んだ理由
            </h2>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              padding: '25px',
              marginBottom: '20px'
            }}>
              <div style={{
                backgroundColor: '#f0f7ff',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #0d3283'
              }}>
                <strong>前田：</strong> 構築代行は今多いと思いますが、数ある選択肢の中で、弊社のUTAGE構築代行「丸投げちゃん」を選んでいただいた理由は何ですか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  <strong>末岡：</strong> はい。これは、正直…勉強会のような場で隣にいらっしゃった女性の方がオンライン秘書代行をやっていらっしゃったんですけれども、元々かなりパソコンに詳しい方に見えたんです。その方が前田さんのサポートを受けたことで、「だいぶ違ったよ」というお話を聞いて。
                </p>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  やはり他のサービスだと空気感として、「このぐらいは自分で調べてよ」というのがあるじゃないですか。ツールの講座にしても。僕のような本当にその分野に弱い人は、「そんなことがわからなかったり、できなかったりするの？」と思われるようなことを、
                  <span style={{ color: '#ff0000', fontWeight: 'bold' }}>前田さんのサポートではすごく助けていただいて</span>。本当に安心したというか、非常に心強く思いました。
                </p>
              </div>
            </div>
          </section>

          {/* インタビューセクション3 */}
          <section style={{ marginBottom: '50px' }} id="section3">
            <h2 style={{
              background: 'linear-gradient(135deg, #0d3283 0%, #1a5cb5 100%)',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              margin: '40px 0 20px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '10px' }}>📊</span> 導入後の変化と効果
            </h2>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              padding: '25px',
              marginBottom: '20px'
            }}>
              <div style={{
                backgroundColor: '#f0f7ff',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #0d3283'
              }}>
                <strong>前田：</strong> 実際に「丸投げちゃん」を利用してみて、どのような変化や効果を実感されましたか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  <strong>末岡：</strong> 前田さんにやっていただいて、
                  <span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>本当にプロっぽいものがすごくできて、本当にびっくりしました</span>。
                  自分でやっていたら、先延ばしの先延ばしの先延ばしで、いつローンチできるかも不透明だったのが、あっさりローンチできただけでも、衝撃というか感動していました。
                </p>
              </div>

              <div style={{
                backgroundColor: '#f0f7ff',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #0d3283'
              }}>
                <strong>前田：</strong> 売上面での効果はいかがでしたか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ lineHeight: '1.7' }}>
                  <strong>末岡：</strong> 
                  <span style={{ color: '#ff0000', fontWeight: 'bold' }}>11月下旬のローンチから2か月ちょっとで400万円以上の売上達成</span>を実現することができました。
                  これは自分で構築していたら実現できなかったと思います。プロの仕上がりと自動化のシステムがあってこその結果だと感じています。
                </p>
              </div>
            </div>

            {/* ポイント要約ボックス */}
            <div style={{
              backgroundColor: '#f0f7ff',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px'
            }}>
              <h4 style={{
                color: '#0d3283',
                marginBottom: '15px',
                fontSize: '1.1rem'
              }}>
                💡 構築代行の主なメリット
              </h4>
              <ul style={{ paddingLeft: '25px' }}>
                <li>✓ 11月下旬のローンチから2か月ちょっとで400万円以上の売上達成</li>
                <li>✓ プロレベルの仕上がりとシステム構築</li>
                <li>✓ 自動化による業務効率の大幅向上</li>
                <li>✓ IT知識がなくても安心のサポート体制</li>
              </ul>
            </div>
          </section>

          {/* インタビューセクション4 */}
          <section style={{ marginBottom: '50px' }} id="section4">
            <h2 style={{
              background: 'linear-gradient(135deg, #0d3283 0%, #1a5cb5 100%)',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              margin: '40px 0 20px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '10px' }}>💬</span> 迷っている方へのアドバイス
            </h2>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              padding: '25px',
              marginBottom: '20px'
            }}>
              <div style={{
                backgroundColor: '#f0f7ff',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #0d3283'
              }}>
                <strong>前田：</strong> 最後に、構築代行を検討されている方や、UTAGEやコンテンツビジネスに迷っている方に向けて、メッセージをお願いします。
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  <strong>末岡：</strong> 苦手な人って、その苦手な分野が怖いんですよね。怖いと言ったら語弊があるかもしれないんですけど、なんか進まないんです。
                  信じられないぐらい、「どうしよう」となってしまった時に、今回すごく助けていただいた、今も助けていただいているんですけど、非常にありがたくて感謝しています。
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  <span style={{ color: '#ff0000', fontWeight: 'bold' }}>この分野が苦手な人こそ、専門家に任せるべき</span>だと思います。
                  自分一人で悩んでいても時間だけが過ぎてしまいます。プロのサポートを受けることで、確実に前に進めると実感しています。
                </p>
              </div>
            </div>
          </section>

          {/* インタビューセクション5 */}
          <section style={{ marginBottom: '50px' }} id="section5">
            <h2 style={{
              background: 'linear-gradient(135deg, #0d3283 0%, #1a5cb5 100%)',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              margin: '40px 0 20px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '10px' }}>⛳</span> ゴルフ上達へのメッセージ
            </h2>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              padding: '25px',
              marginBottom: '20px'
            }}>
              <h3 style={{
                marginBottom: '20px',
                color: '#0d3283',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{ marginRight: '10px' }}>🧠</span> 脳科学に基づくゴルフ上達法
              </h3>
              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  メンタル、脳科学、運動生理学に基づくゴルフ指導のパイオニアとして、
                  <span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>20年以上にわたり1万人以上のゴルファーにレッスンを提供</span>してきた経験から、皆さんにお伝えしたいことがあります。
                </p>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  多くのゴルファーが「テクニック」だけを追求し、メンタル面や脳と体の関係を無視しています。しかし、
                  <span style={{ fontWeight: 'bold' }}>本当の上達はメンタル、テクニック、身体の総合的な調和から生まれるものです</span>。
                </p>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  私のゴルフ上達マスター講座では、脳科学に基づいた効率的な練習法や、プレッシャー下でも実力を発揮できるメンタルトレーニング、そして年齢や体型に合わせた最適なスイング作りをお伝えしています。
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  <span style={{ color: '#ff0000', fontWeight: 'bold' }}>「練習しても上達しない」「ラウンドで緊張してしまう」「年齢とともにスコアが伸び悩む」</span>といった悩みを持つゴルファーの皆様、ぜひ私のレッスンを体験してみてください。オンラインでも対面でも、あなたのゴルフライフを変える手助けをさせていただきます。
                </p>
              </div>
            </div>
          </section>

          {/* ナビゲーション */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '40px 0'
          }}>
            <a
              href="/achievement/customer1"
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
              }}
            >
              ← 前の事例
            </a>
            <a
              href="/achievement/customer3"
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
              }}
            >
              次の事例 →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
