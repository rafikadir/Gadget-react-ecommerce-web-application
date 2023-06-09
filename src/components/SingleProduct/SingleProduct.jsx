import './SingleProduct.scss';
import img from '../../assets/img/products/13.png';
import ThemeButton from '../ThemeButton/ThemeBtn';

const SingleProduct = () => {
    return (
        <section className="single-product">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="product-img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-info">
                            <h2 className="product-title">Unique Features Of leatest & Trending Poducts</h2>
                            <ul className="product-features">
                                <li>All frames constructed with hardwood solids and laminates</li>
                                <li>Reinforced with double wood dowels, glue, screw and machine nails</li>
                                <li>Arms, backs and seats are structurally reinforced</li>
                            </ul>
                            <h3 className="product-price">$750 <del>$1200</del></h3>
                            <ThemeButton link="/" name="Add to Cart"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;