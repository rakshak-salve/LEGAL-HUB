import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Hub - AI Chatbot",
  description: "Get instant answers to your legal queries with our AI-powered chatbot.",
}

export default function ChatbotPage() {
  return (
    <div className="flex h-[calc(100vh-64px-1rem)] flex-col"> {/* Adjust height to fit between header and footer */}
      <section className="container flex flex-1 flex-col py-8 md:py-12 lg:py-16">
        <h1 className="text-4xl font-bold font-headline mb-4 text-center">AI Legal Assistant</h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Ask me anything about Indian law, and I&apos;ll do my best to help!
        </p>

        {/* This will be the chat interface area */}
        <div className="flex-1 flex flex-col justify-end border rounded-lg p-4 bg-muted/20">
          <div className="flex-1 overflow-y-auto mb-4">
            {/* Chat messages will appear here */}
            <p className="text-sm text-muted-foreground">
              Type your question below to start chatting...
            </p>
          </div>
          {/* Input area for chat */}
          <div className="relative">
            {/* Placeholder for chat input and send button */}
            <input
              type="text"
              placeholder="Ask a legal question..."
              className="w-full p-3 pr-12 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80">
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
