"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import { Input } from "../_components/ui/input";
import { ScrollArea } from "../_components/ui/scroll-area";
import {
  Stethoscope,
  Heart,
  Activity,
  Calendar,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import Message from './Message';

interface MedicineData {
  medicine_name: string;
  composition: string;
  uses: string;
  side_effects: string;
  image_url: string;
  average_review: number;
}

type Message = {
  role: string;
  content: string | { results: MedicineData[] };
};

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      console.log('Sending payload:', JSON.stringify({ phrase: input }, null, 2));
      const response = await fetch(
        "http://172.27.49.73:8000/classify_and_search/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phrase: input }),
        },
      );

      console.log('Sent data:', { phrase: input });
      const data = await response.json();
      console.log('Received data:', data);
      const aiMessage = {
        role: "system",
        content: data
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        role: "system",
        content: "Sorry, I couldn't process your request at this time.",
      };
      console.log(error);
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)]">
      {/* Sidebar */}
      <div className="flex w-64 flex-col bg-gray-100 p-4">
        <div className="flex-grow space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
              <Heart className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72 BPM</div>
              <p className="text-muted-foreground text-xs">Normal range</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Blood Pressure
              </CardTitle>
              <Activity className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120/80</div>
              <p className="text-muted-foreground text-xs">Optimal</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Next Appointment
              </CardTitle>
              <Calendar className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Jun 15</div>
              <p className="text-muted-foreground text-xs">
                2:00 PM - Dr. Smith
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b bg-white px-4 py-3">
          <h1 className="text-2xl font-bold">Chat with Diagnose.Ai</h1>
          <Button variant="outline" className="text-white">
            <MessageSquare className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </header>

        {/* Chat area */}
        <ScrollArea className="flex-1 p-4">
          <div className="messages">
            {messages.map((message, index) => (
              <Message key={index} {...message} />
            ))}
          </div>
        </ScrollArea>

        {/* Input area */}
        <div className="border-t bg-white p-4">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2 max-w-4xl mx-auto">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 rounded-full bg-gray-100 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <Button 
              type="submit"
              className="rounded-full bg-color1 hover:bg-color1/90 text-white px-6"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
