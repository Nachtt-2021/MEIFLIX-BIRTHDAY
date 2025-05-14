import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-10 px-10">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="mb-4">Ada pertanyaan? Hubungi kami di Meiflix@example.com</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <ul className="space-y-2">
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">FAQ</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Hubungan Investor</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Cara Menonton</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Informasi Perusahaan</button></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Pusat Bantuan</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Lowongan Kerja</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Ketentuan Penggunaan</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Hubungi Kami</button></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Akun</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Tukar Kartu Hadiah</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Privasi</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Uji Kecepatan</button></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Media Center</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Beli Kartu Hadiah</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Preferensi Cookie</button></li>
              <li><button className="hover:underline text-gray-500 bg-transparent border-0 p-0 cursor-pointer">Pemberitahuan Hukum</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <p>©Nachtt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;