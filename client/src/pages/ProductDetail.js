import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}