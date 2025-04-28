"use client"

import { useState } from "react"
import {
  UserIcon,
  BellIcon,
  ShieldIcon,
  GlobeIcon,
  MoonIcon,
  KeyIcon,
  CreditCardIcon,
  TrashIcon,
} from "../components/Icons"

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account")
  const [language, setLanguage] = useState("english")
  const [timeZone, setTimeZone] = useState("utc")
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState({
    newOpportunities: true,
    applicationUpdates: true,
    messages: true,
    marketingUpdates: false,
  })
  const [pushNotifications, setPushNotifications] = useState({
    newOpportunities: true,
    applicationUpdates: true,
    messages: true,
    marketingUpdates: false,
  })
  const [notificationFrequency, setNotificationFrequency] = useState("realtime")
  const [profileVisibility, setProfileVisibility] = useState("public")
  const [dataSharing, setDataSharing] = useState(true)
  const [activityStatus, setActivityStatus] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)

  const handleEmailNotificationChange = (key) => {
    setEmailNotifications({
      ...emailNotifications,
      [key]: !emailNotifications[key],
    })
  }

  const handlePushNotificationChange = (key) => {
    setPushNotifications({
      ...pushNotifications,
      [key]: !pushNotifications[key],
    })
  }

  const tabs = [
    { id: "account", label: "Account", icon: UserIcon },
    { id: "notifications", label: "Notifications", icon: BellIcon },
    { id: "privacy", label: "Privacy & Security", icon: ShieldIcon },
    { id: "language", label: "Language & Region", icon: GlobeIcon },
    { id: "appearance", label: "Appearance", icon: MoonIcon },
    { id: "billing", label: "Billing", icon: CreditCardIcon },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className={`w-5 h-5 mr-2 ${activeTab === tab.id ? "text-teal-600" : "text-gray-400"}`} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Account Settings */}
          {activeTab === "account" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      defaultValue="Emeka"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      defaultValue="Johnson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      defaultValue="emeka@tip.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      defaultValue="+212 555 123 456"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Company Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      defaultValue="TIP Ventures"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500">
                      <option>Technology</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                      <option>Energy</option>
                      <option>Agriculture</option>
                      <option>Manufacturing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500">
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-500 employees</option>
                      <option>501+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                    <input
                      type="url"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      defaultValue="https://tipventures.com"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <div></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === "notifications" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Financing Opportunities</p>
                      <p className="text-sm text-gray-500">Get notified when new opportunities match your criteria</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="email-opportunities"
                        className="sr-only"
                        checked={emailNotifications.newOpportunities}
                        onChange={() => handleEmailNotificationChange("newOpportunities")}
                      />
                      <label
                        htmlFor="email-opportunities"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          emailNotifications.newOpportunities ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            emailNotifications.newOpportunities ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Application Updates</p>
                      <p className="text-sm text-gray-500">Receive updates on your financing applications</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="email-updates"
                        className="sr-only"
                        checked={emailNotifications.applicationUpdates}
                        onChange={() => handleEmailNotificationChange("applicationUpdates")}
                      />
                      <label
                        htmlFor="email-updates"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          emailNotifications.applicationUpdates ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            emailNotifications.applicationUpdates ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Messages</p>
                      <p className="text-sm text-gray-500">Get notified when you receive new messages</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="email-messages"
                        className="sr-only"
                        checked={emailNotifications.messages}
                        onChange={() => handleEmailNotificationChange("messages")}
                      />
                      <label
                        htmlFor="email-messages"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          emailNotifications.messages ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            emailNotifications.messages ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-gray-500">Receive news, announcements, and promotional content</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="email-marketing"
                        className="sr-only"
                        checked={emailNotifications.marketingUpdates}
                        onChange={() => handleEmailNotificationChange("marketingUpdates")}
                      />
                      <label
                        htmlFor="email-marketing"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          emailNotifications.marketingUpdates ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            emailNotifications.marketingUpdates ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Push Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Financing Opportunities</p>
                      <p className="text-sm text-gray-500">Get notified when new opportunities match your criteria</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="push-opportunities"
                        className="sr-only"
                        checked={pushNotifications.newOpportunities}
                        onChange={() => handlePushNotificationChange("newOpportunities")}
                      />
                      <label
                        htmlFor="push-opportunities"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          pushNotifications.newOpportunities ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            pushNotifications.newOpportunities ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Application Updates</p>
                      <p className="text-sm text-gray-500">Receive updates on your financing applications</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="push-updates"
                        className="sr-only"
                        checked={pushNotifications.applicationUpdates}
                        onChange={() => handlePushNotificationChange("applicationUpdates")}
                      />
                      <label
                        htmlFor="push-updates"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          pushNotifications.applicationUpdates ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            pushNotifications.applicationUpdates ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Messages</p>
                      <p className="text-sm text-gray-500">Get notified when you receive new messages</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="push-messages"
                        className="sr-only"
                        checked={pushNotifications.messages}
                        onChange={() => handlePushNotificationChange("messages")}
                      />
                      <label
                        htmlFor="push-messages"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          pushNotifications.messages ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            pushNotifications.messages ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-gray-500">Receive news, announcements, and promotional content</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="push-marketing"
                        className="sr-only"
                        checked={pushNotifications.marketingUpdates}
                        onChange={() => handlePushNotificationChange("marketingUpdates")}
                      />
                      <label
                        htmlFor="push-marketing"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          pushNotifications.marketingUpdates ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            pushNotifications.marketingUpdates ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Notification Frequency</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="freq-realtime"
                      name="frequency"
                      className="mr-2"
                      checked={notificationFrequency === "realtime"}
                      onChange={() => setNotificationFrequency("realtime")}
                    />
                    <label htmlFor="freq-realtime">Real-time</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="freq-daily"
                      name="frequency"
                      className="mr-2"
                      checked={notificationFrequency === "daily"}
                      onChange={() => setNotificationFrequency("daily")}
                    />
                    <label htmlFor="freq-daily">Daily digest</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="freq-weekly"
                      name="frequency"
                      className="mr-2"
                      checked={notificationFrequency === "weekly"}
                      onChange={() => setNotificationFrequency("weekly")}
                    />
                    <label htmlFor="freq-weekly">Weekly digest</label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Privacy & Security Settings */}
          {activeTab === "privacy" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-gray-500">Control who can see your profile information</p>
                    </div>
                    <select
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={profileVisibility}
                      onChange={(e) => setProfileVisibility(e.target.value)}
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="contacts">Contacts Only</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Sharing</p>
                      <p className="text-sm text-gray-500">Allow ATG to share your data with financing partners</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="data-sharing"
                        className="sr-only"
                        checked={dataSharing}
                        onChange={() => setDataSharing(!dataSharing)}
                      />
                      <label
                        htmlFor="data-sharing"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          dataSharing ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            dataSharing ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Activity Status</p>
                      <p className="text-sm text-gray-500">Show when you're active on the platform</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="activity-status"
                        className="sr-only"
                        checked={activityStatus}
                        onChange={() => setActivityStatus(!activityStatus)}
                      />
                      <label
                        htmlFor="activity-status"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          activityStatus ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            activityStatus ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Security</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="two-factor"
                        className="sr-only"
                        checked={twoFactorAuth}
                        onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                      />
                      <label
                        htmlFor="two-factor"
                        className={`block w-12 h-6 rounded-full transition-colors ${
                          twoFactorAuth ? "bg-teal-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition-transform ${
                            twoFactorAuth ? "transform translate-x-6" : ""
                          }`}
                        />
                      </label>
                    </div>
                  </div>

                  {twoFactorAuth && (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-600 mb-2">
                        Two-factor authentication adds an extra layer of security to your account by requiring more than
                        just a password to sign in.
                      </p>
                      <button className="text-teal-600 text-sm font-medium flex items-center">
                        <KeyIcon className="w-4 h-4 mr-1" />
                        Configure two-factor authentication
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Data Management</h3>
                <p className="text-gray-600 mb-4">
                  You can download a copy of your data or request to delete all your information from our platform.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                    Download Data
                  </button>
                  <button className="bg-red-100 text-red-600 px-4 py-2 rounded-md hover:bg-red-200 transition-colors flex items-center">
                    <TrashIcon className="w-4 h-4 mr-2" />
                    Delete Account
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Language & Region Settings */}
          {activeTab === "language" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Language and Region</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option value="english">English</option>
                      <option value="french">French</option>
                      <option value="arabic">Arabic</option>
                      <option value="portuguese">Portuguese</option>
                      <option value="spanish">Spanish</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={timeZone}
                      onChange={(e) => setTimeZone(e.target.value)}
                    >
                      <option value="utc">(GMT+00:00) UTC</option>
                      <option value="casablanca">(GMT+01:00) Casablanca</option>
                      <option value="cairo">(GMT+02:00) Cairo</option>
                      <option value="nairobi">(GMT+03:00) Nairobi</option>
                      <option value="lagos">(GMT+01:00) Lagos</option>
                      <option value="johannesburg">(GMT+02:00) Johannesburg</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Date and Time Format</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500">
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time Format</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500">
                      <option>12-hour (AM/PM)</option>
                      <option>24-hour</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Currency</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Currency</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500">
                    <option>USD - US Dollar</option>
                    <option>EUR - Euro</option>
                    <option>MAD - Moroccan Dirham</option>
                    <option>NGN - Nigerian Naira</option>
                    <option>EGP - Egyptian Pound</option>
                    <option>ZAR - South African Rand</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Appearance Settings */}
          {activeTab === "appearance" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Theme</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div
                    className={`border rounded-md p-4 flex flex-col items-center cursor-pointer ${
                      !darkMode ? "ring-2 ring-teal-500" : ""
                    }`}
                    onClick={() => setDarkMode(false)}
                  >
                    <div className="w-full h-20 bg-white rounded mb-2 border"></div>
                    <p className="text-sm font-medium">Light</p>
                  </div>
                  <div
                    className={`border rounded-md p-4 flex flex-col items-center cursor-pointer ${
                      darkMode ? "ring-2 ring-teal-500" : ""
                    }`}
                    onClick={() => setDarkMode(true)}
                  >
                    <div className="w-full h-20 bg-gray-800 rounded mb-2 border"></div>
                    <p className="text-sm font-medium">Dark</p>
                  </div>
                  <div className="border rounded-md p-4 flex flex-col items-center cursor-pointer">
                    <div className="w-full h-20 bg-gradient-to-b from-white to-gray-800 rounded mb-2 border"></div>
                    <p className="text-sm font-medium">System</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Accent Color</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-teal-500 mb-2 ring-2 ring-offset-2 ring-teal-500"></div>
                    <p className="text-xs">Teal</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 mb-2"></div>
                    <p className="text-xs">Blue</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500 mb-2"></div>
                    <p className="text-xs">Purple</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-red-500 mb-2"></div>
                    <p className="text-xs">Red</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Font Size</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" id="font-small" name="font-size" className="mr-2" />
                    <label htmlFor="font-small" className="text-sm">
                      Small
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="font-medium" name="font-size" className="mr-2" defaultChecked />
                    <label htmlFor="font-medium">Medium (Default)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="font-large" name="font-size" className="mr-2" />
                    <label htmlFor="font-large" className="text-lg">
                      Large
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Billing Settings */}
          {activeTab === "billing" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg">Premium Plan</h4>
                      <p className="text-sm text-gray-600">Billed annually</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl">$299/year</p>
                      <p className="text-sm text-gray-600">Next billing date: Jan 15, 2024</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="font-medium mb-2">Plan Features:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Access to all financing opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Full market reports</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Priority email & phone support</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>5 user accounts</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button className="text-teal-600 font-medium">Change Plan</button>
                  <button className="text-red-600 font-medium">Cancel Subscription</button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-8 bg-blue-600 rounded mr-4 flex items-center justify-center text-white font-bold text-xs">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-600">Expires 12/2025</p>
                    </div>
                  </div>
                  <button className="text-teal-600 font-medium">Edit</button>
                </div>
                <button className="mt-4 text-teal-600 font-medium flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Payment Method
                </button>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Billing History</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 15, 2023</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Premium Plan (Annual)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$299.00</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-600">Download</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 15, 2022</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Premium Plan (Annual)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$299.00</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-600">Download</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
