import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MainLayout from "../Layouts/MainLayout";
import AllFood from "../Pages/AllFood";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'all-food',
            element:<AllFood></AllFood>
        },
        {
            path:'blog',
            element:<Blog></Blog>
        }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);

export default router;
