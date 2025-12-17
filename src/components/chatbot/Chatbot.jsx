import { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotWindow from "./ChatbotWindow";

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

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! 👋 I'm your Creative Assistant. Ask me about our design, branding, or marketing services!", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
        id: Date.now() + 1,
        text: getAutoReply(currentInput),
        isBot: true
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1500);
  };

  return (
    <>
      <ChatbotButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
      <ChatbotWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSend={handleSend}
        isTyping={isTyping}
      />
    </>
  );
};

export default Chatbot;