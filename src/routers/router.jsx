import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../component/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
const router = createBrowserRouter([
   {
    path: "/",
    element:<MainLayout/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>,
      },{
        path:"/my-cart",
        element:<MyCart/>

      },
     {
        path:"/product-detail/:productId",
        element:<ProductDetail/>
     }
    ],
   }
  ])
  export default router;