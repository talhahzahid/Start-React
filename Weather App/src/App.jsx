


// function App(){
// function chechkstatus (event)  {
//   event.preventDefault()  
//     console.log('hello world');
    
// }

//     return(
//       <>
//       <h1 className="text-center text-3xl mt-5">Weather App</h1>
//       <form onSubmit={chechkstatus}>
//         <input type="text"  placeholder="Enter"/>
//         <button>check</button>
//       </form>
//       </>
//     )
//    }
//    export default App


import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    const [addweather, setaddweather] = useState([])
    let inputRef = useRef()

    function checkStatus(event) {
        event.preventDefault()
        // if input is empty
        if (inputRef.current.value === '') {
            alert('please enter city name')
        }

        async function getData() {
            try {
                let weatherData = await axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${inputRef.current.value}&aqi=no`)
                console.log(weatherData.data);

                // addweather.push({...weatherData.data})
                // setaddweather([...addweather])
                console.log(addweather);
            } catch {
                alert('No City Found Please Try Another!')
            }
        }
        getData()
        inputRef.current.value = ''
    }

    return (
        <div>
            <h1 className='mt-5 text-4xl font-bold text-white text-center'>Weather App</h1>
            <form onSubmit={checkStatus} className='text-center mt-3 flex justify-center'>
                <input id='input' className='outline-none pl-2 w-[300px] py-3' type="text" placeholder='Enter city name!' ref={inputRef} /> 
                <button className='py-3 px-7 bg-green-600'>Check</button>
            </form>
        </div>
    )
}

export default App