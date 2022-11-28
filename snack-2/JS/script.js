// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array
// fino a quando la somma degli elementi è minore di 50.

let emptyArray = [];

let userNumber;

let sum  = 0;


console.log(sum);


while(sum < 50){
    userNumber = parseInt(prompt("Inserisci un numero"));
    sum += userNumber;
    emptyArray.push(userNumber);
}

console.log(sum);
