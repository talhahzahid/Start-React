
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singleuser = () => {
  const [data , setData] = useState(null)
  const {id} = useParams();
useEffect(()=>{
  axios(`https://fakestoreapi.com/products/${id}`)
  .then((res)=>{
    console.log(res);
    console.log(res.data);
    setData(res.data)
  })
  .catch((err)=>{
    console.log(err);
  })
},[])
  return (
    <>
    <div>hello {id}</div>


 <h1>{data ? data.title:<h2>loading</h2>}</h1>
    </>

  )

  
}

export default Singleuser