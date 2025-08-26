const palindromes = function (str) {
  const regex = /[\s\W]/g;
  str = str.replaceAll(regex, "").toLowerCase().trim();

  let revStr = str.split("").reverse().join("");

  return str === revStr;
};

// Do not edit below this line
module.exports = palindromes;
