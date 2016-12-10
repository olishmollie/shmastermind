// Draw board
var board = new Board();
board.draw();

// Draw button div
var $buttonDiv = $("#buttons");
// Gutter width depends on canvas
$buttonDiv.width(board.canvas.width);
// Give buttons colors
var $buttons = $(".peg");
$buttons.each(function(i) {
  let colorsArray = Object.keys(colors);
  let color = colorsArray[i];
  $(this).css("background-color", colors[color]);
});