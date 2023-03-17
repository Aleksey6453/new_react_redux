import React from 'react'
import style from './style.module.css'

const Register = () => {
  return (
    <>
      <h1 className='title'>
          This is Register page!
      </h1>
      <h3 className='title'>
          Enter your data for registration please
      </h3>
      <input type={'text'} placeholder='Enter name' className='input'/>
      <input type={'text'} placeholder='Enter email' className='input'/>
      <input type={'password'} placeholder='Enter password' className='input'/>
      <input type={'password'} placeholder='Repeat password' className='input'/>
      <button type='submit' className='btn'>Registration</button>
      <h3 className='sub_title'>
         Do you have an acount? <span>Authorization</span>
      </h3>
      
    </>
  )
}

export default Register
