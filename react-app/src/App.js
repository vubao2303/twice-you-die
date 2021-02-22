import React, { Component } from "react";
// another way to do this is import React from react then on line 9, do class App extends React.Component
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import pics from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images: pics,//represnt the array of imgaes 
    clicked: false,
    count: 0,
    topScore: 0,
    message:""
  }
  // set the id and click as parameter for this handle function so we can call it later in picure card
  handleClick = (id, click) => {
    const roses = this.state.images;
    if (click) {
      roses.forEach((image, index) => {
        roses[index].click = false;
      });
      return this.setState({
        images: roses.sort(() => Math.random() - 0.5),
        message: "You Are Dead (>_<) Play Again!",
        count: 0
      })
    }

    else {
      // {this.handleIncrement()}
      roses.forEach((image, index) => {
        // if the id is clicke, which mean that clicked index is the same as id 
        if (id === image.id) {
          roses[index].click = true;
          const newScore = this.state.count + 1;
          // if newScore is grater than topscore (?do) set newTopScore to newscore (:else, aka if newScore is equal or less than topScore, keep theo topScore
          const newTopScore = newScore > this.state.topScore ? newScore : this.state.topScore;
            // return the new state
          return this.setState({
            image: roses.sort(() => Math.random() - 0.5),
            message: "You Guessed Correctly!",
            count: newScore,
            topScore: newTopScore,
          })
        }
      });
    }
  };

  render() {
    return (
      <div>
        <NavBar  />
        <Header message={this.state.message} Score= {this.state.count} TopScore= {this.state.topScore}/>
        <div className="container">
        
        <Wrapper className="container">
          <div className="row">
          {/* {console.log(this.state)} */}

          {/* <div className="row" id="inline"> */}
          {this.state.images.map(images => {
            return (
              <>
                {/* // <div className="row">
              //   <div className= "col-md-3"> */}
                <PictureCard
                  // we are sending data to Picture card, you don't need to specify props, props are only to recive
                  id={images.id}
                  // react require a key for map,we have it but dont use it 
                  key={images.id}
                  name={images.name}
                  image={images.image}
                  click={images.click}
                  handleClick={this.handleClick}
                />
                {/* // </div> */}
              </>)
          })}
          </div>
        </Wrapper>
        
        </div>
      </div>
    );
  };
};

export default App;





// all the function breakdown
// shuffleRoses = () => {
  //   this.setState({
  //     images: this.state.images.sort(function (a, b) {
  //       return 0.5 - Math.random()
  //     }
  //     )
  //   })
  // }

  // handleClickOnce = ()=>{
  //   this.setState({
  //     count: this.state.count +1,
  //     message: "good job "
  //   })
  // }

  // handleClickTwice = ()=> {
  //   this.setState({
  //     count: 0,
  //     message: "you must die"
  //   })
  // }

  // handleDecrement = () => {
  //   // We always use the setState method to update a component's state
  //   if(this.state.count > 0){
  //     this.setState({ count: this.state.count - 1 });
  //   }

  // };
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ score: this.state.count + 1 });
  // };


  // handleClick = (id, clicked) => {

  //   const imageOrder = this.state.images;

  //   if (clicked) {
  //     imageOrder.forEach((image, index) => {
  //       imageOrder[index].clicked = false;
  //     });
  //     return this.setState({
  //       image: imageOrder.sort(() => Math.random() - 0.5),
  //       message: "You Guessed Incorrectly!",
  //       score: 0
  //     })
  //   }
  //   else {
  //     imageOrder.forEach((image, index) => {
  //       if (id === image.id) {
  //         imageOrder[index].clicked = true;
  //       }
  //     });

  //     const { topScore, score } = this.state;
  //     const newScore = score + 1;
  //     const newTopScore = newScore > topScore ? newScore : topScore;

  //     return this.setState({
  //       image: imageOrder.sort(() => Math.random() - 0.5),
  //       message: "You Guessed Correctly!",
  //       score: newScore,
  //       topScore: newTopScore,
  //     })
  //   }
  // };