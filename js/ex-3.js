/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

let somma = 0

let numeri = [3, 9, 20, 74, 55]
for (let i = 0; i < numeri.length; i++) {
    // console.log(numeri[i], i, numeri.length)
    const numeroCorrente = numeri[i]
    somma = somma + numeroCorrente
    // console.log(somma)

}

console.log(somma)