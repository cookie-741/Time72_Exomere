import poster from "@/assets/images/AWARDS/p1.jpg";
import card from "@/assets/images/AWARDS/p2.png";
import title from "@/assets/images/AWARDS/t1.svg";

const AwardPoster = () => {
  return (
    <section>
      <div className="bg relative">
        <img
          src={poster}
          className="mx-auto object-cover"
        />
        <div className=" w-full h-64 bg-black"></div>
        <div className="title">
          <img src={title} className="absolute bottom-[75%] left-1/2 transform -translate-x-1/2 w-[32rem]" />
          <h1 className="text-4xl absolute bottom-[68%] left-[46%] text-white">受賞歴</h1>
        </div>
        <div className="card absolute bottom-20 right-44">
          <img src={card} alt="Awards_card" className=" w-80 h-auto" />
        </div>
        <div className="">
          <span className="text-white absolute bottom-[25%] lg:bottom-[24%] left-[10%] text-4xl tracking-widest font-semibold">2024年EXOMER が受賞しました。</span>
          <span className=" text-gray-400 absolute bottom-20 left-[10%] text-2xl tracking-wider leading-loose">アメリカのラスベガス博覧会で韓国の製品が世界で化粧品品目の中で <br />
            世界中4つの製品(アメリカ2つ、イタリア1、韓国 1) <br /> Awards に選ばれました。韓国製品の中でも唯一選定されました。
          </span>
        </div>
      </div>
    </section>
  );
};

export default AwardPoster;
