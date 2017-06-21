function getIndexToIns(arr, num) {
  return arr.concat(num).sort(function (a, b) {
    return a - b;
  }).indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
