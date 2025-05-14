// components/WeatherPredictor.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Data prediksi cuaca
const weatherData = [
  {
    id: 1,
    condition: "Cerah",
    icon: "☀️",
    color: "text-yellow-400",
    background: "bg-gradient-to-r from-blue-400 to-sky-500",
    description: "Cuaca cerah dengan sedikit awan. Cocok untuk aktivitas di luar ruangan.",
    tips: [
      "Gunakan tabir surya untuk melindungi kulit dari sinar UV",
      "Bawa air minum yang cukup untuk mencegah dehidrasi",
      "Kenakan topi atau kacamata hitam jika beraktivitas di luar ruangan"
    ]
  },
  {
    id: 2,
    condition: "Berawan",
    icon: "☁️",
    color: "text-gray-400",
    background: "bg-gradient-to-r from-gray-400 to-blue-500",
    description: "Langit berawan dengan kemungkinan hujan ringan. Suhu relatif sejuk.",
    tips: [
      "Bawa payung lipat untuk berjaga-jaga",
      "Kenakan jaket tipis jika suhu terasa dingin",
      "Tetap waspada terhadap perubahan cuaca mendadak"
    ]
  },
  {
    id: 3,
    condition: "Hujan Ringan",
    icon: "🌧️",
    color: "text-blue-400",
    background: "bg-gradient-to-r from-blue-600 to-gray-700",
    description: "Hujan ringan sepanjang hari. Bawa payung dan hindari genangan air.",
    tips: [
      "Gunakan payung atau jas hujan saat bepergian",
      "Hindari jalan yang rawan banjir atau genangan air",
      "Pastikan barang elektronik terlindungi dari air"
    ]
  },
  {
    id: 4,
    condition: "Hujan Deras",
    icon: "⛈️",
    color: "text-indigo-600",
    background: "bg-gradient-to-r from-indigo-800 to-gray-900",
    description: "Hujan deras disertai angin kencang. Sebaiknya tetap di dalam ruangan.",
    tips: [
      "Hindari bepergian jika tidak terlalu penting",
      "Waspada terhadap banjir dan pohon tumbang",
      "Siapkan senter dan powerbank jika terjadi pemadaman listrik"
    ]
  },
  {
    id: 5,
    condition: "Panas",
    icon: "🔥",
    color: "text-orange-500",
    background: "bg-gradient-to-r from-orange-500 to-red-600",
    description: "Cuaca sangat panas dengan suhu di atas rata-rata. Hindari aktivitas di luar ruangan.",
    tips: [
      "Minum banyak air untuk mencegah dehidrasi",
      "Hindari aktivitas fisik berat di luar ruangan",
      "Gunakan pakaian berbahan ringan dan berwarna terang"
    ]
  }
];

// Lokasi yang tersedia
const locations = [
  { id: 1, name: "Jakarta", lat: -6.2088, lon: 106.8456 },
  { id: 2, name: "Bandung", lat: -6.9175, lon: 107.6191 },
  { id: 3, name: "Surabaya", lat: -7.2575, lon: 112.7521 },
  { id: 4, name: "Yogyakarta", lat: -7.7971, lon: 110.3688 },
  { id: 5, name: "Lampung", lat: -5.4501, lon: 105.2668 }
  
];

export default function WeatherPredictor() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastDays, setForecastDays] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [showTips, setShowTips] = useState(false);
  
  // Simulasi mendapatkan data cuaca
  useEffect(() => {
    setIsLoading(true);
    
    // Simulasi API call dengan timeout
    const fetchTimeout = setTimeout(() => {
      // Pilih cuaca secara random untuk simulasi
      const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
      setCurrentWeather(randomWeather);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(fetchTimeout);
  }, [selectedLocation]);
  
  // Generate forecast untuk beberapa hari ke depan (simulasi)
  const generateForecast = () => {
    const forecast = [];
    
    for (let i = 1; i <= forecastDays; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      
      const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
      forecast.push({
        date: date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' }),
        weather: randomWeather
      });
    }
    
    return forecast;
  };
  
  // Handle perubahan lokasi
  const handleLocationChange = (locationId) => {
    const location = locations.find(loc => loc.id === parseInt(locationId));
    setSelectedLocation(location);
  };
  
  // Render tips cuaca
  const renderWeatherTips = () => {
    if (!currentWeather) return null;
    
    return (
      <div className="mt-6 bg-gray-800/50 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Tips Cuaca {currentWeather.condition}</h3>
        <ul className="space-y-2">
          {currentWeather.tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${currentWeather ? currentWeather.background : 'bg-gradient-to-b from-blue-900 to-gray-900'} text-white flex flex-col items-center justify-center p-6 transition-colors duration-500`}>
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        
      </h1>
      
      <div className="w-full max-w-2xl">
        {/* Lokasi Selector */}
        <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl mb-4">
          <label htmlFor="location" className="block text-sm text-gray-400 mb-2">Pilih Lokasi:</label>
          <select 
            id="location"
            value={selectedLocation.id}
            onChange={(e) => handleLocationChange(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {locations.map(location => (
              <option key={location.id} value={location.id}>{location.name}</option>
            ))}
          </select>
        </div>
        
        {/* Current Weather */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800 shadow-lg relative overflow-hidden mb-6"
        >
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p>Memuat data cuaca...</p>
            </div>
          ) : currentWeather && (
            <>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedLocation.name}</h2>
                  <p className="text-sm text-gray-400">{new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
                <div className="text-6xl">{currentWeather.icon}</div>
              </div>
              
              <div className="mb-4">
                <h3 className={`text-3xl font-bold ${currentWeather.color}`}>{currentWeather.condition}</h3>
                <p className="mt-2">{currentWeather.description}</p>
              </div>
              
              <button 
                onClick={() => setShowTips(!showTips)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
              >
                {showTips ? 'Sembunyikan Tips' : 'Lihat Tips'}
              </button>
              
              {showTips && renderWeatherTips()}
            </>
          )}
        </motion.div>
        
        {/* Weather Forecast */}
        {!isLoading && currentWeather && (
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Prakiraan {forecastDays} Hari Ke Depan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {generateForecast().map((forecast, index) => (
                <div key={index} className="bg-gray-800/70 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">{forecast.date}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-lg font-medium ${forecast.weather.color}`}>{forecast.weather.condition}</span>
                    <span className="text-2xl">{forecast.weather.icon}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">Data cuaca diperbarui terakhir: {new Date().toLocaleTimeString('id-ID')}</p>
              <p className="text-xs text-gray-500 mt-1">* Prediksi cuaca dapat berubah sewaktu-waktu</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}