function Code() {
  this.code = this.generate();
}

Code.prototype = {
  colors: {
    red: "rgb(255, 0, 0)",
    green: "rgb(0, 255, 0)",
    blue: "rgb(0, 0, 255)",
    yellow: "rgb(255, 255, 0)",
    black: "rgb(0, 0, 0)",
    white: "rgb(255, 255, 255)"
  },
  generate: function() {
    var code = [];
    var colorArray = Object.keys(this.colors);
    for (var i = 0; i < 4; i++) {
      var randomNumber = Math.random();
      var colorIndex = Math.floor(randomNumber * colorArray.length);
      var color = colorArray[colorIndex];
      code.push(this.colors[color]);
    }
    return code;
  }
}