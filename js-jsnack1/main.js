// Creare un array di oggetti:
// ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

$(document).ready(function() {

    var biciclette = [
        {
            nome: 'pippo',
            peso: 3
        },
        {
            nome: 'pluto',
            peso: 2.8
        },
        {
            nome: 'paperino',
            peso: 3.7
        }
    ];

    // variabile necessaria per ricordare il peso minimo
    var peso_minimo = biciclette[0].peso;
    // variabile necessaria per ricordare la bici di peso minore
    var bici_piu_leggera = biciclette[0];

    // scorro tutte le biciclette
    for (var i = 0; i < biciclette.length; i++) {
        // per ogni bicicletta verifico se ha il peso minore
        var bici_corrente = biciclette[i];
        // recupero il peso della bicicletta corrente
        var peso_corrente = bici_corrente.peso;
        // confronto il peso della bici corrente con il peso minimo letto finora
        if(peso_corrente < peso_minimo) {
            // aggiorno il peso minimo con il peso della bici corrente
            peso_minimo = peso_corrente;
            // la bici corrente è la più leggera vista finora
            bici_piu_leggera = bici_corrente;
        }
    }

    console.log('Il peso minimo è: '+ peso_minimo);
    console.log('La bici più leggera è: ' + bici_piu_leggera.nome);

});
