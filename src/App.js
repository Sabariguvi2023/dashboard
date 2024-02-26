import React from "react";
import Dashboard from "./Componaets/Dashboard";
import Side from "./Componaets/Side";
import AddUser from "./Componaets/AddUser";
import EditUser from "./Componaets/EditUser";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Details from "./Componaets/Details/Details";
import Accounts from "./Componaets/Details/Accounts";
import BillDetails from "./Componaets/Details/BillDetails";
import Payment from "./Componaets/Details/Payment";
import Password from "./Componaets/Details/Password";
import Profile from "./Componaets/Details/Profile";
import UserContectComponaets from "./Componaets/Context/UserContectComponaets";



function App({users,setUsers}) {
  return <>
  <BrowserRouter> 
        <div id="wrapper">
          <Side/>
           <div id="content-wrapper" className="d-flex flex-column">
             <div id="content">
              
            <Routes>
              <Route path="/dashboard" element={<UserContectComponaets>
                <Dashboard />
              
                </UserContectComponaets>}/>
              <Route path='/add-user' element={<UserContectComponaets><AddUser /></UserContectComponaets>}/>
              <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
              <Route path='/details' element={<Details/>}>
                 
                <Route path='accounts' element ={<Accounts/>}/>
                <Route path='billditails' element ={<UserContectComponaets><BillDetails/></UserContectComponaets>}/>
                <Route path='payment' element ={<Payment/>}/>
                <Route path='profile' element ={<Profile/>}/>
                <Route path='password' element ={<Password/>}/>

              </Route>
              <Route path='/' element={<Navigate to ='/dashboard'/> }/>
            </Routes>
      
  </div>
</div>
</div>
</BrowserRouter>

</>

}
export default App
