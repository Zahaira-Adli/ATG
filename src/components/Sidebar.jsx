import { Link, useLocation } from "react-router-dom"
import { HomeIcon, ChartBarIcon, UserIcon, DocumentTextIcon, ChatIcon, LogoutIcon, SettingsIcon } from "./Icons"

const Sidebar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const navItems = [
    { name: "My ATG", path: "/", icon: HomeIcon },
    { name: "Dashboard", path: "/dashboard", icon: ChartBarIcon },
    { name: "Profile", path: "/profile", icon: UserIcon },
    { name: "Subscription", path: "/subscription", icon: DocumentTextIcon },
    { name: "Messages", path: "/messages", icon: ChatIcon },
    { name: "Settings", path: "/settings", icon: SettingsIcon },
    { name: "Logout", path: "/logout", icon: LogoutIcon },
  ]

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-10">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
              E
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Emeka</h3>
              <p className="text-xs text-gray-500">Emeka@tip.com</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                    currentPath === item.path
                      ? "bg-teal-50 text-teal-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${currentPath === item.path ? "text-teal-600" : "text-gray-400"}`} />
                  <span>{item.name}</span>
                  {item.name === "Messages" && (
                    <span className="ml-auto bg-teal-100 text-teal-600 text-xs font-medium px-2 py-0.5 rounded-full">
                      3
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
