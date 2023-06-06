import ProductTwo from '../ProductTwo/ProductTwo';
import NewArrivalProducts from '../../data/newarrival.json'

const NewArrival = () => {
    return (
        <div>
            <div className="row">
                {
                    NewArrivalProducts.map((product, index) => {
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

export default NewArrival;