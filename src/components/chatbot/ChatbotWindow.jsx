import { useRef, useEffect } from "react";
import { MessageCircle, X, Send, Zap } from "lucide-react";

const ChatbotWindow = ({
  isOpen,
  onClose,
  messages,
  inputValue,
  onInputChange,
  onSend,
  isTyping,
  quickReplies = [],
  onQuickReply,
}) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSend();
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] transition-all duration-300 ease-out ${isOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
    >
      <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-border/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/90 to-secondary/90 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">Creativix Assistant</h3>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-primary-foreground/70">Online • replies instantly</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[300px] overflow-y-auto p-4 space-y-3 bg-background/80 backdrop-blur-sm">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-slide-in`}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${message.isBot
                    ? "bg-muted text-foreground rounded-bl-md"
                    : "bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-br-md"
                  }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-slide-in">
              <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce-dot" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce-dot" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce-dot" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Reply Chips */}
        {quickReplies.length > 0 && (
          <div className="px-3 pt-2 pb-1 bg-background/90 border-t border-border/20 flex gap-2 overflow-x-auto scrollbar-none">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => onQuickReply(reply)}
                className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted hover:bg-primary/20 border border-border/50 hover:border-primary/50 text-xs text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <Zap className="w-3 h-3 text-primary" />
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-3 bg-background/90 border-t border-border/30">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our services…"
              className="flex-1 px-4 py-2.5 rounded-full bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              onClick={onSend}
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWindow;