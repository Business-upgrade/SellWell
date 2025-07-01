import DashboardCard from '../components/DashboardCard';
import {
  CurrencyDollarIcon,
  ShoppingBagIcon,
  UsersIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const stats = [
    { title: 'Total Revenue', value: '$12,345', change: 12.3, icon: CurrencyDollarIcon },
    { title: 'Total Orders', value: '1,234', change: 8.1, icon: ShoppingBagIcon },
    { title: 'New Customers', value: '567', change: -2.4, icon: UsersIcon },
    { title: 'Conversion Rate', value: '3.2%', change: 0.5, icon:  ArrowDownIcon },
  ];

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="p-6 bg-white rounded-xl shadow-sm lg:col-span-2">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          {/* Activity items would go here */}
        </div>

        {/* Quick Actions */}
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          <div className="mt-4 space-y-3">
            <button className="flex items-center w-full p-3 text-sm font-medium text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100">
              Generate Customer Email
            </button>
            <button className="flex items-center w-full p-3 text-sm font-medium text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100">
              Check Inventory Levels
            </button>
            <button className="flex items-center w-full p-3 text-sm font-medium text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100">
              Get Sales Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}