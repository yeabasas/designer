// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {registerUser} from '@designer/core/services'
// /* eslint-disable-next-line */
// export interface RegisterProps {}

// export function Register(props: RegisterProps) {
//   const [user,setUser] =useState({name:"",email:"",password:""});
//   const navigate =useNavigate();
//   const handleUserInputs = (e: { target: { name: any; value: any; }; })=>{
//     const name = e.target.name;
//     const value = e.target.value;

//     setUser({...user,[name]:value,});
//   };
//   const handleUserRegistration=async ()=>{
//     try {
//       await registerUser(user);
//       navigate('/')
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <div className='flex'>
//       <form className='flex flex-col'>
//         <h2>Register</h2>
//         <input type="text"
//         name='name'
//         placeholder='your name'
//         onChange={handleUserInputs} />
//         <input type="email"
//         name='email'
//         placeholder='your email'
//         onChange={handleUserInputs}/>
//         <input type="password"
//         name='password'
//         placeholder='your password'
//         onChange={handleUserInputs} />
//         <button onClick={handleUserRegistration} type='submit'>Register</button>
//         <Link to='.login'>have an account? login</Link>
//       </form>
//     </div>
//   );
// }

// export default Register;
