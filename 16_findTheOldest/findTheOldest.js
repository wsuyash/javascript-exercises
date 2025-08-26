const findTheOldest = function (people) {
  let maxAge = Number.MIN_VALUE;
  let ans;

  people.forEach((p) => {
    let age = 0;
    if (p.hasOwnProperty("yearOfDeath")) {
      age = p.yearOfDeath - p.yearOfBirth;
    } else {
      age = new Date().getFullYear() - p.yearOfBirth;
    }

    if (age > maxAge) {
      maxAge = age;
      ans = p;
    }
  });

  return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
