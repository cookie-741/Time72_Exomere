import Certificate from "./EachCertificate";
import c1 from "@/assets/images/AWARDS/c1.png";
import c2 from "@/assets/images/AWARDS/c2.png";
import c3 from "@/assets/images/AWARDS/c3.png";
import c4 from "@/assets/images/AWARDS/c4.png";
import c5 from "@/assets/images/AWARDS/c5.png";
import c6c12 from "@/assets/images/AWARDS/c6&c12.png";
import c7 from "@/assets/images/AWARDS/c7.png";
import c8 from "@/assets/images/AWARDS/c8.png";
import c9 from "@/assets/images/AWARDS/c9.png";
import c10 from "@/assets/images/AWARDS/c10.png";
import c11 from "@/assets/images/AWARDS/c11.png";
import certificatesTitle from "@/assets/images/AWARDS/t2.svg";

function CertificatesPage() {
  return (
    <section className="px-4 sm:px-16 lg:px-32 py-10">
      {/* Title Image */}
      <img src={certificatesTitle} className="mx-auto my-12 w-3/4 sm:w-1/4" alt="Certificates Title" />
      
      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Certificate
          img={c1}
          des={`米国FDA認証(ペプチドミスト)<br />米国FDA認証 (EGF-FGF アンプル)<br />米国FDA認証(ファイメラ)<br />米国FDA認証(北京リバム)`}
        />
        <Certificate img={c2} des="2016 韓国品質満足度1位" />
        <Certificate img={c3} des="技術評価優秀企業認定証" />
        <Certificate img={c4} des="品質経営システム認定証 ISO 9001" />
        <Certificate img={c5} des="2016今年のヒット商品認定証" />
        <Certificate img={c6c12} des="輸出中小企業認定証" />
        <Certificate img={c7} des="環境経営システム認定証 ISO 14001" />
        <Certificate img={c8} des="大韓民国ブランドパワー大賞" />
        <Certificate img={c9} des="技術評価優秀認定企業" />
        <Certificate img={c10} des="2016 プレミアムブランド大賞" />
        <Certificate img={c11} des="化粧品優秀製造企業ISO22716" />
        <Certificate img={c6c12} des="天然マイクロニードルの使用で特許" />
      </div>
    </section>
  );
}

export default CertificatesPage;
