import './ProductDetails.scss';
import ThemeBtn from '../../components/ThemeButton/ThemeBtn';
import img from '../../assets/img/products/1.png';
import TabsItem from '../../components/TabsItem/TabsItem';

const ProductDetails = () => {

    const tabContents = [
        {
            'title': 'Product Information',
            'content': "Indulge in the sheer brilliance of the MacBook Air, your ideal productivity partner! Unleash your creativity and conquer your to-do list with this stunning piece of technology. Impossibly thin and weighing just a featherlight, the MacBook Air is built for those who value both style and performance. The Retina display brings your content to life with incredible detail and vibrant colors. With its cutting-edge features like Touch ID and a powerful processor, you can work, play, and connect effortlessly. Elevate your computing experience with the MacBook Air – it's a game-changer!"
        },
        {
            'title': 'Reviews',
            'content': "Prodcut review will be here"
        }
    ]

    return (
        <section className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={img} alt="product" />
                    </div>
                    <div className="col-lg-6">
                        <div className="product-details-text">
                            <p>category</p>
                            <h2>This is Product Title</h2>
                            <p>50 Reviews</p>

                            <p>Indulge in the sheer brilliance of the MacBook Air, your ideal productivity partner! Unleash your creativity and conquer your to-do list with this stunning piece of technology.</p>
                            <h4><del>$150</del> $250</h4>
                            <ThemeBtn name="Buy Now" link="/"/>
                        </div>
                        <div className='why-choose-list'>
                            <ul>
                                <li>Free Shipping</li>
                                <li>24 hr Delivery</li>
                                <li>Secure Payment</li>
                                <li>Easy Return</li>
                            </ul>
                        </div>  
                    </div>
                </div>

                <div className="row">
                    <TabsItem tabContents={tabContents}/>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;