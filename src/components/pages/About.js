import React from 'react'

export default function About() {
   return (
      <React.Fragment >
         <p style={aboutStyle}>This is the TodoList app v1.0.0. It is part of a react crash course. (https://youtu.be/sBws8MSXN7A).</p>
      </React.Fragment>
   )
}

const aboutStyle = {
   backgroundColor: "#333",
   color: "#fff",
   padding: "10px",
   textAlign: "center"
}