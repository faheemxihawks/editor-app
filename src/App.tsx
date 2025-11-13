import { useState } from 'react';
import TextEditor from './components/TextEditor';
import Preview from './components/Preview';
import HtmlEditor from './components/HtmlEditor';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'html' | 'settings'>('editor');
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('Your Awesome Blog Post Title');
  const [tags, setTags] = useState<string>('react, typescript, webdev');

  const tabStyles = "py-2 px-6 cursor-pointer font-medium text-slate-600 rounded-t-md";
  const activeTabStyles = "text-blue-600 border-b-2 border-blue-600";
  const inactiveTabStyles = "hover:bg-slate-100 rounded-t-md";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col items-center py-10">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-2 text-slate-900">Modern Blog Editor</h1>
        <p className="text-center text-slate-500 mb-8">Write, preview, and edit your content seamlessly.</p>

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
            <div className={`${tabStyles} ${activeTab === 'settings' ? activeTabStyles : inactiveTabStyles}`} onClick={() => setActiveTab('settings')}>
              Settings
            </div>
          </div>
          <div className="relative">
            {activeTab === 'editor' && <TextEditor content={content} setContent={setContent} />}
            {activeTab === 'preview' && <Preview content={content} title={title} tags={tags} />}
            {activeTab === 'html' && <HtmlEditor content={content} setContent={setContent} />}
            {activeTab === 'settings' && <Settings title={title} setTitle={setTitle} tags={tags} setTags={setTags} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
