/**
 * Crea una funzione che accetti due argomenti,
 *  e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */


function getRandomNumber (min, max){
    const randomNumber = Math.random() * (max - min) + min;
    return randomNumber;
}

console.log(getRandomNumber(4, 13));