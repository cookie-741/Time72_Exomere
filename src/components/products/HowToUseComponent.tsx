import p10 from "@/assets/images/product/p10.png";
import p11 from "@/assets/images/product/p11.png";
import SizeBox from "../app/SizeBox";
const HowToUseComponent = () => {
    return (
        <section className="w-[60%] mx-auto">
            <div className="text-center text-2xl font-semibold">製品使用方法</div>
            <span className="flex justify-center items-center p-12">
                <img src={p10} className="px-20" />
                <img src={p11} className="px-20" />
            </span>
            <span className="flex justify-around items-center pb-10 text-xl  font-medium text-center">
                <p className="">使用まえに適量を手のひらに <br />抽出し顔につけます。</p>
                <p className="">使用まえに適量を手のひらに <br />抽出し顔につけます。</p>
            </span>
            <SizeBox h={150}/>
            <div className="text-center">
            <button className="px-8 py-2 my-8 bg-black text-white">商品一覧</button>
            </div>
            <SizeBox h={100}/>
        </section>
    )
}

export default HowToUseComponent;