const Cart = ({ isOpen, onClose, items, total, onConfirmOrder }) => {
  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-teal-600">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Total:</h4>
            <span className="text-xl font-bold">₹{total}</span>
          </div>
          <button
            onClick={onConfirmOrder}
            className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 