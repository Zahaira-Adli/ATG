import { BuildingIcon, UsersIcon, GlobeIcon } from "../components/Icons"

export default function WhoWeAre() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Who We Are</h1>

      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">About ATG</h2>
        <p className="text-gray-600 mb-6">
          ATG is a leading financial platform connecting businesses across Africa with financing and investment
          opportunities. Our mission is to unlock growth and foster economic development throughout the continent by
          providing accessible financial solutions to businesses of all sizes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <BuildingIcon className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold mb-2">Established 2015</h3>
            <p className="text-gray-600 text-sm">Founded with a vision to transform access to finance across Africa</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <UsersIcon className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold mb-2">200+ Team Members</h3>
            <p className="text-gray-600 text-sm">Dedicated professionals working across 15 African countries</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <GlobeIcon className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold mb-2">Pan-African Presence</h3>
            <p className="text-gray-600 text-sm">Operating in 25 countries with headquarters in Morocco</p>
          </div>
        </div>
      </div>
    </div>
  )
}
