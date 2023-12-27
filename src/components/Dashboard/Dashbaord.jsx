import { useContext } from 'react';
import './Dashboard.scss';
import {FiShoppingCart,FiHeart,FiInbox,FiPackage} from "react-icons/fi";
import { CartContext } from '../../App';

const Dashbaord = () => {
    const {userInfo} = useContext(CartContext);

    return (
        <section className="dashboard-section">
            <div className="container">
                <div className="dashboard-top">
                    <div className="dashboard-text">
                        <h2>Hello, {userInfo.name || userInfo.displayName} 👋</h2>
                        <p>Welcome to your dashboard 📊</p>
                    </div>
                    <div className="dashboard-img">
                        {
                            userInfo?.photoURL ? 
                            <img src={userInfo?.photoURL} alt="user" />
                            : 
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="user"/>
                        }
                        
                    </div>
                </div>

                <div className="dashboard-data">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-data">
                                <div className="icon">
                                    <FiShoppingCart/>
                                </div>
                                <div>
                                    <p>Total Order</p>
                                    <h3>50</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-data">
                                <div className="icon">
                                    <FiInbox/>
                                </div>
                                <div>
                                    <p>Running Order</p>
                                    <h3>5</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-data">
                                <div className="icon">
                                    <FiHeart/>
                                </div>
                                <div>
                                    <p>Wishlist</p>
                                    <h3>5</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-data">
                                <div className="icon">
                                    <FiPackage/>
                                </div>
                                <div>
                                    <p>Complete Order</p>
                                    <h3>50</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dashboard-account">
                                <h3>Your Information:</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><strong>Name:</strong></td>
                                            <td>Md Rafi Kadir</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phone:</strong></td>
                                            <td>+8801788615327</td>
                                        </tr>
                                        <tr>
                                            <td><strong>E-mail:</strong></td>
                                            <td>rafikadir2000@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Address:</strong></td>
                                            <td>City: West Columbia, State: South Carolina, Zip Code: 29169, Country: United States</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashbaord;