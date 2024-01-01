import { useState, useEffect } from 'react';
import './Order.scss';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
       const loadOrders = JSON.parse(localStorage.getItem("order"));
       setOrders(loadOrders);
    }, []);

    return (
        <div>
            <h2>Order</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <td>{index + 1}</td>
                            <td>{order.title}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>Procesing</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;