import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../UseAuth/useAuth";
import { ScaleLoader } from "react-spinners";
// import { useState } from 'react';

const PrivateRoute = ({ children }) => {
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState('#ffffff');

 const { user, loading } = useAuth();
 const location = useLocation();
 // console.log(location);



 if (!user) {
  return <Navigate to="/login" state={location?.pathname}  replace/>
 }
  if (loading) {
    return (
      <p className="flex flex-col items-center justify-center my-[15%] max-w-7xl mx-auto ">
        <ScaleLoader
          color="tomato"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </p>
    );
  }

 return (
  <div>
   {children}
  </div>
 );
};

export default PrivateRoute;