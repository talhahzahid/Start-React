

import React, { useEffect, useState } from 'react'

const App = () => {
 
  const [users , setUsers] = useState(null)
   
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(json=>console.log(json)
  // setUsers(res)
).catch((err)=>{
  console.log(err);
  
})
},[])

  return (
    <>
    <h1>Hello World</h1>
    </>
  )
}

export default App
