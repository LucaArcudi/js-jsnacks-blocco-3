// Prendere due array della stessa lunghezza e generarne un terzo,
// prendendo alternativamente gli elementi da uno e dall'altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

let letters = ["a", "b", "c", "d", "e", "f", "g"];
let numbers = [1, 2, 3, 4, 5, 6, 7];

let lettersNumbers = [];



for(let i = 0; i < letters.length; i++){
 
    lettersNumbers.push(letters[i]);
    lettersNumbers.push(numbers[i]);

}

console.log(lettersNumbers);


