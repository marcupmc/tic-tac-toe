
export function addTokenOnBoard(player, numSquare) {
    return {
        type: 'ADD_TOKEN_ON_BOARD',
        player,
        numSquare,
    };
}
