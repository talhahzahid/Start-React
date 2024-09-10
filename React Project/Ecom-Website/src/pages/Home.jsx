

// import React from 'react'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Home = () => {

  let [data , setData] = useState(null)

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
return(
    <>
    <h1 class='text-center mt-5'>Ecom Product</h1>
    {
         data ? data.map((item,)=>{
          return(
            <div key={item.id} className='flex flex-wrap justify-center'>
            <Card items={item} image={item.image} title={item.title} price={item.price} desc={item.description} />
          </div>

        )
         }):<div class="flex items-center justify-center min-h-screen">
         <div>
           <span class="loading loading-bars loading-xs"></span>
           <span class="loading loading-bars loading-sm"></span>
           <span class="loading loading-bars loading-md"></span>
           <span class="loading loading-bars loading-lg"></span>
         </div>
       </div>
    }
    </>
)
}

export default Home