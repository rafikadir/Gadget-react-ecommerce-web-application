import './Product.scss';
import { AiFillStar, AiOutlineStar, AiFillHeart } from "react-icons/ai";
import {FiShoppingBag} from "react-icons/fi"; 
import { Link } from 'react-router-dom';

const Product = (products) => {
    const {img, title, price, prevPrice, offPrice, rating} = products.products;
    console.log(img);
    
    return (
        <div className="product-box">
            <div className="product-img">
                <img src={img} alt="product" />

                <button className='product-fav'>
                    <AiFillHeart/>
                </button>
            </div>
            <div className="product-info">
                <h3><Link className='product-title' to="/">{title}</Link></h3>

                <div className="price-text">
                    <span className='price'>${price}</span>
                    <del className="prev-price">${prevPrice}</del>
                    <span className='price-off'>{offPrice}% Off</span>
                </div>

                <div className='rating-box'>
                    <ul>
                        <li className='single-rating'><AiFillStar/></li>
                        <li className='single-rating'><AiFillStar/></li>
                        <li className='single-rating'><AiFillStar/></li>
                        <li className='single-rating'><AiFillStar/></li>
                        <li className='single-rating'><AiOutlineStar/></li>
                    </ul>
                    <span className='review-count'>{rating} Reviews</span>
                </div>

                <div className='bottom-btn'>
                    <button className='cart-btn'><FiShoppingBag/> Add to Cart</button>
                    <Link className='buy-btn' to="/">Buy Now</Link>
                </div>               
            </div>
        </div>
    );
};

export default Product;