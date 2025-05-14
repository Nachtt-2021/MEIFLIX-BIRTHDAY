// components/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Home() {
  const contentRef = useRef(null);
  
  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    {
      title: "MEI ALBUM",
      items: [
        { id: 1, image: require("../assets/images/1.JPG"), title: "Meifavorit" },
        { id: 2, image: require("../assets/images/2.JPG"), title: "Ngampusdulu"},
        { id: 3, image: require("../assets/images/3.JPG"), title: "Pantai"},
        { id: 4, image: require("../assets/images/4.JPG"), title: "Pantai 2.0", },
      ]
    },
    {
      title: "MEI ALBUM",
      items: [
        { id: 5, image: require("../assets/images/20.JPG"), title: "Mode princess" },
        { id: 6, image: require("../assets/images/9.JPG"), title: "Manyun" },
        { id: 7, image: require("../assets/images/7.JPG"), title: "Gabut" },
        { id: 8, image: require("../assets/images/8.JPG"), title: "Stecu" },
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-16 md:pt-20">
      {/* Hero Banner */}
      <motion.div 
        className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] mb-6 md:mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img 
            src={require("../assets/images/5.JPG")} 
            alt="Featured" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-10 w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">MeiBirthday</h1>
          <p className="text-sm md:text-base lg:text-lg mb-3 md:mb-6">Mei adalah salah satu mahkluk yang di lindungi oleh orang tua nya .</p>
          <div className="flex space-x-2 md:space-x-4">
            <button 
              className="bg-red-600 hover:bg-red-700 px-3 py-1 md:px-6 md:py-2 rounded-md font-bold flex items-center text-sm md:text-base"
              onClick={scrollToContent}
            >
              <span className="mr-1 md:mr-2">▶</span> Putar
            </button>
            <button className="bg-gray-600 bg-opacity-70 hover:bg-opacity-100 px-3 py-1 md:px-6 md:py-2 rounded-md font-bold flex items-center text-sm md:text-base">
              <span className="mr-1 md:mr-2">ℹ</span> Info Lainnya
            </button>
          </div>
        </div>
      </motion.div>

      {/* Content Rows */}
      <div ref={contentRef} className="container mx-auto px-4 md:px-6 lg:px-10">
        {categories.map((category, index) => (
          <div key={index} className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
              {category.items.map(item => (
                <Link to={item.link || "#"} key={item.id}>
                  <div className="relative group overflow-hidden rounded-md transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                      <p className="text-white text-sm md:text-base opacity-0 group-hover:opacity-100 font-bold text-center px-2">{item.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}