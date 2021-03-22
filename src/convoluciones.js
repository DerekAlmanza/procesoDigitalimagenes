const convolucionesHTML = document.getElementById('convoluciones');

/**
 * Función que recorre la imagen aplicando a cada pixel la multiplicación del valor de cada pixel y 
 * sus respectivos vecinos.
 * @param {[]} matriz Matriz ingresada con el fin de representar en la imagen la convolución dada
 */
const creaConvolucion = (matriz) => {
   
    // Leemos info
    const imgInfo = contextoEditado.getImageData(0, 0, imgEditada.width, imgEditada.height);
    const arregloRGB = imgInfo.data;

    // Leemos nueva info
    let newImageData = contextoEditado.createImageData(imgEditada.width, imgEditada.height);

    // Definimos márgenes
    const margen_x = Math.floor(matriz.tamaño_m / 2);
    const margen_y = Math.floor(matriz.tamaño_n / 2);

    let i;

    // Recorremos imagen
    for (var x = margen_x; x < imgEditada.width ; x++) {
        for (var y = margen_y; y < imgEditada.height; y++) {

            var rojo = 0; var verde = 0; var azul = 0;

            // Recorremos matriz
            for (var entrada = 0; entrada < matriz.info.length; entrada++) {
                const entrada_x = (entrada % matriz.tamaño_n) - margen_x;
                const entrada_y = Math.floor(entrada / matriz.tamaño_n) - margen_y;

                i = (x + entrada_x) * 4 + (y + entrada_y) * (imgEditada.width * 4);

                rojo += arregloRGB[i] * matriz.info[entrada];
                verde += arregloRGB[i + 1] * matriz.info[entrada];
                azul += arregloRGB[i + 2] * matriz.info[entrada];
                
            }

            i = x * 4 + y * (imgEditada.width * 4);
        
            // Asignamos los valores RGBA a la nueva imagen.
            newImageData.data[i] = rojo;
            newImageData.data[i + 1] = verde;
            newImageData.data[i + 2] = azul;
            newImageData.data[i + 3] = arregloRGB[i + 3];
        }
    }

    contextoEditado.putImageData(newImageData, 0, 0)

}

let matriz;

/**
 * Función principal donde se ingresan las matrices encargadas de modificar la imagen.
 * Por medio de prompts se escoge la opción.
 */
const convoluciones = () => {
    convolucionesHTML.addEventListener('click', () => {
        const opcion = parseInt(prompt(`Ingrese un número del 1 al 5 para saber qué tipo de convolución desea:
        1. Blur (Imagen borrosa).
        2. Motion Blur.
        3. Encontrar bordes.
        4. Sharpen.
        5. Emboss.`));

        switch (opcion) {
            case 1:
                // Blur
                const opcionBlur = parseInt(prompt(`¿Qué tanto blur deseas?
                1. Poco blur.
                2. Mucho blur.`));
                if (opcionBlur == 1) {

                    matriz = {
                        info:
                        [
                            0.0, 0.2, 0.0,
                            0.2, 0.2, 0.2,
                            0.0, 0.2, 0.0
                        ],
                        tamaño_m: 3, tamaño_n: 3
                    }
            
                    creaConvolucion(matriz);
                    console.log('Filtro blur elegido');

                } else if (opcionBlur == 2) {

                    matriz = {
                        info:
                        [
                            0, 0, 1/13, 0, 0,
                            0, 1/13, 1/13, 1/13, 0,
                            1/13, 1/13, 1/13, 1/13, 1/13,
                            0, 1/13, 1/13, 1/13, 0,
                            0, 0, 1/13, 0, 0,
                        ],
                        tamaño_m: 5, tamaño_n: 5
                    }
            
                    creaConvolucion(matriz);
                    console.log('Filtro blur elegido');

                }
                
                break;
            case 2:
                // Motion blur
                matriz = {
                    info:
                    [
                        1/9, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 1/9, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 1/9, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 1/9, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 1/9, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 1/9, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 1/9, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 1/9, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 1/9
                    ],
                    tamaño_m: 9, tamaño_n: 9
                }
        
                creaConvolucion(matriz);
                console.log('Filtro motion blur elegido');
                
                break;

            case 3:
                // Encontrar bordes
                matriz = {
                    info:
                    [
                        -1, 0, 0, 0, 0,
                        0, -2, 0, 0, 0,
                        0, 0, 6, 0, 0,
                        0, 0, 0, -2, 0,
                        0, 0, 0, 0, -1
                    ],
                    tamaño_m: 5, tamaño_n: 5
                }
        
                creaConvolucion(matriz);
                console.log('Filtro convolucion encontrar bordes elegido');
                
                break;

            case 4:
                // Sharpen
                matriz = {
                    info:
                    [
                        -1, -1, -1,
                        -1, 9, -1,
                        -1, -1, -1
                    ],
                    tamaño_m: 3, tamaño_n: 3
                }
            
                creaConvolucion(matriz);
                console.log('Filtro convolucion sharpen elegido');
            
                break;

            case 5:
                // Emboss
                matriz = {
                    info:
                    [
                        -1, -1, -1, -1, 0,
                        -1, -1, -1, 0, 1,
                        -1, -1, 0, 1, 1,
                        -1, 0, 1, 1, 1,
                        0, 1, 1, 1,1
                    ],
                    tamaño_m: 5, tamaño_n: 5
                }
            
                creaConvolucion(matriz);
                grisParaAuxiliares();
                console.log('Filtro convolucion emboss elegido');

                break;
        
            default:
                alert('La opcion elegida no fue un número del 1 al 5, intenta de nuevo.');
                break;
        }
    })
}