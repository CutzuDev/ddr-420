'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "../_components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card"
import { Input } from "../_components/ui/input"
import { ScrollArea } from "../_components/ui/scroll-area"
import { Stethoscope, Heart, Activity, Calendar, MessageSquare, Send, User } from 'lucide-react'

export default function DashboardPage() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to MediCare. How can I assist you today?' },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")

    // Simulate an AI response
    setTimeout(() => {
      const aiMessage = { role: 'system', content: 'Thank you for your message. A healthcare professional will respond to you shortly.' }
      setMessages(prev => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 flex flex-col">
        <div className="space-y-4 flex-grow">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
              <Heart className="w-4 h-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72 BPM</div>
              <p className="text-xs text-muted-foreground">Normal range</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
              <Activity className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120/80</div>
              <p className="text-xs text-muted-foreground">Optimal</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
              <Calendar className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Jun 15</div>
              <p className="text-xs text-muted-foreground">2:00 PM - Dr. Smith</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Chat with MediCare</h1>
          <Button variant="outline">
            <MessageSquare className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </header>

        {/* Chat area */}
        <ScrollArea className="flex-1 p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              <div className={`flex items-start ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${message.role === 'user' ? 'bg-blue-500 ml-2' : 'bg-gray-300 mr-2'}`}>
                  {message.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Stethoscope className="w-5 h-5 text-gray-600" />}
                </div>
                <div className={`max-w-md p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Input area */}
        <div className="border-t p-4">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1"
            />
            <Button type="submit">
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

