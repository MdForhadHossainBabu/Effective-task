import { useLoaderData } from "react-router-dom";

const Details = () => {
 const loader = useLoaderData();
 console.log(loader);
  const { img, status, title, description,  } = loader;
 return (
  <>
   <h1 className="text-3xl font-bold font-Space text-center text-rose-500 mt-4">Details Page </h1>
     <div className="flex items-center justify-center">
    <div className="card bg-white border-2 w-[42rem] my-10
       ">
         <figure>
           <img
             className="h-[20rem] w-full shadow-xl drop-shadow-xl"
             src={img}
             alt=""
           />
         </figure>
         <div className="card-body">
           <h1 className="text-sm font-Mono">{status}</h1>
           <h2 className="card-title font-Raleway font-bold">{title}</h2>
           <p className="font-mono">{description}</p>
         </div>
       </div>
     </div>
   </>
 );
};

export default Details;