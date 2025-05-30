import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '伊澤杏佳様 - 女子ウケマーケティングで年商3億→30億円達成 | UTAGE導入事例',
  description: '株式会社Global Associa & CO.代表 伊澤杏佳様のUTAGE導入事例。女子ウケマーケティングの第一人者として、8,000人以上の起業家を指導し年商3億円を2年で30億円に成長。協会会員数1万人超、オートウェビナーファネルで販売完全自動化を実現した成功事例をご紹介。',
  keywords: '女子ウケマーケティング, 協会運営, オートウェビナー, 販売自動化, 年商30億円, 起業家支援, 女性向けビジネス, マーケティングコンサル, ビジネスモデル構築, エバーグリーンローンチ',
  openGraph: {
    title: '伊澤杏佳様 - 女子ウケマーケティングで年商3億→30億円達成 | UTAGE導入事例',
    description: '株式会社Global Associa & CO.代表 伊澤杏佳様のUTAGE導入事例。女子ウケマーケティングの第一人者として8,000人以上の起業家を指導し、年商3億円を2年で30億円に成長させた成功事例。',
    type: 'article',
  },
};

export default function Customer3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            伊澤杏佳様 - UTAGE導入事例
          </h1>
          <p className="text-xl opacity-90">
            女子ウケマーケティングの第一人者として女性向けビジネスの成功を支援する起業家
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
            <span className="text-red-600 font-bold">女子ウケマーケティングの専門家がオートウェビナーファネルで販売を完全自動化</span><br />
            時間と場所に縛られない安定した収益源の確立に成功
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
              伊澤 杏佳 様
            </h3>
            <p className="text-gray-600 mb-6 flex items-center">
              <span className="mr-3">🏢</span>
              株式会社 Global Associa & CO. 代表取締役社長
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                女子ウケマーケティングの第一人者として、<span className="bg-yellow-200 px-1 font-semibold">女性向けビジネスの成功を支援し、数々のヒット商品やビジネスモデルを生み出して</span>きました。これまでに8,000人以上の起業家・経営者を指導し、毎年1,000人以上の新規クライアントを獲得。さらに年間700名以上の経営者を直接サポートし、設立した協会の会員数は1万人を超えています。
              </p>
              <p>
                年商3億円の企業を<span className="bg-yellow-200 px-1 font-semibold">2年で30億円に成長させた実績</span>を持ち、独自の女子ウケマーケティングを活用したビジネス構築で、多くの起業家や企業の業績向上に貢献されています。
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
              <a href="#section5" className="text-gray-700 hover:text-blue-900 font-medium">女子ウケマーケティングについて</a>
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
              <div className="text-3xl font-bold text-green-300 mb-2">8,000人+ 👥</div>
              <div className="text-sm">指導実績</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-green-300 mb-2">1万人+ 👫</div>
              <div className="text-sm">協会会員数</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-green-300 mb-2">700名+ 🎓</div>
              <div className="text-sm">年間サポート経営者数</div>
            </div>
          </div>
        </section>

        {/* 引用セクション */}
        <div className="bg-yellow-50 border-l-4 border-orange-400 p-6 mb-12 rounded-r-lg relative">
          <div className="absolute top-2 left-4 text-6xl text-orange-200 font-serif">&ldquo;</div>
          <p className="text-lg text-gray-800 font-medium leading-relaxed pl-6">
            実際、私もサービスを受ける前と後では、ビジネス自体が大きく変わりました。<span className="bg-yellow-200 px-1 font-bold">時間と場所に縛られずに、安定した収益を生み出せるようになった</span>きっかけでもあります。私がクライアントの方々にいつも言うのは、「自分で自動販売機を持っている感じ」です。<span className="text-red-600 font-bold">将来的な不安がなくなったり、お金や場所、時間など様々な意味での自由を手に入れられる</span>点で、今後も将来性の高いビジネスになっていくと思います。
          </p>
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
                今回このUTAGE構築の代行依頼前に抱えていたお悩みをお伝えいただいてもよろしいですか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  やはりこういった今までのお仕事がある中で、過去にプロダクトローンチと呼ばれるものを実践してきた経験があるのですが、そこに限界を感じて、次のステップに進みたいと思いました。<span className="bg-yellow-200 px-1 font-semibold">エバーグリーンローンチという自動販売の仕組みを構築したい</span>と考えたんです。
                </p>
                <p>
                  以前に1人でエバーグリーンローンチに取り組もうとした時、システムを購入したことがあったのですが、<span className="text-red-600 font-bold">ファネルや販売システムの連携など分からないことが多すぎて、結局買ったものの役に立たずに自滅してしまった</span>経験があります。今回は、伴走してくれるプロの方がいるといいなと思って探していた時に、ちょうど「丸投げちゃん」に出会ったので、「これだな」と思ってお願いしたという経緯があります。
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
                「丸投げちゃん」に依頼しようと思ったきっかけを伺いたいです。他にも構築代行やサポート、講座など様々な選択肢があったと思いますが、なぜ「丸投げちゃん」を選んでいただいたのでしょうか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  広告で「丸投げちゃん」を見て、まずはお話を聞いてみないと私が思っていることと合っているかわからないので、<span className="font-bold">一度無料相談してみよう</span>と思いました。
                </p>
                <p>
                  色々と私の課題に対して具体的な解決策を前田さんからご提案いただき、その<span className="bg-yellow-200 px-1 font-semibold">提案力の高さや専門性に非常に頼もしさを感じました</span>。「丸投げちゃん」なら私のビジネスを次のステージに引き上げてくれるという確信が得られたのが決め手です。
                </p>
                <p>
                  他社と比べた時に、<span className="text-red-600 font-bold">テーマやデザイン、コンセプトをしっかり汲み取ってくれる専門家として「丸投げちゃん」が差別化されている</span>と感じました。そこが決め手となったポイントですね。
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
                実際に依頼してみて感じたこと、そして依頼して良かったと感じた点をお伺いできますか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  確かにUTAGEは機能がすごく多いので、UTAGEだけを契約して自分でやることもできるかもしれませんが、<span className="font-bold">私1人だと使い方を理解するだけでも時間がかかるでしょうし、便利な機能を使いこなせずに終わっていた</span>かもしれません。
                </p>
                <p>
                  依頼して良かったと感じた点は一つです。それは<span className="text-red-600 font-bold">「一貫性」</span>です。「丸投げちゃん」にお願いしたからこそ、<span className="bg-yellow-200 px-1 font-semibold">ランディングページやデザイン、セールスライティング、ファネルの流れなど、ブレがなく一貫性を持って最後まで作り上げられた</span>ことが、非常に良かったポイントです。
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
                オートウェビナーファネルで販売が完全自動化
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                一貫性のあるデザインとコンセプトで顧客体験向上
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                時間と場所に縛られない安定した収益源の確立
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                コンテンツビジネスに特化した専門的なアドバイスが受けられる
              </li>
            </ul>
          </div>
        </section>

        {/* インタビューセクション4 */}
        <section id="section4" className="mb-16">
          <h2 className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">💬</span>
            迷っている方へのメッセージ
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                「もし今回この依頼をしていなかったら、<span className="text-red-600 font-bold">絶対にまだできていないですね</span>。多分、やりたいと思いながらもやらないで終わっている可能性の方が高いと思います。」
              </p>
              <p>
                「年齢とともにだんだん集中できる時間が短くなっていると感じています。<span className="bg-yellow-200 px-1 font-semibold">女性だからこそ、こういった自動化は絶対に必要になってくると思います</span>し、これから高齢者の方々がどんどん増えていく中で、高齢者の方々ができる作業という意味でも重要だと思います。」
              </p>
              <p>
                「早く出来上がって世に商品をリリースした方が、ビジネスとしては良いわけです。早く利益が入ってくれば回収も早くなります。<span className="font-bold">時間をお金に換算すると、しっかり投資してプロに依頼した方が絶対に早く回収できる</span>と思います。」
              </p>
              <p>
                「実際、私もサービスを受ける前と後では、ビジネス自体が大きく変わりました。<span className="bg-yellow-200 px-1 font-semibold">時間と場所に縛られずに、安定した収益を生み出せるようになった</span>きっかけでもあります。絶対に「丸投げちゃん」はお勧めです。」
              </p>
            </div>
          </div>
        </section>

        {/* インタビューセクション5 */}
        <section id="section5" className="mb-16">
          <h2 className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">♀️</span>
            女子ウケマーケティングについて
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="mr-3">👑</span>
              女性向けビジネスの成功法則
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                女子ウケマーケティングが、<span className="bg-yellow-200 px-1 font-semibold">オートウェビナーの形式で手軽に手に取っていただける</span>ようになっています。年間700名以上の経営者を指導し、年商3億円の企業をたった2年で10倍の30億円に成長させた実績があります。
              </p>
              <p>
                個人法人問わず、<span className="font-bold">女性向けの商品を扱う方々、お客様を皆さん成功へと導いてきた集大成</span>とも言える女子ウケマーケティングの教科書をぜひお手元でご体感ください。
              </p>
              <p>
                私がお客様にいつも言うのは、「<span className="text-red-600 font-bold">自分で自動販売機を持っている感じ</span>」です。将来的な不安がなくなったり、お金や場所、時間など様々な意味での自由を手に入れられる点で、今後も将来性の高いビジネスになっていくと思います。
              </p>
              <p>
                「30年続く協会運営 みんなに愛され儲かる協会」をコンセプトに、個人から法人まで<span className="bg-yellow-200 px-1 font-semibold">長期的に成長し続けるビジネスモデルの構築</span>をサポートしています。
              </p>
            </div>
          </div>
        </section>

        {/* ナビゲーション */}
        <div className="flex justify-between items-center">
          <a 
            href="/achievement/customer2" 
            className="flex items-center bg-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 hover:text-blue-900 font-medium"
          >
            <span className="mr-3">←</span>
            前の事例
          </a>
          <a 
            href="/achievement/customer4" 
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
