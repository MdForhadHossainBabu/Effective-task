import { useLoaderData } from "react-router-dom";
import SingleTable from "./SingleTable";
import { Helmet } from "react-helmet-async";
const PendingAssignment = () => {

 const data = useLoaderData();
 // console.log(data);jjk

 return (
   <div>
     <Helmet>
       <title>Effective Task || Pending Assignment</title>
     </Helmet>
     <div className="max-w-7xl mx-auto">
       <section className="container px-4 mx-auto pt-12">
         <div className="flex items-center gap-x-3">
           <h2 className="text-lg font-medium text-gray-800 font-Space">Assignments</h2>

           <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
             {data.length} Requests
           </span>
         </div>

         <div className="flex flex-col mt-6">
           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
               <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                 <table className="min-w-full divide-y divide-gray-200">
                   <thead className="bg-gray-50">
                     <tr>
                       <th
                         scope="col"
                         className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                       >
                         <div className="flex items-center gap-x-3">
                           <span>Title</span>
                         </div>
                       </th>
                       <th
                         scope="col"
                         className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                       >
                         <div className="flex items-center gap-x-3">
                           <span>Email</span>
                         </div>
                       </th>

                       <th
                         scope="col"
                         className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                       >
                         <span>Deadline</span>
                       </th>

                       <th
                         scope="col"
                         className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                       >
                         <button className="flex items-center gap-x-2">
                           <span>Mark</span>
                         </button>
                       </th>

                       <th
                         scope="col"
                         className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                       >
                         Label
                       </th>

                    
                       <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                         Actions
                       </th>
                     </tr>
                   </thead>
                   {data.map(item => (
                     <SingleTable key={item._id} tableData={item}></SingleTable>
                   ))}
                 </table>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
   </div>
 );
};

export default PendingAssignment;