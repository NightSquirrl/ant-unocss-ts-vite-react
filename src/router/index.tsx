import { Navigate, RouteObject } from "react-router-dom";
import Home from "../pages/Home";
// 路由映射表
const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
  // 路由重定向
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default routes;
