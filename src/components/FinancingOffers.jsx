import { ArrowRightIcon } from "./Icons"

export default function FinancingOffers() {
  const offers = [
    {
      id: 1,
      bank: "ATTIJARIWAFA BANK",
      location: "Oujda, Morocco, Africa",
      industry: "Power",
      amount: "US$ 25,000,000",
    },
    {
      id: 2,
      bank: "ATTIJARIWAFA BANK",
      location: "Oujda, Morocco, Africa",
      industry: "Power",
      amount: "US$ 25,000,000",
    },
    {
      id: 3,
      bank: "ECOBANK",
      location: "Oujda, Morocco, Africa",
      industry: "Power",
      amount: "US$ 25,000,000",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">Financing Offers</h2>
          <p className="text-sm text-gray-500">Check the current Opportunities</p>
        </div>
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-teal-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center mr-3">
                <span className="text-xs font-bold">LOGO</span>
              </div>
              <div>
                <h3 className="font-bold">{offer.bank}</h3>
                <div className="flex items-center text-xs text-gray-500">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {offer.location}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-1">
                <span className="text-gray-500 text-sm mr-2">Industry:</span>
                <span className="font-medium">{offer.industry}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-2">Finance Providers</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="font-bold text-xl">{offer.amount}</div>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <ArrowRightIcon className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
