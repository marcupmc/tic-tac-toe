import { calculateWinner } from '../utils/game';

export default function game(state = {}, action) {
    switch (action.type) {
    case 'ADD_TOKEN_ON_BOARD':
        const newSquares = state.squares.slice();
        newSquares[action.numSquare] = action.player;
        return {
            ...state,
            squares: newSquares,
            currentPlayer: action.player === 'X' ? 'O' : 'X',
            winner: calculateWinner(newSquares),
        }
    case 'RESET_BOARD':
        return {
            ...state,
            squares: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null,
        }
    default:
        return state;
    }
}
