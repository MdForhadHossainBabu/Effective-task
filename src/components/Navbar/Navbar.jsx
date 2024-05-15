import { useContext, useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import { FaXmark} from 'react-icons/fa6';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AuthContext } from "../../FirebaseProvider/AuthProvider";


const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);



   const [open, setOpen] = useState(false);
   const navLinks = (
     <>
       <NavLink
         to="/"
         className={({ isActive }) =>
           isActive
             ? 'text-rose-500 border-amber-600 rounded border-b-2 px-4 font-medium'
             : 'hover:bg-transparent  rounded   px-4  font-medium  border-amber-600 '
         }
       >
         {' '}
         Home
       </NavLink>

       <NavLink
         to="/assignment"
         className={({ isActive }) =>
           isActive
             ? 'text-rose-500 border-amber-600 rounded border-b-2 px-4 font-medium'
             : 'hover:bg-transparent  rounded  px-4  font-medium  border-amber-600 '
         }
       >
         {' '}
         Assignment
       </NavLink>

       <NavLink
         to="/create-assignment"
         className={({ isActive }) =>
           isActive
             ? 'text-rose-500 border-amber-600 rounded border-b-2 px-4 font-medium'
             : 'hover:bg-transparent  rounded  px-4  font-medium  border-amber-600 '
         }
       >
         {' '}
         Create Assignment
       </NavLink>

       <NavLink
         to="/pending-assignment"
         className={({ isActive }) =>
           isActive
             ? 'text-rose-500 border-amber-600 rounded border-b-2 px-4 font-medium'
             : 'hover:bg-transparent  rounded px-4 font-medium border-amber-600 '
         }
       >
         {' '}
         Pending Assignment
       </NavLink>
     </>
   );
 
 const [theme, setTheme] = useState(
 localStorage.getItem("theme") ?  localStorage.getItem("theme") : 'system'
 )
//  console.log(theme);
 const darkQuery = window.matchMedia("(prefers-color0scheme: dark)");
 // console.log(darkQuery, 'darkQuery');
 const options = [
   {
   icon: 'sunny-outline',
    text: 'light'
   },
   {
   icon: 'moon-outline',
    text: 'dark'
   },
 ];

 function onWindowMatch() {
  if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)
  ) {
  
  element.classList.add('dark')
}
onWindowMatch();
}

 const element = document.documentElement;
 useEffect(() => {
  switch (theme) {
   case 'dark':
    element.classList.add('dark');
    localStorage.setItem('theme', 'dark')
    break;    
  
   case 'light':
    element.classList.remove('dark');
       localStorage.setItem('theme', 'light');
    break;    
  
   default:
    break;
  }
 }, [theme])
 
 darkQuery.addEventListener('change', (e) => {
  if (!("theme" in localStorage)) {
   if (e.matches) {
   element.classList.add('dark')
   }
   else (
    element.classList.remove('dark')
   )
  }
 })


 return (
   <div className="fixed w-full z-20">
     <div
       className={` w-[12rem] dark:bg-slate-950 bg-white border shadow-xl drop-shadow-2xl h-[100vh] absolute z-10 ${
         !open && 'hidden'
       } duration-500  lg:hidden`}
     >
       <div className="flex flex-col items-center gap-5 mt-24">
         { user && 
           <img
             className="w-16 h-16 rounded-full"
             src={user?.photoURL}
             alt="Profile"
           />
         }

         <div>
           <ul className="flex flex-col gap-4 font-Space">
             <>
               <NavLink
                 to="/"
                 className={({ isActive }) =>
                   isActive
                     ? 'text-orange-500 border-amber-600 rounded border-2 pr-5 pl-4 font-medium'
                     : 'hover:bg-transparent  rounded border-2 pr-5 pl-4 font-medium text-rose-400 border-amber-600 '
                 }
               >
                 {' '}
                 Home
               </NavLink>

               <NavLink
                 to="/assignment"
                 className={({ isActive }) =>
                   isActive
                     ? 'text-orange-500 border-amber-600 rounded border-2 pr-5 pl-4 font-medium'
                     : 'hover:bg-transparent  rounded border-2 pr-5 pl-4 font-medium text-rose-400 border-amber-600 '
                 }
               >
                 {' '}
                 Assignment
               </NavLink>

               <NavLink
                 to="/create-assignment"
                 className={({ isActive }) =>
                   isActive
                     ? 'text-orange-500 border-amber-600 rounded border-2 pr-5 pl-4 font-medium'
                     : 'hover:bg-transparent  rounded border-2 pr-5 pl-4 font-medium text-rose-400 border-amber-600 '
                 }
               >
                 {' '}
                 Create Assignment
               </NavLink>

               <NavLink
                 to="/pending-assignment"
                 className={({ isActive }) =>
                   isActive
                     ? 'text-orange-500 border-amber-600 rounded border-2 pr-5 pl-4 font-medium text-balance'
                     : 'hover:bg-transparent  rounded border-2 pr-5 pl-4 font-medium text-rose-400 border-amber-600 text-balance'
                 }
               >
                 {' '}
                 Pending Assignment
               </NavLink>
              {user && <button
                 onClick={() => logOut()}
                 className="border-2 px-4 w-full  font-extrabold hover:text-rose-600 bg-rose-500 text-white border-amber-500 py-1 rounded font-mono hover:bg-transparent"
               >
                 logout
               </button>}
             </>
           </ul>
         </div>
       </div>
     </div>
     <div className="flex items-center justify-between py-4 px-4 dark:bg-slate-950 bg-slate-300 w-full h-14">
       <div>
         <h1 className="text-2xl font-extrabold text-sky-600 font-Roboto">
           Effective<span className="text-indigo-600">Task</span>
         </h1>
       </div>
       <div>
         {/* menu button home about service  */}

         {/* navbar end lg device  */}
       </div>

       <div className="flex items-center gap-3">
         <div>
           <ul className="items-center gap-5 hidden lg:flex font-Space">
             {navLinks}
           </ul>
         </div>
         {/* Toggle function button in dark theme */}
         <div className="flex items-center gap-2">
           {options.map(opt => (
             <button
               onClick={() => setTheme(opt.text)}
               key={opt.text}
               className={` shadow-2xl drop-shadow-2xl flex items-center rounded-sm ${
                 theme === opt.text && 'text-green-600'
               } text-2xl dark:border-blue-500 p-1 border `}
             >
               <ion-icon name={opt.icon}></ion-icon>
             </button>
           ))}

           {/* on function in dark & light theme  */}
         </div>
         <div className="hidden lg:flex md:flex">
           {user ? (
             <button
               onClick={() => logOut()}
               className="border-2 px-4  font-bold text-white border-amber-500 py-1 rounded styleOf hover:bg-transparent"
             >
               logout
             </button>
           ) : (
             <NavLink
               to="/login"
               className={({ isActive }) =>
                 isActive
                   ? 'text-orange-500 border-amber-600 rounded border-2 px-2 font-bold uppercase'
                   : 'hover:bg-transparent  rounded border-2 pr-5 pl-4 font-bold uppercase text-rose-400 border-amber-600 '
               }
             >
               {' '}
               login
             </NavLink>
           )}
         </div>
         {user && (
           <div className="flex items-center relative">
             <img
               title={user?.displayName}
               onClick={() => setDropdown(!dropdown)}
               className="w-12 h-12 rounded-full hidden md:flex lg:flex"
               src={user?.photoURL}
               alt=""
             />

             <div
               className={`absolute h-24 top-14 ${
                 dropdown ? '' : 'hidden'
               } right-4 border bg-rose-200 px-4 rounded-md w-[12rem]`}
             >
               {user ? (
                 <div className="space-y-4 p-2">
                   <h1 className=" text-center dark:text-black">
                     {user.displayName}
                   </h1>
                   <button
                     onClick={() => logOut()}
                     className="border-2 px-4 w-full  font-bold hover:text-rose-600 bg-orange-500 border-amber-500 py-1 rounded text-white hover:bg-transparent"
                   >
                     logout
                   </button>
                 </div>
               ) : (
                 <NavLink
                   to="/login"
                   className={({ isActive }) =>
                     isActive
                       ? 'text-orange-500 border-amber-600 rounded border-2 px-2 font-bold uppercase lg:hidden'
                       : 'hover:bg-transparent  rounded border-2 pr-5 pl-4 font-bold uppercase text-rose-400 border-amber-600 lg:hidden'
                   }
                 >
                   {' '}
                   login
                 </NavLink>
               )}
             </div>
           </div>
         )}
         <div
           className="text-2xl border-2 p-1 md:flex lg:hidden flex text-white bg-rose-600"
           onClick={() => setOpen(!open)}
         >
           {open ? <FaXmark /> : <HiOutlineMenuAlt1 />}
         </div>
       </div>
     </div>
   </div>
 );
};

export default Navbar;