import Layout from "@/layouts/Layout";
import StickySpacer from "@/components/app/stickySpacer";
import Cart from "@/components/home/Cart";
import TechnologyCover from "@/components/techno/CoverComponent";
import TechnoComponent from "@/components/techno/TechnoContentComponent";

const Technology = () => {
    return (
        <section>
            <Layout h="150px">
                <StickySpacer />
                <Cart />
                <TechnologyCover />
                <TechnoComponent />
            </Layout>
        </section>
    )
}

export default Technology;