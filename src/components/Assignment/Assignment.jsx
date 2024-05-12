import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";

const Assignment = () => {

    const assignments = useLoaderData();
    console.log(assignments);
    const {title, email , mark, photo , status, description, label, } = assignments
 return (
     <>
         

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-8xl mx-auto">{
         assignments.map(assignment => <SingleCard key={assignment._id} assignment={assignment}></SingleCard>)
         }</div>
     
   </>
 );
};

export default Assignment;