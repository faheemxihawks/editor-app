import React, { useState } from 'react';
import Button from './ui/Button';

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

  return (
    <div className="bg-slate-200 rounded-b-xl">
      {/* Viewport Control Toolbar */}
      <div className="p-3 border-b border-slate-300 flex items-center justify-center space-x-2">
        <span className="text-sm font-medium text-slate-500 mr-2">View As:</span>
        <Button
          size="sm"
          variant={width === 'mobile' ? 'primary' : 'secondary'}
          onClick={() => setWidth('mobile')}
        >Mobile</Button>
        <Button
          size="sm"
          variant={width === 'tablet' ? 'primary' : 'secondary'}
          onClick={() => setWidth('tablet')}
        >Tablet</Button>
        <Button
          size="sm"
          variant={width === 'full' ? 'primary' : 'secondary'}
          onClick={() => setWidth('full')}
        >Desktop</Button>
      </div>

      {/* Content Preview Area */}
      <div className="p-8 flex justify-center overflow-auto" style={{ minHeight: '26rem' }}>
        <div
          className={`prose prose-lg bg-white p-6 shadow-md rounded-md ${getWidthClass()} w-full transition-all duration-300 ease-in-out`}
        >
          <h1>{title || 'Your Title Here'}</h1>
          {tags && <div className="tags mb-4 text-sm text-slate-500">
            {tags.split(',').map((tag, index) => (
              <span key={`${tag.trim()}-${index}`} className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 mr-2">#{tag.trim()}</span>
            ))}
          </div>}
          <div dangerouslySetInnerHTML={{ __html: content || '<p class="text-slate-400">Your content will appear here...</p>' }} />
        </div>
      </div>
    </div>
  );
};

export default Preview;