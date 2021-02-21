
import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images: images
  };

//   newCards = id => {
//     console.log (id)
//     const images = this.state.images.shuffle(images=>)
//     // if clicked twice 
//     // you must die 
//     // else shuffle

//   }

//   shuffle = id => {
//     this.setState({
//         images: this.state.images.sort(function(a,b){
//                 return 0.5 - Math.random();
//             }
//         )
//     })
// }


  shuffleRoses(images) {
  for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
  }
}
  // changeScore= score =>{
  //   consolesole.log(score)
  // }
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends: friends });
  // };

  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Wrapper>
          {console.log(this.state)}
          {this.state.images.map(images => {
            return (
          <>
          {/* {console.log(images)} */}
          <PictureCard 
            // we are sending data to Picture card, you don't need to specify props, props are only to recive
            id={images.id}
            // react require a key for map,we have it but dont use it 
            key={images.id}
            name={images.name}
            image={images.image}
            shuffleRoses= {this.shuffleRoses}
           
          />
          </>)
  })}
      </Wrapper>
      </div>
    );
  }

}

export default App;







  
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

