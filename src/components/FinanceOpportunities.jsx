import { ArrowRightIcon } from "./Icons"

export default function FinanceOpportunities() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Business Potential Card */}
        <div className="bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-1">Boost Your Business Potential</h3>
          <p className="text-sm text-gray-600 mb-4">Post your request & access financing in Africa</p>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
            POST FINANCE REQUEST
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="col-span-2 grid grid-cols-2 gap-6">
          {/* All Financing Offers */}
          <div className="bg-teal-500 text-white p-6 rounded-xl relative">
            <div className="absolute top-3 right-3">
              <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium mb-4">All Financing Offers Available</h3>
            <div className="flex items-end justify-between">
              <div className="text-5xl font-bold">111</div>
              <div className="flex items-center text-xs">
                <span className="bg-teal-600 px-2 py-1 rounded mr-2">+23</span>
                <span>New Offers</span>
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Morocco Offers */}
          <div className="bg-white p-6 rounded-xl relative">
            <div className="absolute top-3 right-3">
              <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium mb-4">Financing Offers in Morocco</h3>
            <div className="flex items-end justify-between">
              <div className="text-5xl font-bold">07</div>
              <div className="flex items-center text-xs">
                <span className="bg-yellow-100 px-2 py-1 rounded mr-2">+11</span>
                <span>New Offers</span>
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Financing Providers */}
          <div className="bg-teal-500 text-white p-6 rounded-xl relative">
            <div className="absolute top-3 right-3">
              <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center">
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
            <h3 className="text-sm font-medium mb-4">Financing providers available</h3>
            <div className="flex items-end justify-between">
              <div className="text-5xl font-bold">911</div>
              <div className="flex items-center text-xs">
                <span className="bg-teal-600 px-2 py-1 rounded mr-2">+47</span>
                <span>New Offers</span>
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Morocco Providers */}
          <div className="bg-white p-6 rounded-xl relative">
            <div className="absolute top-3 right-3">
              <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium mb-4">Financing provider in Morocco</h3>
            <div className="flex items-end justify-between">
              <div className="text-5xl font-bold">42</div>
              <div className="flex items-center text-xs">
                <span className="bg-yellow-100 px-2 py-1 rounded mr-2">+29</span>
                <span>New provider</span>
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Banner */}
      <div className="mt-6 bg-white p-4 rounded-xl flex items-center justify-between">
        <p className="text-gray-600">Get access to a wider range of financing and investment offers across Africa</p>
        <button className="text-teal-500 font-medium">upgrade your Subscription</button>
        <button className="text-teal-500 flex items-center">VIEW ALL +1111</button>
      </div>
    </div>
  )
}
