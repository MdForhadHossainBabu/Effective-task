const SingleCard = ({ assignment }) => {
 const { title, email, mark, photo, status, description, label, photoURL, Deadline } = assignment;
 return (
   <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
     <img
       className="object-cover w-full h-64"
       src={photo ||"https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
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
           <span className="mx-1 text-xs text-gray-600 dark:text-gray-300"> Date : {new Date(Deadline).toLocaleDateString() || new Date().toLocaleDateString()}
           </span>
         </div>
       </div>
     </div>
   </div>
 );
};

export default SingleCard;