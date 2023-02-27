// /* eslint-disable @nrwl/nx/enforce-module-boundaries */
// import { signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import {auth} from "@designer/firebase"
// // eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface loginUserProps {}

// // eslint-disable-next-line no-empty-pattern
// export const loginUser = async ({email,password}:{email:string;password:string})=>{
//   const response =await signInWithEmailAndPassword(auth,email,password);
//   return response;
// }
// export const registerUser=async ({name,email,password}:{name:string;email:string;password:string}) => {
//   const response = await createUserWithEmailAndPassword(auth,email,password);
//   // if(response.user){
//   //   await updateProfile(auth.currentUser,{
//   //     displayName:name,
//   //   })
//   return response;
// }

// export const getUser = () =>{
//   if(auth.currentUser === null) return;
//   const {currentUser}=auth;
//   return{
//     name: currentUser.displayName,
//     email: currentUser.email,
//   }
// }