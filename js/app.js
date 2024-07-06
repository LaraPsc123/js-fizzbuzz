console.log('numeri da 1 a 100') // string

//Scrivi un programma che stampi in console i numeri da 1 a 100
for (let i = 0; i < 100; i++) {
    //console.log('number', i)
    let number = i + 1 // number
    console.log(number)

    // per i multipli di 3 stampi “Fizz” al posto del numero
    if (number % 3)
        console.log('Fizz')

    //per i multipli di 5 stampi “Buzz”
    if (number % 5)
        console.log('Buzz')
}




