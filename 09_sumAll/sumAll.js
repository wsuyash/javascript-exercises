const sumAll = function (s, e) {
  if (typeof s !== "number" || typeof e !== "number") {
    return "ERROR";
  }

  if (s < 0 || e < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(s) || !Number.isInteger(e)) {
    return "ERROR";
  }

  let out = 0;

  if (e < s) {
    let temp = s;
    s = e;
    e = temp;
  }

  for (let i = s; i <= e; ++i) {
    out += i;

    if (out === NaN) {
      return "ERROR";
    }
  }

  return out;
};

// Do not edit below this line
module.exports = sumAll;
