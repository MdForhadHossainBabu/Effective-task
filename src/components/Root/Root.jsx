import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import FAQSection from "../FAQ/FAQ";

const Root = () => {
 return (
   <div>
     <div className="h-[4rem]">
       <Navbar />
     </div>
     <Outlet />
   </div>
 );
};

export default Root;