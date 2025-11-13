import React from 'react';

interface PreviewProps {
  content: string;
}

const Preview: React.FC<PreviewProps> = ({ content }) => {
  return (
    <div className="p-6 bg-white rounded-b-xl">
      <div
        className="prose max-w-none min-h-[24rem]"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Preview;