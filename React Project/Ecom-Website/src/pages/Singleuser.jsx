
import React from 'react'
import { useParams } from 'react-router-dom'

const Singleuser = () => {
  const {id} = useParams();
  return (
    <div>hello {id}</div>
  )
}

export default Singleuser