import { useState } from 'react';
import { PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function EmailGenerator() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setResponse(`Thank you for reaching out about your recent order. We appreciate your business and want to ensure you're completely satisfied with your purchase. If you have any specific concerns, please let us know so we can make it right.`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div>
      <h3 className="flex items-center text-lg font-medium text-gray-900">
        <SparklesIcon className="w-5 h-5 mr-2 text-yellow-500" />
        AI Email Generator
      </h3>
      <p className="mt-1 text-sm text-gray-500">Generate professional responses to customer inquiries.</p>
      
      <div className="mt-4">
        <label htmlFor="customer-query" className="block text-sm font-medium text-gray-700">
          Customer Query
        </label>
        <textarea
          id="customer-query"
          rows={3}
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Paste the customer's message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      
      <button
        onClick={handleGenerate}
        disabled={!input || isGenerating}
        className={`flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white rounded-lg ${!input || isGenerating ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {isGenerating ? 'Generating...' : 'Generate Response'}
      </button>
      
      {response && (
        <div className="mt-6">
          <label htmlFor="ai-response" className="block text-sm font-medium text-gray-700">
            AI-Generated Response
          </label>
          <div className="relative mt-1">
            <textarea
              id="ai-response"
              rows={5}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={response}
              readOnly
            />
            <button
              className="absolute bottom-3 right-3 p-1 text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200"
              onClick={() => navigator.clipboard.writeText(response)}
            >
              <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}