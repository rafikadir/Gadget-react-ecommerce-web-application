import "./Footer.scss";
import logo from '../../assets/img/logo.png';
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="compnay-info">
                        <img src={logo} alt="logo" />

                        <ul>
                            <li>17 Princess Road, London</li>
                            <li>furnish@gmail.com</li>
                            <li>+0 998 5585 </li>
                        </ul>

                        <ul>
                            <li><Link to="/"><AiFillFacebook/></Link></li>
                            <li><Link to="/"><AiFillInstagram/></Link></li>
                            <li><Link to="/"><AiFillTwitterSquare/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;