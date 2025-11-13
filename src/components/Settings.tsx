import React from 'react';

interface SettingsProps {
  title: string;
  setTitle: (title: string) => void;
  tags: string;
  setTags: (tags: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ title, setTitle, tags, setTags }) => {
  return (
    <div className="p-6 bg-white rounded-b-xl min-h-[26rem]">
      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your Awesome Blog Post Title"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-slate-700 mb-1">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-3"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="react, typescript, webdev"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;