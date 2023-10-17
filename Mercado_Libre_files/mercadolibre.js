/* Cuando trabajamos con objetos, debo tener en cuenta
que un objeto se construye teniendo en cuenta una clase */
let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

let auto1 = new Automovil("Toyota", "TXL");

alert(auto1.marca + " " + auto1.modelo);

inputBusqueda.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        let mainContent = document.getElementById("mainContent");
        /* Caja para el producto */
        let boxProducto = document.createElement("div");
        mainContent.appendChild(boxProducto);
        boxProducto.setAttribute("class", "box-producto");

        /* Caja para la imagen */
        let boxImg = document.createElement("div");
        boxProducto.appendChild(boxImg);
        boxImg.setAttribute("class", "box-img");
        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        imgAuto.setAttribute("src", "./Mercado_Libre/toyota-ml-1-400x300.jpeg");
        imgAuto.setAttribute("class", "img-auto");

        /* Caja para la información */
        let boxInfo = document.createElement("div");
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute("class", "box-info");
    }
});


