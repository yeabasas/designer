import { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ApplicationProps {}

export function Application(props: ApplicationProps) {
  const [name,setName] = useState("");
  const navigate =useNavigate();
  const handleSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className='flex'>
    <Sidebar/>
    <div className="w-2/5 h-full p-9 flex flex-col gap-4 items-center justify-center my-9 mx-auto rounded shadow-2xl">
      <div className="text-lg font-semibold text-blue-600">
        Create Application
      </div>
      <div className="grid grid-cols-1 gap-4">
        <label htmlFor="">App Name:</label>
        <input
          className="w-full outline-none px-2 py-0.5 bg-blue-100 rounded-md focus:bg-blue-50"
          type="text"
          value={name}
          onChange={({ target: { value } }) => {
            setName(value);
          }}
        />
        <label htmlFor="">icon/logo:</label>
        <input
          className="w-full outline-none px-2 py-0.5 bg-blue-100 rounded-md focus:bg-blue-50"
          type="file"
          value={name}
          onChange={({ target: { value } }) => {
            setName(value);
          }}
        />
        <label htmlFor="">Save Location:</label>
        <input
          className="w-full outline-none px-2 py-0.5 bg-blue-100 rounded-md focus:bg-blue-50"
          type="path"
          value={name}
          placeholder='Save Location'
          onChange={({ target: { value } }) => {
            setName(value);
          }}
        />
      </div>
      <button onClick={handleSubmit} className="w-fit h-fit px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold">
        Create
      </button>
    </div>
    </div>
  );
}

export default Application;
