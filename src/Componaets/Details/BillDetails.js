import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../Componaets/Context/UserContectComponaets'

function BillDetails() {
  let context =useContext(UserContext)
  console.log(context)
  return <>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">BillDetails</h1> 
    </div>
  </>
}

export default BillDetails