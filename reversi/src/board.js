// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {

  const board = Array(8).fill().map(() => (Array(8)));

  board[3][4] = new Piece('black');
  board[4][3] = new Piece('black');
  board[3][3] = new Piece('white');
  board[4][4] = new Piece('white');

  return board;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let [row, col] = pos

  if (row < 0 || row > 7) return false;
  if (col < 0 || col > 7) return false;

  // return pos.some((ele) => ele > 7 || ele < 0);
  
  return true;

};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {

  if (!this.isValidPos(pos)) {
    throw new Error ('Not valid pos!');
  };
  
  let [row,col] = pos;

  return this.grid[row][col];

};

// should return a piece for an occupied position
// should return undefined for an empty position
// should throw an error for an invalid position


/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {

  let piece = this.getPiece(pos);
  if (piece == null) return null;
  // return piece.color === color ? true : false;
  if (piece.color === color) {
    return true;
  } else if (piece.oppColor() === color) {
    return false;
  }

};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (this.getPiece(pos) === undefined) return false;
  return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip) {


  // if (!this.isValidPos(pos) && piecesToFlip.length === 0) return [];
  if (!this.isOccupied(pos) && piecesToFlip.length === 0) return [];

  // color?


  if (!this.isMine(pos, color)) {
    piecesToFlip.push(this.getPiece)
  }



};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE