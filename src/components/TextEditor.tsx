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

  // === FIXED IMAGE UPLOAD FUNCTION ===
  const uploadImageToServer = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file); // MUST be "media"

      const response = await axios.post(
        "https://aichief-be-beige.vercel.app/api/media/upload",
        formData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Nzg3MTJiN2U3NmNjYjViMDA2N2JlYSIsInJvbGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzYyNzY2OTE2LCJleHAiOjE3NjMxOTg5MTZ9.lOtXFT7WqViP-P6xx6YgGYIKv5R9bajlRTng23-QOG8",
          },
        }
      );

      console.log("Upload Response:", response.data);

      // FIX: URL is inside data.data.url
      return response.data?.data?.url;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  // === CUSTOM IMAGE HANDLER ===
  const handleImageUpload = (quill: Quill) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB");
        return;
      }

      try {
        const imageUrl = await uploadImageToServer(file);

        if (!imageUrl) {
          alert("Failed to upload image. Server did not return URL.");
          return;
        }

        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, "image", imageUrl);
        quill.setSelection(range.index + 1);
      } catch (err) {
        console.error(err);
        alert("Image upload failed");
      }
    };

    input.click();
  };

  // === INIT QUILL ===
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ align: [] }],
              ["link", "image"],
              ["clean"],
            ],
            handlers: {
              image: function () {
                handleImageUpload(quill);
              },
            },
          },
        },
        placeholder: "Start writing...",
      });

      quillRef.current = quill;

      if (content) {
        quill.clipboard.dangerouslyPasteHTML(content);
      }
    }
  }, []);

  // === UPDATE CONTENT ===
  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;

    const handler = () => setContent(quill.root.innerHTML);
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [setContent]);

  return (
    <div className="bg-white text-slate-800">
      <div
        ref={editorRef}
        style={{ minHeight: "24rem" }}
        className="max-h-[26rem] overflow-auto"
      />
    </div>
  );
};

export default TextEditor;
