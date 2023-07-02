import React, { useState } from "react";
import "../star.css";

function StarRating() {

  const [rating, setRating] = useState()
  return (
    <div style={{marginTop : '5px'}} className="star-rating newtext">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? 'on' : 'off'}
            onClick={() => setRating(index)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              lineHeight: '50px',
              fontSize: '1.8em',
            }}
          >
          <span className="star">&#9733;</span>
          </button>
          
        )
      })}
      
    </div>
  )
}

export default StarRating
