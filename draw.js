var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");

var code = new Code();

var startX = 40;
var y = 40;
var r = 20;

ctx.strokeStyle = colors['black'];
ctx.lineWidth = 2;

// Draw code background
ctx.fillStyle = "rgb(200, 200, 200)";
ctx.fillRect(0, 0, canvas.width, 80);

// Draw code
for (var i = 0; i < code.array.length; i++) {
  ctx.beginPath();
  ctx.fillStyle = colors[code.array[i]];
  ctx.arc(startX, y, r, 0, 2*Math.PI);
  ctx.fill();
  ctx.stroke();
  startX += 80;
}