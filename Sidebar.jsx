import { Link, useLocation } from 'react-router-dom';
import {
  DocumentChartBarIcon,
  CubeIcon,
  InboxIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const location = useLocation();
  const navItems = [
    { name: 'Dashboard', icon: DocumentChartBarIcon, path: '/' },
    { name: 'Inventory', icon: CubeIcon, path: '/inventory' },
    { name: 'Customer Comms', icon: InboxIcon, path: '/customer-comms' },
    { name: 'AI Insights', icon: LightBulbIcon, path: '/insights' },
    { name: 'Settings', icon: CogIcon, path: '/settings' },
  ];

  return (
    <aside className="hidden w-64 bg-white border-r md:block">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
          <h2 className="text-xl font-bold text-gray-800">SellWell</h2>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg ${
                    location.pathname === item.path
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}