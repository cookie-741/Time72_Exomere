import VideoPlayer from "../components/home/VideoComponent";
import Time72 from "@/components/home/Time72Component";
import Carousel from "@/components/home/CarouselComponent";
import Content from "@/components/home/ContentComponent";
import Layout from "@/layouts/Layout";
import Partnership from "@/components/home/PartnershipComponent";
import Cart from "@/components/home/Cart";
import SizeBox from "@/components/app/SizeBox";
import partnerBg from "@/assets/images/index/exomere_index_photos_4.png";

function Home() {
  const getResponsiveHeight = () => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 640) {
      return '300px';
    } else if (screenWidth < 1024) {
      return '400px';
    } else {
      return '500px';
    }
  };
  const responsiveHeight = getResponsiveHeight();
  return (
    <Layout h={responsiveHeight}>
      <SizeBox h={parseInt(responsiveHeight) + 30} />  {/* Adjust SizeBox accordingly */}
      <Cart />
      <VideoPlayer />
      <Time72 />
      <Carousel />
      <Content />
      <Partnership bgImage={partnerBg} />
    </Layout>
  );
}

export default Home;

