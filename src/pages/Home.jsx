import Featured from "../components/Featured/Featured";
import Latest from "../components/Latest/Latest";
import Navbar from "../components/Navbar/Navbar";
import Promo from "../components/PromoBar/Promo";
import Sliders from "../components/Sliders/Sliders";

const Home = () => {
    return (
        <>
            <Promo/>
            <Navbar/>
            <Sliders/>
            <Featured/>
            <Latest/>
        </>
    );
};

export default Home;