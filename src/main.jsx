import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes';
import AuthProvider from './FirebaseProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="dark:text-gray-100 dark:bg-slate-950 duration-100">
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  </div>
);
