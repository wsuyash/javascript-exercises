const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }

  n = Number(n);

  let a = 0;
  let b = 1;
  let c = a + b;

  if (n == 0) {
    return a;
  }

  if (n == 1) {
    return b;
  }

  if (n == 2) {
    return c;
  }

  for (let i = 3; i <= n; ++i) {
    a = b;
    b = c;
    c = a + b;
  }

  return c;
};

// Do not edit below this line
module.exports = fibonacci;
