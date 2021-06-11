const marcaAguaBoton = document.getElementById('marcaAgua');
const formMarcaAgua = document.getElementById('formMarcaAgua');
const tipoLetraHTML = document.getElementById('tipoLetra');
const fuenteLetraHTML = document.getElementById('fuenteLetra');
const tamanoFuenteHTML = document.getElementById('tamanoFuente');
const aceptar = document.getElementById('aceptar');

// Desplegamos el menú principal para la marca de agua
marcaAguaBoton.addEventListener('click', () => formMarcaAgua.classList.remove('hide'))

/**
 * Función encargada de colocar marca de agua en el centro de la imagen.
 */
const marcaAgua = () => {
    aceptar.addEventListener('click', (evento) => {
        evento.preventDefault();

        // Ingresamos tamaño de letra, el tipo de letra, la marca de agua.
        const letrero = prompt('Ingrese la marca de agua que desea poner: ');
        const tipoLetra = tipoLetraHTML.value
        let tamanoFuente = tamanoFuenteHTML.value;
        const fuenteLetra = fuenteLetraHTML.value;

        // Posicionamos en el centro la marca de agua.
        const ejeX = (imgInsertada.width = imgEditada.width)/2;
        const ejeY = (imgInsertada.height = imgEditada.height)/2;

        // ALineamos la marca de agua.
        contextoEditado.textAlign = 'center';
        contextoEditado.textBaseLine = 'middle';

        // Le damos el relleno blanco con una transparencia media.
        contextoEditado.fillStyle = 'rgba(255,255,255,.5)';

        // Definimos el tipo, tamaño y la fuente de la letra.
        contextoEditado.font = `${tipoLetra} ${tamanoFuente}px ${fuenteLetra}`;

        // Definimos la anchura con la que se dibuja la marca en caso de que se desborde de la imagen.
        let anchuraTexto = contextoEditado.measureText(letrero).width;

        // Se ejecuta en caso de desbordamiento y disminuye el tamaño de letra a tal punto de que deje un
        // margen izquierdo y derecho de 20 pixeles de la imagen.
        while (anchuraTexto > imgEditada.width - 20) {
            tamanoFuente--;
            contextoEditado.font = `${tipoLetra} ${tamanoFuente}px ${fuenteLetra}`;
            anchuraTexto = contextoEditado.measureText(letrero).width;
        }
        
        contextoEditado.fillText(letrero, ejeX, ejeY);
    })
}
