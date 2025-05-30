import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '株式会社笑認 髙安様 - UTAGE導入事例 | 離職率20%→1%への劇的改善',
  description: '離職率20%→1%への劇的改善を実現した「パノラマ人事評価システム360」開発者、株式会社笑認の髙安敏行様によるUTAGE導入成功事例。220名の従業員を抱える労働集約型事業での人材定着術をご紹介。',
  keywords: 'UTAGE,導入事例,人事評価システム,離職率改善,株式会社笑認,髙安敏行,人材定着,労働集約型事業,パノラマ人事評価システム360',
};

export default function Customer1() {
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
              株式会社笑認 髙安様 - UTAGE導入事例
            </h1>
            <p style={{
              fontSize: '1.1rem',
              opacity: '0.9',
              marginBottom: '20px'
            }}>
              離職率20%→1%への劇的改善を実現した「パノラマ人事評価システム360」開発者
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
              <span style={{ color: '#ff0000', fontWeight: 'bold' }}>離職率20%→1%</span>を実現した人事評価システム開発者が語る
              <br />UTAGE導入の効果とビジネス成長への影響
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
                  <span style={{ marginRight: '10px', color: '#0d3283' }}>👔</span> 髙安 敏行 様
                </h3>
                <p style={{
                  fontSize: '1rem',
                  marginBottom: '15px',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '10px', color: '#666', fontSize: '14px' }}>🏢</span> 
                  株式会社笑認 代表取締役 / ハートサービスグループ 専務取締役
                </p>
                <div>
                  <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                    「パノラマ人事評価システム360」開発、クリーニングや介護事業、理美容事業などの労働集約型事業運営。
                    <span style={{
                      backgroundColor: '#ffff00',
                      padding: '2px 0',
                      fontWeight: 'bold'
                    }}>離職率を20%から1%へと改善した実績</span>。
                    著書『離職率1%の会社が編み出した 超人材定着術』
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
                  迷っている方へのメッセージ
                </a>
              </li>
              <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '25px' }}>
                <span style={{ position: 'absolute', left: '0', top: '5px', color: '#0d3283' }}>▶</span>
                <a href="#section5" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
                  離職率を改善するアプローチ
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
                  20%→1% <span style={{ color: '#7bdcb5', fontSize: '1.5rem' }}>↓</span>
                </div>
                <div style={{ fontSize: '0.9rem' }}>離職率改善</div>
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
                  220名 <span style={{ color: '#7bdcb5', fontSize: '1.2rem' }}>👥</span>
                </div>
                <div style={{ fontSize: '0.9rem' }}>従業員規模</div>
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
                  35期 <span style={{ color: '#7bdcb5', fontSize: '1.2rem' }}>📅</span>
                </div>
                <div style={{ fontSize: '0.9rem' }}>事業継続年数</div>
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
              paddingLeft: '15px'
            }}>
              &ldquo;結果として、<span style={{
                backgroundColor: '#ffff00',
                padding: '2px 0',
                fontWeight: 'bold'
              }}>UTAGEのシステムを通じて新規の依頼や新しいつながりをいただき</span>、
              非常に嬉しく思っています。今でも、私の本を読んでくださった方から問い合わせや導入依頼があります。実は昨日も、当社ハートサービスグループで3月にオープン予定のデイサービス事業と介護用品ジムのスタッフ募集に対し、
              <span style={{ color: '#ff0000', fontWeight: 'bold' }}>私の本を読んでQRコードを読み込み、話を聞きに来てくださった方を最終面接で採用したばかりです</span>。
              これは本当に嬉しかったですし、情報発信の効果だと実感しています。&rdquo;
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
                <strong>前田：</strong> 皆さん、こんにちは。「UTAGE構築代行丸投げちゃん」の前田です。本日は、社員同士が相互に評価・承認し合う新しい人事システム「パノラマ人事評価システム360」を開発し、離職率を20%から1%へと劇的に改善された実績をお持ちの株式会社笑認の代表取締役、髙安敏行様をお迎えしております。
              </div>

              <div style={{ padding: '15px 0' }}>
                <p><strong>髙安：</strong> ありがとうございます。</p>
              </div>

              <div style={{
                backgroundColor: '#f0f7ff',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #0d3283'
              }}>
                <strong>前田：</strong> UTAGEの構築代行を利用する前に、どのような悩みや課題がありましたか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  <strong>髙安：</strong> はい、ありがとうございます。UTAGEの構築代行を依頼する前は、
                  <span style={{ color: '#ff0000', fontWeight: 'bold' }}>メールの問い合わせや様々なマーケティング配信などを人力に頼っていたため、対応を忘れたり遅れたりすることがありました</span>。
                  そこでUTAGEのシステムを知り、導入を検討しました。
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  ただ、UTAGEの仕組みを使いこなすためには新たに習得したり運用したりする時間や人員が必要となり、その部分で課題を感じていました。そこで
                  <span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>構築代行サービスを利用させていただく</span>ことにしました。
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
                <strong>前田：</strong> 個別相談を受けていただいたかと思いますが、弊社の「UTAGE構築代行丸投げちゃん」のサービスを選んだ理由は何ですか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  <strong>髙安：</strong> 理由は2点あります。まず、お話をさせていただく中で、
                  <span style={{ fontWeight: 'bold' }}>前田さんが非常にシステムを理解されている方だと感じたこと</span>。
                  そしてもう一点は、<span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>前田さん自身がUTAGEの仕組みを使って既に良い実績を上げられていた、成功事例をお持ちだった</span>ことです。
                  この2点が決め手となりました。
                </p>
              </div>

              <div style={{
                backgroundColor: '#f0f7ff',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #0d3283'
              }}>
                <strong>前田：</strong> そうですか。他のサービスを検討すれば、もう少し安かったり納期が短かったりする選択肢もあったかもしれません。弊社は比較的価格が高めで、しっかりと時間をかけてサービスを提供しています。そういった中で、より安くて早い代行を探さなかった理由を振り返るとどのようなことが考えられますか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  <strong>髙安：</strong> これは私のビジネス感覚やこだわりにも通じることですが、当社は
                  <span style={{ color: '#ff0000', fontWeight: 'bold' }}>「何をやるか」や「いくらでやるか」よりも「誰とやるか」を非常に重視</span>しています。
                  前田さんという、UTAGEのサービスをバックでサポートしていただける方が、私たちにとって良いパートナーだと感じました。
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  価格はそれなりにかかると思いますが、それ以上のパフォーマンスや、私たちが実現したいことを一緒に叶えられる関係、そしてその成功を一緒に喜べるパートナーの方が望ましいと考えています。
                  <span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>そこはお金では買えない価値</span>だと思っています。
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
                <strong>前田：</strong> 出版を機に、UTAGEを使って認知から個別相談やサービスを知っていただくようなファネルを組んでおくことは、実践された髙安様からするとおすすめですか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ lineHeight: '1.7' }}>
                  <strong>髙安：</strong> はい、<span style={{ color: '#ff0000', fontWeight: 'bold' }}>それは絶対にやっておいた方がいい</span>と思います。
                  より深く情報提供したり思いを伝えたりする意味で、一件一件の問い合わせに個別に返答するのは大変ですし、適切に対応できないこともあります。
                  そういった意味では、<span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>UTAGEの仕組みを使って情報を届けることは非常に重要</span>だと感じています。
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
                💡 UTAGE導入の主なメリット
              </h4>
              <ul style={{ paddingLeft: '25px' }}>
                <li><span style={{ fontWeight: 'bold' }}>自動対応の実現</span> — 問い合わせや情報提供の自動化</li>
                <li><span style={{ fontWeight: 'bold' }}>時間の節約</span> — 本業に集中できる時間の確保</li>
                <li><span style={{ fontWeight: 'bold' }}>専門的サポート</span> — システムに詳しいプロの支援</li>
                <li><span style={{ fontWeight: 'bold' }}>成功実績の信頼</span> — 実績のあるパートナーシップ</li>
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
              <span style={{ marginRight: '10px' }}>💬</span> 迷っている方へのメッセージ
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
                <strong>前田：</strong> 視聴者の方に、率直なご意見をお聞きしたいのですが、構築代行というとやり取りのストレスや思いを汲み取ってもらえないことが起こりやすいと思います。その点、弊社の「丸投げちゃん」のコミュニケーションはいかがでしたか？
              </div>

              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  <strong>髙安：</strong> その点は<span style={{ color: '#ff0000', fontWeight: 'bold' }}>本当にノーストレスでした</span>。
                  私たちが実現したいことをヒアリングの中でしっかり読み取っていただき、私たちが表現する以上のものを形にしていただいたことは本当にすごいと思いました。
                  まさに<span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>マーケティングの神様だと感じるほど</span>でした。
                  私も大学院やビジネススクールでマーケティングを学びましたが、フレームワークをしっかり学んだ知識を実務経験と組み合わせて表現していただいたと感じました。本当に良かったと思います。
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  おそらくこれをご覧になっている方は、自分自身の思いや素晴らしい商品・サービスをお持ちで、それをたくさんの方に提供したいと考えていると思います。現代は時は金なりで、時間は非常に貴重です。どのみち様々なコースや人材、自分の時間を使うことでコストがかかるものですから、
                  <span style={{ fontWeight: 'bold' }}>その時間をお金で買い、さらに自分が持っている以上のパフォーマンスを引き出せるのは非常にコスパが高い</span>と思います。
                  その時間を、本来自分しかできない事業や仕事に充てることが、ビジネス成功の一因だと思います。
                  <span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>構築やマーケティングの経験が豊富な、いわゆる「餅は餅屋」のプロにお願いする</span>ことをお勧めします。
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
              <span style={{ marginRight: '10px' }}>👥</span> 離職率を改善するアプローチ
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
                <span style={{ marginRight: '10px' }}>🏅</span> 離職率を1%に改善する人事評価システム
              </h3>
              <div style={{ padding: '15px 0' }}>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  現在、世の中では人手不足が言われていますが、私はそれよりも、
                  <span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>企業が社員に求めるものと、新しい人材が企業に求めるもののミスマッチが起きている</span>と感じています。
                  弊社のシステムは「パノラマ人事評価システム」と名付けていますが、人が人を評価することは非常に難しいものです。
                  離職率を下げていくためには、まず「人が人に関心を持つ」ことが重要だと考えています。
                </p>
                <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                  関心を持つ際にどこを見るかが、人間関係を構築する上で大切です。「笑認」という名前が示すように、通常の「承認」とは、
                  <span style={{ fontWeight: 'bold' }}>人の良いところに目を向け、その人の強みや長所を認めること</span>だと思います。
                  これが人間関係や企業と従業員の関係、評価においてとても重要なのです。
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  私は人に対する仕組みは<span style={{ color: '#ff0000', fontWeight: 'bold' }}>性善説で考えるべき</span>だと思います。
                  会社の様々な仕組みは性悪説で運営している企業も多いですが、私たちの最大の理念は「
                  <span style={{
                    backgroundColor: '#ffff00',
                    padding: '2px 0',
                    fontWeight: 'bold'
                  }}>世界で承認し合う世界を作る</span>」ことです。
                  人事評価システムを売ることが目的ではなく、みんなが認め合える世界を作るというビジョンを達成するために、まずは企業内でスタッフ同士が認め合えるような仕組みづくりを行っています。
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
              href="/achievement/"
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
              ← 一覧へ戻る
            </a>
            <a
              href="/achievement/customer2"
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
