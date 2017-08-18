$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#pigLatin").val();
    stringArray(userInput);
  });
});

var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];
var consonants = ['B', 'b', 'C', 'c', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'W', 'w', 'X', 'x', 'Z', 'z'];

function stringArray(str) {
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = pigLatin(str[i]);
  }
  alert(str.join(' '));
}

function pigLatin(str) {
  for (var j = 0; j < consonants.length; j++) {
      if (str.slice(0, 2) == 'qu' || str.slice(0, 2) == 'Qu') {
        var x = str.slice(0, 2);
        str = str.slice(2).concat(x);
        return str;
      } else if (str.charAt(0) === 'y' || str.charAt(0) === 'Y') {
          var x = str.slice(0, 1);
          str = str.slice(1).concat(x + 'ay');
          return str;
      } else if (str.charAt(0) === vowels[j]) {
          str = str.concat('way');
          return str;
      } else if (str.charAt(0) === consonants[j] && str.charAt(1) == 'q' &&   str.charAt(2) == 'u') {
          var x = str.slice(0, 3);
          str = str.slice(3).concat(x);
          return str;
      } else if (str.charAt(0) === consonants[j]) {
          return cons(str);
    }
  }
}

function cons(str) {
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < consonants.length; j++) {
      if (str.charAt(0) === vowels[j]) {
        return str.concat('ay');
      } else if (str.charAt(0) == consonants[j]) {
          var x = str.slice(0, 1);
          str = str.slice(1).concat(x);
        }
    }
  }
}
