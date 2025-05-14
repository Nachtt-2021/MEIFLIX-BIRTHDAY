import React, { useState } from 'react';

const CategorySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    "Semua", "Romantis", "Kenangan", "Momen Spesial", "Ulang Tahun", 
    "Kencan", "Perjalanan", "Hadiah", "Pesan Rahasia"
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button 
          type="button" 
          className="inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedCategory}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`block w-full text-left px-4 py-2 text-sm ${selectedCategory === category ? 'text-red-500' : 'text-white'} hover:bg-gray-800`}
                role="menuitem"
                onClick={() => {
                  setSelectedCategory(category);
                  setIsOpen(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;