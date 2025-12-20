import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
  const defaultMessage = "Hi! I'm interested in PriyaHerbalHub products. Can you help me?";

  const handleSend = () => {
    const text = message || defaultMessage;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const quickMessages = [
    "I want to know about weight loss products",
    "Tell me about business opportunity",
    "I need product recommendations",
    "What are the best sellers?",
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-destructive text-destructive-foreground rotate-90" 
            : "bg-[#25D366] text-white hover:scale-110"
        }`}
        aria-label="WhatsApp Chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-background rounded-2xl shadow-2xl border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">PriyaHerbalHub</h3>
                <p className="text-xs opacity-80">Typically replies within minutes</p>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] dark:bg-muted/30 min-h-[200px]">
            {/* Welcome Message */}
            <div className="bg-white dark:bg-card rounded-lg p-3 shadow-sm max-w-[85%] mb-4">
              <p className="text-sm">
                Hello! 👋 Welcome to PriyaHerbalHub. How can we help you today?
              </p>
              <span className="text-xs text-muted-foreground mt-1 block">Just now</span>
            </div>

            {/* Quick Replies */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground mb-2">Quick replies:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(msg)}
                  className="block w-full text-left text-sm p-2 bg-white dark:bg-card rounded-lg hover:bg-muted/50 transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="bg-[#25D366] hover:bg-[#128C7E]">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
