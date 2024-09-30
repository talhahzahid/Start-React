

import React from 'react'

const Card = (props) => {
  return (
    <>
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}Hello Gymnaster</p>
    </div>
    </>
  )
}

export default Card