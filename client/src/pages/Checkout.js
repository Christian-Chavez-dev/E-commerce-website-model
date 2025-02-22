import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="max-w-lg mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.map(item => (
            <div key={item._id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Add your payment form here */}
        <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
          Pay Now
        </button>
      </div>
    </div>
  );
}