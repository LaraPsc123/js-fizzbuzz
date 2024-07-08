console.log('numeri da 1 a 100') // string

//Scrivi un programma che stampi in console i numeri da 1 a 100
for (let i = 0; i < 100; i++) {
    //console.log('number', i)
    let number = i + 1 // number
    console.log(number)
    // per i multipli di 3 e 5 stampi "FizzBuzz"
    if (number % 3 == 0 & number % 5 == 0) {
        console.log("multipli di 3 e di 5", 'FizzBuzz')
    } else if (number % 3 == 0) { // per i multipli di 3 stampi “Fizz” al posto del numero
        console.log("multipli di 3", 'Fizz') // string
    } else if (number % 5 == 0) { // per i multipli di 5 stami "Buzz" al posto del numero
        console.log("multipli di 5", 'Buzz') // string
    }





}




