


function App(){
function chechkstatus (event)  {
  event.preventDefault()
    console.log('hello world');
    
}

    return(
      <>
      <h1 className="text-center text-3xl mt-5">Weather App</h1>
      <form onSubmit={chechkstatus}>
        <input type="text"  placeholder="Enter"/>
        <button>check</button>
      </form>
      </>
    )
   }
   export default App