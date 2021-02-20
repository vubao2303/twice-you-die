// import React from "react";
// you dont need line 2 bc app is already give us that data
// import pictures from "../style/images/rose1.jpeg"

// pass data into source 
// we pass data by.... 
// we passs data props by {}
// don't mix with class wiht function
import React from 'react'
function  PictureCard(props) {
    return (
      <div className="card" id={props.id}>
      {console.log(props)}
      {console.log("banana")}
      <div className="img-container">
        <img alt="rose1" src= {props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name: {props.name}</strong> 
          </li>
      
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
    )
  
}

// if you are using this, it is always class 
// function pictureCard(props) {
//   // you can only get whatever we send to it from APPs 
//   // in thsi case you have 4

//   console.log (props)
//   return (
//     // choose the most 
//     <div className="card" id={props.id}>
      
//       <div className="img-container">
//         <img alt="rose1" src= {props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name: {props.name}</strong> 
//           </li>
      
//         </ul>
//       </div>
//       {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
//         𝘅
//       </span> */}
//     </div>
//   );
// }

export default PictureCard;
