import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約 | オートウェビナー大学CLAN',
  description: 'オートウェビナー大学CLANの利用規約をご確認ください。サービスご利用時の条件や注意事項について詳しく説明しています。',
  robots: 'noindex, nofollow',
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                利用規約
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                株式会社オートウェビナー大学CLAN（以下「当社」）が提供するサービスの
                利用条件について定めたものです。
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第1条（適用）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  本利用規約（以下「本規約」といいます）は、株式会社オートウェビナー大学CLAN（以下「当社」といいます）が
                  提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。
                  ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第2条（利用登録）</h2>
                <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-3">
                  <li>本サービスの利用を希望する者は、本規約に同意の上、当社の定める方法によって利用登録を申請するものとします。</li>
                  <li>当社は、利用登録の申請者に対して、当社の基準に従って、利用登録の承認または不承認を決定し、これを申請者に通知します。</li>
                  <li>利用登録が承認された場合、利用契約がユーザーと当社の間で成立するものとします。</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第3条（ユーザーIDおよびパスワードの管理）</h2>
                <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-3">
                  <li>ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</li>
                  <li>ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。</li>
                  <li>当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第4条（料金および支払方法）</h2>
                <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-3">
                  <li>ユーザーは、本サービスの有料部分の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。</li>
                  <li>利用料金の支払い期日は、当社が別途定める期日とします。</li>
                  <li>ユーザーが利用料金の支払いを遅滞した場合には、ユーザーは年14.6％の割合による遅延損害金を支払うものとします。</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第5条（禁止事項）</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
                </p>
                <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当社のサービスの運営を妨害するおそれのある行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>他のユーザーに成りすます行為</li>
                  <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第6条（本サービスの提供の停止等）</h2>
                <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-3">
                  <li>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</li>
                </ol>
                <ul className="list-disc pl-10 text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第7条（利用制限および登録抹消）</h2>
                <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-3">
                  <li>当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</li>
                </ol>
                <ul className="list-disc pl-10 text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>本規約のいずれかの条項に違反した場合</li>
                  <li>登録事項に虚偽の事実があることが判明した場合</li>
                  <li>料金等の支払債務の不履行があった場合</li>
                  <li>当社からの連絡に対し、一定期間返答がない場合</li>
                  <li>本サービスについて、最後の利用から一定期間利用がない場合</li>
                  <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第8条（退会）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第9条（保証の否認および免責事項）</h2>
                <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-3">
                  <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。</li>
                  <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第10条（サービス内容の変更等）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第11条（利用規約の変更）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第12条（個人情報の取扱い）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第13条（通知または連絡）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第14条（権利義務の譲渡の禁止）</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">第15条（準拠法・裁判管轄）</h2>
                <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-3">
                  <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                  <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
                </ol>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">お問い合わせ先</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>株式会社オートウェビナー大学CLAN</strong><br />
                      〒150-0002 東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア45階<br />
                      電話：03-1234-5678<br />
                      メール：support@autowebinar-clan.com
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center mt-8">
                    制定日：2020年4月1日<br />
                    最終改定日：2024年1月1日
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
