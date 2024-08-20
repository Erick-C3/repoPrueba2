/* document.querySelector("input").value = "12312"
console.log(document.querySelector("input").value+" un mensaje");
 */
const inputOperaciones = document.querySelector("input");


const OPCION_RESULTADO = "=";
const OPCION_LIMPIAR = "C";
const OPCION_BORRAR_ULTIMO = "←";
const PANTALLA_VACIA = "";
const OPERADORES = "+-*/";
const NUMEROS = "0123456789";

function actualizarVentana(boton) {
    let ultimoCaracter = inputOperaciones.value[inputOperaciones.value.length -1];
    if (!OPERADORES.includes(ultimoCaracter) || NUMEROS.includes(boton.innerHTML)) {
        switch (boton.innerHTML) {
            case OPCION_RESULTADO:
                inputOperaciones.value = eval(inputOperaciones.value);
                break;
            case OPCION_LIMPIAR:
                inputOperaciones.value = PANTALLA_VACIA;
                break;
            case OPCION_BORRAR_ULTIMO:
                inputOperaciones.value = inputOperaciones.value.slice(0,-1);
                break;
            default:
                inputOperaciones.value += boton.innerHTML;
                break;
        }
    }else{
        alert("opcion no permitida")
    }
}