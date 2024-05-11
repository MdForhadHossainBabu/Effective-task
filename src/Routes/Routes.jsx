import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Banner from "../components/Banner/Banner";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

 const router = createBrowserRouter([
 {
  path: '/',
   element: <Root />,
   errorElement: <ErrorPage/>,
   children: [
    {
     index: true,
     element: <Banner/>
   },
    {
     path:'/login',
     element: <Login/>
   },
    {
     path:'/register',
     element: <Register/>
   }
  ]
 }
 ])

export default router;