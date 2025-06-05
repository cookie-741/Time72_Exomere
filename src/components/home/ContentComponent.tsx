import productImage from "@/assets/images/index/exomere_index_photos_3.png";
import worldImage from "@/assets/images/in the world.svg";
import worldMap from "@/assets/images/world-map.svg";
import image1 from "@/assets/images/index/exomere_index_photos_5.png";
import finalist from "@/assets/images/TOP/7.svg";

const Content = () => {
  return (
    <div className="">
      {/* Lineup Section */}
      <div className="flex items-center justify-center bg-white p-8">
        <div className="text-center p-16 bg-white">
          <label className="block text-[1.78rem] sm:text-4xl font-semibold mb-4 pb-6 tracking-widest">
            EXOMEREのラインアップ
          </label>
          <button className="px-10 sm:px-12 py-5 sm:py-3 bg-[rgb(0,0,255)] text-xl sm:text-base text-white">商品一覧</button>
        </div>
      </div>

      {/* Product Image Section */}
      <div className="mb-12 sm:mb-32 ">
        <img src={productImage} className="w-full h-[310px] sm:h-auto object-cover" />
      </div>

      {/* World Image and Text Section */}
      <div className="relative h-auto p-6 sm:p-10 block">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center min-h-[450px]">
          {/* Image Column */}
          <div className="px-4 sm:px-[90px] pt-8 sm:pt-14">
            <img src={worldImage} className="w-[44em] h-[500px] object-contain" />
          </div>

          {/* Text Column */}
          <div className="px-4 sm:px-[50px] pt-4 sm:pt-[240px] bg-white">
            <p className="text-4xl sm:text-[2.50rem] ml-10 font-semibold text-black tracking-wider w-full sm:w-[600px] min-h-[55px] pt-4 sm:pt-[25px]">
              <span>世界中で愛用されています。</span>
            </p>
          </div>
        </div>
      </div>

      {/* World Map Section */}
      <div className="relative block bg-white h-[500px] sm:h-[600px] my-0 sm:my-16">
        <div className="w-full h-[550px] object-cover px-5">
          <img src={worldMap} className="w-full h-full" />
        </div>

        {/* Overlay Text */}
        <div className="absolute -bottom-4 sm:bottom-2 left-14 sm:left-44 text-left bg-white bg-opacity-80 p-4 rounded-lg">
          <p className="text-md text-black">
            2015年、中国の輸入化粧品で
            <br className="hidden sm:inline" />
            10大ブランドに選定されました。
          </p>
        </div>
      </div>

      {/* Award Section */}
      <div className="relative h-auto mb-52">
        <img
          src={image1}
          className="block h-[50%] absolute right-10 sm:right-32 top-[83%] md:top-1/2 border-t-[0px] border-gray-400"
        />
        <div className="w-full h-[400px] md:h-[750px] object-cover pr-10 sm:pr-[100px] pl-[40px] sm:pl-[180px] pt-[100px] flex items-left justify-start bg-white">
          <img src={finalist} className=" h-full" />
        </div>

        {/* Text Column */}
        <div className="w-full min-h-[600px] sm:h-[800px] pl-14 sm:pl-[180px] object-cover flex items-left justify-start bg-white">
          <div className="relative">
            <div className="pr-2 sm:pr-[50px] pt-[100px] sm:pt-[250px]">
              <p className="text-3xl font-bold text-black min-h-[55px]">
                アメリカ ラスベガス博覧会で
                <div className="py-3 leading-loose">EXOMER が Award に
                  <br className="inline sm:hidden" />選ばれました。</div>
              </p>
              <div className="pt-4 sm:pt-10 bg-white">
                <button className="px-12 sm:px-8 py-5 sm:py-3 bg-black text-white">受賞歴</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
