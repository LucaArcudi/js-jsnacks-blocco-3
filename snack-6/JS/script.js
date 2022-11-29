/**
 * Crea una funzione che accetti due argomenti,
 *  e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */


function getRandomNumber (min, max){
    return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(4, 13));