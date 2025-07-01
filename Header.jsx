import { BellIcon, DocumentMagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-800">SellWell</h1>
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 text-gray-500 rounded-full hover:bg-gray-100">
            <BellIcon className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            <UserCircleIcon className="w-8 h-8 text-gray-500" />
            <span className="text-sm font-medium">Seller Name</span>
          </div>
        </div>
      </div>
    </header>
  );
}