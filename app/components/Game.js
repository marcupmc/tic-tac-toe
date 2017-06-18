import React from 'react';
import Board from './Board';

import '../../assets/styles/styles.scss';

class Game extends React.Component {
    render() {
        return (
        <div>
            <div className="main-title"><h1>Tic Tac Toe !</h1></div>
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                      <div>{/* status */}</div>
                      <ol>{/* TODO */}</ol>
                </div>
            </div>
        </div>
    );
  }
}

export default Game;
