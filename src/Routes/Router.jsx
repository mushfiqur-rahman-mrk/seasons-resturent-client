import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MainLayout from "../Layouts/MainLayout";
import AllFood from "../Pages/AllFood";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyOrder from "../Pages/MyOrder";
import AddItem from "../Pages/AddItem";
import UpdateItem from "../Pages/UpdateItem";
import MyItem from "../Pages/MyItem";
import { element } from "prop-types";
import SingleFood from "../Pages/SingleFood";
import CheckOut from "../Pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    // errorElement: <Error></Error>,
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
        },
        {
          path:'my-order',
          element:<MyOrder></MyOrder>
        },
        {
          path:'add-item',
          element:<AddItem></AddItem>
        },
        {
          path:'update-item',
          element:<UpdateItem></UpdateItem>
        },
        {
          path:'my-item',
          element:<MyItem></MyItem>
        },
        {
          path:'single-food',
          element:<SingleFood></SingleFood>
        },
        {
          path:'checkOut',
          element:<CheckOut></CheckOut>
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
