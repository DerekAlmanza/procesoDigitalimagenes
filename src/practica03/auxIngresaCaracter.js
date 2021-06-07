/**
 * Función auxiliar encargada de transformar la imagen en letras M o carcateres en escala de gris.
 * @param {string} caracter String a ingresar para imprimir en la imagen.
 * @param {int} eleccion Int a ingresar dependiendo del caso que queramos.
*/
const ingresaCaracter = (caracter, eleccion) => {
    
    const porcion = parseInt(prompt(`Ingrese la cantidad de pixeles que quiere tomar para el mosaico: `));

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

            // Verificamos casos para saber qué hacer.
            if(eleccion === 1 || eleccion === 2 || eleccion === 6) {
            contextoEditado.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
            contextoEditado.fillText(caracter, x, y, porcion);
            } else if(eleccion === 3) {
                const rgbPromedio = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3);
                contextoEditado.fillStyle = '#000000';
                contextoEditado.fillText(tonosGris(rgbPromedio), x, y, porcion);
            } else if(eleccion === 4 || eleccion === 5) {
                const rgbPromedio = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3);
                contextoEditado.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
                contextoEditado.fillText(tonosGris(rgbPromedio), x, y,porcion);
            } else if(eleccion === 7) {
                const rgbPromedio = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3);
                contextoEditado.fillStyle = '#000000';
                contextoEditado.font = `9px domino-blanco`;
                contextoEditado.fillText(auxDomino(rgbPromedio), x, y,porcion);
            } else if(eleccion === 8) {
                const rgbPromedio = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3);
                contextoEditado.fillStyle = '#000000';
                contextoEditado.font = `9px domino-negro`;
                contextoEditado.fillText(auxDomino(rgbPromedio), x, y,porcion);
            } else if(eleccion === 9) {
                const rgbPromedio = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3);
                contextoEditado.fillStyle = '#000000';
                contextoEditado.font = `9px naipes`;
                contextoEditado.fillText(auxNaipes(rgbPromedio), x, y,porcion);
            } else alert('Quien sabe k pdo. Sino le mueves al código no debería de pasar nada malo padre.');
            // Esto se hace sí o sí, transparentar la imagen.
            contextoEditado.fillStyle = '#ffffff';
            contextoEditado.fillRect(x, y, porcion, porcion);
        }
    }
}
