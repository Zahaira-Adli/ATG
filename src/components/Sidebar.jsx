"use client"

import { useState } from "react"
import { HomeIcon, UserIcon, ChartIcon, DocumentIcon, SettingsIcon, LogoutIcon } from "./Icons"

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}>
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <img src="/placeholder.svg?height=40&width=40" alt="ATG Logo" className="h-10" />
          {!isCollapsed && <span className="ml-2 font-bold text-lg">ATG</span>}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg bg-blue-50 text-blue-600">
              <HomeIcon className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3">My ATG</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <UserIcon className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3">Profile</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <ChartIcon className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3">Dashboard</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <DocumentIcon className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3">Subscription</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <SettingsIcon className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3">Settings</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <LogoutIcon className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3">Logout</span>}
            </a>
          </li>
        </ul>
      </nav>

      {/* Collapse button */}
      <button
        className="absolute bottom-4 -right-3 bg-white border border-gray-200 rounded-full p-1 shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <svg
          className={`w-4 h-4 text-gray-500 transform ${isCollapsed ? "rotate-0" : "rotate-180"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </aside>
  )
}
