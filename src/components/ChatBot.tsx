import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const predefinedReplies = {
  design: "Our Graphic Design services include Logo, Brochure, Poster & Flex, Album Design, and Product Design. We create engrossing designs that communicate your brand effectively!",
  branding: "We specialize in creating unique brand identities that resonate with your target audience. From logo design to complete brand guidelines, we've got you covered!",
  marketing: "Our Digital Marketing services include SEO, SEM, Social Media Marketing, Influencer Marketing, and Performance Marketing to grow your online presence!",
  social: "We craft engaging Social Media content and strategies to boost your brand's visibility and connect with your audience across all platforms.",
  website: "We build engaging E-commerce Websites, Business Websites, ERP Software, Travel Booking systems, and custom Software Design solutions!",
  default: "Thanks for reaching out! We offer Graphic Design, Branding, Digital Marketing, Website Design, Content Writing, Printing, and Photography services. How can we help you today?"
};

const getAutoReply = (message) => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes("design") || lowerMessage.includes("logo") || lowerMessage.includes("poster")) {
    return predefinedReplies.design;
  }
  if (lowerMessage.includes("brand")) {
    return predefinedReplies.branding;
  }
  if (lowerMessage.includes("marketing") || lowerMessage.includes("seo")) {
    return predefinedReplies.marketing;
  }
  if (lowerMessage.includes("social") || lowerMessage.includes("instagram") || lowerMessage.includes("facebook")) {
    return predefinedReplies.social;
  }
  if (lowerMessage.includes("website") || lowerMessage.includes("web") || lowerMessage.includes("software")) {
    return predefinedReplies.website;
  }
  return predefinedReplies.default;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! 👋 I'm your Creative Assistant. Ask me about our design, branding, or marketing services!", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
        id: Date.now() + 1,
        text: getAutoReply(inputValue),
        isBot: true
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100 animate-bounce-gentle"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] transition-all duration-300 ease-out ${
          isOpen
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
                <h3 className="font-semibold text-primary-foreground">Creative Assistant</h3>
                <p className="text-xs text-primary-foreground/70">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[320px] overflow-y-auto p-4 space-y-3 bg-background/80 backdrop-blur-sm">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-slide-in`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                    message.isBot
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

          {/* Input */}
          <div className="p-3 bg-background/90 border-t border-border/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about design, branding, or marketing…"
                className="flex-1 px-4 py-2.5 rounded-full bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button
                onClick={handleSend}
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
    </>
  );
};

export default ChatBot;
