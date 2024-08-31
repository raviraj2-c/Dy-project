import React from 'react'
import './Footer.css'
import { assets } from '../../../../assets/assets'
function Footer() {
  return (
    <div className=' '>
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <img src={assets.logo} alt="Continuous Care Logo" className="logo"/>
        <p>Technopark, Trivandrum</p>
        <p>Stay Connected With Us</p>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>Patient Engagement</h4>
        <ul>
          <li><a href="#">Patient PHR</a></li>
          <li><a href="#">WhatsApp Business Integration</a></li>
          <li><a href="#">Remote Patient Monitoring</a></li>
          <li><a href="#">Video Consultations</a></li>
          <li><a href="#">Text Consultations</a></li>
          <li><a href="#">Health Blog</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>Practice Management</h4>
        <ul>
          <li><a href="#">App for Providers</a></li>
          <li><a href="#">Appointment Scheduling</a></li>
          <li><a href="#">Consultation Notes</a></li>
          <li><a href="#">Prescriptions</a></li>
          <li><a href="#">Billing & Reports</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Tele-medicine/Tele-Health</a></li>
          <li><a href="#">Practice Management</a></li>
          <li><a href="#">Chronic Care</a></li>
          <li><a href="#">Patient Marketing</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>Healthcare Providers</h4>
        <ul>
          <li><a href="#">Create Your Virtual Practice</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Your Patients</a></li>
          <li><a href="#">ContinuousCare Sign Up</a></li>
          <li><a href="#">Practice Marketing</a></li>
          <li><a href="#">Marketing Website</a></li>
          <li><a href="#">Reputation Management</a></li>
          <li><a href="#">Practice Growth</a></li>
          <li><a href="#">Custom Domain</a></li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Responsible Disclosure</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>Virtual Practice Mobile App</h4>
        <ul>
          <li><a href="#" target="_blank"><img src={assets.App_store} alt="Apple Store App Button"/></a></li>
          <li><a href="#" target="_blank"><img src={assets.Google_play} alt="Google Play App Button"/></a></li>
        </ul>
      </div>
      
    </div>
  </div>

<div className="row">
      <div className="col-md-12">
        <p className="copyright">© 2024 NeedStreet All Rights Reserved</p>
        <ul className="footer-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Jobs</a></li>
        </ul>
      </div>
    </div>
    </footer>
    </div>
  )
}

export default Footer
