import { useState, useEffect } from 'react';
import './Order.scss';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState();

    useEffect(() => {
        const loadOrders = JSON.parse(localStorage.getItem("order"));
        setOrders(loadOrders);

        const calculateTotalAmount = (orders) => {
            return orders?.reduce((total, order) =>{
                return total + order.product.reduce((productTotal, pd) => productTotal + pd.price, 0);
            },0)
        }

        setTotal(calculateTotalAmount(loadOrders));
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
                                {total}
                            </td>
                            <td>Processing</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;