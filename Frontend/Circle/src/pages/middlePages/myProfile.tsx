import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { EditProfileModal } from "./editProfile";
import { UserActive } from "./dummy/dummyData";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AvatarModal } from "@/components/features/avatarModal";
import { useGetProfile } from "@/components/hooks/useAuthProfile";

export function MyProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname.includes("media") ? "media" : "allPost";
  const { data: profile } = useGetProfile();

  const [isModalOpen, setIsModalOpen] = useState(false); //avatar modal
  const avatarUrl = "/img/ava6.jpg";

  const [isEditOpen, setIsEditOpen] = useState(false);
console.log("jaran", profile);

  return (
    <div className="mx-auto text-white min-h-screen">
      {/* {profile?.data.} */}
      <h1 className="flex gap-2 text-xl font-semibold items-center pt-5 pl-5">
        <FaArrowLeftLong
          size={20}
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        {profile?.data.avatar}
      </h1>

      {/* Header & Profile */}
      <div className="m-6 mt-4">
        <AspectRatio ratio={6 / 1}>
          <img
            src={profile?.data.banner}
            alt="BgImage"
            className="rounded-2xl md:object-cover w-full h-40"
          />
        </AspectRatio>

        <div className="relative p-2 pb-0">
          <div className="flex">
            {/* Avatar yang bisa diklik */}
            <Avatar
              onClick={() => setIsModalOpen(true)}
              className="w-24 h-24 rounded-full border-4 border-black absolute -top-6"
            >
              <AvatarImage
                src={profile?.data.avatar}
                alt="avatar"
                className="object-cover"
              />
              <AvatarFallback>{UserActive.name[0] ?? "U"}</AvatarFallback>
            </Avatar>

            {/* Modal avatar muncul saat diklik */}
            <AvatarModal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              avatarUrl={UserActive.avatar}
            />

            {/* Button buat edit profile */}
            {/* <EditProfileModal
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              name={UserActive.name}
              username={UserActive.username}
              bio={UserActive.bio}
              onSave={(data) => console.log("save data:", data)}
            /> */}

            <button
              className="mt-8 ml-160 px-4 py-1 border border-gray-500 rounded-full text-sm"
              onClick={() => setIsEditOpen(true)}
            >
              Edit Profile
            </button>
          </div>
          <div className="grid gap-1">
            <h1 className="text-xl font-semibold">{profile?.data.username}</h1>
            <p className="text-gray-400 font-sm">@{profile?.data.fullname}</p>
            <p className="text-sm">{profile?.data.bio}</p>
            <div className="flex text-sm text-gray-400 gap-4">
              <span className="flex font-bold text-white gap-1">
                1<span className="font-light text-gray-400">Following</span>
              </span>
              <span className=" flex font-bold text-white gap-1">
                2K
                <span className="font-light text-gray-400">Followers</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        {/* Profile detail component */}

        <div className="flex mt-4 border-b border-gray-700 text-sm font-semibold">
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === "allPost"
                ? "border-b-2 border-green-400 text-green-500"
                : "text-gray-500"
            }`}
            onClick={() => navigate("AllPost")}
          >
            All Post
          </button>
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === "media"
                ? "border-b-2 border-green-400 text-green-500"
                : "text-gray-500"
            }`}
            onClick={() => navigate("Media")}
          >
            Media
          </button>
        </div>

        {/* Ini wajib untuk render komponen tab-nya */}
        <div className="mt-4">
          <Outlet />
        </div>
      </div>

      {/* Posts */}
      {/* <div>
        {posts
          .filter((post) => activeTab === "all" || post.image) // filter tab media
          .map((post) => {
            const {
              likeCount,
              isLiked,
              isHovered,
              setIsHovered,
              handleLikeClick,
            } = useLike(post.likes);

            return (
              <div key={post.id} className="p-4 border-b border-gray-800">
                <div className="flex gap-3">
                  <img
                    src={UserActive.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="text-sm">
                      <span className="font-bold">{UserActive.name}</span>{" "}
                      <span className="text-gray-400">
                        @{UserActive.username} · {post.time}
                      </span>
                    </div>
                    <p className="mt-1 text-sm">{post.content}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        alt="post media"
                        className="mt-2 rounded-xl border border-gray-700"
                      />
                    )}
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
                        <MessageSquareText size={18} />
                        <span>{post.replies || 0} Replies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div> */}
    </div>
  );
}
