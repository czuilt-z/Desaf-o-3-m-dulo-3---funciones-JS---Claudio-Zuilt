



let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
let caja3 = document.getElementById("caja3");
let caja4 = document.getElementById("caja4");

function pintar(caja, color) {
    caja.style.backgroundColor = color;
}

caja1.addEventListener("click", function () {
    pintar(caja1, "black");
});

caja2.addEventListener("click", function () {
    pintar(caja2, "black");
});

caja3.addEventListener("click", function () {
    pintar(caja3, "black");
});

caja4.addEventListener("click", function () {
    pintar(caja4, "black");
});