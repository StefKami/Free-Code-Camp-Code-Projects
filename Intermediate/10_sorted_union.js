function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (arr1, arr2) {
    return arr1.concat(arr2.filter(function (item) {
      return arr1.indexOf(item) < 0;
    }));
  });
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
