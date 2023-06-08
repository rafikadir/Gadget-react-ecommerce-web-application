import './WhyChoose.scss';
import delivery from '../../assets/icons/delivery.png';
import support from '../../assets/icons/support.png';
import quality from '../../assets/icons/quality.png';
import cashback from '../../assets/icons/cashback.png';

const WhyChoose = () => {

    const whyChooseInfo = [
        {
            "icon": delivery,
            "title": "Fast Delivery",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "icon": support,
            "title": "24/7 Support",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "icon": quality,
            "title": "Best Quality",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "icon": cashback,
            "title": "Cash Back",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]

    return (
        <section className="why-choose">
            <div className="container">
                <div className="row">
                    {
                        whyChooseInfo.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <div className="why-choose-box">
                                        <div className="why-choose-icon">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className="why-choose-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;