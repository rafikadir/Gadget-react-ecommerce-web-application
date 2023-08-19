import { useState } from 'react';
import './Dashboard.scss';
import {FiShoppingCart} from "react-icons/fi";

const Dashbaord = () => {

    return (
        <section className="dashboard-section">
            <div className="container">
                <div className="dashboard-top">
                    <div className="dashboard-text">
                        <p>Hello, Name 👋</p>
                        <h2>Welcome to your dashboard 📊</h2>
                    </div>
                    <div className="dashboard-img">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="user"/>
                    </div>
                </div>

                <div className="dashboard-data">
                    <div className="single-data">
                        <FiShoppingCart/>
                        <p>Total Order</p>
                        <h3>50</h3>
                    </div>
                    <div className="single-data">
                        <FiShoppingCart/>
                        <p>Running Order</p>
                        <h3>5</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashbaord;