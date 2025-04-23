import { BellIcon, SearchIcon } from "./Icons"

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left side - Navigation */}
        <nav className="flex space-x-8">
          <a href="#" className="text-blue-500 font-medium">
            HOME
          </a>
          <a href="#" className="text-gray-500">
            WHO WE ARE
          </a>
          <a href="#" className="text-gray-500">
            WHAT WE SERVE
          </a>
          <a href="#" className="text-gray-500 flex items-center">
            DISCOVER
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 flex items-center">
            KNOWLEDGE & RESEARCH
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </nav>

        {/* Right side - Search and icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your text"
              className="pl-8 pr-4 py-1 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <button className="p-1">
            <BellIcon className="w-6 h-6 text-gray-500" />
          </button>
          <div className="flex items-center space-x-1">
            <span className="text-gray-700">EN</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}
