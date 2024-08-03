"use client";
import React, { useState } from 'react';
import Banner from './components/Banner';
import EditBanner from './components/EditBanner';
import Image1 from '../public/banner.png';
import Image2 from '../public/banner1.png';
import MaxWidthWrapper from './components/MaxwidthWrapper';

const initialBanners = [
  {
    title: 'Get High Quality Leads',
    description: 'Harness AI for Effective Campaigns',
    image: Image1.src,
  },
  {
    title: 'Boost Your Sales',
    description: 'AI-driven Marketing Solutions',
    image: Image2.src,
  },
];

export default function HomePage () {
  const [banners, setBanners] = useState(initialBanners);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSave = (index: number, title: string, description: string, image: string) => {
    const newBanners = [...banners];
    newBanners[index] = { title, description, image };
    setBanners(newBanners);
  };

  return (
    <div className="p-6 bg-blue-700 min-h-screen">
    <MaxWidthWrapper>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Banner Maker</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full w-full gap-6">
        {banners.map((banner, index) => (
          <Banner
            key={index}
            title={banner.title}
        
            image={banner.image}
            onEdit={() => setEditIndex(index)}
          />
        ))}
      </div>
      {editIndex !== null && (
        <EditBanner
          initialTitle={banners[editIndex].title}
          initialDescription={banners[editIndex].description}

          initialImage={banners[editIndex].image}
          onSave={(title, description,  image) => handleSave(editIndex, title, description,  image)}
          onClose={() => setEditIndex(null)}
        />
      )}
  

    </MaxWidthWrapper>
    </div>
  );
};
