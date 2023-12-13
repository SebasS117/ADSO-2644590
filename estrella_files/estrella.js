function updateStars(value) {
    const starRatingDisplay = document.querySelector('.star-rating-display');
    const starRatingText = document.querySelector('.star-rating-text');
    starRatingDisplay.innerHTML = ''; // Limpiar estrellas anteriores
    value = parseFloat(value); // Convertir el valor a float para comparaciones
    
    // Determinar número de estrellas completas y medias estrellas
    let fullStars = Math.floor(value);
    let halfStar = false;
    
    if (value - fullStars > 0.2 && value - fullStars <= 0.7) {
        halfStar = true;
    } else if (value - fullStars > 0.7) {
        fullStars++;
    }
    
    let emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    // Añadir estrellas completas
    for (let i = 0; i < fullStars; i++) {
        starRatingDisplay.innerHTML += '<i class="fas fa-star"></i>';
    }

    // Añadir media estrella si es necesario
    if (halfStar) {
        starRatingDisplay.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    // Añadir estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
        starRatingDisplay.innerHTML += '<i class="far fa-star"></i>';
    }

    // Actualizar el texto de calificación
    starRatingText.textContent = `Tu calificación: ${value.toFixed(1)}`;
}

// Inicializar con 0 estrellas
updateStars(0);

