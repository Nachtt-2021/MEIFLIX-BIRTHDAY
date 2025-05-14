// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-bold cursor-pointer text-red-600">MEIFLIX</h1>
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link to="/" className="text-sm text-white hover:text-gray-300 transition-colors">Beranda</Link>
              <Link to="/specials" className="text-sm text-white hover:text-gray-300 transition-colors">Spesial</Link>
              <Link to="/top-picks" className="text-sm text-white hover:text-gray-300 transition-colors">Top Picks</Link>
              <Link to="/love-meter" className="text-sm text-white hover:text-gray-300 transition-colors">Prediksi cuaca</Link>
              <Link to="/secret" className="text-sm text-white hover:text-gray-300 transition-colors">Pesan Rahasia</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <SearchBar />
            <div className="text-white hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <ProfileDropdown />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 mt-4 py-4 rounded-md">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-white hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Beranda</Link>
              <Link to="/specials" className="text-white hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Spesial</Link>
              <Link to="/top-picks" className="text-white hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Top Picks</Link>
              <Link to="/love-meter" className="text-white hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Love Meter</Link>
              <Link to="/secret" className="text-white hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pesan Rahasia</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
