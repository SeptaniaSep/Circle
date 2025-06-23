import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ImagePlus, MessageSquareText } from "lucide-react";
import { GoHeart } from "react-icons/go";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useLike } from "@/components/hooks/like";
import { postsHome } from "./dummyData";
import { useNavigate } from "react-router-dom";

export function Home() {
  return (
    <div className="flex-1  min-h-screen ">
      <h2 className="text-2xl font-bold m-6 text-white">Home</h2>

      {/* FORM POST */}
      <div className="flex p-4 rounded-lg mt-4 mb-4 gap-2 items-center">
        <Avatar>
          <AvatarImage className="rounded-full" src="public/img/av9.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          className="w-full p-3 rounded-lg border-none text-white "
          placeholder="What’s happening?!"
        />
        <ImagePlus size={30} className=" text-green-600" />
        <Button className="mt-1 bg-green-600 text-white px-3 py-1.5 rounded-4xl">
          Post
        </Button>
      </div>

      {/* LOOP POSTINGAN */}
      {postsHome.map((post, index) => (
        <PostItem key={index} {...post} />
      ))}
    </div>
  );
}

export function PostItem({
  id,
  avatar,
  name,
  username,
  text,
  likes,
  replies,
  image,
}: {
  id: number;
  avatar?: string;
  name: string;
  username: string;
  text: string;
  likes: number;
  replies: number;
  image?: string[];
}) {
  const { likeCount, isLiked, isHovered, setIsHovered, handleLikeClick } =
    useLike(likes);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/status/${id}`);
  };

  return (
    <div
      className="p-4 border-t border-gray-700 cursor-pointer hover:bg-[#111511]"
      onClick={handleClick}
    >
      {/* POST FORM */}
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage
            className="rounded-full"
            src={avatar || "/assets/img/av1.jpg"}
          />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>

        {/* LIST POST */}
        <div className="items-center gap-3">
          <div className="flex gap-2">
            <p className="font-bold text-sm text-white hover:text-gray-500">
              {name}
            </p>
            <p className="text-sm text-gray-400">@{username} · 5h</p>
          </div>

          <p className="text-white text-sm mt-2">{text}</p>

          {image && image.length > 0 && (
            <div
              className={`grid gap-2 ${
                image.length === 2 ? "grid-cols-2" : ""
              }`}
            >
              {image.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-lg object-cover w-120 h-80"
                  alt={`image-${i}`}
                />
              ))}
            </div>
          )}

          {/* Like & Comment */}
          <div className="flex gap-5 mt-3 text-gray-400">
            <div
              className="flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation(); // agar tidak trigger navigate
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
              <MessageSquareText className="hover:text-gray-800" size={18} />
              <span>{replies} Replies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
