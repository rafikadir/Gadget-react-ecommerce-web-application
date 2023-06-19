import Sidebar from '../../components/Sidebar/Sidebar';
import './ShopTemplate.scss';
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import Product from '../../components/Product/Product';
import productsData from '../../data/products.json';

const ShopTemp = () => {
    return (
        <section className='shop-wrapper'>
            <h2 className="page-title text-center">Shop</h2>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-9">
                        <div className="shop-top">
                            <div className="top-left">
                                <h3>Furniture Items</h3>
                                <p>50 found</p>
                            </div>
                            <div className="top-right">
                                <div className="short-item">
                                    <p>Short by:</p>
                                    
                                    <div>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Relevance</option>
                                            <option value="1">Date</option>
                                            <option value="2">Price Low to High</option>
                                            <option value="3">Price High to Low</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="view-item">
                                    <p>View:</p>
                                    
                                    <div>
                                        <button><BsFillGrid3X3GapFill/></button>
                                        <button><BsListUl/></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {
                                productsData.map((item, index) => 
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
    );
};

export default ShopTemp;