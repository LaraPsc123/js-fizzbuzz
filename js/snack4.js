// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const nomi = ['Carlo', 'Simona', 'Cristina']
console.log(nomi)

// chiedere all'utente un nome
let utente = prompt('inserisci un nome')

// ciclo for
for (let i = 0; i <= nomi.length; i++) {
    console.log(i)
    let nomiUtenti = nomi[i]
    console.log(i, nomiUtenti)
    // SE il prompt è uguale alla lista
    if (utente == nomi[i]) {
        console.log('puoi partecipare alla festa')
    } else if (utente != nomi) {
        console.log('non puoi partecipare')
    }
}




