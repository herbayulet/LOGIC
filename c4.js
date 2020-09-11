function indexPrime(params1) {
    var nom = new Array(10000000)
    var hasil = [];
    //console.log(nom.length)
    for (let h = 0; h < nom.length; h++) {
        if (h >= 2) {
            let akar = Math.floor(Math.sqrt(h))
            let prima = true;
            for (let i = 2; i < akar + 1; i++) {
                if (h % i === 0) {
                    prima = false;
                    break;
                }
            } if (prima == true) {
                hasil.push(h)
            }
        }

    }
    return hasil[params1 - 1]
    //console.log(hasil)
}
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))