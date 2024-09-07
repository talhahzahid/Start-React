

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  
    <div style={{
        display:'flex',
        justifyContent:"center",
        gap:"20px",
        margin:"30px",
    }}>
        <Link >Home</Link>
        <Link to="About" >About</Link>
        <Link to="Project">Project</Link>
        <Link to="Contact">Contact</Link>
    </div>
  )
}

export default Navbar