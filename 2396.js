var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i++) {
    let binary = n.toString(i);
    let reverseBinary = binary.split("").reverse().join("");
    if (binary !== reverseBinary) {
      return false;
    }
  }

  return true;
};

console.log(isStrictlyPalindromic(4));
