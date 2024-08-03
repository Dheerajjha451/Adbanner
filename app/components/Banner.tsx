import React from 'react';

interface BannerProps {
  title: string;
  image: string;
  onEdit: () => void;
}

const Banner: React.FC<BannerProps> = ({ title,   image, onEdit }) => {
  return (
    <div className="relative p-4 bg-white rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <div className="mt-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <button className="absolute top-2 right-2 bg-gray-300 p-2 rounded" onClick={onEdit}>
        ✏️
      </button>
    </div>
  );
};

export default Banner;