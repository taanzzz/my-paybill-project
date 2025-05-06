import Root from '../Root/Roots';
import Home from '../Pages/Home/Home';
import ContactUs from "../Pages/ContactUs/ContactUs";
import LoginForm from "../Pages/LoginForm/LoginForm";
import RegisterForm from './../Pages/RegisterForm/RegisterForm';
import { createBrowserRouter } from 'react-router';
import MyProfile from '../Pages/MyProfile/MyProfile';
import UserProfile from '../Pages/UserProfile/UserProfile';





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
    {
      path : 'profile',
      Component: MyProfile
    },
    ]
  },
  {
      path : 'login',
      Component: LoginForm
    },
    {
      path : 'register',
      Component: RegisterForm
    },
    {
      path : 'userProfile',
      Component: UserProfile
    },
]);