import React, { useState } from 'react';
import { motion } from 'framer-motion';

const photos = [
  {
    id: 1,
    src: '/training-facilities.jpeg',
    alt: 'Training Facility',
    category: 'campus'
  },
  {
    id: 2,
    src: '/certificates-1.jpeg',
    alt: 'Students',
    category: 'classroom'
  },
  {
    id: 3,
    src: '/certificates-2.jpeg',
    alt: 'Students',
    category: 'classroom'
  },
  {
    id: 4,
    src: '/gallery-4.jpeg',
    alt: 'Students Learning',
    category: 'events'
  },
  {
    id: 5,
    src: '/lab-1.jpeg',
    alt: 'Training Facility',
    category: 'lab'
  },
  {
    id: 6,
    src: '/gallery-2.jpeg',
    alt: 'Computer Lab',
    category: 'classroom'
  },
  {
    id: 7,
    src: '/job-fair-gallery-1.jpeg',
    alt: 'Job Fair',
    category: 'events'
  },
  {
    id: 8,
    src: '/certificates-3.jpeg',
    alt: 'Students',
    category: 'classroom'
  },
  {
    id: 9,
    src: '/gallery-3.jpeg',
    alt: 'Training Facility',
    category: 'campus'
  },
  {
    id: 10,
    src: '/lab-2.jpeg',
    alt: 'Training Facility',
    category: 'lab'
  },
  {
    id: 11,
    src: '/jobfair-gallery.jpeg',
    alt: 'Job Fair',
    category: 'events'
  },
  {
    id: 12,
    src: '/accounting.jpeg',
    alt: 'Office',
    category: 'campus'
  }
];

const PhotosPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | { src: string, alt: string }>(null);
  
  const openLightbox = (photo: { src: string, alt: string }) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container">
          <div className="text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Photo Gallery
            </motion.h1>
            <motion.p 
              className="text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore moments and memories from our educational journey.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="overflow-hidden rounded-lg shadow-md h-64 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openLightbox(photo)}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeLightbox} 
              className="absolute -top-10 right-0 text-white hover:text-accent"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt} 
              className="max-h-[80vh] max-w-full mx-auto object-contain"
            />
            <p className="text-white text-center mt-4">{selectedPhoto.alt}</p>
          </div>
        </div>
      )}

      {/* Photo Submission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              className="text-primary font-heading mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Have Photos to Share?
            </motion.h2>
            <motion.p 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              If you're a student, alumnus, or mentor with photos from our events or activities, we'd love to feature them in our gallery.
            </motion.p>
            <motion.a 
              href="/contact" 
              className="btn btn-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Submit Your Photos
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotosPage;