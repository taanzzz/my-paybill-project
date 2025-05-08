import Root from './../Root/Roots';
import Home from './../Pages/Home/Home';
import ContactUs from './../Pages/ContactUs/ContactUs';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import MyProfile from '../Pages/MyProfile/MyProfile';
import UserProfile from './../Pages/UserProfile/UserProfile';
import PayPage from './../Pages/PayPage/PayPage';
import History from './../Pages/History/History';
import LoginForm from './../Pages/LoginForm/LoginForm';
import RegisterForm from './../Pages/RegisterForm/RegisterForm';
import { createBrowserRouter } from 'react-router';
import BillCarousel from '../Component/Banner/BillCarousel';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "ContactUs",
        Component: ContactUs,
      },

      {
        element: <PrivateRoute />,
        children: [
          {
            path: "profile",
            Component: MyProfile,
          },
          {
            path: "userProfile",
            Component: UserProfile,
          },
          {
            path: "pay/:billType",
            Component: PayPage,
          },
          {
            path: "history",
            Component: History,
          },
          {
            path: "mybills",
            Component: BillCarousel,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    Component: LoginForm,
  },
  {
    path: "register",
    Component: RegisterForm,
  },
]);
