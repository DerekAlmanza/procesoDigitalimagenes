const letrasBoton = document.getElementById('letras');

/**
 * Función para elegir entre los distintos tipos de M o de frases o de texto.
 */
const letras = () => {
    letrasBoton.addEventListener('click', () => {

        const eleccion = parseInt(prompt(`Elige qué método del 1 al 4 deseas para convertir la imagen en texto:
        1. Letra M a color.
        2. Letra M a blanco y negro.
        3. Letras que simulan tonos de gris.
        4. Combinación del punto 1 con el punto 3.
        5. Combinación del punto 2 con el punto 3.
        6. Imagen con letrero.`));

        if (eleccion === 1) ingresaCaracter('M', 1);
        else if(eleccion === 2) {
            grisParaAuxiliares();
            ingresaCaracter('M',2);
        }
        else if(eleccion === 3) ingresaCaracter('',3);
        else if(eleccion === 4) ingresaCaracter('', 4);
        else if(eleccion === 5) {
            grisParaAuxiliares();
            ingresaCaracter('', 5);
        }
        else if(eleccion === 6) {
            const frase = prompt('Ingrese la frase que desea introducir a la imagen:'); 
            ingresaCaracter(frase,6)
        }
        else alert('Error. Debe seleccionar un número del 1 al 6. Intente de nuevo.')
    })
}

/**
 * Función auxiliar para ingresaCaracter encargada de cambiar el caracter dependiendo del promedio RGB.
 * @param {int} rgbPromedio 
 * @returns caracter
 */
const tonosGris = (rgbPromedio) => {
    // Variable que depende del promedio cambiará su valor.
    let caracter;

    if (rgbPromedio >= 0 && rgbPromedio <= 15) caracter = 'M';
    else if (rgbPromedio >= 16 && rgbPromedio <= 31) caracter = 'N';
    else if (rgbPromedio >= 32 && rgbPromedio <= 47) caracter = 'H';
    else if (rgbPromedio >= 48 && rgbPromedio <= 63) caracter = '#';
    else if (rgbPromedio >= 64 && rgbPromedio <= 79) caracter = 'Q';
    else if (rgbPromedio >= 80 && rgbPromedio <= 95) caracter = 'U';
    else if (rgbPromedio >= 96 && rgbPromedio <= 111) caracter = 'A';
    else if (rgbPromedio >= 112 && rgbPromedio <= 127) caracter = 'D';
    else if (rgbPromedio >= 128 && rgbPromedio <= 143) caracter = '0';
    else if (rgbPromedio >= 144 && rgbPromedio <= 159) caracter = 'Y';
    else if (rgbPromedio >= 160 && rgbPromedio <= 175) caracter = '2';
    else if (rgbPromedio >= 176 && rgbPromedio <= 191) caracter = '$';
    else if (rgbPromedio >= 192 && rgbPromedio <= 209) caracter = '%';
    else if (rgbPromedio >= 210 && rgbPromedio <= 225) caracter = '+';
    else if (rgbPromedio >= 226 && rgbPromedio <= 239) caracter = '.';
    else if (rgbPromedio >= 240 && rgbPromedio <= 256) caracter = ' ';
    return caracter;
}