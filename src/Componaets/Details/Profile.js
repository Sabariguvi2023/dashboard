import React from 'react'

function Profile() {
  let name =sessionStorage.getItem('username')
  return<>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">profile section</h1> 
         
    </div>
    <h3 className="h3 mb-0 text-gray-800">SabariRajan</h3> 
  </>
}

export default Profile