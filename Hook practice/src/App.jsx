// import React, { useRef, useState } from 'react'

// const App = () => {
//   const [data , setData] = useState("")
//   const change = () => {
//       console.log('magic');
//       setData(" Awee UseState Practice")
//   }

//   const [age , setAge] = useState("")
//   const userAge = useRef()
//   const checkAge = () =>{
//     console.log(userAge.current.value);
//     const enterage = Number(userAge.current.value)
//     console.log(enterage);
    
//     let agee = 18
//     if(enterage < agee){
//       console.log("selected");
//       setAge("Your are Eligible")
//     }else{
//       console.log("your are not selected");
//       setAge("bara hoke a bahi tu")
//     }
//     if(enterage < agee) {
//       console.log("not eligible");
//       setAge("You are not eligible");
//     } else {
//       console.log("eligible");
//       setAge("You are eligible");
//      }
//     userAge.current.value = ''
//   }

//   return (
//     <>
//     <h1>Practice</h1>
//     <h1>{data}</h1>
//     <button onClick={change}>Magic</button>
//     <h1>Enter Your Age </h1>
//     <br />
//     <input type="number" placeholder='Enter your age' ref={userAge} />
//      <button onClick={checkAge}>Done</button>
//      <p>{age}</p>
//     </>  
//   )
// }

// export default App


  import React, { useState } from 'react'

  const App = () => {
    const  [click , setClick] = useState(0)
    const clickChecker = () =>{
      console.log("Clicked");
      setClick(click + 1)
    }
    return ( 
      <>
      <h1>how many times a button is clicked</h1>
      <br />
      <button onClick={clickChecker}>Click</button>
      <h2>{click}</h2>
      </>
    )
  }

  export default App