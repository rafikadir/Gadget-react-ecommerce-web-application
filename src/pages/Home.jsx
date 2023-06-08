import Featured from "../components/Featured/Featured";
import Latest from "../components/Latest/Latest";
import Navbar from "../components/Navbar/Navbar";
import Promo from "../components/PromoBar/Promo";
import Sliders from "../components/Sliders/Sliders";
import WhyChoose from "../components/WhyChoose/WhyChoose";

const Home = () => {
    return (
        <>
            <Promo/>
            <Navbar/>
            <Sliders/>
            <Featured/>
            <Latest/>
            <WhyChoose/>
        </>
    );
};

export default Home;