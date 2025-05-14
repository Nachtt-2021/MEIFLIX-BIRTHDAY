// components/TopPicks.jsx
const topPicks = [
  { title: 'Pas Lebaran ke rumah mu ', genre: 'Romance / Comedy', description: 'Ini pertama kali makan bakso rusa ', image: require("../assets/images/11.JPG") },
  { title: 'Kemarin di KYO', genre: 'Drama / Romance', description: 'Ini kehujanan ga jadi grilll ', image: require("../assets/images/13.JPG") },
  { title: 'Sempro mek', genre: 'Romantic Comedy', description: 'Ini sumpah ga tau siapa wkwkwkwkwk', image: require("../assets/images/10.JPG") },
];

export default function TopPicks() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-500">Top Picks for You</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topPicks.map((movie, index) => (
          <div key={index} className="bg-[#141414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all">
            <img src={movie.image} alt={movie.title} className="object-cover w-full h-60" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">{movie.title}</h2>
              <p className="text-gray-300 italic">{movie.genre}</p>
              <p className="mt-2 text-white">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}