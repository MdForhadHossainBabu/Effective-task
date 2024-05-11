import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import Assignment from "../components/Assignment/Assignment";
import CreateAssignment from "../components/CreateAssignment/CreateAssignment";

 const router = createBrowserRouter([
 {
  path: '/',
   element: <Root />,
   errorElement: <ErrorPage/>,
   children: [
    {
     index: true,
     element: <Home/>
   },
    {
     path:'/login',
     element: <Login/>
   },
    {
     path:'/register',
     element: <Register/>
   },
    {
     path:'/assignment',
     element: <Assignment/>
   },
    {
     path:'/create-assignment',
     element: <CreateAssignment/>
   },
  ]
 }
 ])

export default router;