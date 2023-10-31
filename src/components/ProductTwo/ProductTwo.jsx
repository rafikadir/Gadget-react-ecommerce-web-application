import './ProductTwo.scss';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CartContext } from '../../App';
import { useContext } from 'react';


const ProductTwo = (product) => {

    const {id,title, img, price, prevPrice} = product.product;
    const {updateCart} = useContext(CartContext);

    return (
        <div className="product-two-box">
            <div className="product-img">
                <img src={img} alt="" />

                <div className="product-extra">
                    <button onClick={()=> updateCart(id)} className="product-cart">
                        <AiOutlineShoppingCart/>
                    </button>
                    <button className="product-fav">
                        <AiOutlineHeart/>
                    </button>
                </div>
            </div>
            <div className="product-text">
                <h3><Link className='product-title' to={"/" + id}>{title.slice(0, 20,)}...</Link></h3>
                <span className='product-price'>${price} <del>${prevPrice}</del></span>
            </div>
        </div>
    );
};

export default ProductTwo;