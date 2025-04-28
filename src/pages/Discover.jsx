import { ArrowRightIcon } from "../components/Icons"

export default function Discover() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Discover</h1>
      <p className="text-gray-600 mb-6">
        Explore financing and investment opportunities across Africa. Connect with financial institutions and discover
        projects seeking investment.
      </p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-teal-500 text-white p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Financing Opportunities</h2>
          <p className="text-white text-opacity-80 mb-4">Explore available financing options across Africa</p>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold">1,200+</span>
            <div className="flex items-center text-sm">
              <span>Explore</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Investment Projects</h2>
          <p className="text-white text-opacity-80 mb-4">Discover projects seeking investment</p>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold">850+</span>
            <div className="flex items-center text-sm">
              <span>Explore</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
