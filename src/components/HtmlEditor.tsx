import React, { useEffect } from "react";

interface HtmlEditorProps {
  content: string;
  setContent: (content: string) => void;
  Type?: string;
}

const HtmlEditor: React.FC<HtmlEditorProps> = ({
  content,
  setContent,

}) => { 
  return (
    <div className="bg-slate-900 rounded-b-xl">
      <textarea
        className="w-full min-h-[26rem]  text-green-300 text-xs p-6 bg-slate-900 text-slate-300 font-mono focus:outline-none rounded-b-xl resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Edit the HTML directly..."
      />
    </div>
  );
};

export default HtmlEditor;
