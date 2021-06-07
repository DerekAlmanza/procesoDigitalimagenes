const dominoBoton = document.getElementById('domino');

/**
 * Función encargada de transformar la imagen en fichas de domino blancas.
 */
const dominoBlanco = () => {
    dominoBoton.addEventListener('click', () => {
        const eleccion = parseInt(prompt(`Ingrese qúe tipo de dominó desea:
        1. Dominó blanco.
        2. Dominó negro.`))

        if(eleccion === 1) ingresaCaracter('',7);
        else if(eleccion === 2) ingresaCaracter('',8);
        else alert('Debe de ser un número del 1 al 2.');
    })
}

/**
 * Función auxiliar para ingresaCaracter encargada de cambiar el la ficha de dominó 
 * dependiendo del promedio RGB.
 * @param {int} rgbPromedio 
 * @returns caracter
 */
const auxDomino = (rgbPromedio) => {
    // Variable que depende del promedio cambiará su valor.
    let caracter;

    if (rgbPromedio >= 0 && rgbPromedio <= 25) caracter = '0';
    else if (rgbPromedio >= 26 && rgbPromedio <= 51) caracter = '1';
    else if (rgbPromedio >= 52 && rgbPromedio <= 77) caracter = '2';
    else if (rgbPromedio >= 78 && rgbPromedio <= 104) caracter = '3';
    else if (rgbPromedio >= 105 && rgbPromedio <= 131) caracter = '4';
    else if (rgbPromedio >= 132 && rgbPromedio <= 157) caracter = '5';
    else if (rgbPromedio >= 158 && rgbPromedio <= 184) caracter = '6';
    else if (rgbPromedio >= 185 && rgbPromedio <= 210) caracter = '7';
    else if (rgbPromedio >= 211 && rgbPromedio <= 237) caracter = '8';
    else if (rgbPromedio >= 238 && rgbPromedio <= 256) caracter = '9';
    return caracter;
}