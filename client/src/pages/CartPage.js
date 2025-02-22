import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cartCount} items)</h1>
      
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {cart.map(item => (
            <div key={item.id} className="border-b pb-4 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 border rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border-t border-b"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded-r"
                  >
                    +
                  </button>
                </div>
                <p className="w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 text-right">
            <div className="text-2xl font-bold mb-4">
              Total: ${cartTotal.toFixed(2)}
            </div>
            <Link
              to="/checkout"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}