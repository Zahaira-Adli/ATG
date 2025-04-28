"use client"

import { useState } from "react"
import FinanceOpportunities from "../components/FinanceOpportunities"
import FinancingOffers from "../components/FinancingOffers"
import CountrySelector from "../components/CountrySelector"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("financing")

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <span>My ATG</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-700">Finance And Investment Opportunities</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Finance Opportunities</h1>
          <p className="text-sm text-gray-500">Unlock Growth Across Africa</p>
        </div>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "financing" ? "bg-teal-600 text-white" : "bg-white text-gray-700 border"
            }`}
            onClick={() => setActiveTab("financing")}
          >
            Financing
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "investment" ? "bg-teal-600 text-white" : "bg-white text-gray-700 border"
            }`}
            onClick={() => setActiveTab("investment")}
          >
            Investment
          </button>
        </div>
      </div>

      <FinanceOpportunities />

      <div className="flex flex-col lg:flex-row justify-between items-start mt-8">
        <FinancingOffers />
        <div className="w-full lg:w-64 mt-6 lg:mt-0">
          <CountrySelector />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
