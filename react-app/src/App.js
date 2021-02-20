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

// export default App;


import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Section from "./components/Section";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images: images
  };

  Clicked = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const images = this.state.images.Math.Random(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images: images });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar />
        <Header />
      <Section>
        
        {this.state.images.map(images => (
          <PictureCard
            
            id={images.id}
            key={images.id}
            name={images.name}
            image={images.image}
           
          />
        ))}
      </Section>
      </div>
    );
  }




  // render() {
  //   return (
  //     <Wrapper>
  //       <Title>Friends List</Title>
  //       {this.state.friends.map(friend => (
  //         <FriendCard
  //           removeFriend={this.removeFriend}
  //           id={friend.id}
  //           key={friend.id}
  //           name={friend.name}
  //           image={friend.image}
  //           occupation={friend.occupation}
  //           location={friend.location}
  //         />
  //       ))}
  //     </Wrapper>
  //   );
  // }
}

export default App;
