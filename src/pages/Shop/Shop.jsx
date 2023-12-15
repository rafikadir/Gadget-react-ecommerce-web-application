import Sidebar from '../../components/Sidebar/Sidebar';
import './Shop.scss';
import Product from '../../components/Product/Product';
import productsData from '../../data/products.json';
import {useState, useEffect } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const Shop = () => {
    const [index, setIndex] = useState(6);
    const [price, setPrice] = useState();
    const [categories, setCategories] = useState();
    const [updated, setUpdated] = useState([]);
    const [initialItems, setInitialItems]  = useState(productsData); 
    
    // Getting Filtered Price and Category
    const receiveData = (sliderValue, category) => {
        setPrice(sliderValue);
        setCategories(category);
    };


    return (
        <>
            <Navbar/>
            <section className='shop-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar sendData={receiveData}/>
                        </div>
                        
                        <div className="col-lg-9">
                            <div className="shop-top">
                                <div className="top-left">
                                    <h3>Furniture Items</h3>
                                    <p>{productsData.length} found</p>
                                </div>
                            </div>

                            <div className="row">
                                {
                                    initialItems.map((item, index) => 
                                        <div className="col-lg-4"  key={index}>
                                            <Product products={item}/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Shop;