import EmailGenerator from '../components/EmailGenerator';
import InboxSummarizer from '../components/InboxSummarizer';

export default function CustomerComms() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Customer Communications</h2>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <EmailGenerator />
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <InboxSummarizer />
        </div>
      </div>
    </div>
  );
}