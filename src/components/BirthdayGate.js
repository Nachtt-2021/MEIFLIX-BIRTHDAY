// components/BirthdayGate.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Countdown from './Countdown';

const birthday = new Date('2025-05-15T00:00:00');

export default function BirthdayGate({ children }) {
  const [now, setNow] = useState(new Date());
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [bypass, setBypass] = useState(false); // State untuk bypass

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isBirthday = now >= birthday;

  useEffect(() => {
    if (!isBirthday && location.pathname !== '/' && !bypass) {
      navigate('/');
    }
  }, [isBirthday, location.pathname, navigate, bypass]);

  if (!isBirthday && !bypass) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-6">
        <h1 className="text-4xl font-bold mb-4">🎉 Coming Soon!</h1>
        <p className="mb-4 text-lg italic">Tunggu yaa... kejutan buat kamu lagi dimasak 💌</p>
        <div onClick={() => setClickCount(clickCount + 1)}>
          <Countdown targetDate={birthday} />
        </div>
        {clickCount >= 5 && (
          <div className="mt-6 text-yellow-400 animate-pulse">“You found the secret: Aku sayang kamu lebih dari 1000% 💛”</div>
        )}
        {/* Tombol Bypass */}
        <button
          onClick={() => setBypass(true)}
          className="mt-6 p-2 bg-blue-500 text-white rounded-md"
        >
          Skip Birthday Gate
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
