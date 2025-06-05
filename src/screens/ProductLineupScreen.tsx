import Layout from "@/layouts/Layout";
import ImageListComponent from "@/components/lineup/ImageListComponent";
import Partnership from "@/components/home/PartnershipComponent";
import TextHeaderComponent from "@/components/lineup/TextHeaderComponent";
import ImageHeaderComponent from "@/components/lineup/ImageHeaderComponent";
import Cart from "@/components/home/Cart";
import SizeBox from "@/components/app/SizeBox";
import partnerBg from "@/assets/images/index/exomere_index_photos_4.png";

function ProductLineup() {
    return (
        <Layout h="130px">
            <SizeBox h={140} />
            <Cart/>
             <ImageHeaderComponent />
             <div className="px-20">
                <TextHeaderComponent />
             <ImageListComponent />
             </div>
             <Partnership bgImage={partnerBg} />
        </Layout>
    );
}

export default ProductLineup;
;
