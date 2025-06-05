import point3 from "@/assets/images/DETAIL/t4.svg";
import p3_1 from "@/assets/images/product/p3_1.png";
import p3_2 from "@/assets/images/product/p3_2.png";
import p3_3 from "@/assets/images/product/p3_3.png";
import p3_4 from "@/assets/images/product/p3_4.png";

const PointThreeComponent = () => {
    return (
        <section>
            <div className="my-32 mt-64">
                <div className="text-center mb-12">
                <img src={point3} className="mb-12 w-24 mx-auto" />
                    <h2 className="font-semibold text-4xl tracking-widest mb-20">多様な成分でより強くなった <br /> 敏感皮膚の改善</h2>
                </div>
                <div className=" w-[60%] mx-auto grid grid-cols-2 gap-6">
                    <div>
                        <img src={p3_1} />
                        <p className="py-4 text-lg">豊富なビタミンCを含むコラゲン生成及び促進</p>
                    </div>
                    <div>
                        <img src={p3_2} />
                        <p className="py-4 text-lg">豊富なビタミンCを含むコラゲン生成及び促進</p>
                    </div>
                    <div>
                        <img src={p3_3} />
                        <p className="py-4 text-lg">豊富なビタミンCを含むコラゲン生成及び促進</p>
                    </div>
                    <div>
                        <img src={p3_4} />
                        <p className="py-4 text-lg">豊富なビタミンCを含むコラゲン生成及び促進</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PointThreeComponent;