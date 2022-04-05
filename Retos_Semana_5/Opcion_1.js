// Desarrolle el siguiente algoritmo:
// Un productor de leche lleva el registro de lo
// que produce en litros, pero cuando entrega le
// pagan en galones. Realice un algoritmo, y
// represéntelo en JS, que ayude al productor
// a saber cuánto recibirá por la entrega de su
// producción de un día (1 galón
// = 3.785 litros).
// Si se analiza el problema se puede establecer
// que los datos que se necesitan para resolver el problema son los que
// se muestran en la tabla

// cantidad de litros que produce
let L = Number(prompt("Cuantos litros produciste?"));
// precio del galon
let PG =parseFloat(prompt("Cuanto te paga el precio del galon?"));
// cantidad de galones q se produce
let TG = L/3.785;
// ganancia por entrega de leche

let GA= TG*PG;


console.log(`La ganancia es de : ${GA.toFixed(2)} soles `);


