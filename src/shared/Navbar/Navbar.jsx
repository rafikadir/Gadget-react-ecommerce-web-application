import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { CartContext } from '../../App';
import { FaUserAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../assets/img/logo.png';
import './Navbar.scss';

const Navbar = () => {
    const {cartProducts, userInfo, isLoggedIn} = useContext(CartContext);

    return (
        <div className='header-wrapper'>
            <div className="header-top container">
                <Link className="header-logo" to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <div className='header-search'>
                    <input type="text" placeholder="Search"/>
                    <button className='search-btn'>
                        <BiSearchAlt/>
                    </button>
                </div>

                <div className="header-right">
                    <Link to="/cart" className="header-cart">
                        <AiOutlineShoppingCart />
                        <span className='cart-item'>{cartProducts.length}</span>
                    </Link>
                    
                    <Link to="/user" className="header-account">
                        <FaUserAlt/>
                        {
                            isLoggedIn ? userInfo.displayName : "Account"
                        }
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;