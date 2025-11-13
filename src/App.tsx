import { useState } from 'react';
import TextEditor from './components/TextEditor';
import Preview from './components/Preview';
import HtmlEditor from './components/HtmlEditor';

function App() {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'html'>('editor');
  const [content, setContent] = useState<string>('');

  const tabStyles = "py-2 px-4 cursor-pointer font-semibold rounded-t-lg -mb-px";
  const activeTabStyles = "bg-white text-blue-600 border-t border-l border-r border-gray-300";
  const inactiveTabStyles = "bg-gray-200 text-gray-600 hover:bg-gray-300 border-t border-l border-r border-transparent";

  return (
    <div className="w-full mx-auto p-4 mt-10">
      
      <div className="flex border-b border-gray-300">
        <div
          className={`${tabStyles} ${activeTab === 'editor' ? activeTabStyles : inactiveTabStyles} border border-gray-300`}
          onClick={() => setActiveTab('editor')}
        >
          Editor
        </div>
        <div
          className={`${tabStyles} ${activeTab === 'preview' ? activeTabStyles : inactiveTabStyles} border border-gray-300`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </div>
        <div
          className={`${tabStyles} ${activeTab === 'html' ? activeTabStyles : inactiveTabStyles} border border-gray-300`}
          onClick={() => setActiveTab('html')}
        >
          HTML
        </div>
      </div>
      <div className="relative">
        {activeTab === 'editor' && <TextEditor content={content} setContent={setContent} />}
        {activeTab === 'preview' && <Preview content={content} />}
        {activeTab === 'html' && <HtmlEditor content={content} />}
      </div>
    </div>
  )
}

export default App
