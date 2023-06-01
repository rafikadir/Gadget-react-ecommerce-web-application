import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.scss";
import img from '../../assets/img/slider/2.png';
import ThemeBtn from "../ThemeButton/ThemeBtn";

const Sliders = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };

    return (
        <section className="slider-wrapper">
            <div className="container-fluid p-0">
                <Slider {...settings}>
                    <div className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="slider-text">
                                        <span>Best Furniture For Your Castle....</span>
                                        <h2>New Furniture Collection Trends in 2020</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                        in phasellus non in justo.</p>
                                        
                                        <ThemeBtn name="Shop Now" link="/"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="slider-img" src={img} alt="chair"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="slider-text">
                                        <span>Best Furniture For Your Castle....</span>
                                        <h2>New Furniture Collection Trends in 2020</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                        in phasellus non in justo.</p>
                                        
                                        <ThemeBtn name="Shop Now" link="/"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="slider-img" src={img} alt="chair"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="slider-text">
                                        <span>Best Furniture For Your Castle....</span>
                                        <h2>New Furniture Collection Trends in 2020</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                        in phasellus non in justo.</p>
                                        
                                        <ThemeBtn name="Shop Now" link="/"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="slider-img" src={img} alt="chair"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Sliders;