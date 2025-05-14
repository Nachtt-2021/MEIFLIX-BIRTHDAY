// src/components/SecretMessage.jsx
import React, { useState } from "react";

const SecretMessage = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Selamat ulang tahun, Mei Ajeng! Semoga hari spesial ini penuh dengan kebahagiaan dan tawa, jangan sering teriak-teriak ya . Semua yang terbaik untukmu!");
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <button
        onClick={handleClick}
        className="bg-red-500 px-4 py-2 rounded-lg"
      >
        Unlock Secret Message
      </button>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
};

export default SecretMessage;
