$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();
    var latin = $("input#pigLatin").val();
    // var result = ;
    // alert();
    // $('#result').text(result);
    pigLatin(latin);
  });
});

var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
var consonants = ['B', 'b', 'C', 'c', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];


function pigLatin(str) {
  for (var j = 0; j < consonants.length; j++) {
      if (str.slice(0, 2) == 'qu' || str.slice(0, 2) == 'Qu') {
        var x = str.slice(0, 2);
        str = str.slice(2).concat(x);
        alert(str);
        return;
      } else if (str.charAt(0) === vowels[j]) {
      str = str.concat('way');
      alert(str);
      return;
    } else if (str.charAt(0) === consonants[j]) {
      alert(cons(str));
      return;
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
