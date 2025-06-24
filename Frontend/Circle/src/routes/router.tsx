import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/layouts/layout";
import { StatusPage } from "@/layouts/middleLayout/status";
import RegisterPage from "@/components/auths/registerPage";
import LoginPage from "@/components/auths/loginPage";
import ForgotPage from "@/components/auths/forgotPage";
import ResetPasswordPage from "@/components/auths/resetPwdPage";
import { MyProfilePage } from "@/layouts/middleLayout/myProfile";
import { Home } from "@/layouts/middleLayout/home";
import ProtectedRoute from "./protectedRoute";
import { SearchPage } from "@/layouts/middleLayout/search";

const router = createBrowserRouter([

  {
  
    Component: ProtectedRoute,
    children: [
      {
        path: "/",
        Component: Layout,
        children: 
        [
          { 
            
            index: true, 
            Component: Home 
          },
           {
            path: "search",
            Component: SearchPage,
          },
          { 
            path: "profile", 
            Component: MyProfilePage
           },
          {
            path: "status/:id",
            Component: StatusPage,
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
