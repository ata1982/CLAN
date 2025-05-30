import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '長門浩二様 - 治療院専門販売トレーナーのオンライン自動化 | UTAGE導入事例',
  description: '株式会社NextStage代表 長門浩二様のUTAGE導入事例。治療院専門販売トレーナーとして、オフライン中心からオンライン自動化へシフト。売り込まずに売れる販売術をUTAGE活用で効率的に指導し、業務完全自動化を実現した成功事例をご紹介。',
  keywords: '治療院経営, 販売技術指導, オンライン自動化, 治療院トレーナー, 接客技術, 提案技術, 業務効率化, 売上向上, 患者獲得, 治療院マーケティング',
  openGraph: {
    title: '長門浩二様 - 治療院専門販売トレーナーのオンライン自動化 | UTAGE導入事例',
    description: '株式会社NextStage代表 長門浩二様のUTAGE導入事例。治療院の先生方に売り込まずに売れる販売術を指導し、オフラインからオンライン自動化へ転換した成功事例。',
    type: 'article',
  },
};

export default function Customer5Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            長門浩二様 - UTAGE導入事例
          </h1>
          <p className="text-xl opacity-90">
            治療院専門販売トレーナーとして売り込まずに売れる販売術を指導
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
            <span className="text-red-600 font-bold">オフライン中心からオンライン自動化へ</span><br />
            治療院専門販売トレーナーが語るUTAGE導入による業務効率化
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
              長門 浩二 様
            </h3>
            <p className="text-gray-600 mb-6 flex items-center">
              <span className="mr-3">🏢</span>
              株式会社NextStage 代表
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <span className="bg-yellow-200 px-1 font-semibold">治療院専門販売トレーナー</span>として活躍。治療院の先生方に売り込みにならないような接客技術、提案技術、販売技術を指導し、患者さんが治療を受ける決断をサポートする方法を伝えています。
              </p>
              <p>
                これまでは主にオフラインでの繋がりを通じてビジネスを展開していましたが、<span className="bg-yellow-200 px-1 font-semibold">Webを活用したマーケティングにも力を入れ</span>、より多くの治療院経営者に販売ノウハウを届けることを目指しています。
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
              <a href="#section5" className="text-gray-700 hover:text-blue-900 font-medium">治療院経営者へのメッセージ</a>
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
              <div className="text-3xl font-bold text-green-300 mb-2">100% ⚙️</div>
              <div className="text-sm">業務自動化</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-green-300 mb-2">新規 👥</div>
              <div className="text-sm">未接触客からの申込</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-green-300 mb-2">楽々 📅</div>
              <div className="text-sm">顧客管理</div>
            </div>
          </div>
        </section>

        {/* 引用セクション */}
        <div className="bg-yellow-50 border-l-4 border-orange-400 p-6 mb-12 rounded-r-lg relative">
          <div className="absolute top-2 left-4 text-6xl text-orange-200 font-serif">&ldquo;</div>
          <p className="text-lg text-gray-800 font-medium leading-relaxed pl-6">
            予想以上に…やはりオールインワンになっているUTAGEの仕組みというところが<span className="bg-yellow-200 px-1 font-bold">「楽」だというのがあります</span>。これ、「使っていない人は早く使った方がいいよ」といつも思っていて、よく口コミもしていますし、<span className="text-red-600 font-bold">「丸投げちゃん」の話もよくしています</span>。
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
                このUTAGE構築代行を利用する前に、どのような悩みや課題がありましたか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  そうですね、販売技術を学ぶというのは、治療院業界ではあまりピンとこない内容ではあったんです。でも、<span className="bg-yellow-200 px-1 font-semibold">オフラインの繋がりで、コツコツと必要性を知っていただいて、申し込みいただいて講座をさせていただいていた</span>という流れでした。
                </p>
                <p>
                  ただ、そこに限界を感じていて。<span className="text-red-600 font-bold">Webでしっかりと宣伝広告をしながら魅力を感じてもらいたい、受けてもらいたい</span>というところが、一番のきっかけであり課題でした。
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
                UTAGEは自分で構築するという選択肢も考えられたと思うんですが、ご自身でちょっと触ってみようという思いはありましたか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  ありました、ありました。できれば<span className="bg-yellow-200 px-1 font-semibold">自分で使えるようになるのがいいな</span>とは思ったので。YouTubeで調べて、「どういうサービスなんだろう」と思ったんですけど、「できるかな？」というところとの葛藤がありましたね。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                「できるかな」と思った時、どの辺が難しそうだと感じましたか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  私はCanvaとかは使うので、素材作りはちょこちょこやるんですけど、<span className="text-red-600 font-bold">ZOOMとの連携や決済との連携、あとはLINEステップのようなステップ配信やメルマガ配信などの構築が全然分からなくて</span>。「無理だ」と思ったというよりも、「時間がすごくかかるな」と思いましたね。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                比較検討する代行の方もいらっしゃったかと思うんですが、弊社に依頼することを決めていただいた理由は何でしょうか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  こちらが何をしたいのかを伝えた時に、<span className="bg-yellow-200 px-1 font-semibold">必要なことをもうパンパンパンと図にしてくれたりとか。そのキャッチボールがすごく楽だった</span>。「打ち合わせだけで作ってもらえる」と思ったのが、すごく楽でしたね。私がしたことというのは、修正チェックだけだったので。本当に「これは楽だぞ」「これだ」と思いました。
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
                実際に構築した後の話を聞きたいんですけれども、率直に言って、どのような変化がありましたか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  率直に言いますと…「<span className="text-red-600 font-bold">楽だな</span>」という印象です。これまでは、興味がある人から問い合わせをいただいたら、そこに一つ一つ対応して、やり取りをしたり、ZOOMしたり、何工程も踏んで、それから決済に行くという流れでした。でも今は<span className="bg-yellow-200 px-1 font-semibold">全部自動化されています</span>。
                </p>
                <p>
                  登録された、申し込みが入った、という通知が来て、申し込みが入った人がどこまで受講を受けているのかとか、全部自動で管理できるので。本当に何もしなくていいんです。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6 relative">
              <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q</div>
              <p className="font-semibold text-blue-900 pl-6">
                売上的にはどういった変化がありましたか？
              </p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  要は、サブスクでの売上が勝手に上がって…<span className="bg-yellow-200 px-1 font-semibold">全然知らない、関わりのない方がお客さんになってくれている</span>というのが結構あります。これまでは何かの繋がりで、一度コンタクトを取っている人からの声がけが多かったんですけど、今は動画講座でのフロントオファーなどで、知らないところで私の人柄を知っていただいたり、私のことをリサーチしてくれて、メッセージも届いて、決断してくれるという工程がもう仕組みの中に入っているので。
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
                登録、申し込みが全て自動化され、管理が楽になった
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                全く知らない方からの申し込みが入るようになった
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                予約管理やZOOMリンクの発行が自動化された
              </li>
              <li className="flex items-start bg-gray-100 p-3 rounded border-l-3 border-blue-900">
                <span className="mr-3 font-bold">✓</span>
                メルマガ配信などの機能も使えるようになった
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
                「まずUTAGEというシステムの魅力を理解しているかどうかによると思いますが、<span className="bg-yellow-200 px-1 font-semibold">自分がやりたいことや自動化したいことがあるのであれば、UTAGEは使った方がいい</span>と思います。費用対効果としてはとても良いですね。
              </p>
              <p>
                次の費用対効果としては、あなた自身のスキルというところ。セッティングやライティングスキルなどに自信がないのであれば、コスパは非常に良いと思います。「<span className="text-red-600 font-bold">丸投げした方がいい</span>」というのは、経営者の方には特に言いたいですね。
              </p>
              <p>
                自分でなんとかしようではなく、<span className="bg-yellow-200 px-1 font-semibold">自分の時給と計算して、どちらがコスパが良いのかを考える時に</span>、私はそんなに得意ではなかった。そこそこはできるんです。Canvaを教えたりしているレベルなので。でも構築は違うなと。こういうシステムを使いこなすというのは相当な労力が必要なので、「餅は餅屋」ということで、プロにお願いするのが間違いなく早いし、クオリティが違います。
              </p>
              <p>
                悩んでいる人は、頼んでしまった方が早いんじゃないですか？ そして、覚えたいのであれば、頼んだ後に、できたものを見て「こういう形で作っているんだ」というのを触っていって少しずつ覚えているんです。」
              </p>
            </div>
          </div>
        </section>

        {/* インタビューセクション5 */}
        <section id="section5" className="mb-16">
          <h2 className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">🏥</span>
            治療院経営者へのメッセージ
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="mr-3">🤝</span>
              治療院の販売力を高めるために
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                治療家の先生は、患者さんに対して技術を提供するものだと思われている方が多いんですけども、実は<span className="bg-yellow-200 px-1 font-semibold">体のケアをするために時間とお金を投資する「決断をさせる」ということがなかなかできなくて</span>、困っている方が多いと思うんです。
              </p>
              <p>
                技術のある先生が、患者さんに対して決断をさせるというスキルが手に入ったら、<span className="bg-yellow-200 px-1 font-semibold">リピート率や売上がどんどん上がっていく</span>ので。この提案技術、販売技術を学んでいただくことで、患者さんの笑顔が増え、それが先生がやりたいことだと思います。
              </p>
              <p>
                ぜひ、<span className="text-red-600 font-bold">販売技術というのは物を売る技術ではないということを理解していただいて</span>、先生が伝えたいことを相手に伝わるようにする技術を身につけていただきたいと思っています。
              </p>
              <p>
                そして、そういった技術をオンラインで学ぶ場合、UTAGEのような仕組みを使うことで、対面セミナーとは違ったアプローチが可能になります。自分の時間を最大限に有効活用し、より多くの先生方に価値を届けることができるようになるのです。
              </p>
            </div>
          </div>
        </section>

        {/* ナビゲーション */}
        <div className="flex justify-between items-center">
          <a 
            href="/achievement/customer4" 
            className="flex items-center bg-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 hover:text-blue-900 font-medium"
          >
            <span className="mr-3">←</span>
            前の事例
          </a>
          <a 
            href="/achievement/customer1" 
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
