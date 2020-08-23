function deretKaskus(n) {
    var a = [];
    for (i = 3; i <= 3*n; i += 3) {
       
        // b = b + 3;
        //console.log()
       if(i%5 === 0 && i%6 === 0) {
         a.push('KASKUS');
        } else if(i%5 === 0) {
         a.push('KAS');
        } else if (i%6 === 0) {
         a.push('KUS');
        } else
         a.push(i)
    
    }
      return a
    // console.log(i)
}
console.log(deretKaskus(10))