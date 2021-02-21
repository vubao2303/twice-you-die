
import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import pics from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images: pics,
    clicked: false,
    count: 0
  }

  // shuffleRoses = () => {
  //   this.setState({
  //     images: this.state.images.sort(function (a, b) {
  //       return 0.5 - Math.random()
  //     }
  //     )
  //   })
  // }

  handleClickOnce = ()=>{
    this.setState({
      count: this.state.count +1,
      message: "good job "
    })
  }

  // handleClickTwice = ()=> {
  //   this.setState({
  //     count: 0,
  //     message: "you must die"
  //   })
  // }



  handleClick = (id, click) => {

    const imageOrder = this.state.images;

    if (click) {
      imageOrder.forEach((image, index) => {
        imageOrder[index].click = false;
      });
      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Incorrectly!",
        score: 0
      })
    }



    else {
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
          imageOrder[index].click = true;
        }
      });

      const { topScore, score } = this.state;
      const newScore = this.state.count + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;

      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Correctly!",
        score: newScore,
        topScore: newTopScore,
      })
    }
  };
  
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Wrapper>
          <p>{this.state.message}</p>
        <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>

          {/* <div className="row">
          {console.log(this.state)} */}

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
                {/* // </div> */}
              </>)
          })}


        </Wrapper>
      </div>
    );
  };
};

export default App;

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