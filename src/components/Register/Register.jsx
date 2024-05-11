import { useContext, useState } from 'react';
import '../Banner/Banner';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../FirebaseProvider/AuthProvider';

const Register = () => {

 const { createUser, updateUser } = useContext(AuthContext);
 const [open, setOpen] = useState(false);
 const [error, setError] = useState('');

 // handle form control of handling 
 const handleRegister = e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  if (password !== confirmPassword) {
   setError("password did't match")
   return
  }
  
  if (!/[A-Z]/.test(password)) {
   setError("Password must have uppercase")
   return
  }
  console.log(name, email, photo, password);



  createUser(email, password).then(result => {
   console.log(result.user);
   updateUser(name, photo).then(() => {
    console.log('done');
   })
  }).catch(error => {
   console.log(error);
})


setError('')
 }
 
  return (
    <div className="px-4 h-full">
      <div className="styleOf lg:w-1/2 mx-auto rounded-md">
        <h2 className="text-4xl font-bold text-center pt-7 text-white">
          REGISTER NOW
        </h2>
        <form onSubmit={handleRegister} className="space-y-5 py-14">
          <div className="flex flex-col mx-12 space-y-3">
            <p className="text-white">Name : </p>
            <input
              className="py-2 px-3  outline-none rounded"
              type="text"
              name="name"
              placeholder="Your Name*"
              id=""
            />
          </div>
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
          <div className="flex flex-col mx-12 space-y-3">
            <p className="text-white">Photo URL : </p>
            <input
              className="py-2 px-3  outline-none rounded"
              type="text"
              name="photo"
              placeholder="Photo URL*"
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
          </div>
          <div className="flex flex-col relative mx-12 space-y-3">
            <p className="text-white">Confirm Password : </p>
            <input
              className="py-2 px-3  outline-none rounded"
              type={open ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Type Confirm Password*"
              id=""
            />
            <span>
              {error && (
                <h1>
                  <small className="text-red-500">{error}</small>
                </h1>
              )}
            </span>
            <div className="flex items-center gap-1">
              <input
                onClick={() => setOpen(!open)}
                type="checkbox"
                name=""
                id=""
              />
              <small>Show Password</small>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <input
              className="style w-[32rem] flex items-center font-bold hover:scale-105 text-green-500 border rounded-full shadow-2xl drop-shadow-2xl duration-100 justify-center py-2 mx-11"
              type="submit"
              value="REGISTER NOW"
            />
          </div>
     </form>
     <div>

      <h1 className="text-lg font-medium text-center pb-12">
       Already have an account ? <Link className='text-white font-bold' to="/login">LOGIN</Link>
      </h1>
     </div>
      </div>
    </div>
  );
};

export default Register;
