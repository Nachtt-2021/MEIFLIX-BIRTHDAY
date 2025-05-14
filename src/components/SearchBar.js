import React, { useState } from 'react';

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative">
      <div className="flex items-center">
        <button 
          onClick={() => setIsActive(!isActive)}
          className="text-white mr-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        {isActive && (
          <input
            type="text"
            placeholder="Judul, orang, genre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-black border border-gray-600 text-white px-3 py-1 rounded-sm focus:outline-none focus:border-white transition-all duration-300"
            autoFocus
          />
        )}
      </div>
      
      {isActive && searchTerm && (
        <div className="absolute mt-2 w-64 bg-black border border-gray-700 rounded-md shadow-lg z-50 right-0">
          <div className="p-2">
            <p className="text-gray-400 text-xs mb-2">Hasil Pencarian</p>
            <div className="space-y-2">
              <div className="flex items-center p-1 hover:bg-gray-800 rounded-sm cursor-pointer">
                <img src="https://source.unsplash.com/50x50/?romantic" alt="Result" className="w-10 h-10 object-cover rounded-sm mr-2" />
                <span className="text-sm">Momen Romantis</span>
              </div>
              <div className="flex items-center p-1 hover:bg-gray-800 rounded-sm cursor-pointer">
                <img src="https://source.unsplash.com/50x50/?date" alt="Result" className="w-10 h-10 object-cover rounded-sm mr-2" />
                <span className="text-sm">Kencan Pertama</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;