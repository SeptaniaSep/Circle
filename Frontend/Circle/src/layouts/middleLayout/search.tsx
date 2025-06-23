// src/pages/SearchPage.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { initialUser, type UserType } from "./dummyFollower";
import { LucideUserRoundSearch } from "lucide-react";


export function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredUsers = initialUser.filter((user: UserType) =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex-1 px-6 pt-8 text-white">
      <div className="flex items-center bg-[#292d2a] pl-4 p-1 rounded-full">
        <LucideUserRoundSearch className="text-gray-400" />
        <Input
        placeholder=" Search your friend"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-white border-none rounded-full px-5 py-2 w-full"
      />
        </div>

      {query && filteredUsers.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No results for “<strong>{query}</strong>”<br />
          Try searching for something else or check your spelling.
        </p>
      )}

      {filteredUsers.length > 0 && (
        <div className="mt-6 space-y-4">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-[#181d19] rounded-lg px-4 py-3"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.username}</p>
                </div>
              </div>
              <Button className="rounded-full border border-white text-white px-4 py-1">
                {user.isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
