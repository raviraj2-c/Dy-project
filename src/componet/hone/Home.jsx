import React from 'react'
import Body from './componentsofhome/Body'
import Dive from './componentsofhome/body2/Dive'
import Footer from './componentsofhome/body2/Footer'
import Footer_last from './componentsofhome/body2/Footer_last'
import Sign_up from './componentsofhome/body2/Sign_up'
import Docter from './componentsofhome/body2/Docter'
import Questions from './componentsofhome/body2/Questions'
import Preferred_Solution from './componentsofhome/body2/Preferred_Solution'

function Home() {
  return (
    <div>
      <Body/>
      <Dive/>
      <Questions/>
      <Docter/>
      <Sign_up/>
      <Footer/>
      
    </div>
  )
}

export default Home
