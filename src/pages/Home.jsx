import Featured from "../components/Featured/Featured";
import Latest from "../components/Latest/Latest";
import Navbar from "../shared/Navbar/Navbar";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import Sliders from "../components/Sliders/Sliders";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Footer from "../shared/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Sliders/>
            <Featured/>
            <Latest/>
            <SingleProduct/>
            <WhyChoose/>
            <Footer/>
        </>
    );
};

export default Home;