import React from 'react'
import Carder from './Carder'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Dashboard({users,setUsers}) {
    let navigate =useNavigate()
    let data=[
        {
            title :"Earnings (Monthly)",
            value :"$40.000",
            color:"primary",
            icon  :"fa-calendar",
            isProgress :false
        },
        {
            title :"Earnings (Anual)",
            value :"$140.000",
            color:"success",
            icon  :"fa-dollar-sign",
            isProgress :false
        },
        {
            title :"Task",
            value :"20%",
            color:"info",
            icon  :"fa-clipboard-list",
            isProgress :true
        },
        {
            title :"Pending (request)",
            value :"5",
            color:"warning",
            icon  :"fa-comments",
            isProgress :false
        }
    ] 
    let handleDelete = (i)=>{
        let newUsers=[...users]
        newUsers.splice(i,1)
        setUsers(newUsers)
    }
  return <>
   <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
         <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
             className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>
 
        <div className="row">
        {
            data.map((e,i)=>{
               return <Carder key={i} 
                title={e.title}
                value={e.value}
                color={e.color}
                icon={e.icon}
                isProgress={e.isProgress}
                />

            })
        }
        </div>
</div>
       
      <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
        <th>#</th>
        <th>name</th>
        <th>email</th>
        <th>address</th>
        <th>mobile</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.mobile}</td>
                    <td>
                        <Button variant='primary' onClick={()=>navigate('/edit-user/${id}')}>Edit</Button>
                        {' '}
                        <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
                    </td>

                </tr>
            })
        }
          
    </tbody>
</Table>
 </div>
 </>
  
}

export default Dashboard