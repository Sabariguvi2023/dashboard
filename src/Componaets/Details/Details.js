import React ,{useState}from 'react'
import './Details.css'
import  {Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Details() {
  sessionStorage.setItem('username',"SabariRajan")
  let [currentPage,setCurrentPage] =useState(1)
  let navigate=useNavigate()

  // let navigate =useNavigate()
  // console.log(currentPage);  
  return <>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">Details</h1> 
    </div>
    <div className='section-navigator'>
    <ul>
        <li className={currentPage===1?'activePage':''} onClick={()=>{setCurrentPage(1);navigate('/details/accounts')}}>Accounts</li>
        <li className={currentPage===2?'activePage':''} onClick={()=>{setCurrentPage(2);navigate('/details/payment')}}> Payment</li>
        <li className={currentPage===3?'activePage':''} onClick={()=>{setCurrentPage(3);navigate('/details/billditails')}}>Bill Details</li>
        <li className={currentPage===4?'activePage':''} onClick={()=>{setCurrentPage(4);navigate('/details/profile')}}>Profile</li>
        <li className={currentPage===5?'activePage':''} onClick={()=>{setCurrentPage(5);navigate('/details/password')}}> Password</li>
    </ul>
    </div>
    <div className='section'>
      <Outlet/>
      

    </div>
  </>
}

export default Details