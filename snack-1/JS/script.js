// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto


let userNumber = parseInt(prompt("Inserisci un numero"));

while ((userNumber > 11) || (userNumber < 0)){
    userNumber = parseInt(prompt("Inserisci un numero"));
}



