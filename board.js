function Board() {
  this.canvas = document.getElementById("board");
  this.code = new Code();
  this.draw = function() {
    var ctx = this.canvas.getContext('2d');
    var code = this.code;
    var guesses = 10;

    var startX = 40;
    var y = 25;
    var r = 20;

    ctx.strokeStyle = colors['black'];
    ctx.lineWidth = 2;

    // Draw code background
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.fillRect(0, 0, this.canvas.width, 50);

    // Draw code
    for (var i = 0; i < code.array.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[code.array[i]];
      ctx.arc(startX, y, r, 0, 2*Math.PI);
      ctx.fill();
      ctx.stroke();
      startX += 80;
    }

    // Draw placeholder dots
    var startX = 40;
    var startY = 75;
    var r = 5;

    for (var i = 0; i < guesses; i++) {
      for (var j = 0; j < code.array.length; j++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(225, 225, 225, 0.6)";
        ctx.arc(startX, startY, r, 0, 2*Math.PI);
        ctx.fill();
        startX += 80;
      }
      startX = 40;
      startY += 50;
    }
  }
}