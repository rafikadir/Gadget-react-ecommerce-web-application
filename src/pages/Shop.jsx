import Navbar from '../shared/Navbar/Navbar';
import Promobar from '../components/PromoBar/Promo';
import Footer from '../shared/Footer/Footer';
import ShopTemp from '../templates/Shop/ShopTemp';

const Shop = () => {
    return (
        <>
            <Promobar/>
            <Navbar/>
            <ShopTemp/>
            <Footer/>
        </>
    );
};

export default Shop;