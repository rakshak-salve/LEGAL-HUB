import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: {
    role: "user" | "assistant"
    content: string
  }
}

export function ChatMessage({ message, className, ...props }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div
      className={cn("flex items-start gap-3", isUser ? "justify-end" : "justify-start", className)}
      {...props}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[70%] rounded-lg p-3 text-sm",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        )}
      >
        {message.content}
      </div>
      {isUser && (
        <Avatar className="h-8 w-8 bg-accent text-accent-foreground">
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
