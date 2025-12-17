import { MessageCircle } from "lucide-react";

const ChatbotButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100 animate-bounce-gentle"
      }`}
      aria-label="Open chat"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </button>
  );
};

export default ChatbotButton;