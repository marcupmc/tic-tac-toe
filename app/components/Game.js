import React from 'react';
import { Provider } from 'react-redux';

import Board from './Board';
import store from '../store';
import '../../assets/styles/styles.scss';

class Game extends React.Component {
    render() {
        return (
        <Provider store={store}>
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
        </Provider>
    );
  }
}

export default Game;
