import skincareImg from "@/assets/images/INFORMATION/p1.png";
import title from "@/assets/images/INFORMATION/t1.svg";
import SizeBox from "../app/SizeBox";
const ImageHeaderComponent = () => {
  return (
    <div className=" relative flex items-center justify-center bg-white p-4 h-200 min-h-[300px] sm:h-[600px]">
      {/* <div className="absolute inset-0 w-full h-full object-cover">
        <img src={skincareImg} className="w-full h-full object-cover" />
      </div> */}
       <div className="absolute w-full h-[700px]">
        <img
          src={skincareImg}
          className="w-full h-full object-cover"
          alt="Skincare"
        />
      </div>
      <div>
        <div >
         <img src={title} className="absolute w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="absolute text-2xl md:text-lg  left-1/2 -translate-x-1/2">
          <SizeBox h={60} />
          <p className=" text-xl font-semibold">総合インフォメーション</p>
        </div>
      </div>
    </div>
   
    
  );
};

export default ImageHeaderComponent;
