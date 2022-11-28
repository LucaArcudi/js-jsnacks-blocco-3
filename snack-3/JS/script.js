// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi
// fino a quando ne avrà tanti quanti l'altro.

let arrayUno = [2, 1, 3, 5, 7, 10, 12];

let arrayDue = [9, 4, 6, 8];

console.log(arrayUno);
console.log(arrayDue);

while (arrayDue.length < arrayUno.length ){
    let arrayElement = (prompt("Inserisci un elemento"));
    arrayDue.push(arrayElement);
}

console.log(arrayUno);
console.log(arrayDue);

