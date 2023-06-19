import Navbar from '../shared/Navbar/Navbar';
import Promobar from '../components/PromoBar/Promo';
import Footer from '../shared/Footer/Footer';
import ShopTemplate from '../templates/Shop/ShopTemplate';

const Shop = () => {
    return (
        <>
            <Promobar/>
            <Navbar/>
            <ShopTemplate/>
            <Footer/>
        </>
    );
};

export default Shop;