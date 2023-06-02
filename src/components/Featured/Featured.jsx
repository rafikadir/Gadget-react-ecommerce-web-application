import './Featured.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Product from '../Product/Product';

const Featured = () => {
    return (
        <section className="featured-product">
            <div className="container">
                <SectionTitle title="Featured Products" />

                <Product/>
            </div>
        </section>
    );
};

export default Featured;