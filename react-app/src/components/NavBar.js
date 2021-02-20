import React from "react";
// import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: "purple",
    // justifyContent: "flex-end"//flex-end: items are packed toward to end line https://css-tricks.com/almanac/properties/j/justify-content/
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Nav() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
     <h1 style={styles.headingStyle}>A thorn defends the rose, touch it twice and you will die</h1>
    </nav>
  );
}

export default Nav;