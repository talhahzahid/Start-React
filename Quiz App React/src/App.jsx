
import { useEffect, useState } from "react"


function App(){

  const [data , setData] =useState(null)
  useEffect(()=>{
   async function getData (){
      const response = await fetch('https://the-trivia-api.com/v2/questions')
      const res = await response.json();
        setData(res)
      console.log(res)
    }
    getData()
  },[])
 

  // useEffect(()=>{
  //   axios("https://the-trivia-api.com/v2/users")
  //   .then((res)=>{
  //     console.log(res);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })  
  // },[])

  
  return(
    <>
    <h1>Quiz App</h1>
    <h1>{setData.question}</h1>
    </>
  )
}
export default App