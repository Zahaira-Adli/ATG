import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons"

const FinancingOffers = () => {
  const offers = [
    {
      bank: "ATTIJARIWAFA BANK",
      logo: "AWB",
      logoColor: "bg-orange-500",
      location: "Oujda, Morocco, Africa",
      industry: "Power",
      amount: "US$ 25,000,000",
    },
    {
      bank: "ATTIJARIWAFA BANK",
      logo: "AWB",
      logoColor: "bg-orange-500",
      location: "Oujda, Morocco, Africa",
      industry: "Power",
      amount: "US$ 25,000,000",
    },
    {
      bank: "ECOBANK",
      logo: "ECO",
      logoColor: "bg-blue-500",
      location: "Oujda, Morocco, Africa",
      industry: "Power",
      amount: "US$ 25,000,000",
    },
  ]

  return (
    <div className="flex-1 mr-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Financing Offers</h2>
          <p className="text-sm text-gray-500">Check the current Opportunities</p>
        </div>
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 ${offer.logoColor} rounded flex items-center justify-center text-white font-bold text-xs`}
              >
                {offer.logo}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{offer.bank}</h3>
                <p className="text-xs text-gray-500 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                  {offer.location}
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Industry:</span>
                <span className="font-medium text-gray-800">{offer.industry}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Finance Providers</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">{offer.amount}</div>
              <button className="text-gray-400 hover:text-gray-600">
                <ArrowUpRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FinancingOffers
