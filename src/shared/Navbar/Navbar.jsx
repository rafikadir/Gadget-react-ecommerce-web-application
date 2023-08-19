import { Link } from 'react-router-dom';
import './Navbar.scss';
import {AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../assets/img/logo.png';
import { useContext } from 'react';
import { CartContext } from '../../App';

const Navbar = () => {

    const {cartProducts, isLoggedIn} = useContext(CartContext);

    const navbarItems = [
        {"name" : "Home", "link": "/"},
        {"name" : "Shop", "link": "/shop"},
        {"name" : "Contact", "link": "/contact"},
        {"name" : "Account", "link": "/"}
    ];

    return (
        <div className='header-wrapper'>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            {
                                navbarItems.map((item, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={item.link}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="header-right">
                        <Link to="/cart" className="menu-cart">
                            <AiOutlineShoppingCart />
                            <span className='cart-item'>{cartProducts.length}</span>
                        </Link>

                        {
                            isLoggedIn ? 
                            <Link to="user" className="header-account">
                                Account
                            </Link>
                            :
                            <Link to="signin" className="header-signin">
                                Sign In
                            </Link>
                        }
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;