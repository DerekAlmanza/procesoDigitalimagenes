const letrasBoton = document.getElementById('letras')

/**
 * Función para elegir entre los distintos tipos de M o de frases o de texto.
 */
const letras = () => {
    letrasBoton.addEventListener('click', () => {

        const eleccion = parseInt(prompt(`Elige qué método del 1 al 4 deseas para convertir la imagen en texto:
        1. Letra M a color.
        2. Letra M a blanco y negro.
        3. Letras que simulan tonos de gris.
        4. Letras a color con los 16 tonos de gris del punto 3.
        5. Letras a blanco y negro con los 16 tonos de gris del punto 3.
        6. Imagen con letrero.`));

        if (eleccion === 1) letraMColor();
        else if(eleccion === 2) letraMBN();
        else if(eleccion === 3) {
            xd(); 
        } else if(eleccion === 4) {
            console.log('xd');
        } else if(eleccion === 5) {
            console.log('xd');
        } else if(eleccion === 6) {
            console.log('xd');
        }
    })
}

/**
 * Función que será llamada para cuando se desee convertir la imagen en letras M a color.
 */
const letraMColor = () => {
    ingresaCaracter('M');
}

/**
 * Función que será llamada para cuando se desee convertir la imagen en letras M en blanco y negro.
 */
const letraMBN = () => {
    grisParaAuxiliares();
    ingresaCaracter('M');
}

/**
 * Función auxiliar encargada de transformar la imagen en letras M o carcateres en escala de gris.
 * @param {string} caracter String a ingresar para imprimir en la imagen.
 */
const ingresaCaracter = (caracter) => {
    
    const porcion = parseInt(prompt(`Ingrese la cantidad de pixeles que quiere tomar para el mosaico: `));

    // Cambiaremos el fondo a un fondo blanco para mejor visualización de la imagen.
    imgEditada.classList.remove('visualizaciones');
    imgEditada.classList.add('fondo-blanco');

    // Leemos info
    const imgInfo = contextoEditado.getImageData(0,0,imgEditada.width,imgEditada.height);
    const arregloRGB = imgInfo.data;

    const calcularPromedio = (x,y) => {
        var contador = 0;
        var rojo = 0; var verde = 0; var azul = 0;
        for (var j = y; j < y + porcion; j++) {
            for (var k = x; k < x + porcion; k++) {
                    var i = (k + j * imgEditada.width) * 4;
                    rojo += arregloRGB[i];
                    verde += arregloRGB[i + 1];
                    azul += arregloRGB[i + 2];
                    contador++;
            }
            rojo = Math.round(rojo / contador);
            verde = Math.round(verde / contador);
            azul = Math.round(azul / contador);
            return [rojo,verde,azul];
        }
    }

    for (var y = 0; y < imgEditada.height; y += porcion) {
        for (var x = 0; x < imgEditada.width; x += porcion) {
            var rgb = calcularPromedio(x, y);
            contextoEditado.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
            contextoEditado.fillText(caracter, x, y, porcion);
            contextoEditado.clearRect(x,y,porcion,porcion);
        }
    }
}

const xd = () => {
    
    const porcion = parseInt(prompt(`Ingrese la cantidad de pixeles que quiere tomar para el mosaico: `));

    // Cambiaremos el fondo a un fondo blanco para mejor visualización de la imagen.
    imgEditada.classList.remove('visualizaciones');
    imgEditada.classList.add('fondo-blanco');

    // Leemos info
    const imgInfo = contextoEditado.getImageData(0,0,imgEditada.width,imgEditada.height);
    const arregloRGB = imgInfo.data;

    const calcularPromedioAux = (x,y) => {
        let contador = 0;
        let rojo = 0; let verde = 0; let azul = 0;
        for (var j = y; j < y + porcion; j++) {
            for (var k = x; k < x + porcion; k++) {
                    var i = (k + j * imgEditada.width) * 4;
                    rojo += arregloRGB[i];
                    verde += arregloRGB[i + 1];
                    azul += arregloRGB[i + 2];
                    contador++;
            }
            rojo = Math.round(rojo / contador);
            verde = Math.round(verde / contador);
            azul = Math.round(azul / contador);
            return [rojo,verde,azul];
        }
    }

    for (var y = 0; y < imgEditada.height; y += porcion) {
        for (var x = 0; x < imgEditada.width; x += porcion) {
            const rgb = calcularPromedioAux(x, y);
            const rgbPromedio = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3);
            contextoEditado.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
            contextoEditado.fillText(tonosGris(rgbPromedio), x, y, porcion);
            contextoEditado.clearRect(x,y,porcion,porcion);
        }
    }
}

/**
 * Función auxiliar para ingresaCaracter encargada de cambiar el caracter dependiendo del promedio RGB.
 * @param {int} rgbPromedio 
 * @returns caracter
 */
const tonosGris = (rgbPromedio) => {
    // Variable que depende del promedio cambiará su valor.
    let caracter;

    if (rgbPromedio > 0 && rgbPromedio <= 15) caracter = 'M';
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
    else if (rgbPromedio >= 240 && rgbPromedio <= 255) caracter = ' ';
    console.log(caracter);
    return caracter;
}
