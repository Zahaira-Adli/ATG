"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { SearchIcon, BellIcon, ChevronDownIcon } from "./Icons"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="ATG Logo" className="h-10" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-500 hover:text-gray-700 font-medium text-sm">
            HOME
          </Link>
          <Link to="/who-we-are" className="text-gray-500 hover:text-gray-700 font-medium text-sm">
            WHO WE ARE
          </Link>
          <Link to="/who-we-serve" className="text-gray-500 hover:text-gray-700 font-medium text-sm">
            WHO WE SERVE
          </Link>
          <div className="relative group">
            <Link to="/discover" className="text-gray-500 hover:text-gray-700 font-medium text-sm flex items-center">
              DISCOVER
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <Link to="/discover/opportunities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Opportunities
              </Link>
              <Link to="/discover/partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Partners
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link to="/knowledge" className="text-gray-500 hover:text-gray-700 font-medium text-sm flex items-center">
              KNOWLEDGE & RESEARCH
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <Link to="/knowledge/reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Reports
              </Link>
              <Link to="/knowledge/articles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Articles
              </Link>
            </div>
          </div>
        </nav>

        {/* Right side - Search and icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your apps"
              className="pl-8 pr-4 py-1 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <Link to="/notifications" className="p-1 relative">
            <BellIcon className="w-6 h-6 text-gray-500" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </Link>
          <div className="flex items-center space-x-1">
            <span className="text-gray-700">EN</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
