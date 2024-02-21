import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function AddUser({users,setUsers}) {
  
    let [name,setName] =useState("")
    let [email,setEmail] =useState("")
    let [address,setAddress] =useState("")
    let [mobile,setMobile] =useState("") 
    let navigate =useNavigate() 

    let handleSave =()=>{
        let newArray =[...users] 
        newArray.push({name, email, address, mobile})
        setUsers(newArray)
        navigate('/dashboard')
    }
  return <>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">Add User</h1> 
    </div>
  <Form>
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" onChange={(e)=>setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)} />
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
export default AddUser