import { useEffect, useState } from 'react';

const mockOrders = [
  {
    id: '12345',
    date: '2023-07-20',
    total: 149.99,
    items: 2,
    status: 'Delivered'
  },
  {
    id: '12346',
    date: '2023-07-18',
    total: 89.99,
    items: 1,
    status: 'Shipped'
  }
];

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => setOrders(mockOrders), 500);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      
      <div className="max-w-2xl mx-auto">
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders found</p>
        ) : (
          orders.map(order => (
            <div key={order.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Order #{order.id}</h3>
                <span className={`px-2 py-1 rounded ${
                  order.status === 'Delivered' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <p className="text-gray-600">Date: {order.date}</p>
              <p className="text-gray-600">Items: {order.items}</p>
              <p className="text-gray-600 font-semibold">Total: ${order.total}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}