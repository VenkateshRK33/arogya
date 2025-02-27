import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const products = [
  {
    id: 1,
    name: "Digital Blood Pressure Monitor",
    price: 1999,
    image: "/placeholder.svg?height=150&width=150"
  },
  {
    id: 2,
    name: "Pulse Oximeter",
    price: 1499,
    image: "/placeholder.svg?height=150&width=150"
  },
  {
    id: 3,
    name: "First Aid Kit",
    price: 799,
    image: "/placeholder.svg?height=150&width=150"
  },
  {
    id: 4,
    name: "Digital Thermometer",
    price: 299,
    image: "/placeholder.svg?height=150&width=150"
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const confirmOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    alert('Order confirmed! Transaction hash: 192.168.1.1');
    setCart([]);
    setIsCartOpen(false);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cart.length} toggleCart={toggleCart} />
      <Hero />
      <Categories />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold mb-6">Popular Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <Cart 
        isOpen={isCartOpen}
        onClose={toggleCart}
        items={cart}
        total={cartTotal}
        onConfirmOrder={confirmOrder}
      />
    </div>
  );
}

export default App; 