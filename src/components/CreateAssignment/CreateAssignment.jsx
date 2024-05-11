import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const CreateAssignment = () => {
 const [startDate, setStartDate] = useState(new Date());


 // handle form submit to get value;
 const handleGetData = e => {
  e.preventDefault();
  const form = e.target;
  const title = form.title.value;
  const mark = parseFloat(form.marks.value);
  const photo = form.photo.value;
  const label = form.label.value;
  const status = 'pending'
  const assignment = { title, mark, photo, label, status };
  console.log(assignment);
 }
 return (
   <>
     <h1 className="text-2xl text-center font-bold text-rose-600">
       Creating Assignment{' '}
     </h1>
     <form onSubmit={handleGetData}>
       <div className="grid grid-cols-2 lg:grid-cols-4">
         <div className="lg:col-span-2">a</div>
         <div className="lg:col-span-2 lg:w-3/4 lg:mx-auto w-full px-4 space-y-3">
           <div className="space-y-2">
             <p className="font-medium">Title : </p>

             <textarea
               className="border-2 w-full h-20  p-2  outline-none font-medium opacity-70 text-sm rounded bg-slate-200"
               name="title"
               placeholder="Description..."
               id=""
             ></textarea>
           </div>
           <div className="space-y-2">
             <p className="font-medium">Photo URL : </p>
             <input
               className="border-2 w-full outline-none px-4 py-2 rounded"
               type="text"
               name="photo"
               id=""
               placeholder="Photo URL..."
             />
           </div>
           <div className="space-y-2">
             <p className="font-medium">Select label :</p>
             <select
               className="border-2 w-full p-3 outline-none font-bold rounded"
               name="label"
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
                 className="border-2 outline-none px-4 py-2 w-full font-medium rounded"
                 type="text"
                 name="marks"
                 id=""
                 placeholder="Marks of Assignment..."
               />
             </div>

             <div className="flex-1 space-y-2">
               <p className="font-medium">Deadline : </p>
               <DatePicker
                 className="outline-none border-2 px-2 py-2 w-full rounded dark:text-slate-900"
                 selected={startDate}
                 onChange={date => setStartDate(date)}
               />
             </div>
           </div>
           <input
             className="border-2 w-full py-2 font-extrabold bg-slate-300 text-rose-500"
             type="submit"
             value="Create"
           />
         </div>
       </div>
     </form>
   </>
 );
};

export default CreateAssignment;