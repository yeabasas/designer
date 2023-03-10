import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [user,setUser] =useState({name:"",email:"",password:""});
  const navigate =useNavigate();
  const handleUserInputs = (e: { target: { name: any; value: any; }; })=>{
    const name = e.target.name;
    const value = e.target.value;

    setUser({...user,[name]:value,});
  };
  const handleUserRegistration=async ()=>{
    try {
      // await registerUser(user);
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex justify-center bg-no-repeat bg-cover bg-wave m-auto h-screen'>
      <div className='m-auto w-1/4 '>
        <form className='flex flex-col justify-center rounded-2xl opacity- text-white bg-blue-900 p-9 gap-6'>
          <h2 className='m-auto text-2xl font-semibold'>Login</h2>
          <input type="email"
          name='email' className='pl-2 h-9 text-white bg-blue-600 rounded'
          placeholder='your email'
          onChange={handleUserInputs}/>
          <input type="password"
          name='password' className='pl-2 h-9 text-white bg-blue-600 rounded'
          placeholder='your password'
          onChange={handleUserInputs} />
          <button className='bg-blue-400 rounded w-1/2 p-2 m-auto' onClick={handleUserRegistration} type='submit'>Register</button>
          <Link className='m-auto' to='/login'>have an account? login</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
