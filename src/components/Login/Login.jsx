import { useContext, useState } from 'react';
import '../Banner/Banner'
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../FirebaseProvider/AuthProvider';


const Login = () => {

  const { signIn, setUser, signInGoogle } = useContext(AuthContext);
  // console.log(signIn);
  
 const [open, setOpen] = useState(false);

  
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then(result => {
      console.log(result.user);
      setUser(result.user)
    }).catch(error => {
      console.log(error);
    })
  }
  //sign in with google 
  const handleGoogle = () => {
    signInGoogle().then(result => {
      console.log(result.user);
      setUser(result.user)
    }).then(error => {
      console.log(error);
    })
  }

  

 return (
   <div className="h-[90.7vh] px-4">
     <div className="style lg:w-1/2 mx-auto mt-12 rounded-md">
       <h2 className="text-4xl font-bold text-center pt-12 text-white font-Space">
         Login Now
       </h2>
       <form onSubmit={handleLogin} className="space-y-5 py-24">
         <div className="flex flex-col mx-12 space-y-3">
           <p className="text-white">Email : </p>
           <input
             className="py-2 px-3  outline-none rounded"
             type="email"
             name="email"
             placeholder="Current Email*"
             id=""
           />
         </div>
         <div className="flex flex-col relative mx-12 space-y-3">
           <p className="text-white">Password : </p>
           <input
             className="py-2 px-3  outline-none rounded"
             type={open ? 'text' : 'password'}
             name="password"
             placeholder="Type-Current Password*"
             id=""
           />
           <div
             className="absolute right-4 top-9 dark:text-black"
             onClick={() => setOpen(!open)}
           >
             {open ? <FaEyeSlash /> : <FaEye />}
           </div>
         </div>
         <div className=" flex items-center justify-center">
           <input
             className="styleOf w-[32rem] flex items-center font-bold hover:scale-105 text-green-500 border rounded-full shadow-2xl drop-shadow-2xl duration-100 justify-center py-2 my-4 mx-11"
             type="submit"
             value="LOGIN NOW"
           />
         </div>
       </form>
       <div className="flex items-center justify-center gap-12 mb-4">
         <button
           onClick={() => handleGoogle()}
           className="border-2 px-4 py-1 shadow-3xl drop-shadow-2xl duration-100 hover:scale-105 rounded-full text-lg font-medium text-white"
         >
           Login with Google
         </button>
         <button className="border-2 px-4 py-1 shadow-3xl drop-shadow-2xl duration-100 hover:scale-105 rounded-full text-lg font-medium text-white">
           Login with Github
         </button>
       </div>
       <div>
         <h1 className="text-lg font-medium text-center pb-12">
           Don't have an account ?
           <Link className="text-white" to="/register">
             {' '}
             Register
           </Link>
         </h1>
       </div>
     </div>
   </div>
 );
};

export default Login;