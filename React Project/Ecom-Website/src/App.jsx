



import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then((res)=>{
      console.log(res)
      setData(res)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <h1 className='text-center text-3xl mt-7'> The Hub </h1>
    {
      data ? data.map((item,index)=>{
   return(
    <div className='flex justify-center gap-5' key={index}>
           <Card src={item.image} title= {item.category} price={item.price} description={item.description}/>
    </div> 
   )
      }):<h1>Loading</h1>
    }
    </>
  )
}

export default App