import React from 'react'
import Navebar from './componet/Navebar'
import Home from './componet/hone/Home'
import Health_care from './componet/personalized/Health_care'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './componet/About'
import Login from './componet/Login'
import Contect from './componet/Contect'

function App() {
  return (
    <div>
      
      <Navebar/>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='Medication'element={<Health_care/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='signin' element={<Login/>}/>
        <Route path='Contect' element={<Contect/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
