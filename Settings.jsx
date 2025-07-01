import { CogIcon, UsersIcon, LinkIcon, BellIcon, CreditCardIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const settingsSections = [
  {
    title: "Account",
    icon: UsersIcon,
    items: ["Profile Information", "Change Password", "Two-Factor Authentication"]
  },
  {
    title: "Integrations",
    icon: LinkIcon,
    items: ["Amazon Seller Central", "eBay API", "Etsy Shop", "Shopify Store"]
  },
  {
    title: "Notifications",
    icon: BellIcon,
    items: ["Email Alerts", "Browser Notifications", "Mobile Push", "Low Stock Alerts"]
  },
  {
    title: "Billing",
    icon: CreditCardIcon,
    items: ["Payment Method", "Billing History", "Subscription Plan"]
  },
  {
    title: "Security",
    icon: ShieldCheckIcon,
    items: ["Login History", "Active Sessions", "Privacy Settings"]
  }
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile Information");

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Settings</h2>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <CogIcon className="w-5 h-5 mr-2 text-gray-500" />
              <h3 className="font-medium text-gray-900">Settings Menu</h3>
            </div>
            <nav>
              <ul className="space-y-1">
                {settingsSections.map((section) => (
                  <li key={section.title}>
                    <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-500">
                      <section.icon className="w-4 h-4 mr-2" />
                      {section.title}
                    </div>
                    <ul className="ml-8">
                      {section.items.map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => setActiveTab(item)}
                            className={`w-full px-3 py-2 text-sm text-left rounded-md ${
                              activeTab === item
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="flex-1 p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">{activeTab}</h3>
          <div className="mt-4">
            {activeTab === "Profile Information" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="jane@example.com"
                  />
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            )}
            
            {activeTab === "Integrations" && (
              <div className="space-y-4">
                <p className="text-gray-600">Connect your ecommerce platforms to sync data with SellWell.</p>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600 font-medium">A</span>
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Amazon Seller Central</h4>
                        <p className="text-sm text-gray-500">Sync orders, inventory, and messages</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Add other setting panels similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}