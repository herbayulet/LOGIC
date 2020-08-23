function sum() {
    var i;
    var total = 0;
    for(i = 0; i < arguments.length; i++) {
     // console.log(i);
      total = total + arguments[i]
    
      }
    console.log(total)
}

sum(1, 2, 7)
sum(1, 4)
sum(11)
sum(10, 3, 6, 7, 9)

// sum arguments