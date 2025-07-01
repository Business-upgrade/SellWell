import { CubeIcon, ExclamationCircleIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

const inventoryItems = [
  {
    id: 'PRD-1001',
    name: 'Premium Wireless Earbuds',
    stock: 45,
    status: 'in_stock',
    monthlySales: 120,
    trend: 'up'
  },
  {
    id: 'PRD-1002',
    name: 'Organic Cotton T-Shirt',
    stock: 12,
    status: 'low_stock',
    monthlySales: 85,
    trend: 'up'
  },
  {
    id: 'PRD-1003',
    name: 'Stainless Steel Water Bottle',
    stock: 0,
    status: 'out_of_stock',
    monthlySales: 65,
    trend: 'down'
  },
  {
    id: 'PRD-1004',
    name: 'Yoga Mat with Alignment Guide',
    stock: 32,
    status: 'in_stock',
    monthlySales: 42,
    trend: 'steady'
  },
  {
    id: 'PRD-1005',
    name: 'Bluetooth Speaker - Waterproof',
    stock: 8,
    status: 'low_stock',
    monthlySales: 93,
    trend: 'up'
  }
];

export default function Inventory() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Inventory Overview</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="flex items-center text-lg font-medium text-gray-900">
            <CubeIcon className="w-5 h-5 mr-2 text-blue-500" />
            Total Products
          </h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">24</p>
        </div>
        
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="flex items-center text-lg font-medium text-gray-900">
            <ExclamationCircleIcon className="w-5 h-5 mr-2 text-yellow-500" />
            Low Stock Items
          </h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">3</p>
        </div>
        
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="flex items-center text-lg font-medium text-gray-900">
            <CubeIcon className="w-5 h-5 mr-2 text-red-500" />
            Out of Stock
          </h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">1</p>
        </div>
      </div>
      
      <div className="mt-6 overflow-hidden bg-white rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Product ID
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Stock
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Monthly Sales
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Trend
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventoryItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {item.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === 'in_stock'
                      ? 'bg-green-100 text-green-800'
                      : item.status === 'low_stock'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.stock} {item.status === 'in_stock' ? 'In Stock' : item.status === 'low_stock' ? 'Low Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {item.monthlySales}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {item.trend === 'up' ? (
                    <span className="flex items-center text-green-600">
                      <ArrowUpIcon className="w-5 h-5" /> Up
                    </span>
                  ) : item.trend === 'down' ? (
                    <span className="flex items-center text-red-600">
                      <ArrowDownIcon className="w-5 h-5" /> Down
                    </span>
                  ) : (
                    <span className="flex items-center text-gray-600">
                      Steady
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}