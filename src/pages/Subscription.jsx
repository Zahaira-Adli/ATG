"use client"

import { useState } from "react"

export default function Subscription() {
  const [billingCycle, setBillingCycle] = useState("annual")

  const plans = [
    {
      name: "Basic",
      price: billingCycle === "annual" ? 99 : 9.99,
      features: [
        "Access to basic financing opportunities",
        "Limited market reports",
        "Email support",
        "1 user account",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: billingCycle === "annual" ? 299 : 29.99,
      features: [
        "Access to all financing opportunities",
        "Full market reports",
        "Priority email & phone support",
        "5 user accounts",
        "Custom financing alerts",
      ],
      recommended: true,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Subscription</h1>
      <p className="text-gray-600 mb-8">Choose the right plan for your business needs</p>

      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-full flex items-center">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              billingCycle === "monthly" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              billingCycle === "annual" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => setBillingCycle("annual")}
          >
            Annual <span className="text-teal-600">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl overflow-hidden ${
              plan.recommended ? "ring-2 ring-teal-500" : "border border-gray-200"
            }`}
          >
            {plan.recommended && (
              <div className="bg-teal-500 text-white text-center py-1 text-sm font-medium">Recommended</div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/{billingCycle === "annual" ? "year" : "month"}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-md ${
                  plan.recommended ? "bg-teal-500 text-white" : "bg-white border border-gray-300 text-gray-800"
                }`}
              >
                {plan.recommended ? "Upgrade Now" : "Select Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
