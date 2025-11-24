import React from 'react';
import { motion } from 'framer-motion';

export const Gallery: React.FC = () => {
  const images = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/600/${i % 2 === 0 ? '800' : '600'}?random=${i + 30}`,
    caption: ["Classroom Session", "Award Ceremony", "Study Hall", "Mock Interview", "Outdoor Event", "Library", "Guest Lecture", "Student Group", "Convocation"][i]
  }));

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Life at TAF</h1>
        <p className="text-slate-400 max-w-2xl mx-auto px-4">
          Glimpses of our vibrant campus, academic sessions, and the moments that define our journey together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md"
            >
              <img src={img.src} alt={img.caption} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white font-medium text-lg">{img.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};