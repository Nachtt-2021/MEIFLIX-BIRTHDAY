// components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BirthdayGate from './components/BirthdayGate';
import Home from './components/Home';
import Specials from './components/BirthdaySpecials';
import LoveMeter from './components/LoveMeter';
import TopPicks from './components/TopPicks';
import SecretMessage from './components/SecretMessage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/netflix.css'; // Import file CSS khusus Netflix

function App() {
  return (
    <Router>
      <BirthdayGate>
        <div className="netflix-app bg-black min-h-screen">
          <Navbar />
          <div className="content-container pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/specials" element={<Specials />} />
              <Route path="/love-meter" element={<LoveMeter />} />
              <Route path="/top-picks" element={<TopPicks />} />
              <Route path="/secret" element={<SecretMessage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BirthdayGate>
    </Router>
  );
}

export default App;
