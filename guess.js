var colors = {
  red: "rgb(255, 0, 0)",
  green: "rgb(0, 255, 0)",
  blue: "rgb(0, 0, 255)",
  yellow: "rgb(255, 255, 0)",
  purple: "rgb(255, 0, 255)",
  orange: "rgb(255, 165, 0)"
};

function Code() {
  this.array = (function() {
    var code = [];
    var colorArray = Object.keys(colors);
    for (var i = 0; i < 4; i++) {
      var randomNumber = Math.random();
      var colorIndex = Math.floor(randomNumber * colorArray.length);
      var color = colorArray[colorIndex];
      code.push(color);
    }
    return code;
  })();
}

function Guess(colorArray) {
  this.array = colorArray;
}

function Key(guess, code) {
  this.array = (function() {
    var positionMatches = function() {
      var count = 0;
      for (var i = 0; i < code.array.length; i++) {
        if (guess.array[i] === code.array[i]) count++;
      }
      return count;
    }

    var colorMatches = function() {
      var count = 0;
      for (var i = 0; i < guess.array.length; i++) {
        if (guess.array[i] !== code.array[i]) {
          for (var j = i+1; j < guess.array.length; j++) {
            if (guess.array[i] === code.array[j]) count++;
          }
        }
      }
      return count;
    }
    
    var key = [];
    
    for (var i = 0; i < positionMatches(); i++) {
      key.push('black');
    }
    for (var i = 0; i < colorMatches(); i++) {
      key.push('white');
    }
    
    return key;
  })();
}
