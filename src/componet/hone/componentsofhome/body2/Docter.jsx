import React from 'react'
import './Docter.css'
import { assets } from '../../../../assets/assets'
function Docter() {
  return (
    <div className=' '>
        <div className="worldwide">
        <h1>Trusted by Healthcare Providers Worldwide</h1>
        <h5>Join the growing community of healthcare businesses that have found success with ContinuousCare's platform</h5>
        </div>
      <div  className="container_card">
        <div  className="card">
            <img src={assets.person1} alt="Dr. Madeleine Chew"/>
            <h2>Dr Madeleine Chew</h2>
            <p>General Practitioner</p>
            <p>Virtual Practice® makes digitalizing medical records a breeze. The best feature though is their great support team!</p>
        </div>
        <div  className="card">
            <img src={assets.person2} alt="Dr. Gerard Saltibus MD"/>
            <h2>Dr. Gerard Saltibus MD</h2>
            <p>General Practitioner</p>
            <p>Allowing doctors to offer telemedicine, remote monitoring health plans, collect payments and the health blog are some of the best features of the Virtual Practice®.</p>
        </div>
        <div  className="card">
            <img src={assets.person3} alt="Dr. Vishal Rao"/>
            <h2>Dr. Vishal Rao</h2>
            <p>Head and Neck Oncologist</p>
            <p>An ideal fusion of technology and science that has interfaced to deliver quality health services and address the existing lacunae to assist the medical community thus creating the current state of art in mobile health.</p>
        </div>
    </div>
    </div>
  )
}

export default Docter
