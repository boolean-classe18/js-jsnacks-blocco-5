// Creare un array di nomi e chiedere all’utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa
// tra i due numeri inseriti dall’utente.

$(document).ready(function() {
    // posizioni:  0        1         2           3           4          5          6         7      8      9
    var nomi = ['pippo', 'pluto', 'paperino', 'topolino', 'paperone', 'minnie', 'paperina', 'qui', 'quo', 'qua'];
    console.log(nomi);

    // chiedo all'utente 2 numeri compresi tra 0 e 9
    var inizio = parseInt(prompt('Inserisci un numero tra 0 e 9'));
    var fine = parseInt(prompt('Inserisci un numero tra 0 e 9'));

    // alternativa 1:
    // scorro tutto l'array e recupero i valori in posizione corretta
    var nomi_estratti1 = [];

    for (var i = 0; i < nomi.length; i++) {

        if(i >= inizio && i <= fine) {
            var nome = nomi[i];
            nomi_estratti1.push(nome);
        }
    }

    // alternativa 2:
    // scorro l'array partendo da "inizio", fino a "fine" e recupero i valori corrispondenti
    var nomi_estratti2 = [];

    for (var i = inizio; i <= fine; i++) {
        var nome = nomi[i];
        nomi_estratti2.push(nome);
    }

    // alternativa 3: funzione slice()
    var nomi_estratti3 = nomi.slice(inizio, fine+1);

    console.log(nomi_estratti1);
    console.log(nomi_estratti2);
    console.log(nomi_estratti3);

});
