const leapYears = function (y) {
  if (y % 100 === 0) {
    y = y / 100;
  }

  return y % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
