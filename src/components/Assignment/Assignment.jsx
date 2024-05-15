import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Assignment = () => {

  const assignments = useLoaderData();
  
  
  const [cardData, setCardData] = useState(assignments);
  console.log(cardData);
  

 return (
   <div>
     <Helmet>
       <title>Effective Task || All Assignment </title>
     </Helmet>
     <h1 className="text-4xl font-extrabold font-Roboto text-center text-rose-500 my-4">All Assignment </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-8xl max-w-7xl mx-auto">
       
       {cardData.map(assignment => (
         <SingleCard
           key={assignment._id}
           cardData={cardData}
           setCardData={setCardData}
           assignment={assignment}
         ></SingleCard>
       ))}
     </div>
   </div>
 );
};

export default Assignment;