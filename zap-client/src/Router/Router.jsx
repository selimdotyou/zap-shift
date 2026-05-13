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
        element: <Pricing />
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
  }
]);

export default router;
