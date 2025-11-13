import React, { useState } from 'react';

interface PreviewProps {
  content: string;
}

type PreviewWidth = 'mobile' | 'tablet' | 'full';

const Preview: React.FC<PreviewProps> = ({ content }) => {
  const [width, setWidth] = useState<PreviewWidth>('full');

  const getWidthClass = () => {
    switch (width) {
      case 'mobile':
        return 'max-w-sm';
      case 'tablet':
        return 'max-w-2xl';
      default:
        return 'max-w-none';
    }
  };

  const buttonBaseStyles = "px-3 py-1 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const activeButtonStyles = "bg-blue-600 text-white";
  const inactiveButtonStyles = "bg-slate-200 text-slate-700 hover:bg-slate-300";

  return (
    <div className="bg-slate-50 rounded-b-xl">
      {/* Customization Toolbar */}
      <div className="p-3 border-b border-slate-200 flex items-center justify-center space-x-2">
        <span className="text-sm font-medium text-slate-500 mr-2">View As:</span>
        <button className={`${buttonBaseStyles} ${width === 'mobile' ? activeButtonStyles : inactiveButtonStyles}`} onClick={() => setWidth('mobile')}>Mobile</button>
        <button className={`${buttonBaseStyles} ${width === 'tablet' ? activeButtonStyles : inactiveButtonStyles}`} onClick={() => setWidth('tablet')}>Tablet</button>
        <button className={`${buttonBaseStyles} ${width === 'full' ? activeButtonStyles : inactiveButtonStyles}`} onClick={() => setWidth('full')}>Desktop</button>
      </div>

      {/* Content Area */}
      <div className="p-6 flex justify-center">
        <div
          className={`prose ${getWidthClass()} min-h-[24rem] w-full transition-all duration-300 ease-in-out`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Preview;