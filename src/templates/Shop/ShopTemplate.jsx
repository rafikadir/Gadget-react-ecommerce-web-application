import Sidebar from '../../components/Sidebar/Sidebar';
import './ShopTemplate.scss';
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import Product from '../../components/Product/Product';
import productsData from '../../data/products.json';
import {useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';

const ShopTemplate = () => {

    const [defaultView, setDefaultView] = useState(true);
    const [index, setIndex] = useState(6);
    let initialItems = productsData.slice(0,index);
    const [isCompleted,setIsCompleted] = useState(false);
    const [priceValue, SetPriceValue] = useState();

    // Load More function
    const loadmore = () => {
        const indexUpdate = index + 3;
        setIndex(indexUpdate);

        if(index >= productsData.length) {
            setIsCompleted(true)
        }
        else {
            setIsCompleted(false)
        }
    }

    // List View
    const listView = () => {
        setDefaultView(false)
    }
    // Grid View
    const gridView = () => {
        setDefaultView(true)
    }
    // Getting Filtered Price
    const receiveData = (sliderValue) => {
        SetPriceValue(sliderValue);
    };

    const filterdInitial = initialItems.filter((item) => {
        const itemPrice = item.price;
        if(priceValue >= itemPrice) {
            return productsData.slice(0,index);
        }
    });


    return (
        <section className='shop-wrapper'>
            <h2 className="page-title text-center">Shop</h2>

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
                                <div className="short-item">
                                    <p>Short by:</p>
                                    
                                    <div>
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="0">Relevance</option>
                                            <option value="1">Date</option>
                                            <option value="2">Price Low to High</option>
                                            <option value="3">Price High to Low</option>
                                        </select>
                                    </div>
                                </div>

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
                                    filterdInitial.map((item, index) => 
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


                            <div className="col-lg-12 text-center">
                                { isCompleted ?
                                    <button onClick={loadmore} className='load-more disabled' disabled>Finished</button>
                                    :
                                    <button  onClick={loadmore} className='load-more'>Load More</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopTemplate;