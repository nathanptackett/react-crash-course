import React from 'react'

export default function About() {
   return (
      <React.Fragment >
         <p style={aboutStyle}>This is the TodoList app v1.0.0. It is part of a react crash course. (https://youtu.be/sBws8MSXN7A). I stopped the tutorial at 1:28 due to an error installing the axios extension. </p>
      </React.Fragment>
   )
}

const aboutStyle = {
   backgroundColor: "#333",
   color: "#fff",
   padding: "10px",
   textAlign: "center"
}