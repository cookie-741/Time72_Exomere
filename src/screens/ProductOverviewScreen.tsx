import Layout from "@/layouts/Layout";
import StickySpacer from "@/components/app/stickySpacer";
import ProductTitleComponent from "@/components/products/ProductTitleComponent";
import PointOneAndTwoComponent from "@/components/products/PointOneAndTwoComponent";
import PointThreeComponent from "@/components/products/PointThreeComponent";
import PointFourComponent from "@/components/products/PointFourComponent";
import RecommendComponent from "@/components/products/RecommendComponent";
import HowToUseComponent from "@/components/products/HowToUseComponent";
import SizeBox from "@/components/app/SizeBox";
import point1 from "@/assets/images/DETAIL/t2.svg";
import point2 from "@/assets/images/DETAIL/t3.svg";
import Cart from "@/components/home/Cart";
import p1 from "@/assets/images/product/p1.png";
import p2 from "@/assets/images/product/p2.png";
import p1_2 from "@/assets/images/product/p1_2.png";
import p2_2 from "@/assets/images/product/p2_2.png";


function ProductOverview() {
    return (
        <Layout h="200px">
            <StickySpacer />
            <Cart />
            <SizeBox h={150} />
            <ProductTitleComponent />
            <PointOneAndTwoComponent
                title={point1}
                subtitle="エクソミアの成分含有"
                des={"特許物質である<u>エクソミア</u> 成分が100,000ppm 含れているクリームで <br /> 美白成分を深く浸透させ、<br /> 明るい肌に改善させる機能性美白クリームです。"}
                pointImg={p1}
                pointExplainTitle={"エクソミアとは"}
                pointExplainDes={"有機農ハンラボンで50~200mn <br /> 程度のエキソソーム抽出物で <br />老化して損傷した皮膚のための <br /> 再生ケアソリューションです。"}
                pointExplainImg={p1_2} />
                <SizeBox h={20} />
            <PointOneAndTwoComponent
                title={point2}
                subtitle="スピーカースの成分含有"
                des={"特許物質であるエクソミア成分が100,000ppm 含れているクリームで <br /> 美白成分を深く浸透させ、<br /> 明るい肌に改善させる機能性美白クリームです。"}
                pointImg={p2}
                pointExplainTitle={"スピーカースとは"}
                pointExplainDes={"有機農ハンラボンで50~200mn <br /> 程度のエキソソーム抽出物で <br />老化して損傷した皮膚のための <br /> 再生ケアソリューションです。"}
                pointExplainImg={p2_2} />
            <PointThreeComponent />
            <PointFourComponent />
            <RecommendComponent />
            <HowToUseComponent />
        </Layout>
    );
}

export default ProductOverview;
;
