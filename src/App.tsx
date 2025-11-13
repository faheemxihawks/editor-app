import { useState } from 'react';
import TextEditor from './components/TextEditor';
import Preview from './components/Preview';
import HtmlEditor from './components/HtmlEditor';
import Templates from './components/Templates';

function App() {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'html' | 'templates'>('editor');
  const [content, setContent] = useState<string>('');
  const [type, setType] = useState<string>('');


  const handleSelectTemplate = (template: { title: string; tags: string; content: string }) => {
    setContent(template.content);
    setActiveTab('editor'); // Switch to editor after selecting a template
  };

  const tabStyles = "py-2 px-6 cursor-pointer font-medium text-slate-600";
  const activeTabStyles = "text-blue-600 border-b-2 border-blue-600";
  const inactiveTabStyles = "hover:bg-slate-100 rounded-t-md";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col items-center py-10">
      <div className="w-full max-w-5xl">
        <div className='w-full flex justify-center gap-2 mb-4'>
          <button className='p-2 border bg-gray-400 cursor-pointer rounded-md hover:bg-gray-500'
            onClick={() => setType("ai")}>Ai</button>
          <button className='p-2 border bg-gray-400 cursor-pointer rounded-md hover:bg-gray-500'
            onClick={() => setType("news")}>News</button>
          <button className='p-2 border bg-gray-400 cursor-pointer rounded-md hover:bg-gray-500'
            onClick={() => setType("tech")}>Tech news</button>
        </div>
        <div className="bg-white rounded-xl shadow-lg">
          <div className="flex border-b border-slate-200 px-4">
            <div className={`${tabStyles} ${activeTab === 'editor' ? activeTabStyles : inactiveTabStyles}`} onClick={() => setActiveTab('editor')}>
              Editor
            </div>
            <div className={`${tabStyles} ${activeTab === 'preview' ? activeTabStyles : inactiveTabStyles}`} onClick={() => setActiveTab('preview')}>
              Preview
            </div>
            <div className={`${tabStyles} ${activeTab === 'html' ? activeTabStyles : inactiveTabStyles}`} onClick={() => setActiveTab('html')}>
              HTML
            </div>
            <div className={`${tabStyles} ${activeTab === 'templates' ? activeTabStyles : inactiveTabStyles}`} onClick={() => setActiveTab('templates')}>
              Templates
            </div>
          </div>
          <div className="relative">
            {activeTab === 'editor' && <TextEditor content={content} setContent={setContent} />}
            {activeTab === 'preview' && <Preview content={content} Type={type}/>}
            {activeTab === 'html' && <HtmlEditor  content={content} setContent={setContent} />}
            {activeTab === 'templates' && <Templates onSelectTemplate={handleSelectTemplate} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
