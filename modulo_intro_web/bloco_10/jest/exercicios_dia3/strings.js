function upperCase(str) { 
  return str.toUpperCase();
}

function firstChar(str) {
  return str.charAt(0);
}

function concatString(str1, str2) {
  return str1 + str2;
}

module.exports = {
  upperCase,
  firstChar,
  concatString
}