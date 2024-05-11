import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

const Root = () => {
 return (
   <div>
     <div className="h-[4rem]">
       <Navbar />
     </div>
     <Outlet />
     {/* <Footer/> */}
   </div>
 );
};

export default Root;