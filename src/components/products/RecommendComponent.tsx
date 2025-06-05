import i1 from "@/assets/images/product/i1.svg";
const RecommendComponent = () => {
  return (
    <section className="w-full h-[700px] bg-[#E2CBBB] mb-32 flex-col justify-center">
     <div className="w-[60%] mx-auto">
     <h1 className=" text-5xl font-semibold tracking-[0.5rem]">こんなお悩みの方におすすめです。</h1>
      <div className="font-bold my-12">
        <span className="flex items-center mb-14">
          <img src={i1} className="w-12 h-12 " />
          <span className="text-3xl tracking-widest pl-8 ">鎮静冷却が必要な方</span>
        </span>
        <span className="flex items-center mb-14">
          <img src={i1} className="w-12 h-12 " />
          <span className="text-3xl tracking-widest pl-8 ">にきびとドラブルケアが必要な方</span>
        </span>
        <span className="flex items-center mb-14">
          <img src={i1} className="w-12 h-12 " />
          <span className="text-3xl tracking-widest pl-8 ">皮膚に水分保湿が必要な方</span>
        </span>
        <span className="flex items-center mb-14 ">
          <img src={i1} className="w-12 h-12 " />
          <span className="text-3xl tracking-widest pl-8 ">吸収しにくい皮膚の方</span>
        </span>
      </div>
     </div>
    </section>
  )
}

export default RecommendComponent;