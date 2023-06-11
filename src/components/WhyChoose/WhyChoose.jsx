import './WhyChoose.scss';
import delivery from '../../assets/icons/delivery.png';
import support from '../../assets/icons/support.png';
import quality from '../../assets/icons/quality.png';
import cashback from '../../assets/icons/cashback.png';

const WhyChoose = () => {

    const whyChooseInfo = [
        {
            "icon": delivery,
            "title": "Fast Delivery"
        },
        {
            "icon": support,
            "title": "24/7 Support"
        },
        {
            "icon": quality,
            "title": "Best Quality"
        },
        {
            "icon": cashback,
            "title": "Cash Back"
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