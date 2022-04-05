// Tipo de hamburguesa
let TI =prompt("Eliga el tipo de hamburguesa(sencillas/dobles/triples)");
//Cantidad de hamburguesas
let N =Number(prompt("Cantidad de Hamburguesas"));
//Tipo de pago
let TP = prompt("Su pago es con tarjeta de credito ?(si/no)");
//Precio de hamburguesa
var PA = 0;
//Cargo por uso de tarjeta
let CA = 0.05;
//Total sin cargo
var TO = 0;
//Total con cargo
var TOT= 0;

switch (TI) {
    case 'sencillas':
        PA=20;
        break;
    case 'dobles':
        PA=25;
        break;
    case 'triples':
        PA=28;
        break;
}
switch (TP) {
    case 'si':
        TO=20*N;
        TOT=TO+TO*CA;
        console.log(`Precio Total sin cargo: ${TO} soles`)
        console.log(`Precio Total con cargo del 5%: ${TOT} soles`)
        break;
    case 'no':
        TO=20*N;
        console.log(`Precio Total : ${TO} soles`)
        break;
}
