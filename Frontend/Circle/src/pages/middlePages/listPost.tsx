import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { MessageSquareText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLike } from "@/components/features/like";
import { useGetThreads } from "@/components/hooks/useAuthGetThread";
import type { typeThread } from "@/components/schemas/schemaAuthThread";
import { DDMenu } from "@/components/features/dropDown";

export function ListPost() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetThreads();

  const { likeCount, isLiked, isHovered, setIsHovered, handleLikeClick } =
    useLike(0); // default 0 likes

  const handleClick = (thread: typeThread) => {
    navigate(`/status/${thread.id}`);
  };

  if (isLoading)
    return <p className="text-center  text-gray-200">Loading...</p>;
  if (isError)
    return <p className="text-center text-gray-200">{error.message}</p>;

  return (
    <div className="">
      {data?.data?.map((thread) => {
        return (
          <div
            key={thread.id}
            className="border-t border-gray-500 p-4  shadow-smcursor-pointer hover:bg-[#141414aa]"
            onClick={() => handleClick(thread)}
          >
            <div className="flex gap-3 relative">
              {/* AVATAR */}
              <Avatar>
                <AvatarImage
                  className="rounded-full "
                  src={thread.author.profile?.avatar} // default avatar
                />
                <AvatarFallback className="text-gray-200"> AV </AvatarFallback>
              </Avatar>

              {/* POST /THREAD */}
              <div className="grid">
                <div className="flex gap-4 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <p className="font-semibold text-white">
                    {thread.author.username}
                  </p>
                  <p className="flex italic font-semibold text-gray-400">
                    @ {thread.author.profile?.fullname}
                  </p>
                  </div>
                  <span> .{new Date(thread.createdAt).toLocaleString()}</span>
                </div>

                <p className="text-white mt-1">{thread.description}</p>

                {thread?.image && (
                  <div className="mt-2">
                    <img
                      src={`http://localhost:3000/uploads/${thread.image}`}
                      //BIKIN SENDIRI .ENV
                      alt="image"
                      className="rounded-md object-cover w-80%"
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
        );
      })}
    </div>
  );
}
