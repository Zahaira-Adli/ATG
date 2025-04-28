import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to ATG</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/dashboard"
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-2">Finance Dashboard</h2>
          <p className="text-gray-500 text-sm">View your finance opportunities and offers</p>
        </Link>

        <Link
          to="/profile"
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-2">Your Profile</h2>
          <p className="text-gray-500 text-sm">Manage your profile and preferences</p>
        </Link>

        <Link
          to="/messages"
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-2">Messages</h2>
          <p className="text-gray-500 text-sm">Check your latest messages and notifications</p>
        </Link>

        <Link
          to="/who-we-are"
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-2">Who We Are</h2>
          <p className="text-gray-500 text-sm">Learn more about our organization</p>
        </Link>

        <Link
          to="/who-we-serve"
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-2">Who We Serve</h2>
          <p className="text-gray-500 text-sm">Discover our target audience and sectors</p>
        </Link>

        <Link
          to="/knowledge"
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-2">Knowledge & Research</h2>
          <p className="text-gray-500 text-sm">Access our research and insights</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
