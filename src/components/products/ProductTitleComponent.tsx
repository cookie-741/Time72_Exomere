import title_cover from "@/assets/images/product/soothing_gel.png";
import title from "@/assets/images/DETAIL/t1.svg";

const ProductTitleComponent = () => {
    return (
        <section>
            <div className="text-center grid gap-6 pb-6">
                <img src={title} className=" w-[53%] mx-auto" />
                <p className=" text-xl mb-16">リフティングショットスージングジェル</p>
            </div>
            <div>
                <img src={title_cover} alt="" className="mx-auto w-3/4 h-auto" />
            </div>
        </section>
    )
}

export default ProductTitleComponent;