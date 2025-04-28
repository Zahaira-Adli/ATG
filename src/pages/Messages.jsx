"use client"

import { useState } from "react"
import { SearchIcon } from "../components/Icons"

export default function Messages() {
  const [activeChat, setActiveChat] = useState(0)

  const contacts = [
    {
      id: 0,
      name: "ATG Support Team",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "We've reviewed your application and have some updates for you.",
      time: "10:30 AM",
      unread: 2,
    },
    {
      id: 1,
      name: "Ecobank Representative",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thank you for submitting your documents. We'll be in touch shortly.",
      time: "Yesterday",
      unread: 0,
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-[calc(100vh-10rem)]">
      <div className="flex h-full">
        {/* Contacts sidebar */}
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="overflow-y-auto flex-1">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  activeChat === contact.id ? "bg-gray-50" : ""
                }`}
                onClick={() => setActiveChat(contact.id)}
              >
                <div className="flex items-start">
                  <img
                    src={contact.avatar || "/placeholder.svg"}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">{contact.name}</h3>
                      <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{contact.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <span className="bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
