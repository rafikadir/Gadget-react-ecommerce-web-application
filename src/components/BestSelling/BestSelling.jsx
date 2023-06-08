import ProductTwo from '../ProductTwo/ProductTwo';
import BestSellingProducts from '../../data/bestSelling.json'

const BestSelling = () => {
    return (
        <div>
            <div className="row">
                {
                    BestSellingProducts.map((product, index) => {
                        return (
                            <div className="col-lg-4"  key={index}>
                                <ProductTwo product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BestSelling;