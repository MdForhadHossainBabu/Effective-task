import { useContext, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from "../../FirebaseProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);

  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
 // console.log(user);
 // handle form submit to get value;
 const handleGetData = e => {
  e.preventDefault();
   const form = e.target;
   const name = form.name.value;
  const title = form.title.value;
  const mark = parseFloat(form.marks.value);
  const photo = form.photo.value;
  const label = form.label.value;
  const description = form.description.value;
   const status = "pending";
   const Deadline = startDate;
  const email = form.email.value;
  const photoURL = user?.photoURL;
   const newAssignment = {
    name,
     title,
    mark,
    photo,
    label,
    description,
    status,
    email,
    photoURL,
    Deadline,
  };
   console.log(newAssignment);
   fetch('http://localhost:5000/create-assignment', {
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body:JSON.stringify(newAssignment)
   }).then(res => res.json()).then(data => {
     console.log(data);
    
     if (!/^[0-9]+$/.test(mark)) {
        setError('Please mark assign to Number')
      //  toast.error('please mark assign to Number')
       return
     }
      if (!Math.max(mark <= 100)) {
        setError('Marks max value 100');
        return;
      }
       if (data.insertedId) {
         Swal.fire({
           title: 'success',
           icon: 'success',
           text: 'Your Assignment Creating Now',
           confirmButtonText: 'cool',
         });
       }
   })
   setError('')
 }
 return (
   <div className="h-[91.6vh] mb-12">
     <Helmet>
       <title>Effective Task || Create-Assignment</title>
     </Helmet>
     <h1 className="text-4xl text-center font-bold text-rose-600">
       Creating Assignment
     </h1>
     <p className="text-center mt-2 mb-4">
       These are just a few ideas to get you started. You can adjust the
       difficulty <br /> and specific focus depending on the age and skill level
       of your students.
     </p>
     <div className="grid grid-cols-1 lg:grid-cols-4">
       <div className="lg:col-span-2">
         <img
           className="h-full w-full lg:mx-4 px-4 rounded"
           src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"
           alt=""
         />
       </div>
       <form
         className="lg:col-span-2 lg:w-3/4 lg:mx-auto w-full px-4 space-y-3"
         onSubmit={handleGetData}
       >
         <div>
           <div className="space-y-2">
             <p className="font-medium">Name : </p>

             <input
               className="w-full px-2 py-2 rounded outline-none bg-slate-200"
               type="text"
               placeholder="Name..."
               name="name"
               required
               id=""
             />
           </div>
           <div className="space-y-2">
             <p className="font-medium">Email : </p>

             <input
               className="w-full px-2 py-2 rounded outline-none bg-slate-200"
               type="text"
               placeholder="Email*"
               name="email"
               required
               id=""
             />
           </div>
           <div className="space-y-2">
             <p className="font-medium">Title : </p>

             <input
               className="w-full px-2 py-2 rounded outline-none bg-slate-200"
               type="text"
               placeholder="Title..."
               name="title"
               required
               id=""
             />
           </div>
           <div className="space-y-2">
             <p className="font-medium">Photo URL : </p>
             <input
               className="bg-slate-200 w-full outline-none px-4 py-2 rounded"
               type="text"
               name="photo"
               required
               id=""
               placeholder="Photo URL..."
             />
           </div>
           <div className="space-y-2">
             <p className="font-medium">Select label :</p>
             <select
               className=" w-full p-3 outline-none font-medium rounded bg-slate-200"
               name="label"
               required
               id=""
             >
               <option value="easy">Easy</option>
               <option value="medium">Medium</option>
               <option value="hard">Hard</option>
             </select>
           </div>
           <div className="flex items-center gap-12">
             <div className="flex-1 space-y-2">
               <p className="font-medium">Marks : </p>
               <input
                 className="bg-slate-200 outline-none px-4 py-2 w-full font-medium rounded"
                 type="text"
                 required
                 name="marks"
                 id=""
                 placeholder="Marks of Assignment..."
               />
               {error && (
                 <p className="text-sm font-mono text-red-500">{error}</p>
               )}
             </div>

             <div className="flex-1 space-y-2">
               <p className="font-medium">Deadline : </p>
               <DatePicker
                 className="outline-none bg-slate-200 px-2 py-2 w-full rounded dark:text-slate-900"
                 selected={startDate}
                 onChange={date => setStartDate(date)}
               />
             </div>
           </div>
           <div className="space-y-2">
             <p className="font-medium">Description : </p>

             <textarea
               className="bg-slate-200 drop-shadow-2xl shadow-2xl w-full h-20  p-2  outline-none font-medium opacity-70 rounded"
               name="description"
               required
               placeholder="Description"
               id=""
             ></textarea>
           </div>
           <input
             className="border-2 w-full py-2 font-extrabold bg-slate-300 text-rose-500"
             type="submit"
             value="Create"
           />
         </div>
       </form>
     </div>
     {/* form end */}
   </div>
 );
};

export default CreateAssignment;