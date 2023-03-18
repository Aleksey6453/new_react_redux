import React from 'react'
import { IPropsRegister } from '../../../common/types/auth'
import style from './style.module.css'

const Register: React.FC<IPropsRegister> = (props: IPropsRegister):JSX.Element => {
  const {setName, setEmail, setPassword, setRepeatPassword} = props

  return (
    <>
      <h1 className='title'>
          This is Register page!
      </h1>
      <h3 className='title'>
          Enter your data for registration please
      </h3>
      <input type={'text'} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' className='input'/>
      <input type={'text'} onChange={(e)=>setEmail(e.target.value)}placeholder='Enter email' className='input'/>
      <input type={'password'} onChange={(e)=>setPassword(e.target.value)}placeholder='Enter password' className='input'/>
      <input type={'password'} onChange={(e)=>setRepeatPassword(e.target.value)}placeholder='Repeat password' className='input'/>
      <button type='submit' className='btn'>Registration</button>
      <h3 className='sub_title'>
         Do you have an acount? <span>Authorization</span>
      </h3>
      
    </>
  )
}

export default Register
