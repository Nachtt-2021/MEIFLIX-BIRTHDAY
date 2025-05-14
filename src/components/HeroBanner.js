import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <motion.div 
      className="relative h-[80vh] mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0">
        <img 
          src="https://source.unsplash.com/1600x900/?romantic,couple" 
          alt="Featured" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-10 w-1/2">
        <h1 className="text-5xl font-bold mb-4">Cerita Kita</h1>
        <p className="text-lg mb-6">Setiap momen bersamamu adalah episode yang tak terlupakan. Mari kita tulis cerita kita bersama.</p>
        <div className="flex space-x-4">
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md font-bold flex items-center">
            <span className="mr-2">▶</span> Putar
          </button>
          <button className="bg-gray-600 bg-opacity-70 hover:bg-opacity-100 px-8 py-3 rounded-md font-bold flex items-center">
            <span className="mr-2">ℹ</span> Info Lainnya
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroBanner;