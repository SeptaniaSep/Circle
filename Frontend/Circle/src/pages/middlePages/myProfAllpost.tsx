import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { MessageSquareText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLike } from "@/components/features/like";
import { DDMenu } from "@/components/features/dropDown";
import { useGetThreadsByAuthorId } from "@/components/hooks/useAuthGetThread";

export function AllPost() {
  const { data, isLoading, error } = useGetThreadsByAuthorId();
  const { likeCount, isLiked, isHovered, setIsHovered, handleLikeClick } =
    useLike(0);

  // const handleClick = (thread: typeAuthor) => {
  //   navigate(`/status/${thread.id}`);
  // };

  if (isLoading)
    return <p className="text-center  text-gray-200">Loading...</p>;
  if (error)
    return <p className="text-center text-gray-200">{error.message}</p>;
if (!data || data.data.length === 0)
  return <p className="text-center text-gray-200">Belum ada post.</p>;

  return (
    <div className="">
      {data.data?.map((threads: any) => (
        <div
            key={threads.id}
            className="border-b border-gray-500 p-4   shadow-smcursor-pointer hover:bg-[#141414aa]"
            
          >
            <div className="flex gap-3 relative">
              {/* AVATAR */}
              <Avatar>
                <AvatarImage
                  className="rounded-full "
                  src={threads.author?.profile?.avatar} 
                />
                <AvatarFallback className="text-gray-200"> AV </AvatarFallback>
              </Avatar>

              {/* POST /THREAD */}
              <div className="flex-1">
                <div className="flex gap-2 text-sm text-gray-600">
                  <p className="font-semibold text-white">
                    {threads.author.username}
                  </p>
                  <p className="font-semibold text-white">
                    {threads.author?.profile?.fullname}
                  </p>
                  <span>· {new Date(threads.createdAt).toLocaleString()}</span>
                </div>

                <p className="text-white mt-1">{threads.description}</p>

                {threads?.image && (
                  <div className="mt-2">
                    <img
                      src={`http://localhost:3000/uploads/${threads.image}`}
                      //BIKIN SENDIRI .ENV
                      alt="image"
                      className="rounded-md object-cover w-90%"
                    />
                  </div>
                )}

                <div className="flex gap-6 mt-3 text-gray-500 text-sm">
                  <div
                    className="flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeClick();
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered || isLiked ? (
                      <FcLike size={20} />
                    ) : (
                      <GoHeart size={20} />
                    )}
                    <span>{likeCount}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <MessageSquareText size={18} />
                    <span>0 Replies</span>
                  </div>
                </div>
              </div>
              {/* DROP DOWN MENU */}
              <div className="flex justify-itrms-end">
                <DDMenu
                  onEdit={() => console.log("Edit")}
                  onDelete={() => console.log("Delete")}
                />
              </div>
            </div>
          </div>
      ))}
          
    </div>
  );
}
