"use client"

import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import FinanceOpportunities from "./components/FinanceOpportunities"
import FinancingOffers from "./components/FinancingOffers"

function App() {
  const [activeTab, setActiveTab] = useState("financing")

  return (
    <div className="flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-6">
              <span className="text-gray-500">My ATG /</span>
              <span className="ml-1 font-medium">Finance And Investment Opportunities</span>
            </div>

            {/* Tabs */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Finance Opportunities</h1>
              <div className="flex space-x-2">
                <button
                  className={`px-6 py-2 rounded-full ${activeTab === "financing" ? "bg-black text-white" : "bg-white text-black border"}`}
                  onClick={() => setActiveTab("financing")}
                >
                  Financing
                </button>
                <button
                  className={`px-6 py-2 rounded-full ${activeTab === "investment" ? "bg-black text-white" : "bg-white text-black border"}`}
                  onClick={() => setActiveTab("investment")}
                >
                  Investment
                </button>
              </div>
            </div>

            <h2 className="text-gray-600 mb-8">Unlock Growth Across Africa</h2>

            {/* Finance Opportunities Section */}
            <FinanceOpportunities />

            {/* Financing Offers Section */}
            <FinancingOffers />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
