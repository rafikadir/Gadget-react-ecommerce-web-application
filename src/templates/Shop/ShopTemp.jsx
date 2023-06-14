import Sidebar from '../../components/Sidebar/Sidebar';
import './ShopTemp.scss';

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
                            <div>
                                <div>
                                    <h3>Furniture Items</h3>
                                    <span>50 found</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Short by:</p>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div>
                                    <p>View:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopTemp;