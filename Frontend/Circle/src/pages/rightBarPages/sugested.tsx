import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useState } from "react";
import { initialUser, type UserType } from "../middlePages/dummy/dummyFollower";
import { useNavigate } from "react-router-dom";

export function SugestedUser() {
const navigate = useNavigate()

  const [users, setUsers] = useState<UserType[]>(initialUser);

  const handleFollowBadge = (index: number) => {
    setUsers((prev) =>
      prev.map((user, i) =>
        i === index ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <div>
      {/* Profile Section */}

      {/* Suggested Users */}
      <div onClick={() => navigate("search")} 
      className="bg-[#333e35] p-4 rounded-lg mt-3">
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
    </div>
  );
}
