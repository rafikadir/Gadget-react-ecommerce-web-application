import Sidebar from '../../components/Sidebar/Sidebar';
import './Shop.scss';
import Product from '../../components/Product/Product';
import productsData from '../../data/products.json';
import {useState, useEffect } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const Shop = () => {
    const [filteredItems, setFilteredItems] = useState(productsData);
    
    // Getting Filtered Price and Category
    const receiveData = (sliderValue, categories) => {
        console.log(categories);

        // Apply filters to products
        const filteredProducts = productsData.filter(item => {
            const priceCondition = sliderValue ? item.price <= sliderValue : true;
            const categoryCondition = categories ? categories.includes(item.category) : true;

            return priceCondition && categoryCondition;
        });

        setFilteredItems(filteredProducts.length > 0 ? filteredProducts : productsData);
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
                                    <h3>All Producs:</h3>
                                    <p>{filteredItems.length} found</p>
                                </div>
                            </div>

                            <div className="row">
                                {
                                    filteredItems.map((item, index) => 
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