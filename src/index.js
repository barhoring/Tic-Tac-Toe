import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return <button className="square">{/* todo */}</button>;
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Square />
        </div>
        <div className="game-info">
          <div> {/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// =======================================================

ReactDOM.render(<Game />, document.getElementById("root"));

// game - board;

// game - info;
