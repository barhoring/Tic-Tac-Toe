import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function ResetGame(props) {
  return <button onClick={props.reset}>Reset</button>;
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick = i => {
    const squares = this.state.squares.slice(); // shallow copy
    if (calculateWinner(squares) || squares[i]) return; // we want to check for a winner every time
    const xIsNext = this.state.xIsNext;
    squares[i] = xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !xIsNext });
    // calculateWinner(this.state.squares);
  };

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      console.log(winner, "here");
      status = `Next Player: ${this.state.xIsNext ? "X" : "O"}`;
    }
    return (
      <div>
        <ResetGame
          reset={() => this.setState({ squares: Array(9).fill(null) })}
        />
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
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

function calculateWinner(squares) {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winnerLines.length; i++) {
    let [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      console.log("winner is ", squares[a]);
      debugger;
      return squares[a];
    }
  }
  return null;
}
