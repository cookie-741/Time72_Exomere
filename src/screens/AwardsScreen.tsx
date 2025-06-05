import Layout from "@/layouts/Layout";
import StickySpacer from "@/components/app/stickySpacer";
import Partnership from "@/components/home/PartnershipComponent";
import partnerBg from "@/assets/images/AWARDS/p15.png";
import AwardPoster from "@/components/award/AwardPosterComponent";
import CertificatesPage from "@/components/award/CertificatesComponent";
import Cart from "@/components/home/Cart";

function Awards() {
  return (
    <Layout h="150px">
      <StickySpacer/>
      <Cart/> 
      <AwardPoster/>
      <CertificatesPage/>
      <Partnership bgImage={partnerBg}/>
    </Layout>
  );
}

export default Awards;
