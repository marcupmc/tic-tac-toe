import React from 'react';
import Square from './Square';

import { calculateWinner } from '../utils/game';

class Board extends React.Component {

    constructor(props) {
        super();
        this.state = {
            squares: Array(9).fill(null),
            currentPlayer: 'X',
        }
    }

    handleClick(numSquare) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[numSquare]) {
            return;
        }
        squares[numSquare] = this.state.currentPlayer;
        this.setState({
            squares: squares,
            currentPlayer: this.state.currentPlayer === 'X' ? 'O': 'X',
        });
    }

    resetBoard() {
        this.setState({
            squares: Array(9).fill(null),
            currentPlayer: 'X',
        });
    }

    renderSquare(i) {
        return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />);
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.currentPlayer}`;
        }
        return (
              <div>
                  { winner ? <div><button onClick={ () => this.resetBoard()}>New Game ?</button></div> : null}
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

export default Board;
