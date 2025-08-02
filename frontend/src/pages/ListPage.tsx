import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";



import "leaflet/dist/leaflet.css";

import Filter from "../components/Filter";
import List from "../components/List";
import Map from "../components/Map";

interface Post {
  id: string;
  title: string;
  images: string[];
  address: string;
  price: number;
  bedroom: number;
  bathroom: number;
  latitude: number;
  longitude: number;
}

function ListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const queryString = searchParams.toString();
      const res = await fetch(`https://assignment-bhuexpert.onrender.com/api/posts?${queryString}`);
      const data = await res.json();
      
      setPosts(data);
    };

    fetchPosts();
  }, [searchParams]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 py-6 gap-6">
      {/* Left Side: Filter + List */}
      <div className="space-y-8">
        <Filter />
        <List posts={posts} />
      </div>

      {/* Right Side: Map */}
      <div className="hidden lg:block h-[800px] w-full rounded-xl shadow-md overflow-hidden">
        <Map posts={posts} />
      </div>
    </div>
  );
}

export default ListPage;
