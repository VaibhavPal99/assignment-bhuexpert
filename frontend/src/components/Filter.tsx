import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFilter = () => {
    const newParams: Record<string, string> = {};
    Object.entries(query).forEach(([key, value]) => {
      if (value) newParams[key] = value;
    });
    setSearchParams(newParams);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-auto border border-gray-300">
      <div className="flex gap-4 items-center flex-wrap">
        <input
          type="text"
          name="city"
          placeholder="City"
          className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          onChange={handleChange}
          value={query.city}
        />
        <select
          name="property"
          className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          onChange={handleChange}
          value={query.property}
        >
          <option value="">Property</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="land">Land</option>
        </select>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          onChange={handleChange}
          value={query.minPrice}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          onChange={handleChange}
          value={query.maxPrice}
        />
        <input
          type="number"
          name="bedroom"
          placeholder="Bedrooms"
          className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          onChange={handleChange}
          value={query.bedroom}
        />
        <button
          onClick={handleFilter}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md transition shadow-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;
