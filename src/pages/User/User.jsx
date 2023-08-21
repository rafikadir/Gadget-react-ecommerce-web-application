import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './User.scss';
import Dashbaord from '../../components/Dashboard/Dashbaord';
import Profile from '../../components/Profile/Profile';
import Order from '../../components/Order/Order';
import { RxDashboard } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { CartContext } from '../../App';
import { useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';

const User = () => {
    const auth = getAuth();
    const {isLoggedIn, SetIsLoggedIn} = useContext(CartContext);
    const navigate = useNavigate();
    
    const {url} = useParams();
    const sidebarNav = [
        { "name" : "Dashboard", "link" : "dashboard", "icon" : <RxDashboard/>, "section": <Dashbaord/>},
        { "name" : "Profile", "link" : "profile", "icon" : <BiUser/>, "section": <Profile/>},
        { "name" : "Orders", "link" : "order", "icon" : <BsCart2/>, "section": <Order/>}
    ];

    const selectedElem = sidebarNav.find(nav => nav.link === url);

    const handleSignout = () => {
        if (isLoggedIn) {
            signOut(auth).then(() => {
                SetIsLoggedIn(false);
                navigate("/");
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    return (
        <>  
            <Navbar/>
            <section className='user-profile'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-sidebar">
                                <ul>
                                    {
                                        sidebarNav.map((singleNav, index) => 
                                            <li key={index}>
                                                <Link 
                                                    to={`/user/${singleNav.link}`} 
                                                    className={`user-link ${url === singleNav.link ? 'active' : ''}`}
                                                >
                                                    {singleNav.icon}
                                                    {singleNav.name}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                                {
                                    isLoggedIn ? 
                                    <button onClick={handleSignout}>Sign Out</button>
                                    : 
                                    ""
                                }
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="user-content">
                                {
                                    selectedElem ? selectedElem.section : <Dashbaord/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default User;