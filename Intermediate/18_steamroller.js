// First Solution
function steamrollArray(arr) {
  return arr.reduce(function (acc, next) {
    return acc.concat(Array.isArray(next) ? steamrollArray(next) : next);
  }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
