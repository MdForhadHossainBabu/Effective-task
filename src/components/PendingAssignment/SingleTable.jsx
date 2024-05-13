const SingleTable = ({ tableData }) => {
  console.log(tableData);
  const { _id, title, label, email, status, mark, Deadline } = tableData;
  const handleProgress = (id, prevStatus, Status) => {
    console.log(id, prevStatus, Status);
    fetch(`http://localhost:5000/create-assignment/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(prevStatus)
    }).then(res => res.json()).then(data => {
      console.log(data);
   })
  }
 return (
   <tbody className="bg-white divide-y divide-gray-200  font-Roboto">
     <tr>
       <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
         {title}
       </td>
       <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
         {email}
       </td>

       <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
         {new Date(Deadline).toLocaleDateString()}
       </td>

       <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
         {mark}
       </td>
       <td className="px-4 py-4 text-sm whitespace-nowrap">
         <div className="flex items-center gap-x-2">
           <p
             className={`px-3 py-1 rounded-full ${
               label === 'easy' && 'text-blue-500'
             } ${label === 'hard' && 'text-rose-500'} ${
               label === 'medium' && 'text-amber-500'
             } bg-blue-100/60
                           text-xs `}
           >
             {label}
           </p>
         </div>
       </td>
       <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
         <div
           className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 ${
             status === 'pending' && 'text-yellow-500'
           }  ${status === 'In Progress' && 'text-cyan-500'}  ${
             status === 'Rejected' && 'text-rose-500'
           }`}
         >
           <span
             className={`h-1.5 w-1.5 rounded-full ${
               status === 'pending' && 'bg-yellow-500'
             }  
         ${status === 'In Progress' && 'bg-cyan-500'}     
         ${status === 'Rejected' && 'bg-rose-500'}     
        `}
           ></span>
           <h2 className="text-sm font-normal ">{status}</h2>
         </div>
       </td>
       <td className="px-4 py-4 text-sm whitespace-nowrap">
         <div className="flex items-center gap-x-6">
           <button onClick={()=>handleProgress(_id, status, 'In Progress')} className="text-gray-500 transition-colors duration-200   hover:text-cyan-500 focus:outline-none">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="w-5 h-5"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="m4.5 12.75 6 6 9-13.5"
               />
             </svg>
           </button>

           <button className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="w-5 h-5"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
               />
             </svg>
           </button>
         </div>
       </td>
     </tr>
   </tbody>
 );
};

export default SingleTable;