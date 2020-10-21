import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [output, setOutput] = React.useState(false);

  const handleClick = () => {
    setOutput(true);
    console.log(output);
  };
  function Para() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={handleClick}>
        click
      </button>
      {output ? <Para /> : ""}
    </div>
  );
}

export default App;
