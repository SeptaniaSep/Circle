import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/layouts/layout";
import { StatusPage } from "@/pages/middlePages/detailStatus";
import RegisterPage from "@/components/auths/registerPage";
import LoginPage from "@/components/auths/loginPage";
import ForgotPage from "@/components/auths/forgotPage";
import ResetPasswordPage from "@/components/auths/resetPwdPage";
import { MyProfilePage } from "@/pages/middlePages/myProfile";
import ProtectedRoute from "./protectedRoute";
import { SearchPage } from "@/pages/middlePages/search";
import { Home } from "@/layouts/home";
import { AllPost } from "@/pages/middlePages/myProfAllpost";
import Media from "@/pages/middlePages/myProfMedia";
import { Follow } from "@/pages/middlePages/follow";
import { Followers } from "@/pages/middlePages/followers";
import { Following } from "@/pages/middlePages/following";

const router = createBrowserRouter([
  {
    Component: ProtectedRoute,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "search",
            Component: SearchPage,
          },
          {
            path: "status/:id",
            Component: StatusPage,
          },
          {
            path: "profile/",
            Component: MyProfilePage,
            children: [
              {
                index: true,
                Component: AllPost, // default
              },
              {
                path: "AllPost",
                Component: AllPost,
              },
              {
                path: "media",
                Component: Media,
              },
            ],
          },
          {
            path: "follow",
            Component: Follow,
            children: [
              {
                index: true,
                Component: Followers, // default
              },
              {
                path: "followers",
                Component: Followers,
              },
              {
                path: "Following",
                Component: Following,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/forgot",
    Component: ForgotPage,
  },
  {
    path: "/reset",
    Component: ResetPasswordPage,
  },
]);

export default router;
