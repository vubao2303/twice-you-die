import React from "react";
import "../style/style.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "purle",
    fontSize: 30
  },
  headingStyle: {
    fontSize: 300
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    // this { } is JSX, you can think of it as object deconstruction or dot notation, just know that, style.headerStyle, come from the object you created on line 11
    <header style={styles.headerStyle} className="header">
      <div className="row">

      <div className="announce"> your result, rigth or wrong </div>
      <div> score: | top score: </div>
      </div>
      
    </header>
  );
}

export default Header;