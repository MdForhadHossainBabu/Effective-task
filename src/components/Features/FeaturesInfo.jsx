import { Link } from "react-router-dom";

const FeaturesInfo = ({ feature }) => {
 const {img, status, title, description, _id} = feature;
 return (
   <div>
     <div className="card bg-white border-2">
       <figure>
         <img
           className="h-[13rem] w-full shadow-xl drop-shadow-xl"
           src={img}
           alt=""
         />
       </figure>
       <div className="card-body">
         <h1 className="text-sm font-Mono text-blue-500">{status}</h1>
         <h2 className="card-title font-mono">{title}</h2>
         <p className="font-Space">{description}</p>
         <div className="card-actions justify-end">
           <Link to={`/details/${_id}`}>
             <button className="btn btn-accent font-bold text-white font-Raleway">View</button>
           </Link>
         </div>
       </div>
     </div>
   </div>
 );
};

export default FeaturesInfo;