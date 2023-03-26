
function saludar (nombre , servicio) {

    console.log ("Bievenido", nombre);
    console.log ("Usted cuenta con nuestro nivel de servicio", servicio);


}


saludar("cliente", "Basico");

let nuevoServicio = prompt ("¿Desea contratar servicios adicionales? Indicar SI o NO");

function validar_nuevoServicio (nuevoServicio) {

    if (nuevoServicio == "SI"){

        console.log("¿Con que servicios desea contar? Contamos con los siguientes servicios");
        console.log("Marketing Digital - Facebook Ads");
        console.log("Marketing Digital - Google Ads");
        console.log("Diseño Web");
        console.log("Diseño piezas digitales");


    }

    else {

        console.log("No dude en contactarnos en caso de desear nuevos servicios");
    }

}

validar_nuevoServicio();



let precio_facebookads = 500
let precio_googleads = 400
let precio_Disenoweb = 700
let precio_piezasDigitales = 800


function igv( precio ) {

    let resultado = precio * 0.18;
    console.log("el IGV es :", resultado);

    return resultado

}


console.log("el precio del producto Facebook Ads es:" , precio_facebookads);
console.log("el precio final con IGV es:" , (precio_facebookads + igv(precio_facebookads)));

console.log("el precio del producto Google Ads es:" , precio_googleads);
console.log("el precio final con IGV es:" , (precio_googleads + igv(precio_googleads)));

console.log("el precio del producto Diseno Web es:" , precio_Disenoweb);
console.log("el precio final con IGV es:" , (precio_Disenoweb + igv(precio_Disenoweb)));

console.log("el precio del producto Piezas Digitales es:" , precio_piezasDigitales);
console.log("el precio final con IGV es:" , (precio_piezasDigitales + igv(precio_piezasDigitales)));




let listaequipoPeru = [ [ "Peru", ["Facebook Ads", ["Ruben", "Oscar", "Luis", "Catalina"]], ["Google Ads", ["Pepe", "Mariana", "Deborah", "Renzo"]],["Diseno Web", ["Cesar", "Jenifer", "Juan Diego", "Brenda"]],["Piezas Digitales", ["Daniel", "Adriana", "Nuria", "Jimena"]]]]
let listaequipoChile = [ [ "Chile", ["Facebook Ads", ["Ruben", "Oscar", "Luis", "Catalina"]], ["Google Ads", ["Pepe", "Mariana", "Deborah", "Renzo"]],["Diseno Web", ["Cesar", "Jenifer", "Juan Diego", "Brenda"]],["Piezas Digitales", ["Daniel", "Adriana", "Nuria", "Jimena"]]]]

let listaPais = prompt ("¿En que Pais se encuentra? PERU o CHILE");

function validar_listaPais () {
    if (listaPais == "PERU"){
        for ( let i=0 ; i <listaequipoPeru.length ; i++) {
            console.log ("Nuestro equipo de trabajo en PERU es:", listaequipoPeru [i])
        }
    }
    else if (listaPais == "CHILE"){
        for ( let i=0 ; i <listaequipoChile.length ; i++) {
            console.log ("Nuestro equipo de trabajo en CHILE es:", listaequipoChile [i])
        }
    }
    else {
        console.log("No tenemos equipos de trabajo en los paises indicados");
    }
}

validar_listaPais(listaPais);
