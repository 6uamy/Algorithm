function solution(board, moves) {
    let answer = 0;
    const bucket = [];
    
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] === 0) {
                continue;
            } else {
                if (bucket[bucket.length - 1] === board[j][moves[i] - 1]) {
                    bucket.pop();
                    board[j][moves[i] - 1] = 0;
                    answer += 2;
                    break;
                } else {
                    bucket.push(board[j][moves[i] - 1]);
                    board[j][moves[i] - 1] = 0;
                    break;
                }
            }
        }
    }
    
    return answer;
}