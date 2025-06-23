import { LeftBar } from "./leftBarLayout/leftBar";
import RightBar from "./rightBarLayout/rightBar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="h-screen w-screen flex overflow-hidden  ">
      {/* Sidebar */}
      <aside
        className="w-[270px] border-r  border-gray-700
       shrink-0 p-4 overflow-hidden"
      >
        <LeftBar />
      </aside>

      {/* Middle */}
      <main
        className="flex-1 max-w-[830px] border-r  border-gray-700
     overflow-y-auto scrollbar-hide"
      >
        <Outlet />
      </main>

      {/* My Profile */}
      <aside
        className="w-[300px]
      shrink-0 overflow-hidden"
      >
        <RightBar />
      </aside>
    </div>
  );
}
