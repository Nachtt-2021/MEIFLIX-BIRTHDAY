import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center"
      >
        <img 
          src= {require("../assets/images/21.JPG")}  
          alt="Profile" 
          className="w-8 h-8 rounded-md mr-2"
        />
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50">
          <div className="py-1">
            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Profil Kita</Link>
            <Link to="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Pengaturan Akun</Link>
            <Link to="/help" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Pusat Bantuan</Link>
            <div className="border-t border-gray-700 my-1"></div>
            <button onClick={() => console.log('Logout clicked')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Keluar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;