import { Link } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  images: string[];
  address: string;
  price: number;
  bedroom: number;
  bathroom: number;
}

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <Link to={`/list/${post.id}`} className="block overflow-hidden rounded-md">
        <img
          src={post.images[0] || "/default-property.jpg"}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between mt-4">
        <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
          <Link to={`/list/${post.id}`}>{post.title}</Link>
        </h2>

        <p className="flex items-center text-gray-500 mt-1 text-sm">
          {/* Location Pin Icon */}
          <svg
            className="w-4 h-4 mr-1 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zM8 8a2 2 0 114 0 2 2 0 01-4 0z"
              clipRule="evenodd"
            />
          </svg>
          {post.address}
        </p>

        <p className="text-blue-600 text-lg font-bold mt-2">₹ {post.price.toLocaleString()}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              {/* Bed Icon */}
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 10h18M3 6h18M5 10v10M19 10v10" />
              </svg>
              {post.bedroom} Beds
            </div>
            <div className="flex items-center gap-1">
              {/* Bath Icon */}
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M9 21H5a2 2 0 01-2-2v-2h18v2a2 2 0 01-2 2h-4M7 10V7a5 5 0 1110 0v3" />
              </svg>
              {post.bathroom} Baths
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
