import {
  createBrowserRouter,
  
} from "react-router";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import Service from "../Page/Service/Service";
import Coverage from "../Page/Coverage/Coverage";
import Contact from "../Page/Contact/Contact";
import Blog from "../Page/Blog/Blog";
import Pricing from "../Page/Pricing/Pricing";
import About from "../Page/About/About";
import AuthLayOut from "../LayOut/AuthLayOut";
import Register from "../Page/Register/Register";
import Login from "../Page/Login/Login";
import ForgotPassword from "../Page/Login/ForgotPassword";
import Rider from "../Page/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import DashboardLayOut from "../LayOut/DashboardLayOut";
import Dashboard from "../Page/Dashboard/Dashboard/Dashboard";
import SendParcel from "../Page/Dashboard/SentParcel/SendParcel";


let router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: '/coverage',
        element: <Coverage />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/pricing',
        element: <PrivateRoute><Pricing /></PrivateRoute>
      },
      {
        path: '/be-a-rider',
        element: <PrivateRoute><Rider /></PrivateRoute>
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayOut />,
    children: [
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />
      }
    ]
  },
  // dashboard route will be here
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayOut /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'add-parcel',
        element: <SendParcel />
      }
    ]
  }
]);


export default router;
