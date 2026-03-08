



let color = "" //variable global para almacenar el color seleccionado
let keydiv= document.getElementById("key") //div que se pintará con el color seleccionado al presionar una tecla
let contenedor = document.getElementById("contenedor-tarea2") //div contenedor para los nuevos divs creados al presionar q,w,e


document.addEventListener("keydown", function (event) { // Escucha el evento de presionar una tecla
    if (event.key === "a") {
        color = "pink";
    } else if (event.key === "s") {
        color = "orange";
    } else if (event.key === "d") {
        color = "skyblue";
    }


     // Nueva parte 2 de la tarea ejecrcicio 4.4
    else if (event.key === "q") {
        crearDiv("purple");
    }
    else if (event.key === "w") {
        crearDiv("gray");
    }
    else if (event.key === "e") {
        crearDiv("brown");
    }


    keydiv.style.backgroundColor = color; // Cambia el color de fondo del div al color seleccionado

});


function crearDiv(color){
    const nuevoDiv = document.createElement("div")

    nuevoDiv.style.width = "200px"
    nuevoDiv.style.height = "200px"
    nuevoDiv.style.border = "2px solid black"
    nuevoDiv.style.backgroundColor = color
    nuevoDiv.style.margin = "10px"

    contenedor.appendChild(nuevoDiv)
}