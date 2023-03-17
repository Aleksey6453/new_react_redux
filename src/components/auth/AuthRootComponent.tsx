import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import './style.css' 

const AuthRootComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()

    const handleSubmit = async (e:{preventDefault: () => void}) => {
        e.preventDefault()
        console.log(email, password)
    }
    

  return (
    <div className='main'>
        <form className="form" onSubmit={handleSubmit}>
            <div className="wrap">
                {location.pathname === '/login' ? <Login setEmail={setEmail} setPassword={setPassword} /> : location.pathname === '/register' ? <Register /> : null}    
            </div>
        </form>
    </div>
    )
    
  
}

export default AuthRootComponent
