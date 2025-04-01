
import React, { useEffect, useState } from 'react';
import { Payment, deleteOrder, updateOrder } from '../connection/api';

function AdminOrder() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const response = await Payment(); // Fetch orders with items, address, and email
                setOrders(response); // Set orders with item details
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    // Handle order deletion
    const handleDelete = async (orderId) => {
        try {
            console.log('Attempting to delete order with ID:', orderId);
            await deleteOrder(orderId);
            setOrders(orders.filter(order => order._id !== orderId));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    // Handle item update (increase/decrease/cancel)
 // Handle item update (increase/decrease/cancel)
const handleItemUpdate = async (orderId, itemName, action) => {
    try {
        console.log('Attempting to update order with ID:', orderId, 'Item:', itemName, 'Action:', action);
        const updatedData = { itemName, action }; // Only include itemName and action
        const updatedOrder = await updateOrder(orderId, updatedData);
        setOrders(orders.map(order => (order._id === orderId ? updatedOrder : order)));
    } catch (error) {
        console.error('Error updating order:', error);
    }
};


    return (
        <div className='mt-20 mx-auto max-w-7xl p-5'>
            <h1 className='text-5xl fontt greenn font-bold mb-5'>Admin Orders</h1>
            {loading ? (
                <p className='text-center text-lg'>Loading...</p>
            ) : (
                <div className="overflow-x-auto rounded-lg shadow-lg ">
                    <table className="min-w-full divide-y divide-gray-200 bg-white shadow-xl">
                        <thead className=" bg-orange-200 greenn text-lg ">
                            <tr>
                                <th className="px-6 py-2 text-left  ">Order ID</th>
                                <th className="px-6 py-2 text-left ">Total Amount</th>
                                <th className="px-6 py-2 text-left ">Payment Method</th>
                                <th className="px-6 py-2 text-left ">Items</th>
                                <th className="px-6 py-2 text-left  ">Email</th>
                                <th className="px-6 py-2 text-left">Address</th>
                                <th className="px-6 py-2 text-left  ">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order._id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹{order.totalAmount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.paymentMethod}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        <ul className="list-disc list-inside">
                                            {order.cartItems.map(item => (
                                                <li key={item.name} className="flex items-center justify-between">
                                                    <span>{item.name} (Qty: {item.quantity}, Price: {item.price})</span>
                                                
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.address.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.address.street}, <br /> {order.address.city},<br /> {order.address.state}, {order.address.zip}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button 
                                            onClick={() => handleDelete(order._id)} 
                                            className="text-red-600 hover:text-red-800">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminOrder;

