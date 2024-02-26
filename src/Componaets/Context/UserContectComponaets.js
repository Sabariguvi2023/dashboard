import React from 'react'
import { useState } from 'react'
export const UserContext =React.createContext()

function UserContectComponaets({children}) {
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
  <UserContext.Provider value={{users,setUsers}}>
    {children}
    
  </UserContext.Provider>
  </>
}

export default UserContectComponaets