import { 
  BeakerIcon, 
  HeartIcon, 
  SparklesIcon, 
  UserIcon 
} from '@heroicons/react/24/outline';

const categories = [
  { name: 'Medicines', icon: BeakerIcon },
  { name: 'First Aid', icon: HeartIcon },
  { name: 'Personal Care', icon: UserIcon },
  { name: 'Medical Devices', icon: SparklesIcon },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold mb-6">Featured Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div 
            key={category.name}
            className="bg-white p-6 rounded-lg shadow-sm text-center transform transition hover:-translate-y-1 cursor-pointer"
          >
            <category.icon className="h-8 w-8 mx-auto mb-3 text-teal-600" />
            <h4 className="font-medium">{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories; 