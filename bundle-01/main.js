/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/*

1 - Questo esercio è composto da un ciclo for che effettua un console log di un indice 
che incrementa da 0 a 5 (il valore 5 non verrà stampato).

2 - Non sono presenti errori di sintassi.

3 - E' presente un errore logico nella condizione del for, essendo l'indice inizializzato a 0
il nostro programma non entrerà mai nel ciclo, la condizione d'uscita giusta è:  i > 5 .

*/



// ESERCIZIO 2

function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
        
    }
    return num;
}

/*

1 - Questo esercizio è composto da una funzione che preso come parametro un numero ne calcola il modulo
e controlla se esso sia zero, nel caso in cui il numero inserito sia pari la funzione restituisce il paramentro in input sommato a 5,
se il numero inserito invece è dispari esso verrà restituito senza manipolazioni.

2 - Nella nostra istruzione condizionale è presente un solo simbolo di uguaglianza il quale rappresenta un assegnazione e non un confronto,
esso va sostituito con: if (num % 2 === 0).

3- Non ci sono errori logici.

*/



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/*
1- Questo esercizio ci mostra invece una funzione che effettua il console log di un indice 
che va da 0 a 5 (il console log del valore 5 non viene effettuato)

2- All'interno di un ciclo for, l'inizializzazione dell'indice, la condizione e l'incremento vengono separati da una " , " 
in un caso corretto invece tra i vari elementi che compongono il for è presente un " ; " 
ad esempio: for (let i = 0 ; i < 5 ; i++).

3- Non sono presenti errori logici

*/



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


/*
1- La funzione mostrata ha due array dichiarati (di cui uno vuoto), tramite un ciclo vengono 
controllati tutti i numero del primo array e quelli pari vengono pushati nell'array vuoto che viene poi restituito dopo l'operazione.

2 - 
    #1 - L'array numers è dichiarato di tipo let e non const.
    #2 - L'array eveNumers è dichiarato di tipo leto e non const.
    #3 - Alla LOC 81 nel nostro for è presente un " ; " dopo l'operazione di incremento.  
    #4 - Alla LOC 82 all'inteno dell'istruzione condizionale viene utilizzato un solo simbolo di uguale,
    per effettuare un confronto (e non un assegnazione) va sostituito con "===".
    #5 - Alla 82 è presente un punto e virgola dopo l'istruzione condizionale, va rimosso
    #6 - Alla LOC 82 nell'istruzione condizionale non viene indicato l'indice dell'elemento dell'array, la condizione dovrebbe
    essere: if (numbers[i] % 2 = 0)
    #7 - alla LOC 83 nel array vuoto viene inserito l'indice e non l'elemento del primo array
*/