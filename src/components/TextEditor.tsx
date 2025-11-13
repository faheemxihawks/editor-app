import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles

interface TextEditorProps {
  content: string;
  setContent: (content: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, setContent }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  // Effect to initialize the editor
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'image', 'code-block', 'blockquote'],
            ['clean']
          ]
        },
        placeholder: "Start writing your blog post here...",
      });
    }
  }, []); // Run only once on mount

  // Effect to handle text changes
  useEffect(() => {
    const quill = quillRef.current;
    if (quill) {
      const handler = (_delta: any, _oldDelta: any, source: string) => {
        if (source === 'user') {
          setContent(quill.root.innerHTML);
        }
      };
      quill.on('text-change', handler);
      return () => {
        quill.off('text-change', handler);
      };
    }
  }, [setContent]);

  // Effect to update editor when content prop changes from outside
  useEffect(() => {
    const quill = quillRef.current;
    if (quill) {
      // Check if the content is actually different to avoid cursor jumping
      // and infinite loops.
      if (quill.root.innerHTML !== content) {
        quill.clipboard.dangerouslyPasteHTML(content);
      }
    }
  }, [content]);

  return (
    <div className="bg-white text-slate-800">
      {/* The editor container itself */}
      <div ref={editorRef} style={{ minHeight: '24rem' }}></div>
    </div>
  );
};

export default TextEditor;