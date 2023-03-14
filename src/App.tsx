import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Login from './components/auth/login/Login';
import {Routes, Route} from 'react-router-dom'
import PrivateRoute from './utilits/router/privateRoute'

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home/>} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    
  )
}

export default App;
