import { CircleUserIcon, Home, UserRoundSearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";

export function ButtonLeftBar() {
  return (
    <div>
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

        <Link
          to="/follow"
          className="flex gap-4 items-center hover:text-green-600 cursor-pointer"
        >
          <GoHeart size={24} />
          Follow
        </Link>

        <Link
          to="/profile"
          className="flex gap-4 items-center hover:text-green-600 cursor-pointer"
        >
          <CircleUserIcon size={24} />
          Profile
        </Link>
      </nav>
    </div>
  );
}
