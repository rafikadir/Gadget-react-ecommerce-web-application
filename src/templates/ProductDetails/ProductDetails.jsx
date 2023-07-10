import './ProductDetails.scss';
import ThemeBtn from '../../components/ThemeButton/ThemeBtn';
import TabsItem from '../../components/TabsItem/TabsItem';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import { CiDeliveryTruck, CiTimer, CiWallet, CiUser} from "react-icons/ci";
import { useState } from 'react';


const ProductDetails = () => {
    const {id} = useParams()
    const product = productsData.find(item => item.id === parseInt(id));
    const [quantityValue, setQuantityValue] = useState(1);

    const handleIncrease = () => {
        setQuantityValue(quantityValue + 1);
    }
    const handleDecrease = () => {
        if (quantityValue>1){
            setQuantityValue(quantityValue - 1);
        }
    }

    const tabContents = [
        {
            'title': 'Product Information',
            'content': "Indulge in the sheer brilliance of the MacBook Air, your ideal productivity partner! Unleash your creativity and conquer your to-do list with this stunning piece of technology. Impossibly thin and weighing just a featherlight, the MacBook Air is built for those who value both style and performance. The Retina display brings your content to life with incredible detail and vibrant colors. With its cutting-edge features like Touch ID and a powerful processor, you can work, play, and connect effortlessly. Elevate your computing experience with the MacBook Air – it's a game-changer!"
        },
        {
            'title': 'Reviews',
            'content': "Prodcut review will be here"
        }
    ]

    return (
        <section className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={product?.img} alt="product" />
                    </div>
                    <div className="col-lg-6">
                        <div className="product-details-text">
                            <p className="product-category">{product.category}</p>
                            <h1 className="product-title">{product.title}</h1>
                            <h2 className="product-price"><del>${product.prevPrice}</del> ${product.price}</h2>
                            <div className="product-feature">
                                <h4>Key Features:</h4>
                                <ul>
                                    <li>Feature 1</li>
                                    <li>Feature 1</li>
                                    <li>Feature 1</li>
                                    <li>Feature 1</li>
                                    <li>Feature 1</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cart-option">
                            <div className="cart-quantity">
                                <button onClick={() => handleDecrease()}>-</button>
                                <input type="text" value={quantityValue}/>
                                <button onClick={() => handleIncrease()}>+</button>
                            </div>
                            <ThemeBtn name="Buy Now" link="/"/>
                        </div>
                        <div className='why-choose-list'>
                            <ul>
                                <li><CiDeliveryTruck/> Free Shipping</li>
                                <li><CiTimer/> 24 hr Delivery</li>
                                <li><CiWallet/> Secure Payment</li>
                                <li><CiUser/> Easy Return</li>
                            </ul>
                        </div> 
                    </div>
                </div>

                <div className="row">
                    <TabsItem tabContents={tabContents}/>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;