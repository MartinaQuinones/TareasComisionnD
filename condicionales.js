switch (edad){
    case 18:
        console.log("Tenes 18 años justo")
        break;
    case edad>100:
        break;
    case edad>18:
        break;
    case edad<18:
        break;
    case edad<0:
        break;
}

var menu= prompt("Elija su menu");
switch(menu.toLowerCase()){
    case "carne":
        console.log("como bebida se ofrece vino tinto")
        break
    case "pescado":
        console.log("como bebida se ofrece vino blanco")
        break
    case "verdura":
        console.log("como bebida se ofrece agua")
        break
    default:
    console.log("Elija carne, pescado o verdura")
    break
}

var array = [" agua"," jugo"," comida"," palta"," fruta"];
let index=0;
for(let index = 0 ; index < array.length  ; index++){
    alert("Debes comprar" + array[index]);
    console.log(array[index]);
}


var numero=0;
while(numero < 11){
    console.log("numero es mas chico que 11");
    numero++;
}
