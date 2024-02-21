import Dashboard from "./Componaets/Dashboard";
import Side from "./Componaets/Side";
import AddUser from "./Componaets/AddUser";
import EditUser from "./Componaets/EditUser";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useState } from "react";
import Details from "./Files/Details";

function App() {
  let [users,setUsers] = useState([
       {
        name :'ragul',
        email:'ragul@gmail.com',
        address:'123 chennai',
        mobile :'1234567891'
       },
       {
        name :'ravi',
        email:'ravi@gmail.com',
        address:'28 chennai',
        mobile :'8934678910'
       }
  ])
  
  return <>
  <BrowserRouter> 
        <div id="wrapper">
          <Side/>
           <div id="content-wrapper" className="d-flex flex-column">
             <div id="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
              <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
              <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
              <Route path='/details' element={<Details/>}>
                
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
