import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate,useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';

function EditUser({users,setUsers}) {

    let params =useParams()
    let [name,setName] =useState()
    let [email,setEmail] =useState()
    let [address,setAddress] =useState()
    let [mobile,setMobile] =useState() 
    let navigate =useNavigate() 

    let handleSave =()=>{
        let newArray =[...users]  
        newArray.slice(params.id,1,{name, email, address, mobile})
        setUsers(newArray)
        navigate('/dashboard')
    }
    useEffect(()=>{
      // console.log("use Effect trigger")
      console.log("update")
      if(params.id < users.lenght){

        setName(users[params.id].name)
        setEmail(users[params.id].email)
        setAddress(users[params.id].address)
        setMobile(users[params.id].mobile)

      }
    
      
      
     },[name])

  return <>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">Edit User</h1> 
    </div>
  <Form>
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
  </>
} 


export default EditUser