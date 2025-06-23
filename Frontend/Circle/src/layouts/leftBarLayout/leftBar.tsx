import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CircleUserIcon,
  Home,
  LogOut,
  UserRoundSearchIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CreatePost } from "./createPost";
import { GoHeart } from "react-icons/go";

export function LeftBar() {
  const [openPostModal, setOpenPostModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-1/5 text-amber-50 p-2 pl-6 relative h-screen">
      <div>
        <h1 className="text-5xl mt-5 font-bold text-green-600 mb-8">Circle</h1>

        <nav className="grid gap-8 pl-5">
          <Link
            to="/"
            className="flex gap-4 items-center hover:text-green-600 cursor-pointer"
          >
            <Home size={24} />
            Home
          </Link>

          <Link
            to="/search"
            className="flex gap-4 items-center hover:text-green-600 cursor-pointer"
          >
            <UserRoundSearchIcon size={24} />
            Search
          </Link>

          <p className="flex gap-4 items-center hover:text-green-600 cursor-pointer">
            <GoHeart size={24} />
            <h3>Follow</h3>
          </p>

          <Link
            to="/profile"
            className="flex gap-4 items-center hover:text-green-600 cursor-pointer"
          >
            <CircleUserIcon size={24} />
            Profile
          </Link>
        </nav>

        {/* Tombol Create Post */}
        <Button
          className="bg-green-600 rounded-2xl px-16 mt-5"
          onClick={() => setOpenPostModal(true)}
        >
          Create Post
        </Button>

        {/* Modal Post */}
        <CreatePost
          open={openPostModal}
          onClose={() => setOpenPostModal(false)}
        />

        {/* Tombol Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
          }}
          className="flex items-center mb-5 space-x-2 absolute bottom-4 left-3 hover:text-green-800 cursor-pointer"
        >
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
