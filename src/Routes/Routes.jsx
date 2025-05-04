import {
  createBrowserRouter,
} from "react-router";
import Root from '../Root/Roots';
import Home from '../Pages/Home/Home';
import ContactUs from "../Pages/ContactUs/ContactUs";





export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,
    children: [
      {
         index : true,
         path : "/",
         Component : Home
      },
      {
      path : 'ContactUs',
      Component: ContactUs
    },
    ]
  },
]);