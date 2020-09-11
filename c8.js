function pola(str) {
    var x = str.split(" ")
    // for (i = 0; i < panjang; i++) {
    //console.log(x);
    var panjang = str.length
    var a = x[0]
    // console.log(a);
    var b = x[2]
    // console.log(b);
    var c = x[4]
    // console.log(c);

    for (i = 0; i < panjang; i++) {
        for (j = 0; j < panjang; j++) {
            if (a.replace('#', i) * b == c.replace('#', j)) {
                return [i, j]
            }

        }

    }



}
console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));

  // }
  //console.log(panjang);
  //console.log(x);
  //var left = x[0].slice(0, 2)
  //console.log(left);
  // }


  // function pola1(str) {
  //   var array = []
  //   var x = str.toString().split(' ')
  //   console.log(x);
  //   var left = x[0].slice(0,1)
  //   //console.log(left);
  // }
  // console.log(pola1("8#61 * 895 = 78410#5"));