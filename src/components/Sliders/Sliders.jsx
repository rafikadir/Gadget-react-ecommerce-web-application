import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.scss";
import ThemeBtn from "../ThemeButton/ThemeBtn";
import slidersData from '../../data/slider.json';

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
                    {
                       slidersData.map((item, index)=>
                        <div className="single-slider" key={index}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="slider-text">
                                            <span>{item.subtitle}</span>
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            
                                            <ThemeBtn name="Shop Now" link={item.link}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <img className="slider-img" src={item.image} alt="product"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) 
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Sliders;