import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../axiosInstance';

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders from the API
  const fetchOrders = async () => {
    try {
      const response = await axiosInstance.get('/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Orders</h1>

      {loading ? (
        <div>Loading...</div> // Optional: Display loader when fetching data
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Order ID</th>
                <th className="py-2 px-4 border">Customer Name</th>
                <th className="py-2 px-4 border">Order Date</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Total Amount</th>
                <th className="py-2 px-4 border">Order Lines</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border text-center">{order.id}</td>
                  <td className="py-2 px-4 border">{order.user?.name || 'N/A'}</td>
                  <td className="py-2 px-4 border">
                    {new Date(order.order_date).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border capitalize">{order.status}</td>
                  <td className="py-2 px-4 border text-right">${order.total_amount}</td>
                  <td className="py-2 px-4 border">
                    <ul>
                      {order.customer_order_lines?.map((line) => (
                        <li key={line.id} className="text-sm">
                          {line.product?.name || 'Product N/A'} - {line.quantity} x ${line.price}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerOrders;
