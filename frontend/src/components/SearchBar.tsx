import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    city: '',
    minPrice: '',
    maxPrice: '',
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query.city) params.append('city', query.city);
    if (query.minPrice) params.append('minPrice', query.minPrice);
    if (query.maxPrice) params.append('maxPrice', query.maxPrice);

    navigate(`/list?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white rounded-xl shadow-md mt-6"
    >

      <input
        type="text"
        name="city"
        placeholder="City"
        value={query.city}
        onChange={handleChange}
        className="p-2 w-full md:w-40 border border-gray-300 rounded text-gray-800 placeholder-gray-500 bg-white"
      />

      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={query.minPrice}
        onChange={handleChange}
        className="p-2 w-full md:w-40 border border-gray-300 rounded text-gray-800 placeholder-gray-500 bg-white"
      />

      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={query.maxPrice}
        onChange={handleChange}
        className="p-2 w-full md:w-40 border border-gray-300 rounded text-gray-800 placeholder-gray-500 bg-white"
      />

      <button
        type="submit"
        className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
