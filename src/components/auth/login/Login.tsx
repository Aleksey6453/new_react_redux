import React from 'react'
import Greeting from './Greeting'
import style from './style.module.css'

const Login = () => {
    const name = 'Zaebal'
    const age = 12
  return (
    <div>
      <h1 className={style.title}>
        This is Login Page!
      </h1>
      <Greeting name={name} age={age} />
    </div>
  )
}

export default Login
