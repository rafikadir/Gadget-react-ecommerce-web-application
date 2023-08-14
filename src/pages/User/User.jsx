import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './User.scss';
import Dashbaord from '../../components/Dashboard/Dashbaord';
import Profile from '../../components/Profile/Profile';

const User = () => {

    const profileElments = [
        {
            "item" : <Dashbaord/>
        },
        {
            "item" : <Profile/>
        }
    ];

    return (
        <>  
            <Navbar/>
            <section className='user-profile'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-item">
                                <ul>
                                    <li><Link to="#dashboard">Dashboard</Link></li>
                                    <li><Link to="#profile">Personal Info</Link></li>
                                    <li><Link to="#order">Orders</Link></li>
                                    <li><Link to="#">Wishlist</Link></li>
                                    <li><a href="#">Address</a></li>
                                    <li><a href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <Dashbaord/>
                            <Profile/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default User;