import SellerChatbot from '../components/SellerChatbot';
import SalesGrowth from '../components/SalesGrowth';

export default function Insights() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-800">AI Insights</h2>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <SellerChatbot />
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <SalesGrowth />
        </div>
      </div>
    </div>
  );
}