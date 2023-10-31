//cuando se trabaja con objetos, se construye la clase 
let inputBusqueda = document.getElementById("inputBusqueda")
class Automovil {
    constructor(marca, modelo, precio, year, kilometros, ubicacion, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.year = year;
        this.kilometros = kilometros;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
    }
}
let auto1 = new Automovil("Toyota", "TXL", 150000000, "2021 ·", " 25.400 km ·", " Pitalito-Huila", "Mercado_Libre_files/toyota-ml-1-400x300.jpeg");
/* alert (auto1.marca + " " + auto1.modelo); */

window.addEventListener("load", function(event) {

/* inputBusqueda.addEventListener("keydown", function(event) {
    if(event.key == "Enter"){ */
    let mainContent = document.getElementById("mainContent");

    /* Caja del producto */
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");

    /* Caja para la imagen */
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto1.imagen);
    imgAuto.setAttribute("class", "img-auto")

    /* Caja para información */
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let textNodeMarca = document.createTextNode(auto1.marca + "" + auto1.modelo);
    marca.appendChild(textNodeMarca);
    marca.setAttribute("class", "marca");

    /* Precio */
    let  precio= document.createElement("label");
    boxInfo.appendChild(precio);
    let precioStr = Intl.NumberFormat('de-DE').format(auto1.precio);
    let textNodePrecio = document.createTextNode("$" + precioStr);
    precio.appendChild(textNodePrecio);
    precio.setAttribute("class", "precio")

    /* año */
    let  año = document.createElement("label");
    boxInfo.appendChild(año);
    let añoStr = auto1.year;
    let textNodeAño = document.createTextNode(añoStr);
    año.appendChild(textNodeAño);
    año.setAttribute("class", "año")

    /* kilometros */
    let kilometros = document.createElement("label");
    boxInfo.appendChild(kilometros);
    let kilometrosStr = auto1.kilometros;
    let textNodeKilometros = document.createTextNode(kilometrosStr);
    kilometros.appendChild(textNodeKilometros);
    kilometros.setAttribute("class", "kilometros")

    /* Ubicación */
    let ubicacion = document.createElement("label");
    boxInfo.appendChild(ubicacion);
    let ubicacionStr = auto1.ubicacion;
    let textNodeUbicacion = document.createTextNode(ubicacionStr);
    ubicacion.appendChild(textNodeUbicacion);
    ubicacion.setAttribute("class", "ubicacion")

    /* Icono corazón */
    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let iconoCorazon = document.createElement("i");
    boxCorazon.appendChild(iconoCorazon);
    boxCorazon.setAttribute("class", "box-corazon"); 
    iconoCorazon.setAttribute("class", "icono-corazon fa-regular fa-heart");

    /* Linea divisora */
    let lineaDiv = document.createElement("hr");
    boxProducto.appendChild(lineaDiv);
    lineaDiv.setAttribute("class", "linea-div");
    
    /* } */
});
