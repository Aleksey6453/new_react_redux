import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import './style.css' 

const AuthRootComponent: React.FC = ():JSX.Element => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const location = useLocation()

    const handleSubmit = async (e:{preventDefault: () => void}) => {
        e.preventDefault()
        if (location.pathname==='/login'){
            const loginData = {email, password}
            console.log(loginData)
        } else{
            if(password === repeatPassword){
                const registerData = {name, email, password, repeatPassword}
                console.log(registerData)
            } else{
                console.log("Your password is not correct!")
                alert("Enter correct password please!")
            }
            
        }
    }
    

  return (
    <div className='main'>
        <form className="form" onSubmit={handleSubmit}>
            <div className="wrap">
                {location.pathname === '/login'
                 ? <Login setEmail={setEmail} 
                          setPassword={setPassword} /> 
                 : location.pathname === '/register'
                  ? <Register setEmail={setEmail}
                              setPassword={setPassword}
                              setRepeatPassword={setRepeatPassword}
                              setName={setName} /> 
                : null}    
            </div>
        </form>
    </div>
    )
    
  
}

export default AuthRootComponent
