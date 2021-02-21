# twice-you-die
if you clicked twice, you die! 


![Site Picture]()
![Site Picture]()


## Heroku-Deployed

[Deployed Link]()  

# Table of Contents 

| |||
|:-:|:-:|:-:|
|[Project Introduction](#excercise-tracking) | [Table of Contents](#table-of-contents) | [Heroku](#heroku-deployed) |  [Description of Page Building](#Description-of-Page-Building)| [Code Snippets](#code-snippet) 
| [Technologies Used](#Technologies-Used) |  [Author](#author) | [License](#License)

---

## Description of Page Building 
* InstallCreate React App globally by running npx react-app in terminal
* In public folder contains the index.html file
   <ul> 
  <li> Bacic HTML doctype
  <li> Add bootstrap access link 
  <li> Contains root id so we can use to twist the page 

  </li>
  </ul>

* In src (source) folder
  <ul> 
  <li> Component folders 

  - Header.js file has header style and the rule of the game
  
  - NavBar.js file uses score, topScore, and  message props that passed from App.js
  
  - PictureCards.js file grabs id, image, and handleClick function from App.js and uses as props to populate the cards on the page 
  
  - Wrapper.js file acts as a container for PictureCards 

  <li> Style folder contains style.css file to decorate the interface
  <li> App.js file
  <li> 
  <li> 
  <li> 
  </li>
  </ul>


* In another file 
  <ul> 
  <li> 
  <li> 
  <li> 
  </li>
   </ul>



## Code Snippet
Install npm package 
npm install express

To use components in  application
``` Javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

``` Javascript
  render() {
    return (
      <div>
      <Header />
      <NavBar />
      <Wrapper>
        <PictureCard />
      </Wrapper> 
      </div>
    )}
```


Creates components as independent and reusable bits of code
``` Javascript
function PictureCard(props) {
    return (
      <div className="img-container">
        <img onClick={() => props.handleClick(props.id, props.click)} className="shuffle" height="150" width= "250" alt="rose1" src= {props.image} />
      </div> )}
export default PictureCard;
``` 
``` Javascript
function Nav(props) {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <div> {props.message} </div>
      <div> Score: {props.Score}| Top score: {props.TopScore} </div>
    </nav> );}
export default Nav;
``` 

Import react and other components to App.js file
``` Javascript
import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import pics from "./images.json";
```

Set property in App.js file to send to other components 
``` Javascript 
 <PictureCard
  id={images.id}
  key={images.id}
  name={images.name}
  image={images.image}
  click={images.click}
  handleClick={this.handleClick} />
```

## Technologies Used

||||||
|:-:|:-:|:-:|:-:|:-:|
|[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [Heroku](https://heroku.com/) | [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  | [GitHub](https://github.com/)

|||||
|:-:|:-:|:-:|:-:|
|[Express](https://expressjs.com/) |[Node.js](https://nodejs.org/en/) | [Mongoose](https://mongoosejs.com/docs/defaults.html) | [Morgan](https://www.npmjs.com/package/morgan)


<br>

## Author

| | |
| --- | --- |
|**B Tram Vu**|[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/b-tram-vu/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/vubao2303) | [![Portfolio](https://i.stack.imgur.com/gVE0j.png) Portfolio](https://www.linkedin.com/in/b-tram-vu-866250121/)


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
