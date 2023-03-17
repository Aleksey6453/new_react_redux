import React from 'react';
import './App.css';
import Home from './components/home/Home';
import {Routes, Route} from 'react-router-dom'
import PrivateRoute from './utilits/router/privateRoute'
import AuthRootComponent from './components/auth/AuthRootComponent';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home/>} />
        </Route>
        <Route path='/login' element={<AuthRootComponent />} />
        <Route path='/register' element={<AuthRootComponent />} />
      </Routes>
    </div>
    
  )
}

export default App;
