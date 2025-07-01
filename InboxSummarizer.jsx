import { InboxIcon, SparklesIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function InboxSummarizer() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      platform: 'Amazon',
      subject: 'Order #12345 delayed',
      summary: 'Customer inquiring about delayed shipment of order #12345',
      priority: 'high',
      suggestedResponse: 'We apologize for the delay. Your order is on the way and should arrive by Friday. We\'ve added a $5 credit to your account for the inconvenience.'
    },
    {
      id: 2,
      platform: 'Etsy',
      subject: 'Product customization question',
      summary: 'Customer wants to know if custom engraving is available',
      priority: 'medium',
      suggestedResponse: 'Yes! We offer custom engraving for an additional $10. Please reply with your desired text and we\'ll send a preview before processing.'
    },
    {
      id: 3,
      platform: 'eBay',
      subject: 'Return request',
      summary: 'Customer wants to return item due to sizing issue',
      priority: 'high',
      suggestedResponse: 'We\'re sorry the item didn\'t fit. Our return label is attached. Once we receive it, we\'ll process your refund or exchange immediately.'
    }
  ]);

  const handleAction = (id, action) => {
    // In a real app, this would update the backend
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <div>
      <h3 className="flex items-center text-lg font-medium text-gray-900">
        <InboxIcon className="w-5 h-5 mr-2 text-blue-500" />
        Inbox Summarizer
      </h3>
      <p className="mt-1 text-sm text-gray-500">Manage and respond to customer messages across platforms.</p>
      
      <div className="mt-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    message.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {message.platform}
                  </span>
                  <span className="ml-2 text-sm font-medium text-gray-700">{message.subject}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{message.summary}</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleAction(message.id, 'approve')}
                  className="p-1 text-green-600 bg-green-100 rounded-full hover:bg-green-200"
                >
                  <CheckIcon className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleAction(message.id, 'reject')}
                  className="p-1 text-red-600 bg-red-100 rounded-full hover:bg-red-200"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center text-sm font-medium text-blue-800">
                <SparklesIcon className="w-4 h-4 mr-1" />
                Suggested Response
              </div>
              <p className="mt-1 text-sm text-gray-700">{message.suggestedResponse}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}