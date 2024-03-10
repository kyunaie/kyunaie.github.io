import React from 'react'
import { Routes,Route } from 'react-router'
import About from './components/About'
import Home from './components/Home'

const Router = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Router;
