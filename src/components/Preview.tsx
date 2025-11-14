import React, { useState } from 'react';

interface PreviewProps {
  content: string;
  Type?: string;
}

type PreviewWidth = 'mobile' | 'tablet' | 'full';
type Theme = 'light' | 'dark';

const Preview: React.FC<PreviewProps> = ({ content, Type }) => {
  const [width, setWidth] = useState<PreviewWidth>('full');
  const [theme, setTheme] = useState<Theme>('light');

  const getWidthClass = () => {
    switch (width) {
      case 'mobile':
        return 'max-w-sm'; // Small mobile view
      case 'tablet':
        return 'max-w-2xl'; // Tablet view
      default:
        return 'max-w-none'; // Full width
    }
  };

  const getTypeClass = () => {
    switch (Type) {
      case 'ai':
        return 'ai-tool-blog-details';
      case 'news':
        return 'news-details-content';
      default:
        return '';
    }
  };

  const getThemeClass = () => {
    if (theme === 'dark') {
      return 'bg-gray-800 text-white';
    }
    return 'bg-white text-gray-800';
  };

  return (
    <div className="bg-slate-200 rounded-b-xl">
      {/* Viewport Control Toolbar */}
      <div className="p-3 border-b border-slate-300 flex items-center justify-center space-x-2">
        <span className="text-sm font-medium text-slate-500 mr-2">View As:</span>
        <button
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            width === 'mobile' ? 'bg-blue-500 text-white' : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
          }`}
          onClick={() => setWidth('mobile')}
        >
          Mobile
        </button>
        <button
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            width === 'tablet' ? 'bg-blue-500 text-white' : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
          }`}
          onClick={() => setWidth('tablet')}
        >
          Tablet
        </button>
        <button
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            width === 'full' ? 'bg-blue-500 text-white' : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
          }`}
          onClick={() => setWidth('full')}
        >

          Desktop
        </button>
        <div className="border-l border-slate-400 h-6 mx-2"></div>
        <button
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            theme === 'light' ? 'bg-yellow-400 text-white' : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
          }`}
          onClick={() => setTheme('light')}
        >
          Light
        </button>
        <button
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
          }`}
          onClick={() => setTheme('dark')}
        >
          Dark
        </button>
      </div>

      {/* Content Preview Area */}
      <div className={`p-8 flex justify-center overflow-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-slate-200'}`} style={{ minHeight: '26rem' }}>
        <div
          className={`${getTypeClass()} blockquote p-6 shadow-md rounded-md ${getWidthClass()} w-full transition-all duration-300 ease-in-out ${getThemeClass()}`}
          dangerouslySetInnerHTML={{ __html: content || '<p class="text-slate-400">Your content will appear here...</p>' }}
        />
      </div>
    </div>
  );
};

export default Preview;