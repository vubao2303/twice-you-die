// import React from "react";
// // import "../styles/Section.css";

// // By importing the Section.css file, it is added to the DOM whenever this component loads

// // We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// // Unlike regular HTML, a JSX style property must be an object instead of a string
// // On a style object, we camelCase all property names, and put all of the values in quotes
// // Non quoted values default to "pixels", e.g. height, margin, padding

// const styles = {
//   sectionStyles: {
//     background: "wheat"
//   }
// };

// // We use JSX curly braces to evaluate the style object on the JSX tag

// function Section() {
//   return (
//     <section style={styles.sectionStyles} className="section">
//       imgages will go here
//       <div> </div>
      
//     </section>
//   );
// }

// export default Section;


import React from "react";
import "../style/style.css";

function SectionImage(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
         
        </ul>
      </div>
      {/* this is where I have to handle what to do with the clicked */}
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default SectionImage;




