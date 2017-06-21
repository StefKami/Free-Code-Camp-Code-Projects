function factorial_r(num) {

  // This is the base case.
  // Without it, you will have an infinite loop!
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial_r(num - 1);
  }
}

console.log("Using iteration: " + factorial_i(5));
console.log("Using recursion: " + factorial_r(7));
console.log("Using iteration: " + factorial_i(0));
console.log("Using recursion: " + factorial_r(0));
