import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DetailModal = ({ isOpen, onClose, item }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-gray-900 rounded-md max-w-4xl w-full mx-4 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={item.coverImage || "https://source.unsplash.com/1200x600/?romantic"} 
                  alt={item.title} 
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-full p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
                  <div className="flex space-x-4 mb-4">
                    <button className="bg-white text-black px-6 py-2 rounded-md font-bold flex items-center">
                      <span className="mr-2">▶</span> Putar
                    </button>
                    <button className="bg-gray-600 bg-opacity-70 text-white px-6 py-2 rounded-md font-bold flex items-center">
                      <span className="mr-2">+</span> Tambah ke Daftar
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span className="text-green-500 mr-2">98% cocok</span>
                  <span className="mr-2">{item.date || "14 Februari 2023"}</span>
                  <span className="border border-gray-600 text-xs px-1 mr-2">HD</span>
                </div>
                <p className="text-white mb-4">{item.description || "Momen spesial yang tak terlupakan, diabadikan dalam kenangan yang indah. Setiap detik bersamamu adalah kebahagiaan yang tak ternilai."}</p>
                <div className="mb-4">
                  <h3 className="text-gray-400 text-sm mb-1">Kategori:</h3>
                  <div className="flex flex-wrap">
                    {(item.categories || ["Romantis", "Kenangan", "Momen Spesial"]).map((category, index) => (
                      <span key={index} className="text-white mr-2">
                        {category}{index < (item.categories || ["Romantis", "Kenangan", "Momen Spesial"]).length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;