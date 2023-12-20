import {useState, useEffect} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Product from '../../components/Product/Product';
import productsData from '../../data/products.json';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import './Shop.scss';

const Shop = () => {
    const [filteredItems, setFilteredItems] = useState(productsData);
    const [price, setPrice] = useState(1800);
    const [categories, setCategories] = useState([]);

    // Getting Filtered Price and Category
    const receiveData = (sliderValue, categories) => {
        setPrice(sliderValue);
        setCategories(categories);
    };

    useEffect(() => {
        // Filter by Price
        const filteredByPrice = productsData.filter(item => item.price <= price);
    
        // Filter by Categories
        const filteredByCategory = categories?.length > 0
            ? filteredByPrice.filter(item => categories.includes(item.category))
            : filteredByPrice;
    
        // Update the state with the filtered items
        setFilteredItems(filteredByCategory);
    }, [price, categories]);
    

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