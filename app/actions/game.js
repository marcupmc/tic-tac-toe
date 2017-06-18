
export function addTokenOnBoard(player, numSquare) {
    return {
        type: 'ADD_TOKEN_ON_BOARD',
        player,
        numSquare,
    };
}

export function resetBoard() {
    return {
        type: 'RESET_BOARD',
    }
}
