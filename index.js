function getMoves(position) {
  const possibleMoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  const moves = possibleMoves.map((move) => [
    position[0] + move[0],
    position[1] + move[1],
  ]);
  const validMoves = moves.filter(
    (move) => move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7,
  );
  return validMoves;
}

function knightMoves(start, end) {
  if (start.toString() === end.toString()) {
    return [start];
  }

  const queue = [];
  queue.push([start, [start]]);
  const visited = new Set();
  visited.add(start.toString());
  while (queue.length > 0) {
    const [move, path] = queue.shift();
    const validMoves = getMoves(move);
    for (const nextMove of validMoves) {
      if (nextMove.toString() === end.toString()) {
        return [...path, nextMove];
      }
      if (!visited.has(nextMove.toString())) {
        queue.push([nextMove, [...path, nextMove]]);
        visited.add(nextMove.toString());
      }
    }
  }
}

console.log(knightMoves([0, 0], [3, 3]));
