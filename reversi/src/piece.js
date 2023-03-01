/**
 * Initializes the Piece with its color.
 */
function Piece (color) {

    this.color = color;

};

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {

    return this.color === 'black' ? 'white' : 'black';

};

// black = new Piece('black');
// console.log(black.oppColor())

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    
};

/**
 * Returns a string representation of the piece
 * based on its color.
 */
// Piece.prototype.toString = function () {
// };

// // DON'T TOUCH THIS CODE
// if (typeof window === 'undefined'){
//     module.exports = Piece;
// }
// // DON'T TOUCH THIS CODE