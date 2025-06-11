"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Hub - AI Chatbot",
  description: "Get instant answers to your legal queries with our AI-powered chatbot.",
}

export default function ChatbotPage() {
  const [messages, setMessages] = React.useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = React.useState<string>("")
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // Function to send message to Genkit API
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user" as const, content: input.trim() }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/genkit/sayHello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flow: "sayHello",
          input: userMessage.content,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const aiResponse = { role: "assistant" as const, content: data.result || "Error: No response from AI." }
      setMessages((prevMessages) => [...prevMessages, aiResponse])
    } catch (error) {
      console.error("Error sending message to Genkit:", error)
      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: "Error: Could not connect to AI. Please try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  // Scroll to bottom of chat
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex h-[calc(100vh-64px-1rem)] flex-col">
      <section className="container flex flex-1 flex-col py-8 md:py-12 lg:py-16">
        <h1 className="text-4xl font-bold font-headline mb-4 text-center">AI Legal Assistant</h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Ask me anything about Indian law, and I&apos;ll do my best to help!
        </p>

        <div className="flex-1 flex flex-col justify-end border rounded-lg p-4 bg-muted/20 overflow-hidden">
          <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar pr-2">
            {messages.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center pt-10">
                Type your question below to start chatting...
              </p>
            ) : (
              messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} className="mb-4" />
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area for chat */}
          <form onSubmit={sendMessage} className="relative flex items-center">
            <Input
              type="text"
              placeholder={isLoading ? "Generating response..." : "Ask a legal question..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-3 pr-12 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" className="absolute right-2" disabled={isLoading}>
              <Send className="h-5 w-5" />
              <span className="sr-only">Send Message</span>
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
