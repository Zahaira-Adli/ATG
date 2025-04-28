export default function WhoWeServe() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Who We Serve</h1>
        <p className="text-gray-600 mb-6">
          ATG provides financing and investment opportunities across various sectors that drive economic growth in Africa.
          Our platform connects businesses with the right financial partners to unlock their potential.
        </p>
  
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Focus Sectors</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">Agriculture</h3>
              <p className="text-gray-600 text-sm">Supporting sustainable farming and agribusiness across Africa</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">Energy & Power</h3>
              <p className="text-gray-600 text-sm">Financing renewable energy and power infrastructure development</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">Manufacturing</h3>
              <p className="text-gray-600 text-sm">Enabling industrial growth and local production capabilities</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">Technology</h3>
              <p className="text-gray-600 text-sm">Investing in digital transformation and tech innovation</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  