import './Featured.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Product from '../Product/Product';
import featuredProducts from '../../data/featured.json';
import Slider from "react-slick";


const Featured = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <section className="featured-product">
            <div className="container">
                <SectionTitle title="Featured Products" />

                <div className="row">
                    <Slider {...settings}>
                        {
                            featuredProducts.map(product => (
                                <div className='col-lg-3' key={product.title}>
                                    <Product products={product} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Featured;