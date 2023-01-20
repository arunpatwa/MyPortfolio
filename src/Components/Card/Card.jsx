// import React from 'react'
// import './Card.css'


// const Card = ({emojis,heading,detail}) => {
//   return (
//     <div className="card">
//         <img src={emojis} alt="" />
//         <span>{heading}</span> 
//         <span>{detail}</span>
//         <button className="s-card">
//             LEARN MORE
//         </button>
//     </div>
//   )
// }

// export default Card

import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;