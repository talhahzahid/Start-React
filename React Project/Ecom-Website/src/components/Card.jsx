

import React from "react";

import { useNavigate } from "react-router-dom";



function Card({image, title, price, desc, items}) {
  
  const navigate = useNavigate()
  // Use props directly instead of `items`
  const singleUser = (items) => {
    console.log(items); // Logs the entire props object
    navigate(`Singleuser/${items.id}`);
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img 
          style={{
            width: "30rem",
            height: "17rem",
          }}
          src={image}
          alt="Shoes"
          className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price}</p>
        <h4>{desc}</h4>
        <div className="card-actions">
          <button onClick={()=>singleUser(items)} className="btn btn-primary">Show More</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
