import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | オートウェビナー大学",
  description: "オートウェビナー大学（UTAGE構築代行丸投げちゃん）の特定商取引法に基づく表記ページです。"
};

export default function TokuteiPage() {
  return (
    <div className="bg-white">
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <h1 className="apple-hero-title">特定商取引法に基づく表記</h1>
          <p className="apple-hero-subtitle">安心してご利用いただくための運営者情報・取引条件を明記しています</p>
        </div>
      </section>

      <div className="apple-page-container">
        <div className="apple-card">
          <table className="apple-table" style={{width:'100%',borderCollapse:'collapse',lineHeight:2}}>
            <tbody>
              <tr><th style={{width:'30%',textAlign:'left',verticalAlign:'top'}}>販売事業者</th><td>株式会社CLAN</td></tr>
              <tr><th>運営責任者</th><td>前田 由紀子</td></tr>
              <tr><th>所在地</th><td>鹿児島県鹿児島市（詳細はご請求時に遅滞なく開示します）</td></tr>
              <tr><th>電話番号</th><td>ご請求があった場合、遅滞なく開示します</td></tr>
              <tr><th>メールアドレス</th><td>info@clanbiz.net</td></tr>
              <tr><th>販売URL</th><td><a href="https://utage-marunage.com/" target="_blank" rel="noopener">https://utage-marunage.com/</a></td></tr>
              <tr><th>販売価格</th><td>各サービスごとに該当ページに記載（例：UTAGE構築代行丸投げちゃん：初期費用10万円（税込）～）</td></tr>
              <tr><th>商品代金以外の必要料金</th><td>銀行振込の場合、振込手数料</td></tr>
              <tr><th>お支払い方法</th><td>クレジットカード決済、銀行振込</td></tr>
              <tr><th>お支払い時期</th><td>お申し込み後7日以内</td></tr>
              <tr><th>商品の引き渡し時期</th><td>ご入金確認後、サービス提供開始</td></tr>
              <tr><th>キャンセル・返金</th><td>サービスの性質上、原則として返金不可。詳細は個別契約書・利用規約をご確認ください。</td></tr>
              <tr><th>表現及び商品に関する注意書き</th><td>本サービスの再現性には個人差があり、必ずしも利益や効果を保証するものではありません。</td></tr>
            </tbody>
          </table>
          <p style={{marginTop:'2em',fontSize:'0.95em',color:'#666'}}>※上記以外の事項については、お取引の際に請求があれば遅滞なく提示いたします。</p>
        </div>
      </div>
    </div>
  );
}
