import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import Assignment from "../components/Assignment/Assignment";
import CreateAssignment from "../components/CreateAssignment/CreateAssignment";
import PendingAssignment from "../components/PendingAssignment/PendingAssignment";
import UpdateOne from "../components/UpdateOne/UpdateOne";
import View from "../components/View/View";
import TakeEvent from "../components/TakeEvent/TakeEvent";
import Details from "../components/Features/Details";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

 const router = createBrowserRouter([
   {
     path: '/',
     element: <Root />,
     errorElement: <ErrorPage />,
     children: [
       {
         index: true,
         element: <Home />,
       },
       {
         path: '/login',
         element: <Login />,
       },
       {
         path: '/register',
         element: <Register />,
       },
       {
         path: '/assignment',
         element: (
           <PrivateRoute>
             <Assignment />
           </PrivateRoute>
         ),
         loader: () => fetch('http://localhost:5000/create-assignment'),
       },
       {
         path: '/create-assignment',
         element: <CreateAssignment />,
       },
       {
         path: '/pending-assignment',
         element: (
           <PrivateRoute>
             <PendingAssignment />
           </PrivateRoute>
         ),
         loader: () => fetch('http://localhost:5000/create-assignment'),
       },
       {
         path: '/update/:id',
         element: <UpdateOne />,
         loader: ({ params }) =>
           fetch(`http://localhost:5000/create-assignment/${params.id}`),
       },
       {
         path: '/view/:id',
         element: <View />,
         loader: ({ params }) =>
           fetch(`http://localhost:5000/create-assignment/${params.id}`),
       },
       {
         path: '/take/:id',
         element: <TakeEvent />,
         loader: ({ params }) =>
           fetch(`http://localhost:5000/create-assignment/${params.id}`),
       },
       {
         path: '/details/:id',
         element: <Details />,
         loader: ({ params }) =>
           fetch(` http://localhost:5000/features/${params.id}`),
       },
     ],
   },
 ]);

export default router;