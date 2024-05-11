import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
 const [loading, setLoading] = useState(true);
 const [user, setUser] = useState(null)
console.log(user);

 // // social provider
 // const googleProvider = new GoogleAuthProvider();
 // const githubProvider = new GithubAuthProvider();


 // create user with email & password
 const createUser = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
 }
 // update name & photo url 
 const updateUser = (name, photo) => {
updateProfile(auth.currentUser, {
  displayName: name,
  photoURL: photo,
})
 }


// sign in with email & password 
 const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
 }

 // logout button
 const logOut = () => {
  return signOut(auth)
 }

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user)
    setLoading(false)
   }
 })
  return () => unsubscribe();
 },[])


 const authInfo = {
   createUser,
   signIn,
   setUser,
   loading,
   user,
   updateUser,
   logOut,
 };
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;