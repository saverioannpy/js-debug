/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

/* 

1 - La funzione dell'esercizio 1 assegna alla variabile message sempre la stringa: Hai più di 18 anni!, senza visualizzarla mai a schermo
2 - la variabile message è dichiarata const, dovrebbe essere let poichè essa viene manipaloata all'interno dell'istruzione condizionale
3 - L'età essendo inzializzata all'interno della funzione non si entrerà mai nella sezione true della condizione. 
*/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

/*
1 - l'esercizio prevede la stampa in console del numero di elementi che contiene l'array dichiarato nella nostra funzione.
2 - ERRORE PER IL QUALE MI DANNO SEMPRE! E' LENGTH E NON LENGHT! 
3- Non ci sono errori logici
*/


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


/*
1- la funzione dell'esercizio 3 chiede all'utente di inseire un numero, il quale verrà sommato a 12 per poi riessere stampato in console.
2- il metodo propt ci permette di inserire dei dati in input i quali però vengono sempre considerati dal nostro programma come stringhe,
il numero assegnato alla variabile userNumber  andrebbe quindi convetito in un tipo intero utilizzato metodi adatti come parseint.
3- Non ci sono errori logici
*/

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/*
1- La funzione riportata sopra ci permette di controllare se un email inserita in input da un utente è già registrata nella nostra base dati o meno
2- La funzione utilizza la variabile grantAccess per poter consentire l'accesso o meno all'utente, nelle esperessiono condizionali però viene
verificato se questa variabile sia true o falso di tipo booleano, mentre nelle assegnazioni in precedenza, ad essa viene assegnato il valore true o false sotto forma di stringa.
viene 
3- Non ci sono errori logici
*/

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
    checkAccessImproved(); 

/*
1- Questo esercizio come il precedente permette di controllare se un indirizzo email ha possibilità di accedere al nostro applicativo o meno
2- La nostra funzione non viene chiusa, nell'istruzione cndizionale alla riga 99 l'indice i deve incrementare fino a addresses.length-1 prendendo
così in considerazione anche l'ultimo elemento del nostro array ed inoltre la variabile grandAccess deve essere di tipo booleano e non di tipo stringa
*/

























