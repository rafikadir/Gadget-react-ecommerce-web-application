import "./Footer.scss";
import logo from '../../assets/img/logo2.png';
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";


const Footer = () => {

    const FooterInfo = [
        {
            "title" : "Catagories",
            "links" : [{ "name":"Cantilever","link": "/"},
                    { "name":"Suspended","link": "/"},
                    { "name":"Floating","link": "/"},
                    { "name":"Balance","link": "/"}]
        },
        {
            "title" : "Customer Care",
            "links" : [{ "name":"My Account","link": "/"},
                    { "name":"Returns","link": "/"},
                    { "name":"Orders History","link": "/"},
                    { "name":"Order Tracking","link": "/"}]
        },
        {
            "title" : "Company",
            "links" : [{ "name":"About","link": "/"},
                    { "name":"Shop","link": "/shop"},
                    { "name":"Blog","link": "/"},
                    { "name":"Chair","link": "/"}]
        }
    ];

    return ( 
        <div className="footer"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="company-info">
                            <img src={logo} alt="logo" />

                            <ul className="company-contact">
                                <li>17 Princess Road, London</li>
                                <li>furnish.support@gmail.com</li>
                                <li>+022 998 5585 </li>
                            </ul>

                            <div className="company-social">
                                <Link to="/"><AiFillFacebook/></Link>
                                <Link to="/"><AiFillInstagram/></Link>
                                <Link to="/"><AiFillTwitterSquare/></Link>
                            </div> 
                        </div>
                    </div>

                    {
                        FooterInfo.map((item,index)=> 
                            <div className="col-lg-3" key={index}>
                                <div className="footer-links">
                                    <h3>{item.title}</h3>

                                    <ul>
                                        {
                                            item.links.map((item, index)=> 
                                                <li key={index}>
                                                    <Link to={item.link}>{item.name}</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>  
        </div>  
    );
};

export default Footer;