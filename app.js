/* document.querySelector("input").value = "12312"
console.log(document.querySelector("input").value+" un mensaje");
 */
const inputOperaciones = document.querySelector("input");

function actualizarVentana(boton) {
    if (boton.innerHTML === "=") {
        inputOperaciones.value = eval(inputOperaciones.value);
    }else{
        inputOperaciones.value += boton.innerHTML;
    }
}