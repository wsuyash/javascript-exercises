const removeFromArray = function (arr, ...vals) {
  return arr.filter((e) => {
    return !vals.includes(e);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
