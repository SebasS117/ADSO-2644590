function calcularPromedios() {
    // Inicializar contadores de calificaciones y total de votos
    var ratings = [0, 0, 0, 0, 0];
    var totalRatings = 0;

    // Leer valores de los campos y calcular el total de calificaciones
    for (var i = 1; i <= 5; i++) {
        ratings[i-1] = parseInt(document.getElementById('rating' + i).value) || 0;
        totalRatings += ratings[i-1] * i; // Suma ponderada de calificaciones
    }
    
    var totalVotes = ratings.reduce((a, b) => a + b, 0); // Suma total de votos
    var average = totalRatings / totalVotes; // Calcula el promedio
    if (isNaN(average)) { average = 0; } // Manejar división por cero
    
    // Actualiza la interfaz con los porcentajes
    document.querySelector('.ratings').innerHTML = ''; // Limpiar gráfico anterior
    for (var j = 5; j >= 1; j--) {
        var percentage = (ratings[j-1] / totalVotes * 100) || 0;
        document.querySelector('.ratings').innerHTML += `
            <div class="rating-row">
                <span>${j} estrellas</span>
                <div class="progress-bar">
                    <div class="progress" style="width: ${percentage.toFixed(2)}%;"></div>
                </div>
                <span class="percentage">${percentage.toFixed(2)}%</span>
            </div>
        `;
    }

    // Mostrar el promedio
    document.querySelector('.ratings').innerHTML += `
        <div class="average-rating">
            <strong>Promedio:</strong> ${average.toFixed(2)} de 5
        </div>
    `;
}
