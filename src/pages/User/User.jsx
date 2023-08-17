import { Link, useParams } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './User.scss';
import Dashbaord from '../../components/Dashboard/Dashbaord';
import Profile from '../../components/Profile/Profile';
import Order from '../../components/Order/Order';

const User = () => {

    const {url} = useParams();
    const sidebarNav = [
        { "name" : "Dashboard", "link" : "dashboard", "section": <Dashbaord/>},
        { "name" : "Profile", "link" : "profile", "section": <Profile/>},
        { "name" : "Orders", "link" : "order", "section": <Order/>}
    ];

    const selectedElem = sidebarNav.find(nav => nav.link === url);
 

    return (
        <>  
            <Navbar/>
            <section className='user-profile'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-item">
                                <ul>
                                    {
                                        sidebarNav.map((singleNav, index) => 
                                            <li key={index}>
                                                <Link to={`/user/${singleNav.link}`} url={singleNav.link}>{singleNav.name}</Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1>show page {url}</h1>
                            {
                                selectedElem ? selectedElem.section : <Dashbaord/>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default User;