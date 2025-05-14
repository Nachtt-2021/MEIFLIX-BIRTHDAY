// components/BirthdaySpecials.jsx
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const birthdaySlides = [
  {
    title: 'Ucapan Manis',
    text: 'Selamat ulang tahun! Mekkk dari kita doa yang baik buat lu , Love you! ',
    img: require("../assets/images/12.JPG"),
  },
  {
    title: 'Dari kita ',
    text: 'Happy birthday mekk dari kitaaa , semoga dapet pasangan yang baik next nya ',
    img: require("../assets/images/14.JPG"),
  },
  {
    title: 'Iphone 16 pink ',
    text: 'Coming Soon: nanti gua beliin kalo udah di aussie (depin)',
    img: require("../assets/images/18.JPG"),
  },
];

export default function BirthdaySpecials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === birthdaySlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? birthdaySlides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-500">🎁 Birthday Specials</h1>
      <div className="relative max-w-3xl mx-auto">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          stopOnHover={false}
          showStatus={false}
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
          className="max-w-3xl mx-auto"
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-r-md"
                style={{ left: 15 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-l-md"
                style={{ right: 15 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          }
        >
          {birthdaySlides.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={item.img} alt={item.title} className="object-cover w-full h-80" />
              <div className="bg-[#141414] p-4">
                <h2 className="text-2xl font-bold text-yellow-400">{item.title}</h2>
                <p className="mt-2 text-white italic">{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
        
        {/* Tombol Navigasi Slide */}
        <div className="flex justify-center mt-4 space-x-2">
          {birthdaySlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-red-600' : 'bg-gray-600'
              } transition-colors duration-300`}
              aria-label={`Pergi ke slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}