const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 text-center transform transition hover:-translate-y-1">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-40 h-40 object-contain mx-auto mb-4"
      />
      <h4 className="text-lg font-medium text-gray-800 mb-2">
        {product.name}
      </h4>
      <p className="text-xl font-bold text-teal-600 mb-4">
        ₹{product.price}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard; 