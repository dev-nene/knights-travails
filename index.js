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

console.log(getMoves([0, 0]));
console.log(getMoves([3, 3]));
