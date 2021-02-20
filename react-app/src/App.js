// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import React, {component} from "react";
// function App (){
//   rerurn <HelloDiv />
// }

// export default App;

// import React from "react";
// import Header from "./components/header";
// import Section from "./components/section";
// import Navbar from "./components/nav";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <Section />
//     </div>
//   );
// }
// Clicked = id => {
//   // Filter this.state.friends for friends with an id not equal to the id being removed
//   // const images = this.state.images.Math.Random(friend => friend.id !== id);
//   // Set this.state.friends equal to the new friends array
//   this.setState({ images: images });
// };

// state is liek a container or a box
// and props is like a truck
// props send data/info back and forth 
// and that data could be coming from the state 
// what we could do is we can use propmessage to push our datat to push as well as retrieve

// Map over this.state.friends and render a FriendCard component for each friend object

// export default App;


import React, { useState } from "react";
import PictureCard from "./components/PictureCard";
import Section from "./components/Section";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import images from "./images.json";

function App() {
  // Setting this.state.friends to the friends json array
  // hooks are custum build in react
  // only use for functional componet 
  // there are 12, useState, use stuffs 
  // what they do is they perform specific action 
  // we maniuate the stae, we get it set up, 
  // have iniital var and have the method tho change the var
  // var state= img 

  // to make up random Math.radom? to shuffle the card? 
  const [state, setState] = useState(images)
  setState()
  return (
    <div>
      <NavBar />
      <Header />
      <Section>
        <>
          {state.map(images => {
            return (
              <>
                <PictureCard
                  // we are sending data to Picture card, you don't need to specify props, props are only to recive
                  id={images.id}
                  // react require a key for map,we have it but dont use it 
                  key={images.id}
                  name={images.name}
                  image={images.image}

                />
              </>)
          })}
        </>
      </Section>
    </div>
  );
}








export default App;
