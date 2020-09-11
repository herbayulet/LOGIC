function weirdMultiply(n) {
  n = String(n), Number;
  //console.log(n);
  var x = n.length
  //console.log(x);
  var result = 1
  if (x > 1) {
    for (i = 0; i < x; i++) {
      result = result * n[i]

    } return weirdMultiply(result)

  } else {
    return n
  }

}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3));