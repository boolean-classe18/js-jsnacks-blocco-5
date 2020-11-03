// A partire da un array di oggetti, creare una copia dell’array
// e aggiungere ai singoli elementi dell’array una nuova proprietà “position”
// che contiene una lettera casuale.

$(document).ready(function() {

    var prodotti = [
        {
            nome: 'quaderno',
            codice: 'xyz',
            prezzo: 1.5
        },
        {
            nome: 'penna',
            codice: 'qwe',
            prezzo: 2
        },
        {
            nome: 'matita',
            codice: 'asd',
            prezzo: 0.5
        }
    ];

    var prodotti_copia = [];

    // scorro tutto l'array dei prodotti
    for (var i = 0; i < prodotti.length; i++) {
        // recupero un elemento alla volta
        var prodotto_corrente = prodotti[i];

        // creo un nuovo oggetto con gli stessi valori del prodotto corrente
        var prodotto_copia = {
            nome: prodotto_corrente['nome'],
            codice: prodotto_corrente['codice'],
            prezzo: prodotto_corrente['prezzo'],
            position: getRandomChar()
        };

        /* alternativa:
        utilizzo un ciclo for-in per copiare tutte le proprietà in un nuovo oggetto
        var prodotto_copia = {};
        for (var chiave in prodotto_corrente) {
            prodotto_copia[chiave] = prodotto_corrente[chiave];
        }
        prodotti_copia.push(prodotto_copia);
        */

        // inserisco nell'array di copia il nuovo oggetto
        prodotti_copia.push(prodotto_copia);
    }

    console.log('array prodotti originale');
    console.log(prodotti);
    console.log('array prodotti copia');
    console.log(prodotti_copia);
});

// funzione che estrae una lettera casuale dall'alfabeto
function getRandomChar() {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    // scelgo un numero casuale tra 0 e 25 => questo è l'indice del carattere casuale
    var posizione = getRndInteger(0, 25);
    // recupero la lettera dell'alfabeto corrispondente
    var lettera_casuale = alfabeto.charAt(posizione);
    return lettera_casuale;
}

// funzione che estrae un numero casuale tra min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
