import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Assignment = () => {

    const assignments = useLoaderData();
  const [cardData, setCardData] = useState(assignments);
  

 return (
   <div>
     <Helmet>
       <title>Effective Task || All Assignment </title>
     </Helmet>
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