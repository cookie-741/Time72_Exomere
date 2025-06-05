import skincareImg from "@/assets/images/PARTNERSHIP/p1.png";
import title from "@/assets/images/PARTNERSHIP/t1.png";

const ImageHeaderComponent = () => {
  return (
    <div className=" relative flex items-center justify-center bg-white p-4 h-200 min-h-[300px] sm:h-[400px] mb-20">
      {/* <div className="absolute w-full h-200px">
        <img src={skincareImg} className="w-full h-full " />
      </div> */}
      <div className="absolute w-full h-[550px]">
        <img
          src={skincareImg}
          className="w-full h-full object-cover"
          alt="Skincare"
        />
      </div>

      <div>
        <div className="absolute text-2xl md:text-6xl  text-white italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<img src={title} alt="" />        </div>
        <div className="absolute text-2xl md:text-2xl text-white  mt-10 left-1/2 -translate-x-1/2">
          <p>代理店応募フォーム</p>
        </div>
      </div>
    </div>
  );
};

export default ImageHeaderComponent;
