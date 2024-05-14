import { useState } from "react";
import {useLoaderData, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateOne = () => {
 const cards = useLoaderData();
 const {  _id,label, mark, photo, title, description, Deadline, name, email } = cards;

   // const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
  console.log(cards);
    const location = useLocation();
  console.log(location);
  const [error, setError] = useState("")

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const mark = parseFloat(form.marks.value);
    const photo = form.photo.value;
    const label = form.label.value;
    const email = form.email.value;
    const description = form.description.value;
    const newAssignment = {
      title,
      mark,
      photo,
      label,
      description,
      name,
      email
    };
    console.log(newAssignment);
    fetch(`http://localhost:5000/create-assignment/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newAssignment),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
          if (!/^[0-9]+$/.test(mark)) {
            setError('Please mark assign to Number');
            return;
          }
        if (data.matchedCount) {
          Swal.fire({
            title: 'success',
            icon: 'success',
            text: 'Your Assignment Update Successfully',
            confirmButtonText: 'ok',
          });
        }
      });
    setError("")
  };
 return (
   <div className="h-[100vh]">
     <h1 className="text-4xl text-center mt-5 text-rose-600 font-Space font-extrabold">
       Update Assignment
     </h1>
     <form
       onSubmit={handleUpdate}
       className="lg:col-span-2 lg:w-3/4 lg:mx-auto w-full px-4 mb-12 mt-6"
     >
       <div>
         <div className="space-y-2">
           <p className="font-medium">Name : </p>

           <input
             className="w-full px-2 py-2 rounded outline-none bg-slate-200"
             type="text"
             defaultValue={name}
             placeholder="Name..."
             name="name"
             id=""
           />
         </div>
         <div className="space-y-2">
           <p className="font-medium">Title : </p>

           <input
             className="w-full px-2 py-2 rounded outline-none bg-slate-200"
             type="text"
             defaultValue={title}
             placeholder="Title..."
             name="title"
             id=""
           />
         </div>
         <div className="space-y-2">
           <p className="font-medium">Photo URL : </p>
           <input
             className="bg-slate-200 w-full outline-none px-4 py-2 rounded"
             type="text"
             defaultValue={photo}
             name="photo"
             id=""
             placeholder="Photo URL..."
           />
         </div>
         <div className="space-y-2">
           <p className="font-medium">Select label :</p>
           <select
             className=" w-full p-3 outline-none font-medium rounded bg-slate-200"
             name="label"
             defaultValue={label}
             id=""
           >
             <option value="easy">Easy</option>
             <option value="medium">Medium</option>
             <option value="hard">Hard</option>
           </select>
         </div>
         <div className="flex items-center gap-5">
           <div className="flex-1 space-y-2">
             <p className="font-medium">Marks : </p>
             <input
               className="bg-slate-200 outline-none px-4 py-2 w-full font-medium rounded "
               type="text"
               name="marks"
               defaultValue={mark}
               id=""
               placeholder="Marks of Assignment..."
             />
             {error && (
               <p className="text-sm font-mono text-red-500">{error}</p>
             )}
           </div>

           <div className="flex-1 space-y-2">
             <p className="font-medium">Deadline : </p>
             {/* <DatePicker
               className="outline-none bg-slate-200 px-2 py-2 w-full rounded dark:text-slate-900"
        selected={startDate}
        defaultValue={Deadline}
               onChange={date => setStartDate(date)}
             /> */}
             <p className="outline-none w-1/2 bg-slate-200 px-2 py-2 rounded dark:text-slate-900">
               {' '}
               {new Date(Deadline).toLocaleDateString()}
             </p>
           </div>
         </div>
         <div className="space-y-2">
           <p className="font-medium">Name : </p>

           <input
             className="w-1/2 px-2 py-2 rounded outline-none bg-slate-200 cursor-not-allowed"
             type="text"
             disabled
             
             defaultValue={email}
             placeholder="Email*"
             name="email"
             id=""
           />
         </div>
         <div className="space-y-2">
           <p className="font-medium">Description : </p>

           <textarea
             className="bg-slate-200 drop-shadow-2xl shadow-2xl w-full h-20  p-2  outline-none font-medium opacity-70 rounded font-Raleway text-balance "
             name="description"
             defaultValue={description}
             placeholder="Description"
             id=""
           ></textarea>
         </div>
         <input
           className="border-2 w-full py-2 font-extrabold outline-none bg-slate-300 text-rose-500"
           type="submit"
           value="Create"
         />
       </div>
     </form>
   </div>
 );
};

export default UpdateOne;