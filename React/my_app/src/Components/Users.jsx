import React from 'react'
import {useParams} from "react-router-dom"
function Users() {

    const params = useParams();
    const {name} =params;
   
  return (
    <div>
        <h1>This is {name} Page</h1>
    </div>
  )
}

export default Users;