function longestWord2(str) {
  var biggest = 0;
  str.split(" ").forEach(function (word) {
    if (word.length > biggest) {
      biggest = word.length;
    }
  });
  return biggest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
console.log(longestWord2("The quick brown fox jumped over the lazy dog"));
