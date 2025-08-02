import Card from "./Card";

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

interface ListProps {
  posts: Post[];
}

function List({ posts }: ListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

export default List;
