import { useContext } from 'react';
import './Dashboard.scss';
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
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashbaord;