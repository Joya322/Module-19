// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function toLower(text) {
  var newText = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] >= "A" && text[i] <= "Z") {
      if (text[i] == "A") {
        newText += "a";
      } else if (text[i] == "B") {
        newText += "b";
      } else if (text[i] == "C") {
        newText += "c";
      } else if (text[i] == "D") {
        newText += "d";
      } else if (text[i] == "E") {
        newText += "e";
      } else if (text[i] == "F") {
        newText += "f";
      } else if (text[i] == "G") {
        newText += "g";
      } else if (text[i] == "H") {
        newText += "h";
      } else if (text[i] == "I") {
        newText += "i";
      } else if (text[i] == "J") {
        newText += "j";
      } else if (text[i] == "K") {
        newText += "k";
      } else if (text[i] == "L") {
        newText += "l";
      } else if (text[i] == "M") {
        newText += "m";
      } else if (text[i] == "N") {
        newText += "n";
      } else if (text[i] == "O") {
        newText += "o";
      } else if (text[i] == "P") {
        newText += "p";
      } else if (text[i] == "Q") {
        newText += "q";
      } else if (text[i] == "R") {
        newText += "r";
      } else if (text[i] == "S") {
        newText += "s";
      } else if (text[i] == "T") {
        newText += "t";
      } else if (text[i] == "U") {
        newText += "u";
      } else if (text[i] == "V") {
        newText += "v";
      } else if (text[i] == "W") {
        newText += "w";
      } else if (text[i] == "X") {
        newText += "x";
      } else if (text[i] == "Y") {
        newText += "y";
      } else {
        newText += "z";
      }
    }
    else {
      newText += text[i];
    }
  }
  return newText;
}

var text = "I AM Jannat";
var lowerText = toLower(text);
console.log(lowerText);
