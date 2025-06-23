// import { FaArrowLeftLong } from "react-icons/fa6";

// interface PostType {
//   id: number;
//   content: string;
//   time: string;
//   replies: number;
//   likes: number;
//   image?: string;
// }

// interface UserType {
//   avatar: string;
//   name: string;
//   username: string;
//   bio: string;
// }

// interface AllPostProps {
//   posts: PostType[];
//   user: UserType;
// }

// export function AllPost({ posts, user }: AllPostProps) {
//   return (
//     <div className="mx-auto text-white min-h-screen">
//       <h1 className="flex gap-2 text-xl font-semibold items-center pt-5 pl-5">
//         <FaArrowLeftLong size={20} />
//         {user.name}
//       </h1>

//       <div className="p-4">
//         <img src={user.avatar} alt="avatar" className="w-20 h-20 rounded-full" />
//         <h2 className="text-lg font-bold">{user.name}</h2>
//         <p className="text-gray-400">@{user.username}</p>
//         <p className="text-sm">{user.bio}</p>
//       </div>

//       <div className="p-4 space-y-4">
//         {posts.map((post) => (
//           <div key={post.id} className="border-b border-gray-700 pb-4">
//             <p className="text-sm">{post.content}</p>
//             {post.image && <img src={post.image} alt="post" className="mt-2 rounded-lg" />}
//             <div className="text-gray-400 text-xs mt-1">
//               {post.time} • {post.replies} Replies • {post.likes} Likes
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
