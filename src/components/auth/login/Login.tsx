import React from 'react'
import style from './style.module.css'

const Login = () => {

  return (
    <>
      <h1 className={style.title}>
        This is Login Page!
      </h1>
      <h3 className={style.title}>
        Enter your login and password please
      </h3>
      <input type={'email'} placeholder='Enter email' className='input'/>
      <input type={'password'} placeholder='Enter password' className='input'/>
      <button type='submit' className='btn'>Enter</button>
      <h3 className='sub_title'>
        Dont have an acount? <span>Registration</span>
      </h3>
    </>
  )
}

export default Login
