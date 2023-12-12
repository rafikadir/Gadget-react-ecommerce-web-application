import Sidebar from '../../components/Sidebar/Sidebar';
import './ShopTemplate.scss';
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import Product from '../../components/Product/Product';
import productsData from '../../data/products.json';
import {useState } from 'react';
import { useEffect } from 'react';

const ShopTemplate = () => {

    const [defaultView, setDefaultView] = useState(true);
    const [index, setIndex] = useState(6);
    const [price, setPrice] = useState();
    const [categories, setCategories] = useState();
    const [updated, setUpdated] = useState([]);
    const [initialItems, setInitialItems]  = useState(productsData); 
    
    // List View
    const listView = () => {
        setDefaultView(false);
    }

    // Getting Filtered Price and Category
    const receiveData = (sliderValue, category) => {
        setPrice(sliderValue);
        setCategories(category);
    };
    
    return (
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
                            <div className="top-right">
                                <div className="view-item">
                                    <p>View:</p>
                                    
                                    <div>
                                        <button onClick={gridView}><BsFillGrid3X3GapFill/></button>
                                        <button onClick={listView}><BsListUl/></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {
                                defaultView ? 
                                <>
                                    {/* Display Grid View */}
                                    {
                                        initialItems.map((item, index) => 
                                            <div className="col-lg-4"  key={index}>
                                                <Product products={item}/>
                                            </div>
                                        )
                                    }
                                </>
                                : 
                                <>
                                    {/* Display List View */}
                                    {
                                        initialItems.map((item, index) => 
                                            <div className="col-lg-12"  key={index}>
                                                <ProductList products={item}/>
                                            </div>
                                        )
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopTemplate;