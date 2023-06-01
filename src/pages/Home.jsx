import Navbar from "../components/Navbar/Navbar";
import Promo from "../components/PromoBar/Promo";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Sliders from "../components/Sliders/Sliders";

const Home = () => {
    return (
        <>
            <Promo/>
            <Navbar/>
            <Sliders/>
            <SectionTitle title="Featured Products"/>
        </>
    );
};

export default Home;