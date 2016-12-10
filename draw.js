// Draw board
var board = new Board();
board.draw();

// Draw gutter
var $gutter = $("#gutter");
// Gutter width depends on canvas
$gutter.width(board.canvas.width);