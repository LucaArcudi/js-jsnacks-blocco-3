// Crea una funzione che dato un array, calcoli la somma dei suoi elementi.



function getSumOfArrayElement (array){

    let sum = 0;

    for (let i = 0; i < array.length; i++){

        const castedElement = parseInt(array[i], 10);

        if (!Number.isNaN(castedElement)){
            sum += castedElement;
        }
    }

    return sum;

}

let arrayA = [2, "a", 3, 4];

console.log(getSumOfArrayElement(arrayA));