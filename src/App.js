import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: ""
  })

  //creating handler for change in the form
  function changeHandler(){

  }


  return (
    <div className='p-6 bg-gray-50 flex flex-col items-center'>
  <form className='flex flex-col'>
    <div className='mb-4'>
      <label htmlFor='firstName' className='block mb-1'>First Name</label>
      <input
        type='text'
        onChange={changeHandler}
        name='firstName'
        id='firstName'
        placeholder='First Name'
        value={formData.firstName}
        className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>

    <div className='mb-4'>
      <label htmlFor='lastName' className='block mb-1'>Last Name</label>
      <input
        type='text'
        onChange={changeHandler}
        name='lastName'
        id='lastName'
        placeholder='Last Name'
        value={formData.lastName}
        className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>

    <div className='mb-4'>
      <label htmlFor='email' className='block mb-1'>Email</label>
      <input
        type='email'
        onChange={changeHandler}
        name='email'
        id='email'
        placeholder='Email Address'
        value={formData.email}
        className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>

    <div className='mb-4'>
      <label htmlFor='address' className='block mb-1'>Address</label>
      <textarea
        onChange={changeHandler}
        name='address'
        id='address'
        placeholder='Address'
        value={formData.address}
        className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  </form>
</div>


  );
}

export default App;
