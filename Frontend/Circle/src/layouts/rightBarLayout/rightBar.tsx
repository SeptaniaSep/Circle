import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { UserActive } from "../middleLayout/dummyData";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { initialUser, type UserType } from "../middleLayout/dummyFollower";


function RightBar() {
   const [users, setUsers] = useState<UserType[]>(initialUser);



  const handleFollowBadge = (index: number) => {
    setUsers((prev) =>
      prev.map((user, i) =>
        i === index ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <div className=" text-white p-3 m-2 fixed">
      {/* Profile Section */}
      <div className="bg-[#333e35] p-4 rounded-lg ">
        <h2 className="text-xl font-bold pb-2">My Profile</h2>

        <AspectRatio ratio={6 / 1} className="relative">
          <img
            src={UserActive.bgImage}
            alt="BgImage"
            className="rounded-xl md:object-cover w-full h-20"
          />
        </AspectRatio>

        {/* Avatar & Edit Button */}

        <div className="flex relative justify-between items-center px-4 ">
          <Avatar>
            <AvatarImage
              className="rounded-full size-15  border-gray-800 border-3"
              src={UserActive.avatar}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <Badge variant="outline" className="mt-8 rounded-2xl">
              Edit Profile
            </Badge>
          </div>
        </div>

        <div className="m-1">
          <p>{UserActive.name}</p>
          <p className="text-gray-500 font-xs -mt-1">{UserActive.username}</p>
          <p className="text-sm">{UserActive.bio}</p>
          <div className=" flex text-sm gap-5">
            <p className="text-gray-500">
              <span className="font-bold text-white">
                {" "}
                {UserActive.following}{" "}
              </span>{" "}
              Following
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-white">
                {" "}
                {UserActive.follower}{" "}
              </span>{" "}
              Followers
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Users */}
      <div className="bg-[#333e35] p-4 rounded-lg mt-3">
        <h2 className="font-semibold">Suggested for you</h2>

        <div className="grid gap-2 mt-4">
          {users.map((user, index) => (
            <div className="flex justify-between items-center hover:bg-[#39463c]">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src={user.avatar}
                    alt={user.name}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.username}</p>
                </div>
              </div>
              <Badge
                variant={user.isFollowing ? "outline" : "default"}
                className={`rounded-full px-3  text-sm ${
                  user.isFollowing
                    ? "text-amber border border-amber cursor-pointer"
                    : "text-amber border border-amber cursor-pointer"
                }`}
                onClick={() => handleFollowBadge(index)}
              >
                {user.isFollowing ? "Following" : "Follow"}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* develop */}
      <div className="bg-[#333e35] p-3 rounded-lg mt-3 pr-6">
        <p className=" flex text-xs font-light items-center gap-1.5">
          Developed by
          <h1 className="font-semibold">Septania </h1> •
          <FaGithub size={15} href="" />
          <FaLinkedin size={15} href="" />
          <FaFacebook size={15} href="" />
          <PiInstagramLogoFill size={16} href="" />
        </p>
        <p className="flex text-gray-500 gap-1 text-xs mt-1 items-center">
          Powered by
          <img className="w-4" src="/src/assets/img/logo.png" /> DumbWays
          Indonesia • #1CodingBootcamp
        </p>
      </div>
    </div>
  );
}

export default RightBar;
