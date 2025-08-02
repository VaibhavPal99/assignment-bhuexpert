
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
     

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80"
            alt="real estate background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Buy, rent, or sell properties in your city with ease and confidence.
          </p>

          <SearchBar />

          {/* Stats Inside Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 px-4">
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow text-white">
              <h2 className="text-3xl font-bold text-indigo-300">16+</h2>
              <p className="mt-2">Years of Experience</p>
            </div>
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow text-white">
              <h2 className="text-3xl font-bold text-indigo-300">200</h2>
              <p className="mt-2">Awards Gained</p>
            </div>
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow text-white">
              <h2 className="text-3xl font-bold text-indigo-300">2000+</h2>
              <p className="mt-2">Properties Listed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
