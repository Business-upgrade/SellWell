import { ChatBubbleLeftRightIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const sampleQuestions = [
  "How can I reduce my return rate?",
  "Why are my sales down this month?",
  "What's the best pricing strategy for my products?",
  "How do I optimize my product listings?"
];

export default function SellerChatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your SellWell AI assistant. Ask me anything about growing your ecommerce business.",
      isBot: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      text: input,
      isBot: false
    };
    
    setMessages([...messages, newMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 2,
          text: getBotResponse(input),
          isBot: true
        }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (question) => {
    // In a real app, this would call your AI backend
    const responses = {
      "reduce return rate": "To reduce returns, consider: 1) Improving product descriptions and images, 2) Adding sizing charts, 3) Offering live chat support for pre-purchase questions, and 4) Analyzing return reasons to address common issues.",
      "sales down": "Sales fluctuations are normal, but common causes include: 1) Increased competition, 2) Seasonal trends, 3) Changes in marketplace algorithms, or 4) Pricing issues. I can analyze your data for specific insights if you'd like.",
      "pricing strategy": "Effective pricing strategies include: 1) Competitive analysis, 2) Value-based pricing, 3) Psychological pricing ($9.99 vs $10), and 4) Dynamic pricing based on demand. Would you like me to analyze your current pricing?",
      "optimize listings": "Optimize listings by: 1) Using high-quality images, 2) Including relevant keywords, 3) Writing detailed bullet points, 4) Adding video demonstrations, and 5) Encouraging positive reviews."
    };
    
    const lowerQuestion = question.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
      if (lowerQuestion.includes(key)) {
        return value;
      }
    }
    
    return "I can help with various ecommerce challenges. Try asking about reducing returns, improving sales, pricing strategies, or listing optimizations.";
  };

  return (
    <div className="h-full">
      <h3 className="flex items-center text-lg font-medium text-gray-900">
        <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2 text-green-500" />
        Seller AI Assistant
      </h3>
      <p className="mt-1 text-sm text-gray-500">Get data-driven advice for your ecommerce business.</p>
      
      <div className="mt-4 h-96 overflow-y-auto p-4 bg-gray-50 rounded-lg">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-white border border-gray-200'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {sampleQuestions.map((question, i) => (
            <button
              key={i}
              onClick={() => setInput(question)}
              className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200"
            >
              {question}
            </button>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about your business..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`p-2 rounded-r-lg ${
              !input.trim() ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}