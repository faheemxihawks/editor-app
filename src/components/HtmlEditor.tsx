import React from 'react';

interface HtmlEditorProps {
  content: string;
}

const HtmlEditor: React.FC<HtmlEditorProps> = ({ content }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-b-lg">
      <pre className="h-96 overflow-auto"><code>{content}</code></pre>
    </div>
  );
};

export default HtmlEditor;