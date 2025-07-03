import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { UserActive } from "../middlePages/dummy/dummyData";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useGetProfile } from "@/components/hooks/useAuthProfile";

export function MyProfile() {

  const navigate = useNavigate()
   const { data: profile } = useGetProfile();
  

  return (
    <div>
      {/* Profile Section */}
      <div className="bg-[#333e35] p-4 rounded-lg"
      onClick={() => navigate("profile")}>
        <h2 className="text-xl font-bold pb-2">My Profile</h2>

        <AspectRatio ratio={6 / 1} className="relative">
          <img
            src={profile?.data.banner}
            alt="BgImage"
            className="rounded-xl md:object-cover w-full h-20"
          />
        </AspectRatio>

        {/* Avatar & Edit Button */}
        <div className="flex relative justify-between items-center px-4">
          <Avatar>
            <AvatarImage
              className="rounded-full size-15 border-gray-800 border-3"
              // src={profile?.data.avatar}
              src={UserActive.avatar}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Badge variant="outline" className="mt-8 rounded-2xl">
            Edit Profile
          </Badge>
        </div>

        {/* User Info */}
        <div className="m-1"> 
          <p>{profile?.data.username}</p>
          <p className="text-gray-500 text-xs -mt-1">{profile?.data.fullname}</p>
          <p className="text-sm">{profile?.data.bio}</p>
          <div className="flex text-sm gap-5">
            <p className="text-gray-500">
              <span className="font-bold text-white">
                {UserActive.following}
              </span>{" "}
              Following
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-white">
                {UserActive.follower}
              </span>{" "}
              Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
