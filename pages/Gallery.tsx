
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <PageWrapper title="Our Gallery" subtitle="A glimpse into our world of purity and dedication.">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="group aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
              />
               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold px-4 text-center">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Gallery;
