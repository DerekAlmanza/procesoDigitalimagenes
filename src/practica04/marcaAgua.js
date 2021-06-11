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
        
        // Ingresamos tamaño de letra y la marca de agua.
        const letrero = prompt('Ingrese la marca de agua que desea poner: ');
        const tipoLetra = tipoLetraHTML.value
        const tamanoFuente = tamanoFuenteHTML.value;
        const fuenteLetra = fuenteLetraHTML.value;

        const ejeX = (imgInsertada.width = imgEditada.width)/2;
        const ejeY = (imgInsertada.height = imgEditada.height)/2;

        contextoEditado.textAlign = 'center';
        contextoEditado.textBaseLine = 'middle';
        contextoEditado.fillStyle = 'rgba(255,255,255,.5)';

        contextoEditado.font = `${tipoLetra} ${tamanoFuente}px ${fuenteLetra}`;
        contextoEditado.fillText(letrero, ejeX, ejeY);
    })
}
