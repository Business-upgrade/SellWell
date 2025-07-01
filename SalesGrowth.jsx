import { LightBulbIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const growthIdeas = [
  {
    title: "Bundle Deal",
    description: "Create a bundle of your best-selling product with a complementary item at a 10% discount.",
    platform: "All Platforms"
  },
  {
    title: "Limited-Time Offer",
    description: "Run a 24-hour flash sale with 15% off to create urgency and boost conversions.",
    platform: "Amazon, eBay"
  },
  {
    title: "Loyalty Program",
    description: "Implement a repeat buyer program where customers get a free item after 5 purchases.",
    platform: "Etsy, Shopify"
  },
  {
    title: "Cross-Sell Campaign",
    description: "Add 'Frequently Bought Together' suggestions to your product pages.",
    platform: "Amazon"
  },
  {
    title: "Seasonal Packaging",
    description: "Offer festive packaging during holidays for a small upcharge to increase AOV.",
    platform: "All Platforms"
  }
];

export default function SalesGrowth() {
  const [selectedProduct, setSelectedProduct] = useState('All Products');
  const [generatedIdeas, setGeneratedIdeas] = useState(growthIdeas);

  const handleGenerate = () => {
    // In a real app, this would call your AI backend with the selected product
    setGeneratedIdeas(growthIdeas);
  };

  return (
    <div>
      <h3 className="flex items-center text-lg font-medium text-gray-900">
        <LightBulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
        Sales Growth Generator
      </h3>
      <p className="mt-1 text-sm text-gray-500">Get creative marketing and upselling ideas tailored to your products.</p>
      
      <div className="mt-4">
        <label htmlFor="product-select" className="block text-sm font-medium text-gray-700">
          Select Product
        </label>
        <select
          id="product-select"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option>All Products</option>
          <option>Premium Wireless Earbuds</option>
          <option>Organic Cotton T-Shirt</option>
          <option>Stainless Steel Water Bottle</option>
          <option>Yoga Mat with Alignment Guide</option>
        </select>
      </div>
      
      <button
        onClick={handleGenerate}
        className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Generate Ideas
      </button>
      
      <div className="mt-6 space-y-4">
        {generatedIdeas.map((idea, index) => (
          <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-gray-900">{idea.title}</h4>
              <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full">
                {idea.platform}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-600">{idea.description}</p>
            <button
              className="flex items-center mt-2 text-sm text-blue-600 hover:text-blue-800"
              onClick={() => navigator.clipboard.writeText(idea.description)}
            >
              <ClipboardDocumentIcon className="w-4 h-4 mr-1" />
              Copy Idea
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}