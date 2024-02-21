import React from 'react'
import './Details.css'

function Details() {
  return <>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">Details</h1> 
    </div>
    <div className='section-navigator'>
    <ul>
        <li>Accounts</li>
        <li>Payment</li>
        <li>Bill Details</li>
        <li>Profile</li>
        <li>Change Password</li>
    </ul>
    </div>
  </>
}

export default Details