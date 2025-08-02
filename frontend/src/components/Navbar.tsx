import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">LandByAcre</h1>
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
        <Link to="/agents" className="text-gray-600 hover:text-black">Agents</Link>
      </div>
      <Link to="/create-post">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
          Make a Post
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;