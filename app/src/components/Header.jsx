import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Header = ({ cartCount, toggleCart }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold text-teal-600">Arogya Pharmacy</h1>
        </div>
        <button 
          onClick={toggleCart}
          className="relative p-2 hover:bg-gray-100 rounded-full"
        >
          <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header; 