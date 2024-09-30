

import React, { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const [counter , setcounter] = useState(0)
  return (
    <>
    <h1>Hello React Revision </h1>
    <p>Number {counter} </p>
    <button onClick={()=>setcounter(counter +1)}>Add </button> 
    <button onClick={()=>setcounter(counter -1)}>Less </button>
    {/* <Card/> */}
{/* {    counter < 18 ? <Card title="Congratutaion" description="Your are eligible for gym "/> : <p> Hojain ga  </p>} */}
{counter < 18 ? (
  <Card title="Congratulations" description="You are eligible for the gym!" />
) : (
  <p>Hojain ga</p>
)}

{counter >= 18 && counter < 25 ? (
  <Card title="Welcome!" description="You have access to special discounts." />
) : null}

{counter >= 25 ? (
  <Card title="Great Choice!" description="You can explore premium features." />
) : null}

    </>
  )
}

export default App