



const ele = document.getElementById("ele1")


// -----------------------Respuesta 2.1 -----------------------------------


function pintar() {
    ele.style.backgroundColor = 'yellow'
}
//const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

// ------------------------Respuesta 2.2 ------------------------------
function pintar(fondo) {
    fondo.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", function () {
    pintar(ele)
})

// ------------------------Respuesta 2.3 con valor por defecto-------------

pintar(ele) // Si no se le pasa el segundo argumento, se usará el valor por defecto "green"

function pintar(fondo, color = "green") {
    fondo.style.backgroundColor = color
}
ele.addEventListener("click", function () {
    pintar(ele, "yellow")
})