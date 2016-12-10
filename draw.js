// Draw board
var board = new Board();
board.draw();

// Draw button div
var $buttonDiv = $("#buttons");
// Gutter width depends on canvas
$buttonDiv.width(board.canvas.width);