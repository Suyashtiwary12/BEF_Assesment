import { useState } from 'react';

const TemplateEditor = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold">Email Template</h2>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Enter email subject..."
        />
      </div>

      {/* Message Editor */}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          rows={10}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-sm resize-none focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Write your email content here..."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow">
          Save Template
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
          Send Test Email
        </button>
      </div>

      {/* Preview */}
      <div className="mt-10 border rounded-md p-4 bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Preview</h3>
        <div className="text-sm text-gray-800">
          <p className="font-semibold">Subject: {subject || 'No subject'}</p>
          <div className="mt-2 whitespace-pre-line">{message || 'No message content.'}</div>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
