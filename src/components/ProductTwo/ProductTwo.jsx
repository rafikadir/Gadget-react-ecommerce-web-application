import './ProductTwo.scss';
import pd from '../../assets/img/products/7.png';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";


const ProductTwo = (product) => {

    const {title, img, price, prevPrice} = product.product;

    return (
        <div className="product-two-box">
            <div className="product-img">
                <img src={img} alt="" />

                <div className="product-extra">
                    <button className="product-cart">
                        <AiOutlineShoppingCart/>
                    </button>
                    <button className="product-fav">
                        <AiOutlineHeart/>
                    </button>
                </div>
            </div>
            <div className="product-text">
                <h3><Link className='product-title' to="/">{title}</Link></h3>
                <span className='product-price'>${price} <del>${prevPrice}</del></span>
            </div>
        </div>
    );
};

export default ProductTwo;