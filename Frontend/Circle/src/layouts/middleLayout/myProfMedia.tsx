
interface PostType {
  id: number;
  content: string;
  time: string;
  replies: number;
  likes: number;
  image?: string;
}

interface UserType {
  avatar: string;
  name: string;
  username: string;
  bio: string;
}

interface MediaPostProps {
  posts: PostType[];
  user: UserType;
}

export function MediaPost({ posts }: MediaPostProps) {
  const mediaPosts = posts.filter((post) => post.image);

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {mediaPosts.map((post) => (
        <div key={post.id} className="overflow-hidden rounded-lg border border-gray-700">
          <img
            src={post.image}
            alt="media"
            className="w-full h-40 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}
