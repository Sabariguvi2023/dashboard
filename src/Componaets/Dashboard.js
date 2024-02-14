import React from 'react'
import Carder from './Carder'


function Dashboard() {
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


  </>
  
}

export default Dashboard