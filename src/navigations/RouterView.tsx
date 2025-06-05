import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "@/screens/HomeScreen";
import ProductLineup from "@/screens/ProductLineupScreen";
import ProductInfo from "@/screens/ProductInfo";
import ProductOverview from "@/screens/ProductOverviewScreen";
import PartnerShip from "@/screens/PartnerShipScreen";
import Mission from "@/screens/MissionScreen";
import Awards from "@/screens/AwardsScreen";
import Technology from "@/screens/TechnologyScreen";

const RouterView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} Component={() => <HomeScreen />} />
        <Route path={"/lineup"} Component={() => <ProductLineup />} />
        <Route path={"/info"} Component={() => <ProductInfo />} />
        <Route path={"/partnership"} Component={() => <PartnerShip />} />
        <Route path={"/mission"} Component={() => <Mission />} />
        <Route path={"/awards"} Component={() => <Awards />} />
        <Route path={"/product"} Component={() => <ProductOverview />} />
        <Route path={"/technology"} Component={() => <Technology />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterView;
