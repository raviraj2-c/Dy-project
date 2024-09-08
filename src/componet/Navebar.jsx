import React from 'react'
import { assets } from '../assets/assets'
import './Navebar.css'
function Navebar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img className='logo'src={assets.logo} alt="" />
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> Book Appointment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Medication">Medication</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Contect">Contact Us</a>
        </li>
      </ul>
      <button type="button" className="btn btn-danger mx-3">Start Free Trial</button>
      <button type="button"  className="btn btn-warning mx-3">See Demo</button>
      <button type="button" className="btn btn-danger mx-3"><a className="nav-link" href='signin'>Sign in</a></button>
      <img className='langu' src={assets.langu} alt="" />
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navebar
