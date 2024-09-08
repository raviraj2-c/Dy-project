import React from 'react'
import './Dive.css'
function Dive() {
  return (
    <div >
        <div className="container-header ">
            <h1>Features Which We Provide</h1>
            <h4>We Promise to give you the best service and quality and satisfaction report from Doctor </h4>
        </div>
     <div className="containers my-5 ">
  <div className="option">
 
    <h2>Bock Lab</h2><hr />
    <p>You want a proven out-of-box solution</p>
    <ul>
      <li>Launch Your Telehealth App Today</li>
      <li>Cost Effective SAAS Model</li>
      <li>Start Small & Scale Up</li>
      <li>Minimal Running Costs</li>
    </ul>
    <button type="button"  className="btn btn-outline-dark">Start</button>
  </div>

  <div className="option">
  
    <h2>Book Appointment</h2><hr />
    <p>You want integrations, new features or a unique user experience</p>
    <ul>
      <li>Support for Third Party Service/Software Integrations and New Feature Development</li>
      <li>Custom Telehealth Apps With Our SAAS Solution</li>
      <li>Low Development and Running Costs</li>
      <li>Launch New Features Fast</li>
    </ul>
    <button type="button"  className="btn btn-outline-dark">Start</button>
  </div>

  <div className="option">
  
    <h2>See Your Record</h2><hr/>
    <p>Develop an application to my requirements</p>
    <ul>
      <li>Realize Your Unique Vision</li>
      <li>Proven Expertise in Healthcare</li>
      <li>Value For Your Investment</li>
      <li>Trusted Partner For Your Telehealth App Business</li>
    </ul>
    <button type="button"  className="btn btn-outline-dark"><a className="nav-link"  href='Medication'>Start</a></button>
  </div>
</div>
    </div>
  )
}

export default Dive
