import React from 'react'
import {useLocation} from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import './style.css' 

const AuthRootComponent = () => {
    const location = useLocation()

  return (
    <div className='main'>
        <div className="form">
            <div className="wrap">
                {location.pathname === '/login' ? <Login /> : location.pathname === '/register' ? <Register /> : null}
                
            </div>
        </div>
    </div>
    )
    
  
}

export default AuthRootComponent
