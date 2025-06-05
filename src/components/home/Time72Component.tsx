import Image72 from "@/assets/images/time72.svg";

const Time72 = () => {
  return (
    <div className="relative h-auto sm:h-[500px] my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto">
        {/* Image Column */}
        <div className="flex justify-center sm:pl-[45%] sm:pr-10 -mt-6">
          <img src={Image72} className="w-96 h-96" />
        </div>
        {/* Text Column */}
        <div className="px-16 pt-6 sm:pl-[50px] sm:pt-[80px] bg-white font-medium text-2xl">
          <span className="mb-5 block tracking-[2px]">
            72 時間低温熟成発酵過程を通じて開発された
          </span>
          <span className="mb-5 block tracking-[2px]">エクソソームBBクリームは</span>
          <span className="mb-5 block tracking-[2px]">
            自然な肌のトーソを演出し、肌の水分補給、
          </span>
          <span className="mb-5 block tracking-[2px]">皮脂の調整、しわ改善効果、</span>
          <span className="block tracking-[2px]">
            さらに、外部環境の刺激からお肌を保護します。
          </span>
          <button className="px-8 py-4 mt-12 bg-black text-white">
            テクノロジー
          </button>
        </div>
      </div>
    </div>
  );
};

export default Time72;
