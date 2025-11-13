import React, { useEffect, useRef, useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles

interface TextEditorProps {
  content: string;
  setContent: (content: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, setContent }) => {
  const quillRef = useRef<Quill | null>(null);

  // Use a callback ref to initialize Quill
  const wrapperRef = useCallback((wrapper: HTMLDivElement | null) => {
    if (wrapper == null) return;

    wrapper.innerHTML = ''; // Clear previous instances
    const editor = document.createElement('div');
    wrapper.append(editor);

    const q = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [ 2, 3, 4, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'align': [] }],
          ['link', 'image', 'code-block', 'blockquote'],
          ['clean']
        ],
      },
      placeholder: "Start writing your blog post here...",
    });

    // Set initial content
    if (content) {
      q.root.innerHTML = content;
    }

    quillRef.current = q;

    // Listen for changes and update the state
    q.on('text-change', () => {
      setContent(q.root.innerHTML);
    });
    
  }, [content, setContent]);

  return (
    <div className="bg-white text-gray-800">
      <div ref={wrapperRef} style={{ minHeight: '24rem' }}></div>
    </div>
  );
};

export default TextEditor;