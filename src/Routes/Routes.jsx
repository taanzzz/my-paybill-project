import {
  createBrowserRouter,
} from "react-router";
import Root from '../Root/Roots';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';






export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,
    children: [
      {
         index : true,
         path : "/",
         Component : Home
      }
    ]
  },
  {
    path: "/login",
    Component: Login,
  },
]);