const letrasBoton = document.getElementById('letras')

/**
 * Función encargada de transformar la imagen en letras o frases creadas por nosotros.
 */
const letras = () => {
    letrasBoton.addEventListener('click', () => {

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
                contextoEditado.fillText("M", x, y);
                contextoEditado.clearRect(x,y,porcion,porcion);
            }
        }

    })
}
