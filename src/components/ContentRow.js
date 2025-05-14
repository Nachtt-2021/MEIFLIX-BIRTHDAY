import React from 'react';
import { Link } from 'react-router-dom';

const ContentRow = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="flex space-x-2 overflow-x-auto pb-4 hide-scrollbar">
        {items.map(item => (
          <Link to={item.link || "#"} key={item.id} className="flex-none">
            <div className="relative group w-64 transition-transform duration-300 transform hover:scale-110 hover:z-10">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-36 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 rounded-md">
                <p className="text-white opacity-0 group-hover:opacity-100 font-bold text-center px-2">{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;