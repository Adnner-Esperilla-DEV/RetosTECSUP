let total =0;
//cant de toner contabilizada
var cantToner = 0;
//cant de cabezales contabilizada
var cantCabezal = 0;
//cant de tinta contabilizada
var cantTinta = 0;
for(var i = 0 ;i <3;i++){
// cantidad total N de productos
let producto = prompt("Ingrese el nombre del producto(toner/cabezal/tinta)");
let cant =  Number(prompt("Ingrese la cantidad"));

switch (producto) {
    case 'toner':
        cantToner=cant ;
        break;
    case 'cabezal':
        
        cantCabezal=cant ;
        break;
    case 'tinta':
        
        cantTinta=cant ;
        break;
}
}
total = cantToner+cantCabezal+cantTinta;
console.log(`La cantidad de Tones es :${cantToner}`)
console.log(`La cantidad de Cabezal es :${cantCabezal}`)
console.log(`La cantidad de Tinta es :${cantTinta}`)
console.log(`La cantidad total es :${total}`)
