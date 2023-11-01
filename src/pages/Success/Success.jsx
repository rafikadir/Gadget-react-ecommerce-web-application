import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './Success.scss'
import successIcon from "../../assets/icons/checked.png"
import LinkBtn from '../../components/LinkBtn/LinkBtn';

const Success = () => {
    return (
        <>
            <Navbar/>
            <section className='success-wrapper'>
                <div>
                    <img src={successIcon} className='success-img' alt="success" />
                    <h2>Success</h2>
                    <h3>Your Order Has Been Confirmed !!</h3>

                    <LinkBtn name="Go to Orders" link="/user/order"/>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Success;