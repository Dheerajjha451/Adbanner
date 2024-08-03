import React, { useState } from 'react';
import { Upload, X, Download } from 'lucide-react';

interface EditBannerProps {
  initialTitle: string;
  initialDescription: string;
  initialImage: string;
  onSave: (title: string, description: string,  image: string) => void;
  onClose: () => void;
}

const EdditBanner: React.FC<EditBannerProps> = ({ initialTitle, initialDescription,  initialImage, onSave, onClose }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [image, setImage] = useState(initialImage);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setImage(event.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    onSave(title, description, image);
    onClose();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image;
    link.download = 'banner-image.png';
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-md relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <X className="w-6 h-6 text-gray-600" />
        </button>
        <h2 className="text-xl font-bold mb-4 text-black">Edit Banner</h2>
        {image && (
          <>
            <img src={image} alt="Banner" className="mt-4 w-full h-40 object-cover rounded-lg" />
          
          </>
        )}
        <h1 className='font-bold mt-4'>Images</h1>
        <div className="flex justify-center mt-4">
          <label className="relative cursor-pointer">
            <input type="file" className="hidden" onChange={handleFileChange} />
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-gray-600" />
            </div>
          </label>
        </div>
        <label className="block mt-4 mb-2">Title</label>
        <input type="text" className="w-full border p-2 rounded" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label className="block mt-4 mb-2 text-black">Description</label>
        <textarea className="w-full border p-2 rounded" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className="mt-6 ">
          <button className="bg-gray-500 text-white w-full py-2 rounded" onClick={handleSave}>Save</button>
        </div>
        <button className="mt-2 text-blue-700 w-full py-2 rounded" onClick={handleDownload}>
              <Download className="inline-block w-4 h-4 mr-2" /> Download
            </button>
      </div>
    </div>
  );
};

export default EdditBanner;