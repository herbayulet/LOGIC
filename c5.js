function stringManipulation(word) {

    if (word[0] === 'a' ||
        word[0] === 'i' ||
        word[0] === 'u' ||
        word[0] === 'e' ||
        word[0] === '0' ||
        word[1] === 'a') {
        console.log(word);
    } else {
        a = word.substr(0, 1)
        // console.log(a);
        b = word.substr(1)
        //  console.log(b);
        console.log(`${b}${a}nyo`)
    }



}
stringManipulation('ayam')
stringManipulation('bebek')