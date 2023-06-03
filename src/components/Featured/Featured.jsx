import './Featured.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Product from '../Product/Product';
import featuredProducts from '../../data/featured.json';

const Featured = () => {
    return (
        <section className="featured-product">
            <div className="container">
                <SectionTitle title="Featured Products" />

                <div className="row">
                    {
                        featuredProducts.map(product => (
                            <div className='col-lg-3' key={product.title}>
                                <Product products={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Featured;