const naipesBoton = document.getElementById('naipes')

/**
 * Función encargada de transformar la imagen en cartas de naipes.
 */
const naipes = () => {
    naipesBoton.addEventListener('click', () => {
        cargarFuente('naipes');
        ingresaCaracter('',9);
    })
}

/**
 * Función auxiliar para ingresaCaracter encargada de cambiar la carta de naipes 
 * dependiendo del promedio RGB.
 * @param {int} rgbPromedio 
 * @returns caracter
 */
 const auxNaipes = (rgbPromedio) => {
    // Variable que depende del promedio cambiará su valor.
    let caracter;

    if (rgbPromedio >= 0 && rgbPromedio <= 25) caracter = 'a';
    else if (rgbPromedio >= 26 && rgbPromedio <= 51) caracter = 'b';
    else if (rgbPromedio >= 52 && rgbPromedio <= 77) caracter = 'c';
    else if (rgbPromedio >= 78 && rgbPromedio <= 104) caracter = 'd';
    else if (rgbPromedio >= 105 && rgbPromedio <= 131) caracter = 'e';
    else if (rgbPromedio >= 132 && rgbPromedio <= 157) caracter = 'f';
    else if (rgbPromedio >= 158 && rgbPromedio <= 184) caracter = 'g';
    else if (rgbPromedio >= 185 && rgbPromedio <= 210) caracter = 'h';
    else if (rgbPromedio >= 211 && rgbPromedio <= 237) caracter = 'i';
    else if (rgbPromedio >= 238 && rgbPromedio <= 256) caracter = 'j';
    return caracter;
}