import './Product.scss';
import pd from '../../assets/img/products/1.png'

const Product = () => {
    return (
        <div className="product-box">
            <div className="product-img">
                <img src={pd} alt="" />
            </div>
            <div></div>
        </div>
    );
};

export default Product;