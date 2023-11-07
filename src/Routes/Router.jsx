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
            element:<AllFood></AllFood>,
            loader:()=> fetch('http://localhost:5000/itemCount')
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
          path:'update-item/:id',
          element:<UpdateItem></UpdateItem>,
          loader: ({params})=>fetch(`http://localhost:5000/api/v1/all-foods/${params.id}`)
        },
        {
          path:'my-item',
          element:<MyItem></MyItem>
        },
        {
          path:'single-food/:id',
          element:<SingleFood></SingleFood>,
          loader: ({params})=>fetch(`http://localhost:5000/api/v1/all-foods/${params.id}`)
        },
        {
          path:'checkOut/:id',
          element:<CheckOut></CheckOut>,
          loader: ({params})=>fetch(`http://localhost:5000/api/v1/all-foods/${params.id}`)
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
