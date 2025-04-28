import { Link } from "react-router-dom"
// import { ArrowRight } from "../components/Icons"

export default function Knowledge() {
  const resources = [
    {
      title: "Market Reports",
      description: "In-depth analysis of African markets and sectors",
      count: 45,
      link: "/knowledge/reports",
    },
    {
      title: "Case Studies",
      description: "Success stories and business transformations",
      count: 78,
      link: "/knowledge/case-studies",
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Knowledge & Research</h1>

      <div className="grid grid-cols-2 gap-6 mb-10">
        {resources.map((resource, index) => (
          <Link to={resource.link} key={index} className="block">
            <div className="bg-white p-6 rounded-xl border border-gray-200 h-full">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                </div>
                <div className="bg-teal-100 text-teal-800 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  {resource.count}
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm text-teal-600">
                <span>Browse</span>
                {/* <ArrowRight className="w-4 h-4 ml-2" /> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
