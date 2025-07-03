import { Footer } from "@/pages/rightBarPages/footerDev";
import { MyProfile } from "@/pages/rightBarPages/myProfile";
import { SugestedUser } from "@/pages/rightBarPages/sugested";

function RightBar() {
  return (
    <div className="grid text-white p-3 m-2 fixed">
      {/* Profile Section */}
      <div>
        <MyProfile />
      </div>

      {/* Suggested Users */}
      <div>
        <SugestedUser />
      </div>

      {/* develop */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default RightBar;
