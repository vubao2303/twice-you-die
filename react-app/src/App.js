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

import React from "react";
import Header from "./components/header";
// import Section from "./components/section";
import Navbar from "./components/nav";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Section /> */}
    </div>
  );
}

export default App;