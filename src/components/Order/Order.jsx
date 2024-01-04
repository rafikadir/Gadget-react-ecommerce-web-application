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
                        <th>Order No</th>
                        <th>Product</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((singleOrder, index) => (
                        <tr key={index}>
                            <td>{singleOrder.orderNumber}</td>
                            <td>
                                <ul>
                                    {
                                        singleOrder.product.map((pd, index)=>(
                                           <li key={index}>{pd.title} <span>x {pd.quantity}</span></li> 
                                        ))
                                    }
                                </ul>
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;