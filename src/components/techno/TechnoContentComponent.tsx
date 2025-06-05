import p2 from "@/assets/images/TECHNOLOGY/p2.png";
import p3 from "@/assets/images/TECHNOLOGY/p3.png";
import p4 from "@/assets/images/TECHNOLOGY/p4.png";
import p5 from "@/assets/images/TECHNOLOGY/p5.png";
import p6 from "@/assets/images/TECHNOLOGY/p6.png";
import p7 from "@/assets/images/TECHNOLOGY/p7.png";
import p8 from "@/assets/images/TECHNOLOGY/p8.png";
import p9 from "@/assets/images/TECHNOLOGY/p9.png";
import p10 from "@/assets/images/TECHNOLOGY/p10.png";
import p11 from "@/assets/images/TECHNOLOGY/p11.png";
import t2 from "@/assets/images/TECHNOLOGY/t2.svg";
import t3 from "@/assets/images/TECHNOLOGY/t3.svg";
import t4 from "@/assets/images/TECHNOLOGY/t4.svg";
import t5 from "@/assets/images/TECHNOLOGY/t5.svg";
import t6 from "@/assets/images/TECHNOLOGY/t6.svg";
import t7 from "@/assets/images/TECHNOLOGY/t7.svg";
import SizeBox from '../app/SizeBox';

const TechnoComponent = () => {
  return (
    <section className="px-4 lg:px-8">
      <img src={t2} className="w-full md:w-[35%] p-10 m-10 mx-auto" />
      <div className="mx-auto text-center">
        <img src={t3} className="w-full md:w-[18%] p-10 m-10 mx-auto" />
        <p className="text-2xl font-semibold mb-10">スキンインプラント</p>
        <p className="text-xl font-semibold leading-loose">
          天然から抽出物と混合されたスピーカーズ(微細な針)が皮膚細胞を刺激し、<br />
          皮膚の再生とリフティングに役立つ。<br />
          長さが 150μm から 180μm のスピーカーズは多孔性の穴構造を持ち、<br />
          それが有効成分などの皮膚への伝達通路となり、<br />
          美白やシワの改善および、<br />
          トラブルの原因を迅速に改善できる D.D.M(DirectDelivery Medicare)システム。
        </p>
        <img src={p2} className="w-full md:w-[40%] p-10 m-10 mx-auto my-10" />
        <p className="text-xl leading-loose">
          清浄な海に生息する天然の微細な針を純粋に精製し、<br />
          それらを各タイプに合うようにいろんな形に加工した後、<br />
          各種の成分と混合して使用
        </p>
        <img src={p3} className="w-full md:w-[30%] p-10 m-10 mx-auto my-10" />
        <p className="text-xl m-10">加工前の 1 次スピーカーズの原料</p>
        <img src={p4} className="w-full md:w-2/3 p-10 m-10 mx-auto" />
      </div>

      <div className="mx-auto text-center">
        <img src={t4} className="w-full md:w-[14%] p-10 m-10 mx-auto" />
        <p className="text-2xl font-semibold mb-10">スピーカーズ</p>
        <p className="text-xl font-semibold leading-loose">
          スピーカーズは、清浄な海に生息する海洋の生物を純粋に精製し、<br />
          皮膚線維である芽細胞のコラーゲン生成を促進させる、<br />
          植物性コラーゲンであるゴールデンハイビスカスエキスとビフィダス発酵物を<br />
          コーティングさせた特許成分 ( 特許出願:第 10-2022-0007981 号 )
        </p>
        <img src={p5} className="w-full md:w-[40%] p-10 m-10 mx-auto my-10" />
        <p className="text-xl leading-loose font-semibold">
          スピーカーズ製品の 28 年ノウハウを込めた最高の製品生産<br />
          童顔づくりには最適なリフティング成分原料
        </p>
        <div className="w-full md:w-1/2 flex justify-center items-center mx-auto">
          <img src={p6} className="my-10 w-1/2 h-96 object-contain p-2" />
          <img src={p7} className="my-10 w-1/2 h-96 object-contain p-2" />
        </div>
      </div>

      <div className="h-[600px] bg-orange-200 mb-32 w-full md:w-[80%] rounded-lg mx-auto">
        <h1 className="text-center text-4xl pt-32 font-semibold">スピーカーズの特徴</h1>
        <div className="m-10 flex flex-wrap justify-around gap-4">
          {[t5, t6, t7].map((src, idx) => (
            <span key={idx} className="relative w-full md:w-96 h-80">
              <img src={src} className="w-full h-full object-cover" />
              <span className="text-lg text-center w-full leading-loose font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                注射器状の均一な <br />
                スピーカーズ粒子が<br />
                皮膚へ有効物質の伝達を極大化
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-3/4 flex flex-wrap justify-center items-center mx-auto">
        {[{ img: p8 }, { img: p9 }].map(({ img }, idx) => (
          <div key={idx} className="w-full md:w-1/2 p-4 text-center">
            <span className="block text-2xl my-4">8 週間後の肌密度改善程度</span>
            <span className="text-xl">Day 0 が 0% の場合、8 週間後の変化記録</span>
            <img src={img} className="my-10 w-full h-96 object-contain p-2" />
          </div>
        ))}
      </div>

      <span className="flex justify-center text-md my-4 text-center">
        ※TDLBIOLAB でスピーカーズ製品及び一般スピキュールを比較実験するために成人男女 20 人を対象に 8 週間のテストを実施
      </span>

      <div className="mt-32">
        <span className="flex justify-center text-3xl my-4">スピーカーズの皮膚再生原理</span>
        <span className="flex justify-center text-center text-xl m-12">
          スピ―カーズ作用で肌のターンオーバー周期を 28 日 → 3 日~ 5 日に早めて<br />
          素早く肌を改善するシステム
        </span>
        <img src={p10} className="w-full md:w-[70%] p-10 m-10 mx-auto my-10" />
        <img src={p11} className="w-full md:w-[90%] p-10 m-10 mx-auto my-10" />
      </div>

      <SizeBox h={200} />
    </section>
  );
};

export default TechnoComponent;
