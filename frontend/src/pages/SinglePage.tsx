import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";
import Slider from "../components/Slider";

interface Amenity {
    placeId?: string;
    name: string;
    distance: string;
    duration: string;
    rating: number;
    userRatingsTotal: number;
}

interface Post {
    id: string;
    title: string;
    description: string;
    price: number;
    city: string;
    state: string;
    pincode: string;
    lat: number;
    lng: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    propertyType: string;
    status: string;
    images: string[];
    nearbyAmenities: Amenity[];
}

function SinglePage() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/posts/${id}`);
                const data = await res.json();
                setPost(data);
            } catch (error) {
                console.error("Failed to fetch post:", error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) return <div className="p-4 text-center">Loading...</div>;

    return (
        <div className="p-6 space-y-8 max-w-7xl mx-auto">
            <div>
                <Slider images={post.images} />
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">{post.title}</h1>
                <div className="flex items-center text-gray-600 space-x-2">
                    {/* Location Icon */}
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zM8 8a2 2 0 114 0 2 2 0 01-4 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>
                        {post.city}, {post.state} - {post.pincode}
                    </span>
                </div>
                <p className="text-green-600 text-xl font-semibold">
                    ₹ {post.price.toLocaleString()}
                </p>
                <p className="text-gray-700">{post.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-6 lg:col-span-2">
                    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Property Info</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
                            <div className="flex items-center space-x-2">
                                {/* Size Icon */}
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M4 4h16v16H4z" />
                                </svg>
                                <span>{post.area} sqft</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                {/* Bed Icon */}
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M3 10h18M3 6h18M5 10v10M19 10v10" />
                                </svg>
                                <span>{post.bedrooms} bedrooms</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                {/* Bath Icon */}
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M9 21H5a2 2 0 01-2-2v-2h18v2a2 2 0 01-2 2h-4M7 10V7a5 5 0 1110 0v3" />
                                </svg>
                                <span>{post.bathrooms} bathrooms</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                {/* Home Icon for propertyType */}
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                </svg>
                                <span>Type: {post.propertyType}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                {/* Tag Icon for status */}
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Status: {post.status}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Nearby Amenities</h2>
                        <div className="space-y-4">
                            {post.nearbyAmenities.map((a, idx) => (
                                <div key={a.placeId || idx} className="flex items-start space-x-3">
                                    {/* Pin Icon */}
                                    <svg className="w-6 h-6 mt-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zM8 8a2 2 0 114 0 2 2 0 01-4 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-semibold">{a.name}</p>
                                        <p className="text-gray-600 text-sm">
                                            {a.distance} away, approx {a.duration}
                                            <br />
                                            Rating: {a.rating} ({a.userRatingsTotal} reviews)
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-0 h-fit">
                    <h2 className="text-xl font-semibold p-6 text-gray-800">Location</h2>
                    <div className="h-[500px] w-full overflow-hidden rounded-lg">
                        <Map
                            posts={[
                                {
                                    id: post.id,
                                    title: post.title,
                                    price: post.price,
                                    latitude: post.lat,
                                    longitude: post.lng,
                                },
                            ]}
                            showMarkers={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;
