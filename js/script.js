
function comprar() {
    "use strict";

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var productos;
    var productos_value = document.getElementById("productos").value;
    var compra = document.getElementById("numero").value;
    var coste = document.getElementById("coste").innerHTML;
    console.log("coste: " + coste);

    if (productos_value === "p1") {
        productos = "Bebida Energética";
    } else if (productos_value === "p2") {
        productos = "Barrita Energética";
    } 

    document.getElementById("n").innerHTML = nombre;
    document.getElementById("c").innerHTML = correo;
    document.getElementById("p").innerHTML = productos;
    document.getElementById("nu").innerHTML = numero;
    document.getElementById("ct").innerHTML = coste;

    document.getElementById("modal2").style.display = "flex";
    return false;
}

 function cerrarVentana2() {
    "use strict";
    document.getElementById("modal2").style.display = "none";
}

function costeTotal() {
    "use strict";
    var numero = document.getElementById("numero").value;
    document.getElementById("coste").innerHTML = (numero * 10) + "€";

}



