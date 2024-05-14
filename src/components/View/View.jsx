import { Link, useLoaderData } from "react-router-dom";

const View = () => {
 const loader = useLoaderData();
 console.log(loader);
   const {
    _id,
    title,
    photo,
    description,
    Deadline,
    status,
    label,
    name,
    mark
  } = loader;
    console.log(loader);
 return (
   <div className="flex items-center justify-center "> 
     <div className="max-w-2xl overflow-hidden my-10 shadow-2xl  rounded-lg drop-shadow-2xl dark:bg-gray-800 font-Roboto bg-slate-200">
       <img
         className="object-cover w-full shadow-2xl drop-shadow-2xl h-[24rem]"
         src={
           photo ||
           'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
         }
         alt="Article"
       ></img>

       <div className="p-6">
         <div>
           <span>
             <h1
               className={`text-sm
               ${status === 'pending' && 'text-orange-500'}
               ${status === 'In Progress' && 'text-cyan-500'}
               ${
                 status === 'Complete' && 'text-rose-500'
               }border-cyan-500 rounded font-Raleway
               `}
             >
               {' '}
               {status}
             </h1>
           </span>
           <a
             href=""
       className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white 
 hover:text-gray-600 hover:underline"
             role="link"
           >
             {title.substring(0,60)}
           </a>
           <div className="flex items-center justify-between mx-4">
             <div>
               {' '}
               <span
                 className={` ${label === 'easy' && 'text-cyan-500'} ${
                   label === 'medium' && 'text-amber-500'
                 } ${
                   label === 'hard' && 'text-rose-600'
                 } bg-[#E9F2FE] px-4 pb-1 rounded-full font-Space `}
               >
                 {label}
               </span>
             </div>
             <div>
               <h1 className="flex items-center gap-1">
                 Marks : 
                 <span
                   className={`${mark <= 30 && 'text-red-600'} ${
                     mark <= 50 && 'text-rose-600'
                   } ${mark <= 70 && 'text-blue-500'} ${
                     mark <= 100 && 'text-green-600'
                   }`}
                 >
                   {mark}
                 </span>
               </h1>
             </div>
           </div>

           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
             {description || ''}
           </p>
         </div>

         <div className="mt-4">
           <div className="flex items-center">
             <div className="flex items-center">
               <a
                 href="#"
                 className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                 role="link"
               >
                 {name}
               </a>
             </div>
             <div className="flex items-center gap-12">
               <div>
                 <span className="mx-1 text-xs text-rose-600 flex items-center gap-1 dark:text-gray-300 font-Space ">
                   Date :
                   <span className="text-green-500">
                     {new Date(Deadline).toLocaleDateString() ||
                       new Date().toLocaleDateString()}
                   </span>
                 </span>
               </div>
               <div></div>
             </div>
           </div>
         </div>
         <div className="flex items-center flex-col flex-1">
           <div className="flex items-center gap-4 justify-around mt-8 text-balance">
             <div>
               <Link to={`/take/${_id}`}>
                 <button className="border-2 py-1 rounded-md text-lg font-medium bg-rose-500 text-white font-Raleway px-5">
                   Take Assignment
                 </button>
               </Link>
             </div>
             <Link to={`/update/${_id}`}>
               <button className="border-2 py-1 rounded-md text-lg font-medium bg-cyan-700 text-white font-Space px-5">
                 Update{' '}
               </button>
             </Link>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default View;