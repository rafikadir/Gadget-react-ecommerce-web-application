import { Link } from 'react-router-dom';
import './Navbar.scss';
import {AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../assets/img/logo.png';
import { useContext } from 'react';
import { CartContext } from '../../App';
import { FaUserAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
    const {cartProducts, isLoggedIn, userInfo} = useContext(CartContext);
    const {displayName} = userInfo;

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
                            isLoggedIn ? displayName : "My Account"
                        } 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;