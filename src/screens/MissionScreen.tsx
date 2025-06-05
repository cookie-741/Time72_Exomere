import Layout from "@/layouts/Layout";
import StickySpacer from "@/components/app/stickySpacer";
import AboutMission from "@/components/mission/OurMission";
import Diagram from "@/components/mission/Diagram";
import Partnership from "@/components/home/PartnershipComponent";
import Cart from "@/components/home/Cart";
import partnerBg from "@/assets/images/partnership.jpg";

function Mission() {
  return (
    <Layout h="150px">
      <StickySpacer/>
      <Cart/>
      <AboutMission/>
      <Diagram/>
      <Partnership bgImage={partnerBg}/>
    </Layout>
  );
}

export default Mission;
