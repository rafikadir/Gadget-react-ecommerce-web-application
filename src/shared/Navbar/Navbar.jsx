import { Link } from 'react-router-dom';
import { useContext, useState} from 'react';
import { CartContext } from '../../App';
import { FaUserAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../assets/img/logo.png';
import products from '../../data/products.json';
import './Navbar.scss';

const Navbar = () => {
    const {cartProducts, userInfo, isLoggedIn} = useContext(CartContext);
    const [productMatched, setProductMatched] = useState();

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length>0) {
            const productMatching = products.filter(item => item.title.toLowerCase().includes(searchTerm));
            setProductMatched(productMatching);
        }
        else {
            setProductMatched([]);
        }
    }

    console.log(productMatched?.length);

    return (
        <header className='header-wrapper'>
            <div className="header-top container">
                <Link className="header-logo" to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <div className='header-search'>
                    <input type="text" placeholder="Search" onChange={handleSearch}/>
                    <button className='search-btn'>
                        <BiSearchAlt/>
                    </button>

                    <div className={`search-products ${productMatched?.length === 0 ? 'hide' : ''}`}>
                        {
                            productMatched?.map(item => (
                                <Link className='product-list' key={item.id}>
                                    <img src={item.img} alt={item.item} />
                                    <Link>{item.title}</Link>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="header-right">
                    <Link to="/cart" className="header-cart">
                        <AiOutlineShoppingCart />
                        <span className='cart-item'>{cartProducts.length}</span>
                    </Link>
                    
                    <Link to="/user/dashboard" className="header-account">
                        <FaUserAlt/>
                        {
                            isLoggedIn ? userInfo.displayName : "Account"
                        }
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;