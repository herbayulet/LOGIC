function stringManipulation(word) {
    if (word[0] === 'a' ||
        word[0] === 'i' ||
        word[0] === 'u' ||
        word[0] === 'e' ||
        word[0] === '0' ||
        word[0] === 'a') {
        return word;
    } else {
        a = word.substr(0, 1)
        // console.log(a);
        b = word.substr(1)
        //console.log(b);
        //console.log(`${b}${a}nyo`)
        var hasil = (b.concat(a[0]) + 'nyo')
        //hasil = hasil.join(' ')
        // console.log(hasil);
        return hasil
    }

}

function sentenceManipulation(sentence) {
    var a = sentence.split(" ")
    var b = []
    // console.log(a);
    for (let i = 0; i < a.length; i++) {
        //console.log(i);

        b.push(stringManipulation(a[i]))
    } console.log(b.join(' '));

}


sentenceManipulation('ibu pergi ke pasar bersama aku')
