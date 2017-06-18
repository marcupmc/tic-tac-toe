import React from 'react';
import { connect } from 'react-redux';

import Square from './Square';
import { addTokenOnBoard } from '../actions/game';
import { calculateWinner } from '../utils/game';

class Board extends React.Component {

    handleClick(numSquare) {
        const {dispatch, squares, currentPlayer, winner} = this.props;
        if (winner || squares[numSquare]) {
            return;
        }
        dispatch(addTokenOnBoard(currentPlayer, numSquare));
    }

    resetBoard() {
        this.setState({
            squares: Array(9).fill(null),
            currentPlayer: 'X',
        });
    }

    renderSquare(i) {
        return (<Square value={this.props.squares[i]} onClick={() => this.handleClick(i)} />);
    }

    render() {
        const { winner, currentPlayer } = this.props;
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${currentPlayer}`;
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

function mapStateToProps(state) {
    const game = _.get(state, 'game');
    return {
        squares: game.squares,
        currentPlayer: game.currentPlayer,
        winner: game.winner,
    };
}

export default connect(mapStateToProps)(Board);
