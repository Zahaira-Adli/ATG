"use client"

import { useState } from "react"

const CountrySelector = () => {
  const [selectedCountries, setSelectedCountries] = useState(["Morocco"])

  const countries = [
    { name: "Morocco", code: "MA", count: 42 },
    { name: "Algeria", code: "DZ", count: 18 },
    { name: "Nigeria", code: "NG", count: 35 },
    { name: "Egypt", code: "EG", count: 29 },
  ]

  const toggleCountry = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country))
    } else {
      setSelectedCountries([...selectedCountries, country])
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-lg font-medium mb-4">Countries</h3>
      <ul className="space-y-3">
        {countries.map((country) => (
          <li
            key={country.code}
            className="flex items-center justify-between"
            onClick={() => toggleCountry(country.name)} // Call toggleCountry on click
          >
            <div className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full ${selectedCountries.includes(country.name) ? "bg-red-500" : "bg-gray-300"} mr-2`}
              ></div>
              <span>{country.name}</span>
            </div>
            <span className="text-gray-400 text-sm">{country.count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CountrySelector
