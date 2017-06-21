function sumPrimes(num) {
  var range = [];

  for (var i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) {
      range.push(i);
    }
  }

  return range.reduce(function (a, b) {
    return a + b;
  });
}

function isPrimeNumber(num) {
  for (var x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
  }
  return true;
}

console.log(sumPrimes(10));
