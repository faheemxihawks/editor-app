import React, { useEffect, useRef } from "react";
import Quill from "quill";
import axios from "axios";
import "quill/dist/quill.snow.css";

interface TextEditorProps {
  content: string;
  setContent: (content: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, setContent }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  // --- Axios Image Upload Function ---
  const uploadImageToServer = async (file: File) => {
    try {
      const formData = new FormData();
      // The field name "image" must match the server's expected field name.
      formData.append("image", file);

      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          const progress = Math.round((e.loaded * 100) / (e.total || 1));
          console.log("Upload progress:", progress + "%");
        },
      });

      console.log("Upload successful:", response.data);

      // The server returns a `path`, so we construct the full URL.
      const imageUrl = `http://localhost:3000${response.data.path}`;
      
      // The Quill handler expects an object with a `url` property.
      return { url: imageUrl };

    } catch (error: any) {
      console.error("Upload failed:", error.response?.data?.error || error.message);
      throw error;
    }
  };

  // --- Custom Image Handler for Quill ---
  const handleImageUpload = (quill: Quill) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (5MB limit to match server)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit');
        return;
      }

      try {
        const { url } = await uploadImageToServer(file);
        if (!url) {
          console.error("Server did not return image URL");
          return;
        }

        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, "image", url);
        quill.setSelection(range.index + 1);

      } catch (error) {
        console.error("Image upload failed", error);
        alert("Failed to upload image. Please try again.");
      }
    };

    input.click();
  };

  // --- Initialize Quill ---
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ align: [] }],
              ["link", "image", "code-block", "blockquote"],
              ["clean"],
            ],
            handlers: {
              image: function () {
                handleImageUpload(quill);
              },
            },
          },
        },
        placeholder: "Start writing your blog post here...",
      });

      quillRef.current = quill;

      if (content) {
        quill.clipboard.dangerouslyPasteHTML(content);
      }
    }
  }, [content]);

  // --- Sync Editor Content ---
  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;

    const handler = () => setContent(quill.root.innerHTML);

    quill.on("text-change", handler);
    return () => quill.off("text-change", handler);
  }, [setContent]);

  return (
    <div className="bg-white text-slate-800">
      <div
        ref={editorRef}
        style={{ minHeight: "24rem" }}
        className="max-h-[26rem] overflow-auto"
      ></div>
    </div>
  );
};

export default TextEditor;