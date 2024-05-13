import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCard = ({ assignment }) => {
  const { _id,title, photo,description,  photoURL, Deadline, status } = assignment;
    

  const handleDelete = (_id) => {
   Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!',
   }).then(result => {
     if (result.isConfirmed) {
       console.log('data');
       fetch(`http://localhost:5000/create-assignment/${_id}`, {
         method:'DELETE'
       }).then(res => res.json()).then(data => {
        //  console.log(data);
         if (data.deletedCount > 0) {
          //  console.log('data delete successfully');
           Swal.fire({
             title: 'Success!',
             text: 'Assignment Delete Successfully!',
             icon: 'success',
           });
         }
       })
     }
   });

   
  }
 return (
   <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
     <img
       className="object-cover w-full h-64"
       src={
         photo ||
         'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
       }
       alt="Article"
     ></img>

     <div className="p-6">
       <div>
         <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
           Product
         </span>
         <a
           href="#"
           className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
           role="link"
         >
           {title || 'amar sonar bangla ami tomy valo bashi '}
         </a>
         <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
           {description || ''}
         </p>
       </div>

       <div className="mt-4">
         <div className="flex items-center">
           <div className="flex items-center">
             <img
               className="object-cover h-10 rounded-full"
               src={photoURL}
               alt="Avatar"
             ></img>
             <a
               href="#"
               className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
               role="link"
             >
               Jone Doe
             </a>
           </div>
           <div className="flex items-center gap-4">
             <div>
               <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                 {' '}
                 Date :{' '}
                 {new Date(Deadline).toLocaleDateString() ||
                   new Date().toLocaleDateString()}
               </span>
             </div>
             <div>
               <h1 className={`text-sm
               ${status === 'pending' && 'text-orange-500'}
               ${status === 'In Progress' && 'text-cyan-500'}
               ${status === 'Complete' && 'text-rose-500'} border-2 px-3 pb-1 border-cyan-500 rounded
               `}> {status}</h1>
             </div>
           </div>
         </div>
       </div>
       <div className="flex items-center flex-col flex-1">
         <div className="flex items-center gap-4 justify-around mt-8">
           <Link to={`/update/${_id}`}>
             <button className="border-2 px-12 py-1 rounded-md text-lg font-medium bg-cyan-700 text-white">
               Update{' '}
             </button>
           </Link>
           <button
             onClick={() => handleDelete(_id)}
             className="border-2 px-12 py-1 rounded-md text-lg font-medium bg-rose-500 text-white "
           >
             Delete
           </button>
         </div>
       </div>
     </div>
   </div>
 );
};

export default SingleCard;