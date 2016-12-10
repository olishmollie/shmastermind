function Board() {
  this.canvas = document.getElementById("board");
  this.code = new Code();
  this.draw = function() {
    var ctx = this.canvas.getContext('2d');
    var code = this.code;
    var guesses = 10;

    ctx.strokeStyle = colors['black'];
    ctx.lineWidth = 2;

    // Draw code background
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.fillRect(0, 0, this.canvas.width, 50);
    ctx.fillStyle = "#333";
    ctx.fillRect(320, 0, 80, 50);

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

    // Draw gutter line
    ctx.beginPath();
    ctx.moveTo(320, 50);
    ctx.lineTo(320, 550);
    ctx.stroke();

    // Draw gutter dots
    var startX = 354;
    var startY = 70;
    var r = 2.5;

    for (var i = 0; i < guesses; i++) {
      for (var j = 0; j < 2; j++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(225, 225, 225, 0.6)";
        ctx.arc(startX, startY, r, 0, 2*Math.PI);
        ctx.fill();
        startX += 12;
      }
      startX = 354;
      startY += 12;
      for (var k = 0; k < 2; k++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(225, 225, 225, 0.6)";
        ctx.arc(startX, startY, r, 0, 2*Math.PI);
        ctx.fill();
        startX += 12;
      }
      startX = 354;
      startY += 38;
    }
  }
  this.drawCode = function() {
    var ctx = this.canvas.getContext('2d');
    var startX = 40;
    var y = 25;
    var r = 20;
    for (var i = 0; i < code.array.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[code.array[i]];
      ctx.arc(startX, y, r, 0, 2*Math.PI);
      ctx.fill();
      ctx.stroke();
      startX += 80;
    }
  }

}