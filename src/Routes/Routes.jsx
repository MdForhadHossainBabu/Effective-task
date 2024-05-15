import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';
import Assignment from '../components/Assignment/Assignment';
import CreateAssignment from '../components/CreateAssignment/CreateAssignment';
import PendingAssignment from '../components/PendingAssignment/PendingAssignment';
import UpdateOne from '../components/UpdateOne/UpdateOne';
import View from '../components/View/View';
import TakeEvent from '../components/TakeEvent/TakeEvent';
import Details from '../components/Features/Details';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

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
        loader: () =>
          fetch(
            'https://assignment-11-server-two-navy.vercel.app/create-assignment'
          ),
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
        loader: () =>
          fetch(
            'https://assignment-11-server-two-navy.vercel.app/create-assignment'
          ),
      },
      {
        path: '/update/:id',
        element: <UpdateOne />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-two-navy.vercel.app/create-assignment/${params.id}`
          ),
      },
      {
        path: '/view/:id',
        element: <View />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-two-navy.vercel.app/create-assignment/${params.id}`
          ),
      },
      {
        path: '/take/:id',
        element: <TakeEvent />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-two-navy.vercel.app/create-assignment/${params.id}`
          ),
      },
      {
        path: '/details/:id',
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            ` https://assignment-11-server-two-navy.vercel.app/features/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
