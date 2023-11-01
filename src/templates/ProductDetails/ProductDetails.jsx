import './ProductDetails.scss';
import ThemeBtn from '../../components/LinkBtn/LinkBtn';
import TabsItem from '../../components/TabsItem/TabsItem';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import { CiDeliveryTruck, CiTimer, CiWallet, CiUser} from "react-icons/ci";
import { useState } from 'react';
import ProductInfo from '../../components/ProductInfo/ProductInfo';


const ProductDetails = () => {
    const {id} = useParams()
    const product = productsData?.find(item => item.id === parseInt(id));
    const [quantityValue, setQuantityValue] = useState(1);
    console.log(product)
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
            'content': <ProductInfo/>
        },
        {
            'title': 'Reviews',
            'content': "Prodcut review will be here"
        }
    ]

    return (
        <section className="product-details">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="product-img">
                            <img src={product?.img} alt='product'/>
                        </div>           
                    </div>
                    <div className="col-lg-6">
                        <div className="product-info-text">
                            <p className="product-category">{product.category}</p>
                            <h1 className="product-title">{product.title}</h1>
                            <h2 className="product-price"><del>${product.prevPrice}</del> ${product.price}</h2>
                            <div className="product-feature">
                                <h4>Key Features:</h4>
                                <ul>
                                    <li>Lighweight</li>
                                    <li>Waterproof</li>
                                    <li>Easy carry</li>
                                    <li>5 Varients</li>
                                    <li>AC Adapter</li>
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
                    <div className="product-details-text">
                        <TabsItem tabContents={tabContents}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;