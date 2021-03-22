// Id's de botones.
const altoContrasteBoton = document.getElementById('altoContraste');

/**
 * Función encargada de realizar el filtro de alto contraste.
 */
const altoContraste = () => {
    altoContrasteBoton.addEventListener('click', () => {
    grisParaAuxiliares();

    // Leemos info
    const imgInfo = contextoEditado.getImageData(0,0,imgEditada.width,imgEditada.height);
    const arregloRGB = imgInfo.data;

    // Recorremos imagen
    for(var i = 0; i < arregloRGB.length; i += 4) {
        var rojo = arregloRGB[i];
        var verde = arregloRGB[i + 1];
        var azul = arregloRGB[i + 2];

        var rgb = [rojo,verde,azul];

        // Checamos condiciones
        if (rgb[0] < 127 && rgb[1] < 127 && rgb[2] < 127) {
            arregloRGB[i] = 0;
            arregloRGB[i + 1] = 0;
            arregloRGB[i + 2] = 0;
        } else if (rgb[0] > 127 && rgb[1] > 127 && rgb[2] > 127) {
            arregloRGB[i] = 255;
            arregloRGB[i + 1] = 255;
            arregloRGB[i + 2] = 255;
        }
    }
    contextoEditado.putImageData(imgInfo,0,0);
    })
}

/**
 * Función encargada de realizar el filtro de alto contraste y alto contraste inverso
 */
 const altoContrasteInverso = () => {
    altoContrasteBoton.addEventListener('click', () => {
        grisParaAuxiliares();

        // Leemos info
        const imgInfo = contextoEditado.getImageData(0,0,imgEditada.width,imgEditada.height);
        const arregloRGB = imgInfo.data;

        // Recorremos imagen
        for(var i = 0; i < arregloRGB.length; i += 4) {
            var rojo = arregloRGB[i];
            var verde = arregloRGB[i + 1];
            var azul = arregloRGB[i + 2];

            var rgb = [rojo,verde,azul];

            // Checamos condiciones
            if (rgb[0] < 127 && rgb[1] < 127 && rgb[2] < 127) {
                arregloRGB[i] = 255;
                arregloRGB[i + 1] = 255;
                arregloRGB[i + 2] = 255;
            } else if (rgb[0] > 127 && rgb[1] > 127 && rgb[2] > 127) {
                arregloRGB[i] = 0;
                arregloRGB[i + 1] = 0;
                arregloRGB[i + 2] = 0;
            }
        }
        contextoEditado.putImageData(imgInfo,0,0);
    })
}