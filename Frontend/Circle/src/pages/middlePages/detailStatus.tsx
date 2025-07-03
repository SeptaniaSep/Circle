import { useLike } from "@/components/features/like";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ImagePlus, MessageSquareText } from "lucide-react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";


export function StatusPage() {
  const navigate = useNavigate();

  const { id } = useParams();


  // const post = postsHome.find((p) => String(p.id) === id);

  // if (!post) return <p className="text-white p-4">Status not found</p>;

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["thread", id],
  //   queryFn: async () => {
  //     const res = await api.get(`/threads/${id}`);
  //     return res.data; //  return { message, data: thread }
  //   },
  //   enabled: !!id,
  // });

  if (isLoading)
    return <div className=" p-5 text-center text-gray-500">Loading...</div>;
  if (isError || !data?.data)
    return (
      <div className="p-5 text-center text-gray-200">Error loading thread</div>
    );

  const thread = data.data;

  return (
    <div className="flex flex-col flex-1 text-white border-gray-700 min-h-screen">
      {/* Header */}
      <h1 className="flex gap-2 text-xl font-semibold items-center pt-5 pl-5">
        <FaArrowLeftLong
          size={20}
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        Status
      </h1>

      <div className="mb-6 p-4">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="{data.avatar}" />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex gap-2 items-center">
              <h4 className="font-bold text-white">"thread.author.name"</h4>
              <span className="text-gray-400 text-sm">@{} · Jun 26, 2023</span>
            </div>
            <p className="text-white mt-2 text-sm">"thread.description"</p>

            {thread.image.id && thread.image.length > 0 && (
              <div
                className={`grid gap-2 ${
                  thread.image.length === 2 ? "grid-cols-2" : ""
                }`}
              >
                {thread.image.map((img, i) => (
                  <img
                    key={i}
                    src={`http://localhost:3000/uploads/${img}`}
                    className="rounded-lg object-cover w-full max-h-100 "
                    alt={`image-${i}`}
                  />
                ))}
              </div>
            )}

            <div className="flex gap-5 mt-4 text-gray-400">
              <div className="flex gap-1 items-center">
                <FcLike size={20} /> <span>{thread.likes}</span>
              </div>
              <div className="flex gap-1 items-center">
                <MessageSquareText className="hover:text-gray-800" size={18} />
                <span>{thread.replies} Replies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reply Input */}
      <div className="flex items-start p-4 gap-3 border-y border-gray-700 py-4">
        <Avatar>
          <AvatarImage src="/public/img/av9.jpg" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <div className="flex gap-2.5 items-center">
          <textarea
            rows={1}
            className="w-155 bg-transparent text-white p-2 text-sm focus:outline-none"
            placeholder="Type your reply!"
          />
          <div className="flex gap-2 items-center">
            <ImagePlus size={25} className=" text-green-600" />
            <Button className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
              Reply
            </Button>
          </div>
        </div>
      </div>

      {/* Replies */}
      <div className="mt-4">
        {replies.map((reply, idx) => {
          const {
            likeCount,
            isLiked,
            isHovered,
            setIsHovered,
            handleLikeClick,
          } = useLike(reply.likes);

          return (
            <div
              key={idx}
              className="flex gap-3 p-4 py-4 border-b border-gray-800"
            >
              <Avatar>
                <AvatarImage src="/public/img/av9.jpg" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex gap-2 items-center">
                  <p className="text-white font-semibold text-sm">
                    {reply.name}
                  </p>
                  <span className="text-gray-400 text-xs">
                    @{reply.username} · {reply.time}
                  </span>
                </div>
                <p className="text-sm text-white mt-1">{reply.text}</p>

                <div className="flex gap-5 mt-3 text-gray-400">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={handleLikeClick}
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
                    <MessageSquareText
                      className="hover:text-gray-800"
                      size={18}
                    />
                    <span>{reply.replies} Replies</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
