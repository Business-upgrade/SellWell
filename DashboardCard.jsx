export default function DashboardCard({ title, value, change, icon: Icon }) {
    const isPositive = change >= 0;
  
    return (
      <div className="p-6 bg-white rounded-xl shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
          </div>
          <div className="p-2 rounded-lg bg-blue-50">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className={`mt-4 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          <span>{isPositive ? '↑' : '↓'} {Math.abs(change)}% </span>
          <span className="text-gray-500">vs last month</span>
        </div>
      </div>
    );
  }