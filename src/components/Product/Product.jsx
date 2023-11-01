import { useContext} from 'react';
import './Product.scss';
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import {FiShoppingBag} from "react-icons/fi"; 
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import Button from '../Button/Button';

const Product = (products) => {
    const {id,img, title, price, prevPrice, offPrice, rating} = products.products;

    const {updateCart} = useContext(CartContext);

    return (
        <div className="product-box">
            <div className="product-img">
                <img src={img} alt="product" />

                <button className='product-fav'>
                    <AiOutlineHeart/>
                </button>
            </div>
            <div className="product-info">
                <h3><Link className='product-title' to={'/'+ id}>{title.slice(0,15)}...</Link></h3>

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
                <Button 
                    name="Add to Cart" 
                    onClick={()=> updateCart(id)}
                    icon={<FiShoppingBag/>}
                    fullWidth={true}
                />   
            </div>
        </div>
    );
};

export default Product;