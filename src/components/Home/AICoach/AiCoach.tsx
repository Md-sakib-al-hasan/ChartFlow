"use client"

import { useState } from "react"
import { BarChart3, Copy, MessageSquare, RefreshCw, Send, ThumbsDown, ThumbsUp, Volume2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import cript from "@/assets/cript.png"
import practices from "@/assets/practices.png"
import Image from "next/image"

export default function AICoach() {
  const [message, setMessage] = useState("")

  return (
    <div className="w-full  bg-blue-800 p-4 md:p-8">
      <div className="container mx-auto px-4 md:px-6">
        <header style={{ fontFamily: "var(--font-questrial)" }} className="text-white mb-6">
          <div  className="text-[24px] mb-1">Live AI Coach</div>
          <h1 className="text-3xl md:text-[60px] font-medium">Take a Suggestion Coaching</h1>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          {/* Chat Section - Takes up 2/3 on large screens */}
          <Card className="lg:col-span-2 bg-white rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-50 p-4">
              <CardTitle className="text-base font-medium">AI Sales Coach</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col h-full">
                {/* Chat Messages */}
                <div className="flex-1 p-4 min-h-[300px] md:min-h-[300px] overflow-y-auto">
                  <div className="flex gap-3 mb-4">
                    <Avatar className="h-8 w-8 bg-gray-200">
                      <div className="rounded-full bg-gray-200 h-full w-full" />
                    </Avatar>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[85%]">
                      <p className="text-sm">
                        Hello! I'm your AI sales coach. How can I help you improve your sales performance today?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Suggestion Buttons */}
                <div className="border-t p-3 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="text-xs rounded-full bg-gray-100 border-gray-200">
                    How do I handle objections?
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs rounded-full bg-gray-100 border-gray-200">
                    Give me a cold email template
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs rounded-full bg-gray-100 border-gray-200">
                    Closing techniques
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs rounded-full bg-gray-100 border-gray-200">
                    Negotiation tips
                  </Button>
                </div>

                {/* Input Area */}
                <div className="border-t p-3 flex items-center">
                  <input
                    type="text"
                    placeholder="Ask anything you need..."
                    className="flex-1 border-0 bg-transparent text-sm focus:outline-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button size="sm" className="bg-blue-800 hover:bg-blue-700 ml-2 p-5 flex items-center gap-1">
                    Send
                    <Send className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

        
         

          {/* Right Side Panels */}
          <div className="lg:col-span-1 space-y-4 flex gap gap-6 items-center ">


          <div className="hidden lg:flex flex-col items-center justify-center gap-4 rounded-2xl px-2  py-6 bg-white">
            <Button  size="icon" className="h-10 w-10 rounded-full  bg-white">
              <RefreshCw className="h-5 w-5 text-blue-800" />
            </Button>
            <Button  size="icon" className="h-10 w-10 rounded-full bg-white">
              <ThumbsUp className="h-5 w-5 text-blue-800" />
            </Button>
            <Button  size="icon" className="h-10 w-10 rounded-full bg-white">
              <ThumbsDown className="h-5 w-5 text-blue-800" />
            </Button>
            <Button size="icon" className="h-10 w-10 rounded-full bg-white">
              <Copy className="h-5 w-5 text-blue-800" />
            </Button>
            <Button  size="icon" className="h-10 w-10 rounded-full bg-white">
              <Volume2 className="h-5 w-5 text-blue-800" />
            </Button>
          </div >

            {/* Analysis Panel */}
             <div className="w-full space-y-6">
             <Card className=" rounded-lg p-[20px] bg-[#efefef] ">
              <CardHeader className="">
                <CardTitle className="text-lg font-bold text-[32px]">Real-time Analysis</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-4">
                <div className="space-y-2 bg-white pl-4 pt-4  pr-4 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500 h-2 w-2 p-0 rounded-full" />
                    <span className="text-[18ppx] font-semibold">Confidence Level</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full w-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: "60%" }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span></span>
                    <span>60%</span>
                  </div>
                </div>

                <div className="space-y-2 bg-white p-4  rounded-2xl ">
                  <div className="flex items-center gap-2 ">
                    <BarChart3 className="h-4 w-4" />
                    <span className="text-[18px]  fonts-semibold">Confidence Level</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-lato)" }} className="text-sm font-normal text-gray-600">93% improvement in objection handling</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions Panel */}
            <Card className="bg-white rounded-lg">
              <CardHeader className="">
                <CardTitle className="text-[32px] font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className=" pt-0">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto  flex flex-col items-start justify-center gap-2">
                  <Image src={cript.src} alt="cript"  width={30} height={30} />
                    <span className="text-[18px] font-semibold">Generate Script</span>
                  </Button>
                  <Button variant="outline" className="h-auto  flex flex-col items-start justify-center   gap-2">
                    <Image src={practices.src} alt="cript"  width={30} height={30} />
                    <span className="text-[18px] font-semibold">Practice Pitch</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
