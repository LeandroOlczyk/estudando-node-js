function notaryStampReverse(textArray, borderWidth) {

    let newArray = []

    // Converte a ordem das letras nas palavras do Array.
    textArray.forEach(arrayNames => {
        arrayNames.forEach(name => {
            let reverseName = ''

            for (let i = (name.length - 1); i >= 0; i--) {
                reverseName += name[i]
            };

            newArray.push(reverseName)
        });
    });

    // Determina o tamanho das bordas.
    let border = '*'.repeat(borderWidth)
    let stampReverse = border

    newArray.forEach(name => {
        stampReverse += ' ' + name
    });

    stampReverse += ' ' + border

    //Impressão Final
    for (let i = 0; i < borderWidth; i++) {
        console.log('*'.repeat(stampReverse.length))
    };

    console.log(stampReverse)

    for (let i = 0; i < borderWidth; i++) {
        console.log('*'.repeat(stampReverse.length))
    };
}


let textArray, borderWidth

textArray = [["'hello'", "'world'"]]
borderWidth = 1
notaryStampReverse(textArray, borderWidth)
console.log('____________________________________')
// *******************
// * 'olleh' 'dlrow' *
// *******************

textArray = [["'foo'", "'bar'"], ["'baz'"]]
borderWidth = 2
notaryStampReverse(textArray, borderWidth)
console.log('____________________________________')
// ***********************
// ***********************
// ** 'oof' 'rab' 'zab' **
// ***********************
// ***********************

textArray = [["'abc'", "'def'"], ["'ghi'", "'jkl'"]]
borderWidth = 3
notaryStampReverse(textArray, borderWidth)
console.log('____________________________________')
// *******************************
// *******************************
// *******************************
// *** 'cba' 'fed' 'ihg' 'lkj' ***
// *******************************
// *******************************
// *******************************

textArray = [["'notary'", "'stamp'"], ["'reverse'", "'text'"]]
borderWidth = 4
notaryStampReverse(textArray, borderWidth)
console.log('____________________________________')
// *******************************************
// *******************************************
// *******************************************
// *******************************************
// **** 'yraton' 'pmats' 'esrever' 'txet' ****
// *******************************************
// *******************************************
// *******************************************
// *******************************************