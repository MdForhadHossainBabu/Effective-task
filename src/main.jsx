import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes';
import AuthProvider from './FirebaseProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import {  HelmetProvider } from 'react-helmet-async';
import { SkeletonTheme } from 'react-loading-skeleton';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="dark:text-gray-100 dark:bg-slate-950 duration-100">
    <>
      <AuthProvider>
        <HelmetProvider>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <RouterProvider router={router}>
              <Toaster position="top-center" reverseOrder={false} />
            </RouterProvider>
          </SkeletonTheme>
        </HelmetProvider>
      </AuthProvider>
    </>
  </div>
);
