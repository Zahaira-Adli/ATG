import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Messages from "./pages/Messages"
import Subscription from "./pages/Subscription"
import WhoWeAre from "./pages/WhoWeAre"
import WhoWeServe from "./pages/WhoWeServe"
import Discover from "./pages/Discover"
import Knowledge from "./pages/Knowledge"
import Home from "./pages/Home"
import Logout from "./pages/Logout"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 ml-64 mt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
