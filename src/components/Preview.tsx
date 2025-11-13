import React from 'react';

interface PreviewProps {
  content: string;
}

const Preview: React.FC<PreviewProps> = ({ content }) => {
  return (
    <div className="p-4 bg-white rounded-b-lg border-t-0 text-gray-800">
      <div
        className="prose min-w-full h-96"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Preview;