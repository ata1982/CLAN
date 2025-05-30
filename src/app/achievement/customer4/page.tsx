import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '星美紗貴様 - シンガポールコーチングで月商8桁達成 | UTAGE導入事例',
  description: 'シンガポールを拠点とするコーチング会社CEO 星美紗貴様のUTAGE導入事例。女性起業コミュニティ「Girl Boss Elite」主催として、導入翌月に月商8桁達成、毎月20%以上の売上増加を実現。潜在意識アプローチとUTAGE活用による女性起業家支援の成功事例をご紹介。',
  keywords: 'シンガポールコーチング, 女性起業家支援, 月商8桁, 潜在意識コーチング, Girl Boss Elite, 女性起業コミュニティ, 国際的ビジネス, セールスブロック解除, リーダーシップマインド, スピリチュアルリトリート',
  openGraph: {
    title: '星美紗貴様 - シンガポールコーチングで月商8桁達成 | UTAGE導入事例',
    description: 'シンガポールを拠点とするコーチング会社CEO 星美紗貴様のUTAGE導入事例。女性起業コミュニティ「Girl Boss Elite」から多数の女性起業家を輩出し、導入翌月に月商8桁達成の成功事例。',
    type: 'article',
  },
};

export default function Customer4Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            星美紗貴様 - UTAGE導入事例
          </h1>
          <p className="text-xl opacity-90">
            シンガポールを拠点とするコーチング会社CEOとして女性起業家を支援
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* メイン成果バナー */}
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-8 relative z-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-red-500 mb-4 flex items-center justify-center">
            <span className="mr-3">🏆</span>
            <span className="bg-yellow-200 px-2 py-1 rounded">UTAGE構築代行丸投げちゃん導入成功事例</span>
          </h2>
          <p className="text-lg">
            <span className="text-red-600 font-bold">導入翌月に月商8桁達成・毎月20%以上の売上増加</span>を実現した<br />
            女性起業コミュニティ「Girl Boss Elite」主催者が語るUTAGE導入の効果
          </p>
        </div>

        {/* プロフィールセクション */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 flex items-center">
              <span className="mr-3">👤</span>
              UTAGE構築代行丸投げちゃんでの成功事例
              <span className="ml-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm animate-pulse">CASE STUDY</span>
            </h2>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2 flex items-center">
              <span className="mr-3">👔</span>
              星 美紗貴 様
            </h3>
            <p className="text-gray-600 mb-6 flex items-center">
              <span className="mr-3">🏢</span>
              シンガポールを拠点とするコーチング会社CEO<br />
              女性起業コミュニティ「Girl Boss Elite」主催
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                コーチ、ヒーラー、セラピスト、女性サロン経営者の<span className="bg-yellow-200 px-1 font-semibold">ビジネスメンターとして活躍</span>。潜在意識へのアプローチを得意とした起業支援を行い、クライアント向けにスピリチュアルリトリートやリーダーシップマスターマインドを開催しています。
              </p>
              <p>
                女性起業コミュニティ「Girl Boss Elite」からは、<span className="bg-yellow-200 px-1 font-semibold">ゼロからコーチングやセッションなどのサービスをスタートさせる女性起業家を多数輩出</span>。シンガポールを拠点に国際的な活動を展開しています。
              </p>
            </div>
          </div>
        </section>

        {/* 目次 */}
        <section className="bg-gray-100 rounded-xl p-6 mb-12">
          <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
            <span className="mr-3">📋</span>
            目次
          </h3>
          <ol className="space-y-3">
            <li className="flex items-center">
              <span className="mr-3">▶️</span>
              <a href="#section1" className="text-gray-700 hover:text-blue-900 font-medium">UTAGE導入前の悩み・課題</a>
            </li>
            <li className="flex items-center">
              <span className="mr-3">▶️</span>
              <a href="#section2" className="text-gray-700 hover:text-blue-900 font-medium">「丸投げちゃん」を選んだ理由</a>
            </li>
            <li className="flex items-center">
              <span className="mr-3">▶️</span>
              <a href="#section3" className="text-gray-700 hover:text-blue-900 font-medium">導入後の変化と効果</a>
            </li>
            <li className="flex items-center">
              <span className="mr-3">▶️</span>
              <a href="#section4" className="text-gray-700 hover:text-blue-900 font-medium">迷っている方へのアドバイス</a>
            </li>
            <li className="flex items-center">
              <span className="mr-3">▶️</span>
              <a href="#section5" className="text-gray-700 hover:text-blue-900 font-medium">セールスに対するアプローチ</a>
            </li>
          </ol>
        </section>

        {/* 成果セクション */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <span className="mr-3">📈</span>
            UTAGE導入後の効果
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-green-300 mb-2">8桁+ 💰</div>
              <div className="text-sm">導入後の月商</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-green-300 mb-2">20%+ ⬆️</div>
              <div className="text-sm">毎月の売上増加率</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-green-300 mb-2">100%+ 👥</div>
              <div className="text-sm">顧客管理効率化</div>
            </div>
          </div>
        </section>

        {/* 引用セクション */}
        <div className="bg-yellow-50 border-l-4 border-orange-400 p-6 mb-12 rounded-r-lg relative">
          <div className="absolute top-2 left-4 text-6xl text-orange-200 font-serif">&ldquo;</div>
          <p className="text-lg text-gray-800 font-medium leading-relaxed pl-6">
            最も心配していたのは、システム移行時の不具合や導線の途切れによる売上低下、お客様への案内が適切に届かないといった問題でした。しかし、<span className="bg-yellow-200 px-1 font-bold">そういった心配は全くなく、移行した月には過去最高クラスの月商8桁以上を達成</span>できました。さらに、複雑なファネルを組んでいただき、1次ファネルの後に2次ファネルも並行して進めることができました。その結果、<span className="text-red-600 font-bold">従来の売上に加えて毎月20％以上の売上増加を実現</span>しています。
          </p>
          <div className="absolute bottom-2 right-4 text-6xl text-orange-200 font-serif">&rdquo;</div>
        </div>

        {/* インタビューセクション1 */}
        <section id="section1" className="mb-16">
          <h2 className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">❓</span>
            UTAGE導入前の悩み・課題
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                UTAGE構築代行をご利用になる前は、どのようなお悩みや課題がありましたか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  元々、お客様に私のサービスを知ってもらうためのフロント部分に別のシステムを使っていましたが、<span className="bg-yellow-200 px-1 font-semibold">UTAGEの方が良いと思い移行を検討していました</span>。ただ、その際に課題を感じたのは、元々のフロント構築が非常に珍しい、入り組んだステップを組んでいたことです。「これはUTAGEをよく理解している人にお願いしないと、とても難しいだろうな」と感じていました。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                ご自身で構築にチャレンジすることは考えなかったのですか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  考えませんでした。コンテンツホルダーや講師の方々も共感されると思いますが、<span className="text-red-600 font-bold">最も労力とエネルギーを割きたいのはクライアントや顧客のサポート</span>ですよね。自分でUTAGEを1から学んで構築すると、現在のクライアントへのサポートが浅くなってしまう。また、構築作業が長引いてしまうと、長期的にビジネスにマイナスになると思ったので、自分でやるのは無理だと判断しました。
                </p>
                <p>
                  一瞬「講座が安いな、受けようかな」と思いましたが、時間を捻出できないと感じました。マーケティングや手を動かすのは嫌いではないのでやればできるとは思うのですが、どうしても時間が取れませんでした。スタッフに任せることも考えましたが、私の複雑な仕組み（SSS）を再現するのは難しいだろうと思い、<span className="bg-yellow-200 px-1 font-semibold">自分が学ぶよりもプロにお願いした方が絶対に早い</span>と判断しました。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* インタビューセクション2 */}
        <section id="section2" className="mb-16">
          <h2 className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">✅</span>
            「丸投げちゃん」を選んだ理由
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                数ある構築代行サービスの中で、なぜ弊社のUTAGE構築代行を選んでいただいたのでしょうか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  まず、<span className="bg-yellow-200 px-1 font-semibold">前田さんの実績に最も信頼感を持ちました</span>。UTAGEの構築代行は何社かありますが、前田さんのYouTubeを拝見したり、実績や顧客の声を確認したりして、「前田さんのおかげでスムーズにUTAGEの構築ができた」という評価を目にしました。また、「丸投げちゃん」という名前の通り、単なる構築だけでなく、LINEの配信やページ部分など、<span className="bg-yellow-200 px-1 font-semibold">まるごとお願いできる点も魅力</span>でした。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                UTAGE構築代行サービスは安いものも多い中で、弊社はそれほど安くないと思いますが、どう感じられますか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  経営者として、どこにリソースを割くべきか、自分が最も活かされる部分にエネルギーを注ぐべきだと理解している方からすれば、<span className="text-red-600 font-bold">高くないと思います</span>。
                </p>
                <p>
                  前田さんを選んだ理由として、マーケティングの視点や、UTAGE社と連絡を取って要望を伝えてくださるネットワーク力も大きな要素でした。これを「高くない」と感じる人のためのサービスだと思います。
                </p>
                <p>
                  ファネルを組む際も、「3ヶ月後、6ヶ月後、1年後にこのようなリターンが見込める」という<span className="bg-yellow-200 px-1 font-semibold">現実的な数値目標を立てられる人であれば、投資に対する効果は何倍にもなる</span>ので、長期的な視点を持つ方にとっては非常に良いサービスだと思います。
                </p>
                <p>
                  価格だけで判断してしまうともったいないですね。「安かろう悪かろう」ではないですが、単に「頼みました」だけでは導線が繋がらないこともあります。マーケティング経験豊富な前田さんなら、顧客の反応感覚や効果的な訴求文言についても相談できます。<span className="bg-yellow-200 px-1 font-semibold">単純な代行だけを提供する外注とは違い、壁打ちやコンサルティングの視点でのアドバイスも得られます</span>。どういう位置づけでサービスを導入したいかによって選択が分かれるのだと思います。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* インタビューセクション3 */}
        <section id="section3" className="mb-16">
          <h2 className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">📊</span>
            導入後の変化と効果
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                実際にUTAGEに移行してみて、どのような効果がありましたか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  最も心配していたのは、システム移行時の不具合や導線の途切れによる売上低下、お客様への案内が適切に届かないといった問題でした。しかし、<span className="text-red-600 font-bold">そういった心配は全くなく、移行した月には過去最高クラスの月商8桁以上を達成</span>できました。
                </p>
                <p>
                  さらに、複雑なファネルを組んでいただき、1次ファネルの後に2次ファネルも並行して進めることができました。その結果、<span className="bg-yellow-200 px-1 font-semibold">従来の売上に加えて毎月20％以上の売上増加を実現</span>しています。
                </p>
                <p>
                  UTAGEに移行したことで可能性が広がりました。以前は別のシステムを使っていましたが、UTAGEでは<span className="bg-yellow-200 px-1 font-semibold">顧客管理が一括でできる点も大きなメリット</span>です。これからもUTAGEでさらに多くの施策やファネルを試せると感じています。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                「丸投げちゃん」を利用してよかったポイントは何ですか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  2つあります。圧倒的な前田さんの実績と、「丸投げ」できるという点です。私は100名以上のクライアントをサポートしており、そちらに労力とエネルギーを注いでいるので、<span className="text-red-600 font-bold">丸投げできることが非常に嬉しいポイント</span>でした。
                </p>
                <p>
                  前田さんが「丸投げちゃん」として全体の流れを把握してくださったことです。UTAGEの構築だけでなく、<span className="bg-yellow-200 px-1 font-semibold">導線チェックやつなぎの部分がシームレスだった</span>ことが素晴らしかったです。また、誘導部分でもコンサル的な視点からアドバイスをいただけた点も良かったです。
                </p>
              </div>
            </div>
          </div>

          {/* メリットポイント */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center border-b-2 border-blue-900 pb-3">
              <span className="mr-3">💡</span>
              構築代行の主なメリット
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                移行翌月に月商8桁以上の売上達成
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                複雑なファネル構築により毎月20%以上の売上増加
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                システム移行時の不具合や売上低下なし
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                コンテンツ制作とクライアントサポートに集中できる環境の実現
              </li>
            </ul>
          </div>
        </section>

        {/* インタビューセクション4 */}
        <section id="section4" className="mb-16">
          <h2 className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">💬</span>
            迷っている方へのアドバイス
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                「もし依頼していなかったら、<span className="text-red-600 font-bold">もったいなかったと思います</span>。早く構築できればそれだけ早く売上が上がり、より多くのお客様と出会えるのに、「自分でやろう」と思って進まなかったり、うまくいかなかったりすると、大きなチャンスを逃してしまいます。恐ろしいことです。」
              </p>
              <p>
                「UTAGEに移行したことで可能性が広がりました。以前は別のシステムを使っていましたが、UTAGEでは<span className="bg-yellow-200 px-1 font-semibold">顧客管理が一括でできる点も大きなメリット</span>です。これからもUTAGEでさらに多くの施策やファネルを試せると感じています。現時点では月商8桁達成や売上20％増といった成果がありますが、それ以上に今後の可能性がどんどん広がっていくと実感しています。」
              </p>
              <p>
                「もう一つ伝えたいのは、前田さんのサービスは<span className="bg-yellow-200 px-1 font-semibold">レベルの高い方におすすめ</span>だということです。自分の時間価値が高い経営者や、多くのお客様を抱えている方にとって、構築の遅れによる機会損失は大きなマイナスになります。自分のアイデアを早く世の中に出せないことのデメリットを理解している方には、この投資価値は非常に高いと思います。ストレスなく「丸投げ」という決断でシームレスにサービスを導入できるので、おすすめです。」
              </p>
            </div>
          </div>
        </section>

        {/* インタビューセクション5 */}
        <section id="section5" className="mb-16">
          <h2 className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">🛍️</span>
            セールスに対するアプローチ
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="mr-3">💖</span>
              潜在意識からのセールスアプローチ
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                特に女性に多いのがセールスの苦手意識です。多くの方が初めから営業が嫌だと感じたり、<span className="bg-yellow-200 px-1 font-semibold">セールスに対するブロックを強く持っています</span>。私はそれを「魂の傷」と呼んでいますが、その潜在意識レベルから、自分自身と顧客の課題となっている「魂の傷」を見抜けるようになることで、自然とセールスができるようになります。
              </p>
              <p>
                <span className="bg-yellow-200 px-1 font-semibold">売り込まずにお客様に喜んでもらいながら、自分のサービスを選んでもらえるようになる</span>3日間のマスタークラスを開催しています。「セクシーセールス・シークレット」と呼んでいますが、ここでの「セクシー」とは自分軸があり自信のある女性の姿として定義しています。
              </p>
              <p>
                そのようなセールスができるようになる秘訣を学ぶ3日間のマスタークラスを現在公開しています。<span className="text-red-600 font-bold">女性起業家にとって、セールスのブロックを解除することは収益を上げる最も早い方法</span>の一つだと私は考えています。
              </p>
              <p>
                UTAGEのファネルを活用することで、こうしたセールスの仕組みが効率化され、より多くの方にアプローチができるようになりました。<span className="bg-yellow-200 px-1 font-semibold">自動化と人間味のあるアプローチを組み合わせることで、セールスプロセス全体の質が高まる</span>ことを実感しています。
              </p>
            </div>
          </div>
        </section>

        {/* ナビゲーション */}
        <div className="flex justify-between items-center">
          <a 
            href="/achievement/customer3" 
            className="flex items-center bg-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 hover:text-blue-900 font-medium"
          >
            <span className="mr-3">←</span>
            前の事例
          </a>
          <a 
            href="/achievement/customer5" 
            className="flex items-center bg-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 hover:text-blue-900 font-medium"
          >
            次の事例
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
