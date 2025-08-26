const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let ans = 0;

  arr.forEach((e) => {
    ans += e;
  });

  return ans;
};

const multiply = function (arr) {
  let ans = 1;

  arr.forEach((e) => {
    ans *= e;
  });

  return ans;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  }

  let ans = 1;

  while (a > 0) {
    ans *= a;
    a--;
  }

  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
