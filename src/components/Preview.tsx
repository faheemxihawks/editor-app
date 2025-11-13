import React from 'react';

interface PreviewProps {
  content: string;
  title: string;
  tags: string;
}

const Preview: React.FC<PreviewProps> = ({ content, title, tags }) => {
  return (
    <div className="p-6 bg-white rounded-b-xl min-h-[26rem]">
      <div
        className="prose max-w-none prose-lg"
        dangerouslySetInnerHTML={{
          __html: content || '<p class="text-slate-400">Your content will appear here...</p>',
        }}
      />
    </div>
  );
};

export default Preview;