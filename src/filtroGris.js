// ID de botón
const filtroGrisBoton = document.getElementById('filtroGris');

/**
 * Funcion encargada de generar los distintos tipos de filtro de gris.
 */
const filtroGris = () => {
    filtroGrisBoton.addEventListener('click', () => {

        // Leemos info
        const imgInfo = contextoEditado.getImageData(0,0,imgEditada.width,imgEditada.height);
        const arregloRGB = imgInfo.data;
        const eleccion = parseInt(prompt(`Elige qué método del 1 al 5 deseas para tu escala de grises:
        1. Quick and dirty.
        2. Método Luma.
        3. Método desaturación.
        4. Máxima o mínima saturación.
        5. Con un canal único de color. (RGB)`))

        if (eleccion == 1) {
            // Filtro Gris "quick and dirty".

            for(var i = 0; i < arregloRGB.length; i += 4) {
                var grayscale= arregloRGB[i]+arregloRGB[i+1]+arregloRGB[i+2]/3;
                arregloRGB[i]=grayscale;
                arregloRGB[i+1]=grayscale;
                arregloRGB[i+2]=grayscale;
            }
            contextoEditado.putImageData(imgInfo,0,0);

        } else if(eleccion == 2) {
            // Filtro gris Luma.
            
            for(var i = 0; i < arregloRGB.length; i += 4) {
                var grayscale= (0.3 * arregloRGB[i])+(0.59 * arregloRGB[i+1])+(0.11 * arregloRGB[i+2]);
                arregloRGB[i]=grayscale;
                arregloRGB[i+1]=grayscale;
                arregloRGB[i+2]=grayscale;
            }
            contextoEditado.putImageData(imgInfo,0,0);

        } else if(eleccion == 3) {
            // Filtro gris desaturación.
            
            for(var i = 0; i < arregloRGB.length; i += 4) {
                var maximoRGB = Math.max(arregloRGB[i],arregloRGB[i+1],arregloRGB[i+2]);
                var minimoRGB = Math.min(arregloRGB[i],arregloRGB[i+1],arregloRGB[i+2]);
                var grayscale= maximoRGB + minimoRGB / 2;
                arregloRGB[i]=grayscale;
                arregloRGB[i+1]=grayscale;
                arregloRGB[i+2]=grayscale;
            }
            contextoEditado.putImageData(imgInfo,0,0);

        } else if(eleccion == 4) {
            //Máxima o mínima saturación.

            const elegirSaturacion = parseInt(prompt(`Elige qué satuación deseas eligiendo 1 o 2:
            1. Máxima saturación.
            2. Mínima saturación.`))

            if(elegirSaturacion == 1) {
                // Máxima saturación.

                for(var i = 0; i < arregloRGB.length; i += 4) {
                    var grayscale = Math.max(arregloRGB[i],arregloRGB[i+1],arregloRGB[i+2]);
                    arregloRGB[i]=grayscale;
                    arregloRGB[i+1]=grayscale;
                    arregloRGB[i+2]=grayscale;
                }
                contextoEditado.putImageData(imgInfo,0,0);

            } else if(elegirSaturacion == 2) {
                // Minima saturación.
                
                for(var i = 0; i < arregloRGB.length; i += 4) {
                    var grayscale = Math.min(arregloRGB[i],arregloRGB[i+1],arregloRGB[i+2]);
                    arregloRGB[i]=grayscale;
                    arregloRGB[i+1]=grayscale;
                    arregloRGB[i+2]=grayscale;
                }
                contextoEditado.putImageData(imgInfo,0,0);

            } else alert('Opción inválida.');
            
        } else if(eleccion == 5) {
            // Canal de color único
            const elegirCanal = parseInt(prompt(`Elige qué canal de color deseas del 1 al 3:
            1. Rojo.
            2. Verde.
            3. Azul.`))
            if(elegirCanal == 1) {
                // Canal rojo 

                for(var i = 0; i < arregloRGB.length; i += 4) {
                    var grayscale = arregloRGB[i];
                    arregloRGB[i]=grayscale;
                    arregloRGB[i+1]=grayscale;
                    arregloRGB[i+2]=grayscale;
                }
                contextoEditado.putImageData(imgInfo,0,0);

            } else if(elegirCanal == 2) {
                // Canal verde

                for(var i = 0; i < arregloRGB.length; i += 4) {
                    var grayscale = arregloRGB[i+1];
                    arregloRGB[i]=grayscale;
                    arregloRGB[i+1]=grayscale;
                    arregloRGB[i+2]=grayscale;
                }
                contextoEditado.putImageData(imgInfo,0,0);

            } else if(elegirCanal == 3) {
                // Canal azul

                for(var i = 0; i < arregloRGB.length; i += 4) {
                    var grayscale = arregloRGB[i+2];
                    arregloRGB[i]=grayscale;
                    arregloRGB[i+1]=grayscale;
                    arregloRGB[i+2]=grayscale;
                }
                contextoEditado.putImageData(imgInfo,0,0);

            } else alert('Opción inválida.');

        } else alert('Opción inválida.');
    })
}

const grisParaContraste = () => {

    // Leemos info
    const imgInfo = contextoEditado.getImageData(0,0,imgEditada.width,imgEditada.height);
    const arregloRGB = imgInfo.data;

    // Filtro gris Luma.
            
    for(var i = 0; i < arregloRGB.length; i += 4) {
        var grayscale= (0.3 * arregloRGB[i])+(0.59 * arregloRGB[i+1])+(0.11 * arregloRGB[i+2]);
        arregloRGB[i]=grayscale;
        arregloRGB[i+1]=grayscale;
        arregloRGB[i+2]=grayscale;
    }
    contextoEditado.putImageData(imgInfo,0,0);
}