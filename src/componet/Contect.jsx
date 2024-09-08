import React from 'react'
import './contect.css'
function Contect() {
  return (
    <div className='container my-5'> 
        
            <h2 className="text-center">Contact Us</h2>
        
      <div className="container container_contect">
        <div className="box">
            <h2>Talk to Hospital</h2>
            <p>We'll help you.</p>
            <button>Hospital</button>
        </div>
        <div className="box">
            <h2>Product and account support</h2>
            <p>Our help center is fresh and always open. If you can't find the answer you're looking for, we're here to lend a hand.</p>
            <button>Go to the help center</button>
        </div>
    </div>
    </div>
  )
}

export default Contect
