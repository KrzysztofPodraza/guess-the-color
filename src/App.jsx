import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  const [start, setStart] = React.useState(false);
  const [colors, setColors] = React.useState([]);
  const [correctColor, setCorrectColor] = React.useState([]);
  const [score, setScore] = React.useState(0);
  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const startHandler = () => {
    setStart(true);
    let tempColors = ["", "", ""];
    for (let x = 0; x < 3; x++) {
      tempColors[x] = `rgb(${rand(0, 256)},${rand(0, 256)},${rand(0, 256)})`;
    }
    setColors(tempColors);
    const correctColorTemp = tempColors[rand(0, 3)];
    setCorrectColor(correctColorTemp);
  };
  const checkColor = (number) => {
    if (correctColor === colors[number]) {
      setScore(score + 1);
      startHandler();
    } else {
      startHandler();
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h3 className="score">score:{score}</h3>
        <div className="right_color">
          <p className="correct_color_text">{correctColor}</p>
        </div>
        <div className="colors_container">
          <div
            className="random_div mr"
            style={{ backgroundColor: `${colors[0]}` }}
            onClick={() => {
              checkColor(0);
            }}
          ></div>
          <div
            className="random_div mr"
            style={{ backgroundColor: `${colors[1]}` }}
            onClick={() => {
              checkColor(1);
            }}
          ></div>
          <div
            className="random_div mr"
            style={{ backgroundColor: `${colors[2]}` }}
            onClick={() => {
              checkColor(2);
            }}
          ></div>
          {/* <div
            className="random_div"
            style={{ backgroundColor: `${correctColor}` }}
          ></div> */}
        </div>
      </div>
      <button onClick={startHandler} className="start_button">
        start
      </button>
    </div>
  );
}

export default App;
