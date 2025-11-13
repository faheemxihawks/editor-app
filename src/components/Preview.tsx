import React, { useState } from 'react';

interface PreviewProps {
  content: string;
  title: string;
  tags: string;
}

type PreviewWidth = 'mobile' | 'tablet' | 'full';

const Preview: React.FC<PreviewProps> = ({ content, title, tags }) => {
  const [width, setWidth] = useState<PreviewWidth>('full');

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

  const buttonBaseStyles = "px-3 py-1 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const activeButtonStyles = "bg-blue-600 text-white";
  const inactiveButtonStyles = "bg-slate-200 text-slate-700 hover:bg-slate-300";

  return (
    <div className="bg-slate-200 rounded-b-xl">
      {/* Viewport Control Toolbar */}
      <div className="p-3 border-b border-slate-300 flex items-center justify-center space-x-2">
        <span className="text-sm font-medium text-slate-500 mr-2">View As:</span>
        <button className={`${buttonBaseStyles} ${width === 'mobile' ? activeButtonStyles : inactiveButtonStyles}`} onClick={() => setWidth('mobile')}>Mobile</button>
        <button className={`${buttonBaseStyles} ${width === 'tablet' ? activeButtonStyles : inactiveButtonStyles}`} onClick={() => setWidth('tablet')}>Tablet</button>
        <button className={`${buttonBaseStyles} ${width === 'full' ? activeButtonStyles : inactiveButtonStyles}`} onClick={() => setWidth('full')}>Desktop</button>
      </div>

      {/* Content Preview Area */}
      <div className="p-8 flex justify-center overflow-auto" style={{ minHeight: '26rem' }}>
        <div
          className={`prose prose-lg bg-white p-6 shadow-md rounded-md ${getWidthClass()} w-full transition-all duration-300 ease-in-out`}
          dangerouslySetInnerHTML={{ __html: content || '<p class="text-slate-400">Your content will appear here...</p>' }}
        />
      </div>
    </div>
  );
};

export default Preview;