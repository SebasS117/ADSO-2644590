 let inputBusqueda = document.getElementById("inputBusqueda");

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

        let autos = [
            new Automovil("Toyota", "TXL", 150000000, "2022 ·", "18.000 km ·", "Neiva-Huila", "./Mercado_Libre_files/toyota-ml-1-400x300.jpeg"),
            new Automovil("Honda", "Civic", 120000000, "2021 ·", "15.000 km ·", "Bogotá", "./Mercado_Libre_files/honda-ml-1-400x300.jpeg"),
            new Automovil("Chevrolet", "Spark", 60000000, "2020 ·", "10.000 km ·", "Medellín", "./Mercado_Libre_files/chevrolet-ml-1-400x300.jpeg"),
            new Automovil("Ford", "Fiesta", 80000000, "2020 ·", "12.000 km ·", "Cali", "./Mercado_Libre_files/ford-ml-1-400x300.jpeg"),
            new Automovil("Nissan", "Sentra", 110000000, "2021 ·", "20.000 km ·", "Barranquilla", "./Mercado_Libre_files/nissan-ml-1-400x300.jpeg"),
            new Automovil("Hyundai", "i20", 75000000, "2021 ·", "15.000 km ·", "Cartagena", "./Mercado_Libre_files/hyundai-ml-1-400x300.jpeg"),
            // Agregar más vehículos según sea necesario
        ];

        window.addEventListener("load", function(event) {
            let mainContent = document.getElementById("mainContent");

            // Función para crear la interfaz de un vehículo
            function createCarElement(car, parentElement) {
                let boxProducto = document.createElement("div");
                parentElement.appendChild(boxProducto);
                boxProducto.setAttribute("class", "box-producto");

                let boxImg = document.createElement("div");
                boxProducto.appendChild(boxImg);
                boxImg.setAttribute("class", "box-img");
                let imgAuto = document.createElement("img");
                boxImg.appendChild(imgAuto);
                imgAuto.setAttribute("src", car.imagen);
                imgAuto.setAttribute("class", "img-auto");

                let boxInfo = document.createElement("div");
                boxProducto.appendChild(boxInfo);
                boxInfo.setAttribute("class", "box-info");

                let marca = createLabel(`${car.marca} ${car.modelo}`, "marca");
                boxInfo.appendChild(marca);

                let precio = createLabel(`$${new Intl.NumberFormat('de-DE').format(car.precio)}`, "precio");
                boxInfo.appendChild(precio);

                let año = createLabel(car.year, "año");
                boxInfo.appendChild(año);

                let kilometros = createLabel(car.kilometros, "kilometros");
                boxInfo.appendChild(kilometros);

                let ubicacion = createLabel(car.ubicacion, "ubicacion");
                boxInfo.appendChild(ubicacion);

                let boxCorazon = document.createElement("div");
                boxImg.appendChild(boxCorazon);
                let iconoCorazon = document.createElement("i");
                boxCorazon.appendChild(iconoCorazon);
                boxCorazon.setAttribute("class", "box-corazon");
                iconoCorazon.setAttribute("class", "icono-corazon fa-regular fa-heart");

                let lineaDiv = document.createElement("hr");
                boxProducto.appendChild(lineaDiv);
                lineaDiv.setAttribute("class", "linea-div");
            }

            // Crear elementos para los vehículos iniciales
            autos.forEach(auto => {
                createCarElement(auto, mainContent);
            });

            // Agregar funcionalidad de búsqueda
            inputBusqueda.addEventListener("input", function(event) {
                let query = event.target.value.toLowerCase();

                // Filtrar los vehículos según la búsqueda
                let filteredAutos = autos.filter(auto =>
                    auto.marca.toLowerCase().includes(query) ||
                    auto.modelo.toLowerCase().includes(query) ||
                    auto.ubicacion.toLowerCase().includes(query)
                );

                // Limpiar el contenido actual
                mainContent.innerHTML = "";

                // Crear elementos para los vehículos filtrados
                filteredAutos.forEach(auto => {
                    createCarElement(auto, mainContent);
                });
            });
        });

        // Función para crear elementos de etiqueta con clase
        function createLabel(text, className) {
            let label = document.createElement("label");
            label.appendChild(document.createTextNode(text));
            label.setAttribute("class", className);
            return label;
        }
