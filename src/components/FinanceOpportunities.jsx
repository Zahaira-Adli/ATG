import { ArrowRightIcon, ArrowUpRightIcon } from "./Icons"

const FinanceOpportunities = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Boost Your Business Potential Card */}
        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-1">Boost Your Business Potential</h3>
          <p className="text-sm text-gray-600 mb-4">Post your request & access financing in Africa</p>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm flex items-center">
            POST FINANCE REQUEST
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* All Financing Offers Available Card */}
        <div className="bg-teal-500 text-white rounded-lg p-6 relative">
          <div className="absolute top-3 right-3">
            <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-white text-xs">•</span>
            </div>
          </div>
          <h3 className="text-sm font-medium mb-2">All Financing Offers Available</h3>
          <div className="flex items-end justify-between">
            <div className="text-5xl font-bold">111</div>
            <div className="flex items-center text-xs">
              <span className="bg-teal-600 px-2 py-1 rounded-full mr-2 flex items-center">
                <span className="mr-1">+</span>42
              </span>
              <span>New Offers</span>
            </div>
          </div>
          <div className="absolute bottom-3 right-3">
            <ArrowUpRightIcon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Financing Offers in Morocco Card */}
        <div className="bg-white rounded-lg p-6 relative border border-gray-200">
          <div className="absolute top-3 right-3">
            <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-white text-xs">•</span>
            </div>
          </div>
          <h3 className="text-sm font-medium mb-2">Financing Offers in Morocco</h3>
          <div className="flex items-end justify-between">
            <div className="text-5xl font-bold">07</div>
            <div className="flex items-center text-xs">
              <span className="bg-yellow-100 px-2 py-1 rounded-full mr-2 flex items-center">
                <span className="mr-1">+</span>11
              </span>
              <span>New Offers</span>
            </div>
          </div>
          <div className="absolute bottom-3 right-3">
            <ArrowUpRightIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Financing providers available Card */}
        <div className="bg-teal-100 rounded-lg p-6 relative">
          <div className="absolute top-3 right-3">
            <div className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-white text-xs">•</span>
            </div>
          </div>
          <h3 className="text-sm font-medium mb-2 text-teal-800">Financing providers available</h3>
          <div className="flex items-end justify-between">
            <div className="text-5xl font-bold text-teal-800">911</div>
            <div className="flex items-center text-xs text-teal-800">
              <span className="bg-teal-200 px-2 py-1 rounded-full mr-2 flex items-center">
                <span className="mr-1">+</span>42
              </span>
              <span>New Offers</span>
            </div>
          </div>
          <div className="absolute bottom-3 right-3">
            <ArrowUpRightIcon className="w-5 h-5 text-teal-800" />
          </div>
        </div>
      </div>

      {/* Subscription Banner */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between mt-4">
        <div>
          <p className="text-sm text-gray-600">
            Get access to a wider range of financing and investment offers across Africa
            <span className="text-teal-500 font-medium ml-1">upgrade your Subscription</span>
          </p>
        </div>
        <div className="flex items-center text-teal-500 text-sm">
          <span className="font-medium">VIEW ALL +1111</span>
        </div>
      </div>
    </div>
  )
}

export default FinanceOpportunities
